import type { SkillGroup } from '../data/types';

type SkillCloudProps = {
  skillGroups: SkillGroup[];
};

const SkillCloud = ({ skillGroups }: SkillCloudProps) => {
  return (
    <div className="skill-stack-list">
      {skillGroups.map((group) => (
        <article className="skill-row" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="chip-list">
            {group.items.map((item) => (
              <li className="skill-chip" key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default SkillCloud;
