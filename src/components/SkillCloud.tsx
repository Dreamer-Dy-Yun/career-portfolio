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
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default SkillCloud;
