import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import EvidenceIndex from './components/EvidenceIndex';
import SkillMatrix from './components/SkillMatrix';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import JobTargetSelector from './components/JobTargetSelector';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { experiences } from './data/experiences';
import { skillGroups } from './data/skills';
import { JobTarget, jobTargets } from './data/jobTargets';
import { evidenceTags } from './data/evidenceTags';

const GENERAL_TARGET_ID = 'general';

const getIsProjectRelevantToTarget = (
  projectRolePerspectives: string[],
  projectCategory: string,
  selectedTarget: JobTarget | null,
) => {
  if (!selectedTarget) {
    return false;
  }

  const perspectiveMatch = projectRolePerspectives.some((perspective) =>
    selectedTarget.preferredRolePerspectives.includes(perspective),
  );
  const categoryMatch = selectedTarget.preferredProjectCategories.includes(projectCategory);

  return perspectiveMatch || categoryMatch;
};

const GENERAL_APPLICATION_SUMMARY = [
  '운영 환경이 정돈되지 않은 상황에서 데이터를 수집하고, 모델링하고, 실행 가능한 형태로 정리해 본 경험이 있습니다.',
  'PostgreSQL 기반의 데이터 모델 설계, API 연동, OCR/LLM 파싱, 자동화 흐름 관리까지 아우르며 유지보수 가능한 구조를 만들기 위해 작업해 왔습니다.',
  '기술을 도입하는 것보다 검증 가능성과 추적 가능성을 먼저 고려하는 실무형 접근을 선호합니다.',
];

const GENERAL_PROFILE_FIT_POINTS = [
  '백엔드와 데이터 파이프라인, API 연계, OCR/LLM 기반 추출, QA/운영 전반에서 실무형 연결고리를 연결해온 이력이 있습니다.',
  '요구사항이 명확하지 않아도 단계별로 분해해 실행 가능한 형태로 정리해 온 경험이 있습니다.',
  '단기 결과보다 장기 운영에서 신뢰성과 확장성을 유지하는 데 초점을 둡니다.',
];

const TECHNICAL_REVIEW_SUMMARY = [
  '이 포트폴리오는 UI 데모보다 데이터 흐름, 제약, 엔지니어링 결정, 검증 과정을 중심으로 구성했습니다.',
  '문제 맥락과 결정 근거를 근거 기반으로 정리해 기술 리뷰에서 흐름을 빠르게 확인할 수 있게 했습니다.',
];

