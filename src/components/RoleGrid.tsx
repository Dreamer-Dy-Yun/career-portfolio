import type { RoleContent } from '../data/types';

type RoleGridProps = {
  roles: RoleContent[];
};

const RoleGrid = ({ roles }: RoleGridProps) => {
  return (
    <div className="role-grid">
      {roles.map((role) => (
        <article className="role-card" key={role.title}>
          <h3>{role.title}</h3>
          <p>{role.description}</p>
          <ul className="mini-list">
            {role.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default RoleGrid;
