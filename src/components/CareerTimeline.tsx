import { useMemo, useState } from 'react';
import type { ExperienceContent } from '../data/types';
import { createCareerTimelineItems } from '../modules/careerTimeline';

type CareerTimelineProps = {
  experiences: ExperienceContent[];
};

const CareerTimeline = ({ experiences }: CareerTimelineProps) => {
  const items = useMemo(() => createCareerTimelineItems(experiences), [experiences]);
  const [activeItemId, setActiveItemId] = useState(items[0]?.id ?? '');
  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];

  if (!activeItem) {
    return <p className="empty-state">표시할 경력 데이터가 없습니다.</p>;
  }

  return (
    <div className="timeline-layout">
      <ol className="timeline-list" aria-label="Career timeline">
        {items.map((item) => (
          <li className="timeline-row" key={item.id}>
            <button
              aria-pressed={activeItem.id === item.id}
              className="timeline-button"
              type="button"
              onClick={() => setActiveItemId(item.id)}
              onFocus={() => setActiveItemId(item.id)}
              onMouseEnter={() => setActiveItemId(item.id)}
            >
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-marker" aria-hidden="true" />
              <span className="timeline-main">
                <strong>
                  {item.company}
                  {item.isConcurrent ? <em>병행</em> : null}
                </strong>
                <small>{item.role}</small>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <aside className="timeline-detail" aria-live="polite">
        <span>{activeItem.period}</span>
        <h3>
          {activeItem.company}
          {activeItem.isConcurrent ? <em>병행</em> : null}
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
          <ul className="tag-list" aria-label={`${activeItem.company} tags`}>
            {activeItem.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </aside>
    </div>
  );
};

export default CareerTimeline;
