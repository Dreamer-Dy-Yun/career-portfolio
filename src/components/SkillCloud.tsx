import type { SkillGroup } from '../data/types';
import CardCarousel from './CardCarousel';

type SkillCloudProps = {
  skillGroups: SkillGroup[];
};

const SkillCloud = ({ skillGroups }: SkillCloudProps) => {
  const items = skillGroups.map((group) => (
        <article className="skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="chip-list">
            {group.items.map((item) => (
              <li className="skill-chip" key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
  ));

  return <CardCarousel ariaLabel="Stack carousel" className="skill-carousel" items={items} intervalMs={5200} itemsPerPage={3} />;
};

export default SkillCloud;
