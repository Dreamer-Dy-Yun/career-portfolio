import { EvidenceTag } from '../data/evidenceTags';
import { Experience } from '../data/experiences';
import { getEvidenceTagsByIds } from '../utils/evidence';

type ExperienceTimelineProps = {
  experiences: Experience[];
  evidenceTags: EvidenceTag[];
};

const ExperienceTimeline = ({ experiences, evidenceTags }: ExperienceTimelineProps) => {
  return (
    <ol className="timeline">
      {experiences.map((experience) => {
        const evidenceItems = getEvidenceTagsByIds(experience.evidenceTagIds ?? [], evidenceTags);

        return (
          <li key={`${experience.company}-${experience.period}`} className="timeline-item">
            <h3>{experience.company}</h3>
            <p className="meta">
              <span>{experience.period}</span>
              <span>{experience.role}</span>
            </p>
            <p>{experience.summary}</p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {experience.functionHighlights ? (
              <div className="function-highlights">
                {experience.functionHighlights.map((group) => (
                  <section className="function-highlight-group" key={group.label}>
                    <h4>{group.label}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={`${experience.company}-${group.label}-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : null}
            {evidenceItems.length > 0 ? (
              <div className="timeline-evidence">
                <h4>Evidence Tags</h4>
                <ul className="pill-list pill-list-inline">
                  {evidenceItems.map((tag) => (
                    <li className="pill" key={`${experience.company}-${tag.id}`}>
                      {tag.label}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {experience.techStack ? (
              <p className="meta">
                <strong>Tech:</strong> {experience.techStack.join(', ')}
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
};

export default ExperienceTimeline;
