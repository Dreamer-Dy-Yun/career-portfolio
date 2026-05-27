import { Project } from '../data/projects';
import { EvidenceTag } from '../data/evidenceTags';
import { getEvidenceTagsByIds } from '../utils/evidence';
import CaseStudyBlock from './CaseStudyBlock';

type ProjectCardProps = {
  project: Project;
  isRelevantToSelectedTarget?: boolean;
  selectedJobTargetId?: string;
  evidenceTags: EvidenceTag[];
  showCaseStudyDetails?: boolean;
};

const ProjectCard = ({
  project,
  isRelevantToSelectedTarget = false,
  selectedJobTargetId,
  evidenceTags,
  showCaseStudyDetails = false,
}: ProjectCardProps) => {
  const fitExplanation =
    selectedJobTargetId &&
    selectedJobTargetId !== 'general'
      ? project.fitByTarget?.[selectedJobTargetId]
      : undefined;
  const tags = getEvidenceTagsByIds(project.evidenceTagIds, evidenceTags);

  return (
    <article className="card">
      <div className="project-category">{project.category}</div>
      {isRelevantToSelectedTarget ? (
        <p className="target-relevance-badge">Relevant to selected target</p>
      ) : null}
      <h3>{project.title}</h3>
      <p className="meta">
        <span>{project.period}</span>
        <span>{project.role}</span>
      </p>
      <p className="summary">{project.summary}</p>
      {project.decisionTags?.length ? (
        <div className="sub-list">
          <h4>Decision Tags</h4>
          <ul className="pill-list pill-list-inline">
            {project.decisionTags.map((decisionTag) => (
              <li className="pill decision-tag" key={`${project.title}-${decisionTag}`}>
                {decisionTag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {fitExplanation ? (
        <div className="sub-list">
          <h4>Fit for selected focus</h4>
          <p>{fitExplanation}</p>
        </div>
      ) : null}
      <div className={showCaseStudyDetails ? 'case-study-visible' : 'case-study-hidden'}>
        <CaseStudyBlock caseStudy={project.caseStudy} />
      </div>
      {project.evidence ? (
        <div className="sub-list">
          <h4>Evidence</h4>
          <ul>
            {project.evidence.map((item) => (
              <li key={`${project.title}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="sub-list">
        <h4>Problem</h4>
        <p>{project.problem}</p>
      </div>
      <div className="sub-list">
        <h4>Solution</h4>
        <p>{project.solution}</p>
      </div>
      <div className="sub-list">
        <h4>Impact</h4>
        <ul>
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="label-row">
        <strong>Tech Stack</strong>
      </p>
      <ul className="pill-list">
        {project.techStack.map((tech) => (
          <li className="pill" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className="sub-list">
        <h4>Keywords</h4>
        <ul className="pill-list pill-list-inline">
          {project.keywords.map((keyword) => (
            <li className="pill" key={`${project.title}-${keyword}`}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>
      <div className="sub-list">
        <h4>Role Perspectives</h4>
        <ul className="pill-list pill-list-inline">
          {project.rolePerspectives.map((perspective) => (
            <li className="pill role-pill" key={`${project.title}-${perspective}`}>
              {perspective}
            </li>
          ))}
        </ul>
      </div>
      {tags.length ? (
        <div className="sub-list">
          <h4>Evidence Tags</h4>
          <ul className="pill-list pill-list-inline">
            {tags.map((tag) => (
              <li className="pill" key={`${project.title}-${tag.id}`}>
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
};

export default ProjectCard;
