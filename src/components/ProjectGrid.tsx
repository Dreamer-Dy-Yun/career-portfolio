import type { ProjectContent } from '../data/types';

type ProjectGridProps = {
  projects: ProjectContent[];
};

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
          <div className="project-evidence">
            <div>
              <h4>Inputs</h4>
              <ul>
                {project.inputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Design Decisions</h4>
              <ul>
                {project.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Outputs</h4>
              <ul>
                {project.output.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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