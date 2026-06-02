import type { SkillGroupContent } from '../data/types';

type SkillSummaryProps = {
  skillGroups: SkillGroupContent[];
};

const SkillSummary = ({ skillGroups }: SkillSummaryProps) => {
  if (skillGroups.length === 0) {
    return null;
  }

  return (
    <section className="document-section" aria-labelledby="skill-title">
      <div className="section-title">
        <p className="eyebrow">Skills</p>
        <h2 id="skill-title">기술 맥락</h2>
      </div>
      <div className="skill-table">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h3>{group.title}</h3>
            <ul className="compact-tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default SkillSummary;
