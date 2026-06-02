import { useMemo, useState } from 'react';
import type { HeroContent, ProjectContent, SkillGroup, ExperienceContent } from '../data/types';
import { createCareerTimelineItems } from '../modules/careerTimeline';

type HomeOverviewProps = {
  hero: HeroContent;
  experiences: ExperienceContent[];
  projects: ProjectContent[];
  skillGroups: SkillGroup[];
};

const HomeOverview = ({ hero, experiences, projects, skillGroups }: HomeOverviewProps) => {
  const timelineItems = useMemo(() => createCareerTimelineItems(experiences), [experiences]);
  const [activeExperienceId, setActiveExperienceId] = useState(timelineItems[0]?.id ?? '');
  const activeExperience = timelineItems.find((item) => item.id === activeExperienceId) ?? timelineItems[0];
  const primaryProjects = projects.slice(0, 4);
  const primarySkillGroups = skillGroups.slice(0, 4);

  return (
    <div className="home-overview">
      <section className="home-intro" aria-labelledby="home-title">
        <div>
          <p className="eyebrow">Career Portfolio</p>
          <h1 id="home-title">{hero.name}</h1>
          <p className="hero-title">{hero.title}</p>
        </div>
        <div className="home-intro-copy">
          <p>{hero.subtitle}</p>
          <p>{hero.description}</p>
          <ul className="chip-list" aria-label="Core keywords">
            {hero.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-board" aria-label="Career summary board">
        <article className="home-column home-column-experience">
          <div className="home-column-heading">
            <p className="eyebrow">Experience</p>
            <h2>연혁</h2>
          </div>
          <ol className="home-timeline">
            {timelineItems.map((item) => (
              <li key={item.id}>
                <button
                  aria-pressed={activeExperience?.id === item.id}
                  type="button"
                  onClick={() => setActiveExperienceId(item.id)}
                  onFocus={() => setActiveExperienceId(item.id)}
                  onMouseEnter={() => setActiveExperienceId(item.id)}
                >
                  <span>{item.period}</span>
                  <strong>
                    {item.company}
                    {item.isConcurrent ? <em>병행</em> : null}
                  </strong>
                  <small>{item.role}</small>
                </button>
              </li>
            ))}
          </ol>
          {activeExperience ? (
            <div className="home-experience-detail" aria-live="polite">
              <strong>
                {activeExperience.company}
                {activeExperience.isConcurrent ? <em>병행</em> : null}
              </strong>
              <p>{activeExperience.summary}</p>
              {activeExperience.tags.length > 0 ? (
                <ul className="chip-list" aria-label={`${activeExperience.company} tags`}>
                  {activeExperience.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </article>

        <article className="home-column">
          <div className="home-column-heading">
            <p className="eyebrow">Project Evidence</p>
            <h2>프로젝트</h2>
          </div>
          <ul className="home-project-list">
            {primaryProjects.map((project) => (
              <li key={project.title}>
                <span>{project.period}</span>
                <strong>{project.title}</strong>
                <p>{project.role}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="home-column">
          <div className="home-column-heading">
            <p className="eyebrow">Skills</p>
            <h2>스택</h2>
          </div>
          <div className="home-skill-list">
            {primarySkillGroups.map((group) => (
              <section key={group.title}>
                <h3>{group.title}</h3>
                <ul className="chip-list">
                  {group.items.slice(0, 5).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default HomeOverview;
