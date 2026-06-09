import { useMemo, useState } from 'react';
import type { ExperienceContent, WorkCaseContent } from '../data/types';
import {
  createCareerTimelineItems,
  type CareerTimelineBranchItem,
  type CareerTimelineItem,
} from '../modules/careerTimeline';
import { chip, darkChip, documentPanel, eyebrow, headingTitle, pageContainer, sectionHeading } from './uiClasses';

type CareerTimelineProps = {
  experiences: ExperienceContent[];
  workCases: WorkCaseContent[];
};

type SelectableTimelineItem = CareerTimelineBranchItem | CareerTimelineItem;

const isMainTimelineItem = (item: SelectableTimelineItem): item is CareerTimelineItem => {
  return 'branchItems' in item;
};

const getWorkCasesByCompany = (workCases: WorkCaseContent[]) => {
  return workCases.reduce<Record<string, WorkCaseContent[]>>((accumulator, workCase) => {
    if (!workCase.company) {
      return accumulator;
    }

    accumulator[workCase.company] = [...(accumulator[workCase.company] ?? []), workCase];
    return accumulator;
  }, {});
};

const getSelectableTimelineItems = (items: CareerTimelineItem[]) => {
  return items.flatMap<SelectableTimelineItem>((item) => [item, ...item.branchItems]);
};

const getMainContentPosition = (isLeft: boolean) => {
  if (isLeft) {
    return 'col-start-1 text-right pr-3 md:pr-5 max-md:col-start-3 max-md:text-left max-md:pr-0';
  }

  return 'col-start-3 text-left pl-3 md:pl-5 max-md:pl-0';
};

const getMainConnectorPosition = (isLeft: boolean) => {
  if (isLeft) {
    return 'right-[calc(50%+1rem)]';
  }

  return 'left-[calc(50%+1rem)]';
};

const getBranchListPosition = (isLeft: boolean) => {
  if (isLeft) {
    return 'ml-[calc(50%+3.4rem)] pr-2 text-left max-md:ml-[6.4rem] max-md:pr-0';
  }

  return 'mr-[calc(50%+3.4rem)] pl-2 text-right max-md:ml-[6.4rem] max-md:mr-0 max-md:pl-0 max-md:text-left';
};

const getBranchRailPosition = (isLeft: boolean) => {
  if (isLeft) {
    return 'left-1/2 rounded-r-[2rem] border-y-[3px] border-r-[3px]';
  }

  return 'right-1/2 rounded-l-[2rem] border-y-[3px] border-l-[3px]';
};

const getBranchDotPosition = (isLeft: boolean) => {
  if (isLeft) {
    return 'before:-left-[2.9rem]';
  }

  return 'before:-right-[2.9rem] max-md:before:-left-[1.15rem] max-md:before:right-auto';
};

