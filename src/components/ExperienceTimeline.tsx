import type { EvidenceTag } from '../data/evidenceTags';
import type { Experience } from '../data/experiences';

type ExperienceTimelineProps = {
  experiences: Experience[];
  evidenceTags: EvidenceTag[];
};

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <ol className="timeline">
      {experiences.map((experience) => (
        <li key={`${experience.company}-${experience.period}`} className="timeline-item">
          <h3>{experience.company}</h3>
          <p className="meta">
            <span>{experience.period}</span>
            <span>{experience.role}</span>
          </p>
        </li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;
