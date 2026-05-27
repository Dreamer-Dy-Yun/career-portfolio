import { Project } from '../data/projects';
import { EvidenceTag } from '../data/evidenceTags';
import { getEvidenceTagsByIds } from '../utils/evidence';
import CaseStudyBlock from './CaseStudyBlock';

const LABEL_MAP: Record<string, string> = {
  'Data Pipeline': '데이터 파이프라인',
  'Backend / Database': '백엔드 / DB',
  'Backend / Data Pipeline': '백엔드 / 데이터 파이프라인',
  'System Design': '시스템 설계',
  'Automation Refactoring': '자동화 리팩토링',
  'AI / OCR / LLM': 'AI / OCR / LLM',
  Settlement: '정산',
  Database: '데이터베이스',
  'PostgreSQL': 'PostgreSQL',
  Async: '비동기',
  Reusability: '재사용성',
  'Data Engineering': '데이터 엔지니어링',
  Normalization: '정규화',
  Visualization: '시각화',
  'Data Structuring': '데이터 구조화',
  Validation: '검증',
  'Batch operations': '배치 작업',
  Schema: '스키마',
  OCR: 'OCR',
  LLM: 'LLM',
};

const translateLabel = (value: string) => LABEL_MAP[value] ?? value;

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
      <div className="project-category">{translateLabel(project.category)}</div>
      {isRelevantToSelectedTarget ? <p className="target-relevance-badge">선택 포커스와 일치</p> : null}
      <h3>{project.title}</h3>
      <p className="meta">
        <span>{project.period}</span>
        <span>{project.role}</span>
      </p>
      <p className="summary">{project.summary}</p>
      {project.decisionTags?.length ? (
        <div className="sub-list">
          <h4>엔지니어링 결정</h4>
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
          <h4>선택 포커스와의 연결</h4>
          <p>{fitExplanation}</p>
        </div>
      ) : null}
      <div className={showCaseStudyDetails ? 'case-study-visible' : 'case-study-hidden'}>
        <CaseStudyBlock caseStudy={project.caseStudy} />
      </div>
      {project.evidence ? (
        <div className="sub-list">
          <h4>근거</h4>
          <ul>
            {project.evidence.map((item) => (
              <li key={`${project.title}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="sub-list">
        <h4>문제</h4>
        <p>{project.problem}</p>
      </div>
      <div className="sub-list">
        <h4>해결</h4>
        <p>{project.solution}</p>
      </div>
      <div className="sub-list">
        <h4>성과</h4>
        <ul>
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="label-row">
        <strong>기술 스택</strong>
      </p>
      <ul className="pill-list">
        {project.techStack.map((tech) => (
          <li className="pill" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className="sub-list">
        <h4>키워드</h4>
        <ul className="pill-list pill-list-inline">
          {project.keywords.map((keyword) => (
            <li className="pill" key={`${project.title}-${keyword}`}>
              {translateLabel(keyword)}
            </li>
          ))}
        </ul>
      </div>
      <div className="sub-list">
        <h4>역할 관점</h4>
        <ul className="pill-list pill-list-inline">
          {project.rolePerspectives.map((perspective) => (
            <li className="pill role-pill" key={`${project.title}-${perspective}`}>
              {translateLabel(perspective)}
            </li>
          ))}
        </ul>
      </div>
      {tags.length ? (
        <div className="sub-list">
          <h4>근거 태그</h4>
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
