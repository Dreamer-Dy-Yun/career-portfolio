import { SkillGroup } from '../data/skills';

type SkillMatrixProps = {
  skillGroups: SkillGroup[];
};

const SkillMatrix = ({ skillGroups }: SkillMatrixProps) => {
  return (
    <div className="skill-grid">
      {skillGroups.map((group) => (
        <section key={group.category} className="skill-group">
          <h3>{group.category}</h3>
          <ul className="skill-list">
            {group.items.map((skill) => (
              <li key={`${group.category}-${skill}`}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SkillMatrix;
