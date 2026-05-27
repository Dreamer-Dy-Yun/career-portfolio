import { TargetRole } from '../data/targetRoles';

type TargetRoleCardProps = {
  role: TargetRole;
};

const TargetRoleCard = ({ role }: TargetRoleCardProps) => {
  return (
    <article className="target-role-card">
      <h3>{role.title}</h3>
      <p>{role.description}</p>
      <div className="sub-list">
        <h4>Evidence</h4>
        <ul>
          {role.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TargetRoleCard;
