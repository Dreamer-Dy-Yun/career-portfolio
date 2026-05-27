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
import { jobTargets } from './data/jobTargets';
import type { JobTarget } from './data/jobTargets';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';

const GENERAL_TARGET_ID = 'general';

const signalCards = [
  {
    label: '핵심 입력',
    value: 'Excel · OCR · API',
    note: '흩어진 운영 데이터를 구조화하는 흐름',
  },
  {
    label: '설계 기준',
    value: '검증 · 추적 · 재사용',
    note: '실제 운영에서 고쳐 쓰기 쉬운 처리 구조',
  },
  {
    label: '경력 기반',
    value: 'QA · 운영 · 개발',
    note: 'IT만이 아닌 현장 기반의 검증 감각',
  },
];

const identityCards = [
  {
    title: '포지션',
    body: '운영 데이터를 구조화하는 백엔드 / 데이터 파이프라인 엔지니어',
  },
  {
    title: '기반',
    body: '제조 품질, QA, IT 운영, 프로젝트 수행 경험을 바탕으로 검증과 운영 흐름을 함께 봅니다.',
  },
  {
    title: '작업 방식',
    body: '불명확한 업무를 입력, 상태, 검증, 예외, 출력으로 나눈 뒤 구현 가능한 흐름으로 정리합니다.',
  },
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

        <section className="signal-strip" aria-label="포트폴리오 요약">
          {signalCards.map((item) => (
            <article className="signal-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <Section id="identity" title="핵심 프로필" className="identity-section profile-band">
          <div className="identity-grid">
            {identityCards.map((item) => (
              <article className="identity-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="current-focus" title="지원 직무" className="focus-band">
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
                ? '백엔드, 데이터 파이프라인, 시스템 설계, OCR/LLM, QA와 운영 경험을 함께 보여줍니다.'
                : selectedJobTarget?.summary}
            </p>
          </div>
        </Section>

        <Section id="strengths" title="해결하는 문제" className="strength-band">
          <div className="strength-list">
            {profile.coreStrengths.map((strength) => (
              <article className="strength-item" key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="evidence-index" title="역량 근거" className="evidence-band">
          <EvidenceIndex
            evidenceTags={evidenceTags}
            projects={projects}
            experiences={experiences}
            selectedJobTarget={selectedJobTarget}
          />
        </Section>

        <Section id="projects" title="대표 프로젝트" className="project-band">
          <div className="project-grid">
            {sortedProjects.map(({ project, isRelevantToSelectedTarget }, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                isRelevantToSelectedTarget={isRelevantToSelectedTarget}
                selectedJobTargetId={selectedJobTargetId}
                evidenceTags={evidenceTags}
                isFeatured={index === 0}
              />
            ))}
          </div>
        </Section>

        <Section id="career-base" title="경력 타임라인" className="career-band">
          <div className="career-base">
            <ExperienceTimeline experiences={experiences} evidenceTags={evidenceTags} />
          </div>
        </Section>

        <Section id="skills" title="기술과 업무 도구" className="skills-band">
          <SkillMatrix skillGroups={skillGroups} />
        </Section>

        {hasContactForm || hasRealEmail ? (
          <Section id="contact" title="문의" className="contact-band">
            <div className="contact-card">
              <p>채용, 협업, 기술 검토 관련 연락을 받을 수 있습니다.</p>
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
              </div>
            </div>
          </Section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default App;