const App = () => {
  const categoryFilters = [
    { value: 'All', label: '전체' },
    { value: 'Data Pipeline', label: '데이터 파이프라인' },
    { value: 'Backend / Database', label: '백엔드 / DB' },
    { value: 'AI / OCR / LLM', label: 'AI / OCR / LLM' },
    { value: 'Data Visualization', label: '데이터 시각화' },
    { value: 'API Integration', label: 'API 연동' },
  ];

  const rolePerspectiveFilters = [
    { value: 'All', label: '전체' },
    { value: 'Backend / Data Pipeline', label: '백엔드 / 데이터 파이프라인' },
    { value: 'System Design', label: '시스템 설계' },
    { value: 'AI / OCR / LLM', label: 'AI / OCR / LLM' },
    { value: 'Automation Refactoring', label: '자동화 리팩토링' },
  ];

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(categoryFilters[0].value);
  const [selectedRolePerspective, setSelectedRolePerspective] = useState(rolePerspectiveFilters[0].value);
  const [selectedJobTargetId, setSelectedJobTargetId] = useState(GENERAL_TARGET_ID);
  const [showCaseStudyDetails, setShowCaseStudyDetails] = useState(false);

  const email = profile.email?.trim() ?? '';
  const hasRealEmail = Boolean(email) && !/example\./i.test(email);
  const isResumeAvailable = Boolean(profile.resumeAvailable);
  const resumeUrl = profile.resumeUrl?.trim();
  const isDownloadableResume = Boolean(
    isResumeAvailable && resumeUrl && !/example\./i.test(resumeUrl),
  );

  const selectedJobTarget = jobTargets.find((target) => target.id === selectedJobTargetId) ?? null;
  const isGeneralTarget = selectedJobTargetId === GENERAL_TARGET_ID || !selectedJobTarget;

  const filteredProjects = useMemo(() => {
    const baseFilteredProjects = projects.filter((project) => {
      const matchesCategory =
        selectedCategoryFilter === 'All' || project.category === selectedCategoryFilter;
      const matchesRolePerspective =
        selectedRolePerspective === 'All' || project.rolePerspectives.includes(selectedRolePerspective);

      return matchesCategory && matchesRolePerspective;
    });

    if (isGeneralTarget) {
      return baseFilteredProjects.map((project) => ({
        project,
        isRelevantToSelectedTarget: false,
      }));
    }

    const relevantProjects: {
      project: (typeof projects)[number];
      isRelevantToSelectedTarget: boolean;
    }[] = [];
    const nonRelevantProjects: {
      project: (typeof projects)[number];
      isRelevantToSelectedTarget: boolean;
    }[] = [];

    baseFilteredProjects.forEach((project) => {
      const isRelevantToSelectedTarget = getIsProjectRelevantToTarget(
        project.rolePerspectives,
        project.category,
        selectedJobTarget,
      );

      if (isRelevantToSelectedTarget) {
        relevantProjects.push({ project, isRelevantToSelectedTarget: true });
      } else {
        nonRelevantProjects.push({ project, isRelevantToSelectedTarget: false });
      }
    });

    return [...relevantProjects, ...nonRelevantProjects];
  }, [selectedCategoryFilter, selectedRolePerspective, isGeneralTarget, selectedJobTarget]);

  const validLinks = (profile.links ?? []).filter((link) => {
    const label = link.label?.trim() ?? '';
    const url = link.url?.trim() ?? '';
    const hasLabel = Boolean(label);
    const hasUrl = Boolean(url);
    const isPlaceholder = /example/i.test(label) || /example/i.test(url);
    const isLikelyRealUrl = /^https?:\/\//.test(url) || url.startsWith('/') || url.startsWith('mailto:');

    return hasLabel && hasUrl && !isPlaceholder && isLikelyRealUrl;
  });

  const hasRealContact = hasRealEmail || validLinks.length > 0 || isDownloadableResume;
  const applicationSummary = isGeneralTarget
    ? GENERAL_APPLICATION_SUMMARY
    : selectedJobTarget?.applicationSummary ?? [];
  const whyThisProfileFits = isGeneralTarget
    ? GENERAL_PROFILE_FIT_POINTS
    : selectedJobTarget?.whyThisProfileFits ?? [];

  return (
    <div className="portfolio-root">
      <Header />
      <main className="portfolio-container">
        <Hero selectedJobTarget={selectedJobTarget} />

        <Section id="current-focus" title="현재 포커스">
          <div className="target-selector">
            <JobTargetSelector
              options={[
                { id: GENERAL_TARGET_ID, label: '전체' },
                ...jobTargets.map((target) => ({ id: target.id, label: target.label })),
              ]}
              selectedId={selectedJobTargetId}
              onChange={setSelectedJobTargetId}
            />
          </div>
          {isGeneralTarget ? (
            <p className="current-focus-copy">
              현재는 백엔드, 데이터 파이프라인, API, OCR/LLM, 자동화 리팩토링 경험을 함께 보여주는 방식으로 정리해 두었습니다.
            </p>
          ) : (
            <div className="current-focus-copy">
              <p>
                <strong>현재 포커스: {selectedJobTarget?.label}</strong>
              </p>
              <p>{selectedJobTarget?.summary}</p>
            </div>
          )}
        </Section>

        <Section id="application-summary" title="지원자 요약">
          <div className="application-summary">
            {applicationSummary.map((paragraph, index) => (
              <p key={`application-summary-${index}`}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="why-fits" title="적합성">
          <ul className="why-fit-list">
            {whyThisProfileFits.map((item, index) => (
              <li key={`why-fit-${index}`}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="evidence-index" title="근거 지표">
          <EvidenceIndex
            evidenceTags={evidenceTags}
            projects={projects}
            experiences={experiences}
            selectedJobTarget={selectedJobTarget}
          />
        </Section>

        <Section id="technical-review" title="기술 리뷰 요약">
          <div className="technical-review-summary">
            {TECHNICAL_REVIEW_SUMMARY.map((paragraph, index) => (
              <p key={`technical-review-summary-${index}`}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="strengths" title="핵심 강점">
          <div className="strength-list">
            {profile.coreStrengths.map((strength) => (
              <article className="strength-item" key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="주요 프로젝트">
          <div className="filter-panel">
            <div className="project-filters">
              <FilterBar
                label="프로젝트 카테고리"
                options={categoryFilters}
                activeValue={selectedCategoryFilter}
                onChange={setSelectedCategoryFilter}
              />
              <FilterBar
                label="역할 관점"
                options={rolePerspectiveFilters}
                activeValue={selectedRolePerspective}
                onChange={setSelectedRolePerspective}
              />
            </div>
            <label className="case-study-toggle">
              <input
                type="checkbox"
                checked={showCaseStudyDetails}
                onChange={(event) => setShowCaseStudyDetails(event.target.checked)}
              />
              <span>케이스 스터디 상세 보기</span>
            </label>
          </div>
          <div className="project-grid">
            {filteredProjects.map(({ project, isRelevantToSelectedTarget }) => (
              <div key={project.title} className="project-item">
                <ProjectCard
                  project={project}
                  isRelevantToSelectedTarget={isRelevantToSelectedTarget}
                  selectedJobTargetId={selectedJobTargetId}
                  evidenceTags={evidenceTags}
                  showCaseStudyDetails={showCaseStudyDetails}
                />
              </div>
            ))}
            {filteredProjects.length === 0 ? <p className="empty-state">조건에 맞는 프로젝트가 없습니다.</p> : null}
          </div>
        </Section>

        <Section id="skills" title="기술 스택">
          <SkillMatrix skillGroups={skillGroups} />
        </Section>

        <Section id="timeline" title="경력 타임라인">
          <ExperienceTimeline experiences={experiences} evidenceTags={evidenceTags} />
        </Section>

        <Section id="narrative" title="경력 스토리">
          <p>
            초기에는 QA와 운영 지원 경험을 시작으로 API 연계, 백엔드 아키텍처, 데이터 파이프라인 작업까지 확장해 왔습니다.
            현재는 단기 구현보다 구현이 유지될 수 있는 실행 구조를 만드는 방식에 익숙합니다.
          </p>
          <p>
            반복되는 업무에서는 요구사항을 정리하고, 데이터 구조를 고정화하고, 재사용 가능한 실행 단위를 잡는 방식으로 개선합니다.
            '자동화'를 목표가 아니라 '운영 가능한 시스템'을 목표로 정렬합니다.
          </p>
        </Section>

        <Section
          id="contact"
          title="연락처"
          className={hasRealContact ? 'contact-section' : 'contact-section contact-section--placeholder'}
        >
          <p>문의는 아래 채널을 통해 가능합니다.</p>
          <div className={hasRealContact ? 'contact-card' : 'contact-placeholder'}>
            {hasRealContact ? (
              <>
                {hasRealEmail ? <a className="contact-link" href={`mailto:${email}`}> {email} </a> : null}
                {profile.location ? <p>{profile.location}</p> : null}
                {validLinks.length ? (
                  <ul className="contact-links">
                    {validLinks.map((link) => (
                      <li key={`${link.label}-${link.url}`}>
                        <a href={link.url} className="contact-link" aria-label={link.label}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="resume-action">
                  <span>이력서</span>
                  {isDownloadableResume ? (
                    <a
                      href={resumeUrl as string}
                      className="resume-button"
                      aria-label="이력서 PDF 다운로드"
                      download
                    >
                      이력서 PDF 다운로드
                    </a>
                  ) : (
                    <button type="button" className="resume-button resume-button--disabled" disabled>
                      이력서 PDF 추후 공개
                    </button>
                  )}
                </div>
              </>
            ) : (
              <p>연락처 공개 준비 전이라면 추후 업데이트 예정입니다.</p>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
