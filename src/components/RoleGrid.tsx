import type { RoleContent } from '../data/types';
import CardCarousel from './CardCarousel';

type RoleGridProps = {
  roles: RoleContent[];
};

const RoleGrid = ({ roles }: RoleGridProps) => {
  const items = roles.map((role) => (
    <article className="role-card" key={role.title}>
      <h3>{role.title}</h3>
      <p>{role.description}</p>
      <ul className="mini-list">
        {role.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  ));

  return <CardCarousel ariaLabel="Position carousel" items={items} />;
};

export default RoleGrid;