const CareerTimeline = ({ experiences, workCases }: CareerTimelineProps) => {
  const items = useMemo(() => createCareerTimelineItems(experiences), [experiences]);
  const selectableItems = useMemo(() => getSelectableTimelineItems(items), [items]);
  const workCasesByCompany = useMemo(() => getWorkCasesByCompany(workCases), [workCases]);
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? '');
  const selectedItem = selectableItems.find((item) => item.id === selectedId) ?? selectableItems[0];

  if (!selectedItem) {
    return null;
  }

  const selectedWorkCases = workCasesByCompany[selectedItem.company] ?? [];

  return (
    <section className={pageContainer} aria-labelledby="career-timeline-title">
      <div className={documentPanel}>
        <div className={sectionHeading}>
          <p className={eyebrow}>Experience</p>
          <h2 className={headingTitle} id="career-timeline-title">
            연혁
          </h2>
        </div>

        <div className="grid gap-7 xl:grid-cols-[minmax(0,1.2fr)_minmax(440px,0.8fr)] print:block">
          <ol className="relative grid gap-1 py-2 before:absolute before:bottom-4 before:left-1/2 before:top-4 before:w-[5px] before:-translate-x-1/2 before:rounded-full before:bg-teal-700 max-md:before:left-[5.7rem] max-md:before:w-[3px] max-md:before:translate-x-0 print:before:bg-black">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              const itemWorkCases = workCasesByCompany[item.company] ?? [];
              const isSelected = selectedId === item.id;
              const hasBranches = item.branchItems.length > 0;
              const hasWorkCases = itemWorkCases.length > 0;

              return (
                <li className="relative py-1" key={item.id}>
                  {hasBranches ? (
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-6 top-14 hidden w-20 border-teal-700 md:block print:border-black ${getBranchRailPosition(
                        isLeft,
                      )}`}
                    />
                  ) : null}

                  <button
                    className="group relative grid w-full grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] items-center py-2 text-sm max-md:grid-cols-[5.25rem_1.2rem_minmax(0,1fr)]"
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 hidden w-14 border-t border-dotted border-stone-400 md:block ${getMainConnectorPosition(
                        isLeft,
                      )}`}
                    />
                    <span className={`row-start-1 grid gap-1 ${getMainContentPosition(isLeft)}`}>
                      <span className="text-xs font-black text-stone-500 print:text-black">{item.period}</span>
                      <span className="text-[0.95rem] font-black leading-tight text-stone-950">
                        <strong>{item.company}</strong> · {item.role}
                      </span>
                      <span className="flex flex-wrap gap-1 max-md:justify-start">
                        {item.isConcurrent ? <span className={darkChip}>병행</span> : null}
                        {hasBranches ? <span className={darkChip}>포함 기간</span> : null}
                        {hasWorkCases ? <span className={chip}>업무 {itemWorkCases.length}</span> : null}
                      </span>
                    </span>
                    <span className="col-start-2 row-start-1 flex justify-center">
                      <span
                        aria-hidden="true"
                        className={`relative z-10 size-4 rounded-full border-[3px] border-teal-700 bg-[#fffaf3] print:border-black print:bg-white ${
                          isSelected ? 'ring-4 ring-teal-700/20 print:ring-0' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {hasBranches ? (
                    <ol
                      className={`relative z-10 mt-1 grid gap-2 max-md:border-l-2 max-md:border-teal-700 max-md:pl-4 print:border-black ${getBranchListPosition(
                        isLeft,
                      )}`}
                      aria-label={`${item.company} 포함 기간`}
                    >
                      {item.branchItems.map((branchItem) => {
                        const branchSelected = selectedId === branchItem.id;

                        return (
                          <li key={branchItem.id}>
                            <button
                              className={`
                                relative w-full rounded-2xl border border-stone-300 bg-white/82 px-4 py-3 text-left text-sm shadow-sm
                                before:absolute before:top-1/2 before:size-3 before:-translate-y-1/2 before:rounded-full before:border-[3px] before:border-teal-700 before:bg-[#fffaf3]
                                hover:border-teal-700 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700
                                max-md:text-left print:border-stone-500 print:bg-white print:shadow-none print:before:border-black print:before:bg-white
                                ${getBranchDotPosition(isLeft)}
                                ${branchSelected ? 'border-teal-700 bg-white ring-2 ring-teal-700/15 print:ring-0' : ''}
                              `}
                              type="button"
                              onClick={() => setSelectedId(branchItem.id)}
                            >
                              <span className="block text-xs font-black text-stone-500 print:text-black">{branchItem.period}</span>
                              <span className="mt-1 block font-black text-stone-950">
                                {branchItem.company} · {branchItem.role}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ol>
                  ) : null}

                  {isSelected && hasWorkCases && isMainTimelineItem(item) ? (
                    <div className="ml-[calc(50%+3.4rem)] mt-3 grid gap-2 rounded-2xl border border-stone-300 bg-white/80 p-4 text-sm shadow-sm max-md:ml-[6.4rem] print:ml-0 print:border-stone-500 print:bg-white print:shadow-none">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700 print:text-black">하위 업무</p>
                      <ul className="grid gap-2">
                        {itemWorkCases.map((workCase) => (
                          <li className="grid gap-1" key={workCase.title}>
                            <strong className="leading-tight text-stone-950">{workCase.title}</strong>
                            <span className="text-xs font-bold text-stone-500 print:text-black">
                              {workCase.period} · {workCase.role}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>

          <aside
            className="self-start rounded-[24px] border border-stone-300 bg-teal-950 p-5 text-white shadow-[0_20px_70px_rgba(15,118,110,0.18)] lg:sticky lg:top-24 print:mt-5 print:break-inside-avoid print:border-stone-500 print:bg-white print:text-black print:shadow-none"
            aria-live="polite"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-200 print:text-black">Selected</p>
            <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.045em] print:text-xl">{selectedItem.company}</h3>
            <p className="mt-2 text-sm font-black text-teal-100 print:text-black">
              {selectedItem.period} · {selectedItem.role}
            </p>
            <p className="mt-4 text-sm font-semibold leading-7 text-teal-50 print:text-xs print:leading-5 print:text-black">
              {selectedItem.summary}
            </p>

            {selectedItem.details.length > 0 ? (
              <ul className="mt-4 grid gap-2 text-sm font-semibold leading-6 text-teal-50 print:text-xs print:leading-5 print:text-black">
                {selectedItem.details.map((detail) => (
                  <li className="grid grid-cols-[0.7rem_minmax(0,1fr)] gap-2" key={detail}>
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-teal-300 print:bg-black" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {selectedItem.tags.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <li className={darkChip} key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            {selectedWorkCases.length > 0 ? (
              <div className="mt-6 border-t border-teal-800 pt-5 print:border-stone-400">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-200 print:text-black">Related work</p>
                <ul className="mt-3 grid gap-3">
                  {selectedWorkCases.map((workCase) => (
                    <li className="rounded-2xl border border-teal-800 bg-white/5 p-3 print:border-stone-500 print:bg-white" key={workCase.title}>
                      <strong className="block text-sm leading-tight">{workCase.title}</strong>
                      <span className="mt-1 block text-xs font-bold text-teal-100 print:text-black">
                        {workCase.period} · {workCase.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
