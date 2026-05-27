import type { ProjectContent } from '../data/types';

type ProjectGridProps = {
  projects: ProjectContent[];
};

const detailSections = [
  ['Problem', 'problem'],
  ['Constraints', 'constraints'],
  ['Design Decisions', 'decisions'],
  ['Deliverables', 'deliverables'],
] as const;

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-head">
            <div>
              <p className="eyebrow">{project.period}</p>
              <h3>{project.title}</h3>
            </div>
            <span>{project.role}</span>
          </div>
          <p className="project-summary">{project.summary}</p>
          <div className="project-detail-grid">
            {detailSections.map(([label, key]) => {
              const value = project[key];

              return (
                <div className="project-detail-block" key={label}>
                  <h4>{label}</h4>
                  {Array.isArray(value) ? (
                    <ul>
                      {value.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              );
            })}
            <div className="project-detail-block project-meaning">
              <h4>Meaning</h4>
              <p>{project.meaning}</p>
            </div>
          </div>
          <ul className="chip-list" aria-label={`${project.title} tech stack`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default ProjectGrid;