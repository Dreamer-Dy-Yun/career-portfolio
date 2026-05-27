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
};

const ProjectCard = ({
  project,
  isRelevantToSelectedTarget = false,
  selectedJobTargetId,
  evidenceTags,
}: ProjectCardProps) => {
  const fitExplanation =
    selectedJobTargetId &&
    selectedJobTargetId !== 'general'
      ? project.fitByTarget?.[selectedJobTargetId]
      : undefined;

  const tags = getEvidenceTagsByIds(project.evidenceTagIds, evidenceTags);

  return (
    <article className="project-card">
      <div className="project-card-head">
        <div>
          <div className="project-category">{translateLabel(project.category)}</div>
          <h3>{project.title}</h3>
        </div>
        {isRelevantToSelectedTarget ? <p className="target-relevance-badge">현재 관점과 연결</p> : null}
      </div>
      <p className="meta">
        <span>{project.period}</span>
        <span>{project.role}</span>
      </p>
      <p className="project-summary">{project.summary}</p>
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
      {project.caseStudy ? (
        <details className="case-study-details">
          <summary>케이스 스터디 보기</summary>
          <CaseStudyBlock caseStudy={project.caseStudy} />
        </details>
      ) : null}
      {project.evidence ? (
        <div className="sub-list">
          <h4>구현 근거</h4>
          <ul>
            {project.evidence.map((item) => (
              <li key={`${project.title}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="project-problem-grid">
        <div className="sub-list">
          <h4>문제</h4>
          <p>{project.problem}</p>
        </div>
        <div className="sub-list">
          <h4>해결</h4>
          <p>{project.solution}</p>
        </div>
      </div>
      <div className="sub-list">
        <h4>결과</h4>
        <ul>
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <h4>기술 스택</h4>
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
