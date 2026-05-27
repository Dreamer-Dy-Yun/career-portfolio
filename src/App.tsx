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
  'Yun Dae-Young is a developer with experience in backend-oriented workflow design, PostgreSQL data modeling, API integration, OCR/LLM data processing, and automation refactoring.',
  'He has worked across planning, development, testing, QA, and stakeholder communication, often in projects where requirements were unclear or operational data was fragmented.',
  'His strongest fit is in roles that require structuring undefined business processes into maintainable systems, reusable data flows, and verifiable execution logic.',
];

const GENERAL_PROFILE_FIT_POINTS = [
  'Experience across backend, database, API, OCR/LLM workflow, automation, QA, and operational IT contexts.',
  'Strong fit for roles that require structuring fragmented business processes into maintainable systems.',
  'Useful where implementation requires both technical design and practical operational understanding.',
];

const TECHNICAL_REVIEW_SUMMARY = [
  'This portfolio emphasizes project structure, data flow, validation logic, and maintainability rather than UI screenshots or superficial feature lists.',
  'The project descriptions focus on the problem context, constraints, engineering decisions, and evidence of implementation. This is intended to make the work easier to review from a backend, data pipeline, and system design perspective.',
];

const App = () => {
  const categoryFilters = [
    'All',
    'Data Pipeline',
    'Backend / Database',
    'AI / OCR / LLM',
    'Data Visualization',
    'API Integration',
  ];

  const rolePerspectiveFilters = [
    'All',
    'Backend / Data Pipeline',
    'System Design',
    'AI / OCR / LLM',
    'Automation Refactoring',
  ];

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(categoryFilters[0]);
  const [selectedRolePerspective, setSelectedRolePerspective] = useState(rolePerspectiveFilters[0]);
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
        selectedRolePerspective === 'All' ||
        project.rolePerspectives.includes(selectedRolePerspective);
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

        <Section id="current-focus" title="Current Focus">
          <div className="target-selector">
            <JobTargetSelector
              options={[
                { id: GENERAL_TARGET_ID, label: 'General' },
                ...jobTargets.map((target) => ({ id: target.id, label: target.label })),
              ]}
              selectedId={selectedJobTargetId}
              onChange={setSelectedJobTargetId}
            />
          </div>
          {isGeneralTarget ? (
            <p className="current-focus-copy">
              This portfolio presents a general view of backend, data pipeline, system design, AI/OCR workflow, and
              automation refactoring experience.
            </p>
          ) : (
            <div className="current-focus-copy">
              <p>
                <strong>Current focus: {selectedJobTarget?.label}</strong>
              </p>
              <p>{selectedJobTarget?.summary}</p>
            </div>
          )}
        </Section>

        <Section id="application-summary" title="Application Summary">
          <div className="application-summary">
            {applicationSummary.map((paragraph, index) => (
              <p key={`application-summary-${index}`}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="why-fits" title="Why This Profile Fits">
          <ul className="why-fit-list">
            {whyThisProfileFits.map((item, index) => (
              <li key={`why-fit-${index}`}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="evidence-index" title="Evidence Index">
          <EvidenceIndex
            evidenceTags={evidenceTags}
            projects={projects}
            experiences={experiences}
            selectedJobTarget={selectedJobTarget}
          />
        </Section>

        <Section id="technical-review" title="Technical Review Summary">
          <div className="technical-review-summary">
            {TECHNICAL_REVIEW_SUMMARY.map((paragraph, index) => (
              <p key={`technical-review-summary-${index}`}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="strengths" title="Core Strengths">
          <div className="strength-list">
            {profile.coreStrengths.map((strength) => (
              <article className="strength-item" key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="filter-panel">
            <div className="project-filters">
              <FilterBar
                label="Project Category"
                options={categoryFilters.map((value) => ({ value }))}
                activeValue={selectedCategoryFilter}
                onChange={setSelectedCategoryFilter}
              />
              <FilterBar
                label="Role Perspective"
                options={rolePerspectiveFilters.map((value) => ({ value }))}
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
              <span>Show case study details</span>
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
            {filteredProjects.length === 0 ? (
              <p className="empty-state">No projects match the selected filters.</p>
            ) : null}
          </div>
        </Section>

        <Section id="skills" title="Technical Stack">
          <SkillMatrix skillGroups={skillGroups} />
        </Section>

        <Section id="timeline" title="Career Timeline">
          <ExperienceTimeline experiences={experiences} evidenceTags={evidenceTags} />
        </Section>

        <Section id="narrative" title="Career Narrative">
          <p>
            My career started from QA and operational IT environments, then moved into automation, API integration,
            database design, and system-oriented development.
          </p>
          <p>
            Although many projects were categorized under automation, the core work was often broader: defining unclear
            requirements, structuring data flows, replacing fragile manual processes, and building reusable execution
            logic. This portfolio presents my work through the lens of backend systems, data pipelines, and practical
            system design rather than tool-specific automation alone.
          </p>
        </Section>

        <Section
          id="contact"
          title="Contact"
          className={hasRealContact ? 'contact-section' : 'contact-section contact-section--placeholder'}
        >
          <p>
            For collaboration, technical review, or career-related discussion, please contact me through the listed
            contact channel.
          </p>
          <div className={hasRealContact ? 'contact-card' : 'contact-placeholder'}>
            {hasRealContact ? (
              <>
                {hasRealEmail ? (
                  <a className="contact-link" href={`mailto:${email}`} aria-label={`Email ${email}`}>
                    {email}
                  </a>
                ) : null}
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
                  <span>Resume</span>
                  {isDownloadableResume ? (
                    <a
                      href={resumeUrl as string}
                      className="resume-button"
                      aria-label="Download resume PDF"
                      download
                    >
                      Download Resume PDF
                    </a>
                  ) : (
                    <button type="button" className="resume-button resume-button--disabled" disabled>
                      Resume PDF Coming Soon
                    </button>
                  )}
                </div>
              </>
            ) : (
              <p>Contact information will be added later.</p>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
