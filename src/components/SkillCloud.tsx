import type { SkillGroup } from '../data/types';

type SkillCloudProps = {
  skillGroups: SkillGroup[];
};

const SkillCloud = ({ skillGroups }: SkillCloudProps) => {
  return (
    <div className="skill-grid">
      {skillGroups.map((group) => (
        <article className="skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="chip-list">
            {group.items.map((item) => {
              const label = typeof item === 'string' ? item : item.label;
              const evidence = typeof item === 'string' ? undefined : item.evidence;

              return (
                <li className={evidence ? `skill-chip skill-chip-${evidence}` : 'skill-chip'} key={label}>
                  <span>{label}</span>
                  {evidence ? <small>{evidence === 'direct' ? 'Direct' : 'AI-assisted'}</small> : null}
                </li>
              );
            })}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default SkillCloud;
