import { useMemo, useState } from 'react';
import EvidenceIndex from './components/EvidenceIndex';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import JobTargetSelector from './components/JobTargetSelector';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillMatrix from './components/SkillMatrix';
import { evidenceTags } from './data/evidenceTags';
import { experiences } from './data/experiences';
import { JobTarget, jobTargets } from './data/jobTargets';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';

const GENERAL_TARGET_ID = 'general';

const identityCards = [
  {
    title: '주 포지션',
    body: '운영 데이터를 구조화하는 백엔드 / 데이터 파이프라인 엔지니어',
  },
  {
    title: '차별점',
    body: 'QA, 제조 품질, 운영 IT, 프로젝트 수행 경험을 억지로 IT로 포장하지 않고 검증 감각으로 연결합니다.',
  },
  {
    title: '작업 방식',
    body: '불명확한 업무를 입력, 상태, 검증, 예외, 출력으로 나눈 뒤 구현 가능한 흐름으로 정리합니다.',
  },
];

const careerBasePoints = [
  '제조 QA 경험은 결함 추적, 검사 기준, 품질 관리 감각의 기반이 됐습니다.',
  '일본 IT 운영 환경에서는 절차, 커뮤니케이션, 변경 이력 관리의 중요성을 익혔습니다.',
  '자동화 프로젝트 경험은 단순 스크립트보다 운영 가능한 실행 구조를 고민하게 만든 전환점입니다.',
  '최근 작업은 API, PostgreSQL, OCR/LLM, 데이터 파이프라인을 연결하는 방향으로 확장됐습니다.',
];

const reviewSummary = [
  '이 포트폴리오는 화면 장식보다 문제 맥락, 데이터 흐름, 검증 방식, 엔지니어링 결정을 먼저 보여주도록 재구성했습니다.',
  '프로젝트 설명은 과장된 수치 대신 입력 데이터, 제약 조건, 설계 선택, 검증 가능성을 중심으로 읽히게 했습니다.',
];

const isProjectRelevantToTarget = (project: (typeof projects)[number], selectedTarget: JobTarget | null) => {
  if (!selectedTarget) {
    return false;
  }

  const perspectiveMatch = project.rolePerspectives.some((perspective) =>
    selectedTarget.preferredRolePerspectives.includes(perspective),
  );
  const categoryMatch = selectedTarget.preferredProjectCategories.includes(project.category);

  return perspectiveMatch || categoryMatch;
};

const App = () => {
  const [selectedJobTargetId, setSelectedJobTargetId] = useState(GENERAL_TARGET_ID);

  const selectedJobTarget = jobTargets.find((target) => target.id === selectedJobTargetId) ?? null;
  const isGeneralTarget = selectedJobTargetId === GENERAL_TARGET_ID || !selectedJobTarget;

  const email = profile.email?.trim() ?? '';
  const hasRealEmail = Boolean(email) && !/example\./i.test(email);
  const contactFormUrl = profile.contactFormUrl?.trim() ?? '';
  const hasContactForm = /^https?:\/\//.test(contactFormUrl);
  const contactHref = hasContactForm ? contactFormUrl : hasRealEmail ? `mailto:${email}` : '#contact';
  const resumeHref = profile.resumeAvailable && profile.resumeUrl ? profile.resumeUrl : undefined;

  const sortedProjects = useMemo(() => {
    if (isGeneralTarget) {
      return projects.map((project) => ({ project, isRelevantToSelectedTarget: false }));
    }

    const relevant = projects
      .filter((project) => isProjectRelevantToTarget(project, selectedJobTarget))
      .map((project) => ({ project, isRelevantToSelectedTarget: true }));
    const remaining = projects
      .filter((project) => !isProjectRelevantToTarget(project, selectedJobTarget))
      .map((project) => ({ project, isRelevantToSelectedTarget: false }));

    return [...relevant, ...remaining];
  }, [isGeneralTarget, selectedJobTarget]);

  return (
    <div className="portfolio-root">
      <Header />
      <main>
        <Hero selectedJobTarget={selectedJobTarget} contactHref={contactHref} resumeHref={resumeHref} />

        <Section id="identity" title="누구를 위한 포트폴리오인가" className="identity-section">
          <div className="identity-grid">
            {identityCards.map((item) => (
              <article className="identity-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="current-focus" title="지원 포지션 관점">
          <JobTargetSelector
            options={[
              { id: GENERAL_TARGET_ID, label: '전체' },
              ...jobTargets.map((target) => ({ id: target.id, label: target.label })),
            ]}
            selectedId={selectedJobTargetId}
            onChange={setSelectedJobTargetId}
          />
          <div className="focus-panel">
            <strong>{isGeneralTarget ? '전체 관점' : selectedJobTarget?.headline}</strong>
            <p>
              {isGeneralTarget
                ? '백엔드, 데이터 파이프라인, 시스템 설계, OCR/LLM, QA/운영 기반을 함께 보여주는 기본 보기입니다.'
                : selectedJobTarget?.summary}
            </p>
          </div>
        </Section>

        <Section id="strengths" title="해결하는 문제">
          <div className="strength-list">
            {profile.coreStrengths.map((strength) => (
              <article className="strength-item" key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="evidence-index" title="근거 지도">
          <EvidenceIndex
            evidenceTags={evidenceTags}
            projects={projects}
            experiences={experiences}
            selectedJobTarget={selectedJobTarget}
          />
        </Section>

        <Section id="technical-review" title="기술 검토 기준">
          <div className="review-summary">
            {reviewSummary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="projects" title="대표 프로젝트">
          <div className="project-grid">
            {sortedProjects.map(({ project, isRelevantToSelectedTarget }) => (
              <ProjectCard
                key={project.title}
                project={project}
                isRelevantToSelectedTarget={isRelevantToSelectedTarget}
                selectedJobTargetId={selectedJobTargetId}
                evidenceTags={evidenceTags}
              />
            ))}
          </div>
        </Section>

        <Section id="career-base" title="경력 기반">
          <div className="career-base">
            <div className="career-note">
              {careerBasePoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
            <ExperienceTimeline experiences={experiences} evidenceTags={evidenceTags} />
          </div>
        </Section>

        <Section id="skills" title="기술과 업무 도구">
          <SkillMatrix skillGroups={skillGroups} />
        </Section>

        <Section id="contact" title="문의">
          <div className="contact-card">
            <p>채용, 협업, 기술 검토 관련 문의를 받을 수 있는 채널입니다.</p>
            <div className="contact-actions">
              {hasContactForm ? (
                <a className="button-primary" href={contactFormUrl} target="_blank" rel="noreferrer">
                  Google Form
                </a>
              ) : null}
              {hasRealEmail ? (
                <a className="button-secondary" href={`mailto:${email}`}>
                  이메일 보내기
                </a>
              ) : null}
              {!hasContactForm && !hasRealEmail ? <span className="contact-muted">문의 채널 준비 중</span> : null}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
