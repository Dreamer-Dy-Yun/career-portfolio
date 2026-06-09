import type { HeroContent, ProfileSummaryContent, SkillGroupContent, WorkCaseContent } from '../data/types';

type ResumeDashboardProps = {
  hero: HeroContent;
  profileSummary: ProfileSummaryContent;
  workCases: WorkCaseContent[];
  skillGroups: SkillGroupContent[];
};

const ResumeDashboard = ({ hero, profileSummary, workCases, skillGroups }: ResumeDashboardProps) => {
  const primarySkills = skillGroups.flatMap((group) => group.items.slice(0, 2)).slice(0, 8);

  return (
    <section className="resume-dashboard" aria-labelledby="resume-title">
      <div className="identity-block">
        <p className="eyebrow">Career Portfolio</p>
        <h1 id="resume-title">{hero.name}</h1>
        <p className="hero-title">{hero.title}</p>
        <p className="hero-subtitle">{hero.subtitle}</p>
      </div>

      <div className="summary-block">
        <h2>{profileSummary.headline}</h2>
        <p>{hero.summary}</p>
        <ul>
          {profileSummary.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-strip" aria-label="Profile highlights">
        <section>
          <h3>Strengths</h3>
          <ul className="compact-tags">
            {profileSummary.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Work cases</h3>
          <ul>
            {workCases.slice(0, 3).map((workCase) => (
              <li key={workCase.title}>{workCase.title}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Skill context</h3>
          <ul className="compact-tags">
            {primarySkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default ResumeDashboard;
