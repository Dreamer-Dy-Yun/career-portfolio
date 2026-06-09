import type { WorkCaseContent } from '../data/types';
import { chip, documentPanel, eyebrow, headingTitle, pageContainer, sectionHeading } from './uiClasses';

type WorkCasesProps = {
  workCases: WorkCaseContent[];
};

const WorkCases = ({ workCases }: WorkCasesProps) => {
  if (workCases.length === 0) {
    return null;
  }

  return (
    <section className={pageContainer} aria-labelledby="work-cases-title">
      <div className={documentPanel}>
        <div className={sectionHeading}>
          <p className={eyebrow}>Career Description</p>
          <h2 className={headingTitle} id="work-cases-title">
            대표 업무
          </h2>
        </div>
        <div className="divide-y divide-stone-300 print:divide-stone-400">
          {workCases.map((workCase) => (
            <article
              className="grid gap-4 py-5 first:pt-0 last:pb-0 lg:grid-cols-[11rem_minmax(0,1fr)] print:break-inside-avoid"
              key={workCase.title}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.12em] text-stone-500 print:text-black">
                  {workCase.period}
                </p>
                {workCase.company ? (
                  <p className="mt-1 text-sm font-black text-teal-800 print:text-black">{workCase.company}</p>
                ) : null}
              </div>
              <div>
                <h3 className="text-lg font-black leading-snug tracking-[-0.03em] text-stone-950">
                  {workCase.title} · {workCase.role}
                </h3>
                <p className="mt-2 max-w-5xl text-sm font-semibold leading-7 text-stone-700 print:text-xs print:leading-5">
                  {workCase.summary}
                </p>
                {workCase.details.length > 0 ? (
                  <ul className="mt-3 grid gap-1 text-sm font-semibold leading-7 text-stone-700 print:text-xs print:leading-5">
                    {workCase.details.map((detail) => (
                      <li className="grid grid-cols-[0.7rem_minmax(0,1fr)] gap-2" key={detail}>
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-teal-700 print:bg-black" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {workCase.keywords.map((keyword) => (
                    <li className={chip} key={keyword}>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCases;
