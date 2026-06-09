import { useMemo, useState } from 'react';
import type { ExperienceContent, WorkCaseContent } from '../data/types';
import { createCareerTimelineItems } from '../modules/careerTimeline';

type CareerTimelineProps = {
  experiences: ExperienceContent[];
  workCases: WorkCaseContent[];
};

const groupWorkCasesByCompany = (workCases: WorkCaseContent[]): Map<string, WorkCaseContent[]> => {
  return workCases.reduce<Map<string, WorkCaseContent[]>>((grouped, workCase) => {
    const company = workCase.company?.trim();

    if (!company) {
      return grouped;
    }

    const current = grouped.get(company) ?? [];
    grouped.set(company, [...current, workCase]);

    return grouped;
  }, new Map());
};

const CareerTimeline = ({ experiences, workCases }: CareerTimelineProps) => {
  const items = useMemo(() => createCareerTimelineItems(experiences), [experiences]);
  const selectableItems = useMemo(() => items.flatMap((item) => [item, ...item.branchItems]), [items]);
  const workCasesByCompany = useMemo(() => groupWorkCasesByCompany(workCases), [workCases]);
  const [activeItemId, setActiveItemId] = useState(selectableItems[0]?.id ?? '');
  const [expandedItemId, setExpandedItemId] = useState('');
  const activeItem = selectableItems.find((item) => item.id === activeItemId) ?? selectableItems[0];

  if (items.length === 0 || !activeItem) {
    return null;
  }

  return (
    <section className="document-section timeline-section" aria-labelledby="career-title">
      <div className="section-title">
        <p className="eyebrow">Experience</p>
        <h2 id="career-title">연혁</h2>
      </div>

      <div className="timeline-layout">
        <ol className="timeline-list" aria-label="Career timeline">
          {items.map((item) => {
            const childWorkCases = workCasesByCompany.get(item.company) ?? [];
            const canExpand = childWorkCases.length > 0;
            const isExpanded = canExpand && expandedItemId === item.id;
            const childPanelId = `timeline-projects-${item.id}`;

            return (
              <li className="timeline-row" key={item.id}>
                <button
                  type="button"
                  className="timeline-button"
                  aria-pressed={activeItem.id === item.id}
                  aria-expanded={canExpand ? isExpanded : undefined}
                  aria-controls={canExpand ? childPanelId : undefined}
                  onClick={() => {
                    setActiveItemId(item.id);

                    if (canExpand) {
                      setExpandedItemId((currentId) => (currentId === item.id ? '' : item.id));
                    }
                  }}
                  onFocus={() => setActiveItemId(item.id)}
                  onMouseEnter={() => setActiveItemId(item.id)}
                >
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-axis-dot" aria-hidden="true" />
                  <span className="timeline-line">
                    <strong>{item.company}</strong>
                    <span>{item.role}</span>
                    {item.isConcurrent ? <em>병행</em> : null}
                    {canExpand ? <small>{childWorkCases.length} projects</small> : null}
                  </span>
                </button>

                {isExpanded ? (
                  <div className="timeline-projects" id={childPanelId}>
                    <span className="timeline-projects-title">Projects</span>
                    <ul>
                      {childWorkCases.map((workCase) => (
                        <li className="timeline-project-row" key={`${workCase.company}-${workCase.title}`}>
                          <div>
                            <span>{workCase.period}</span>
                            <strong>{workCase.title}</strong>
                            <em>{workCase.role}</em>
                          </div>
                          <p>{workCase.summary}</p>
                          {workCase.keywords.length > 0 ? (
                            <ul className="compact-tags" aria-label={`${workCase.title} keywords`}>
                              {workCase.keywords.map((keyword) => (
                                <li key={keyword}>{keyword}</li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {item.branchItems.length > 0 ? (
                  <ol className="timeline-branches" aria-label={`${item.company} branch timeline`}>
                    {item.branchItems.map((branchItem) => (
                      <li className="timeline-branch-row" key={branchItem.id}>
                        <button
                          type="button"
                          className="timeline-branch-button"
                          aria-pressed={activeItem.id === branchItem.id}
                          onClick={() => setActiveItemId(branchItem.id)}
                          onFocus={() => setActiveItemId(branchItem.id)}
                          onMouseEnter={() => setActiveItemId(branchItem.id)}
                        >
                          <span className="timeline-branch-period">{branchItem.period}</span>
                          <strong>{branchItem.company}</strong>
                          <span>{branchItem.role}</span>
                          <em>포함</em>
                        </button>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </li>
            );
          })}
        </ol>

        <aside className="timeline-detail" aria-live="polite">
          <span>{activeItem.period}</span>
          <h3>
            {activeItem.company} · {activeItem.role}
            {'isConcurrent' in activeItem && activeItem.isConcurrent ? <small>병행 기간 포함</small> : null}
          </h3>
          <p>{activeItem.summary}</p>
          {activeItem.details.length > 0 ? (
            <ul className="detail-list">
              {activeItem.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}
          {activeItem.tags.length > 0 ? (
            <ul className="compact-tags is-dark">
              {activeItem.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
        </aside>
      </div>
    </section>
  );
};

export default CareerTimeline;
