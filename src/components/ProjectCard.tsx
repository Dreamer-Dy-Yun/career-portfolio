import type { EvidenceTag } from '../data/evidenceTags';
import type { Project } from '../data/projects';
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
  PostgreSQL: 'PostgreSQL',
  Async: '비동기',
  Reusability: '재사용성',
  'Data Engineering': '데이터 엔지니어링',
  Normalization: '정규화',
  Visualization: '시각화',
  'Data Structuring': '데이터 구조화',
  Validation: '검증',
  Schema: '스키마',
  OCR: 'OCR',
  LLM: 'LLM',
  'Schema-scoped execution': '스키마 단위 실행',
  'Validation-first design': '검증 우선 설계',
  'Structured mapping': '구조화된 매핑',
  'Provisional AI output': '검증 전 AI 결과',
  'Specification-centered normalization': '스펙 기준 정규화',
  'Batch database operations': '배치 DB 처리',
  'Traceable data flow': '추적 가능한 데이터 흐름',
  'Human verification': '사람 검증 흐름',
  'API-centered workflow': 'API 중심 흐름',
};

const translateLabel = (value: string) => LABEL_MAP[value] ?? value;

type ProjectCardProps = {
  project: Project;
  isRelevantToSelectedTarget?: boolean;
  selectedJobTargetId?: string;
  evidenceTags: EvidenceTag[];
  isFeatured?: boolean;
};

const ProjectCard = ({
  project,
  isRelevantToSelectedTarget = false,
  selectedJobTargetId,
  evidenceTags,
  isFeatured = false,
}: ProjectCardProps) => {
  const fitExplanation =
    selectedJobTargetId && selectedJobTargetId !== 'general'
      ? project.fitByTarget?.[selectedJobTargetId]
      : undefined;

  const tags = getEvidenceTagsByIds(project.evidenceTagIds ?? [], evidenceTags);
  const cardClassName = isFeatured ? 'project-card project-card--featured' : 'project-card';

  return (
    <article className={cardClassName}>
      <div className="project-card-head">
        <div>
          <div className="project-category">{translateLabel(project.category)}</div>
          <h3>{project.title}</h3>
        </div>
        {isRelevantToSelectedTarget ? <p className="target-relevance-badge">선택 직무와 연결</p> : null}
      </div>

      <p className="meta">
        <span>{project.period}</span>
        <span>{project.role}</span>
      </p>

      <p className="project-summary">{project.summary}</p>

      {project.decisionTags?.length ? (
        <div className="sub-list decision-list">
          <h4>설계 결정</h4>
          <ul className="pill-list pill-list-inline">
            {project.decisionTags.map((decisionTag) => (
              <li className="pill decision-tag" key={`${project.title}-${decisionTag}`}>
                {translateLabel(decisionTag)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {fitExplanation ? (
        <div className="sub-list fit-box">
          <h4>선택 직무와의 연결</h4>
          <p>{fitExplanation}</p>
        </div>
      ) : null}

      {project.caseStudy ? (
        <details className="case-study-details">
          <summary>케이스 스터디</summary>
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

      <div className="sub-list stack-list">
        <h4>기술 스택</h4>
        <ul className="pill-list">
          {project.techStack.map((tech) => (
            <li className="pill" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <details className="project-more">
        <summary>분류와 태그</summary>
        <div className="project-more-content">
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
            <h4>관련 역할</h4>
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
              <h4>역량 태그</h4>
              <ul className="pill-list pill-list-inline">
                {tags.map((tag) => (
                  <li className="pill" key={`${project.title}-${tag.id}`}>
                    {translateLabel(tag.label)}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </details>
    </article>
  );
};

export default ProjectCard;
