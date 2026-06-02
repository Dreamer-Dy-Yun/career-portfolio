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
    return null;
  }

  return (
    <div className="career-timeline-layout">
      <ol className="timeline" aria-label="Career history">
        {items.map((item) => (
          <li className="timeline-item" key={item.id}>
            <button
              aria-pressed={activeItem.id === item.id}
              className="timeline-button"
              type="button"
              onClick={() => setActiveItemId(item.id)}
              onFocus={() => setActiveItemId(item.id)}
              onMouseEnter={() => setActiveItemId(item.id)}
            >
              <span>{item.period}</span>
              <strong>{item.company}</strong>
              <small>{item.role}</small>
            </button>
          </li>
        ))}
      </ol>
      <aside className="timeline-detail" aria-live="polite">
        <span>{activeItem.period}</span>
        <h3>{activeItem.company}</h3>
        <p>{activeItem.summary}</p>
        {activeItem.details.length > 0 ? (
          <ul>
            {activeItem.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
        {activeItem.tags.length > 0 ? (
          <ul className="chip-list" aria-label={`${activeItem.company} tags`}>
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
