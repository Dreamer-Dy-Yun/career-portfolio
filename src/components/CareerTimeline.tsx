import type { ExperienceContent } from '../data/types';

type CareerTimelineProps = {
  experiences: ExperienceContent[];
};

const CareerTimeline = ({ experiences }: CareerTimelineProps) => {
  return (
    <ol className="timeline">
      {experiences.map((experience) => (
        <li className="timeline-item" key={`${experience.company}-${experience.period}`}>
          <span>{experience.period}</span>
          <h3>{experience.company}</h3>
          <p>{experience.role}</p>
        </li>
      ))}
    </ol>
  );
};

export default CareerTimeline;
