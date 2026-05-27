import type { OperatingPrincipleContent } from '../data/types';

type OperatingPrinciplesProps = {
  principles?: OperatingPrincipleContent[];
};

const OperatingPrinciples = ({ principles = [] }: OperatingPrinciplesProps) => {
  if (principles.length === 0) {
    return null;
  }

  return (
    <div className="principle-grid">
      {principles.map((principle) => (
        <article className="principle-card" key={principle.title}>
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </article>
      ))}
    </div>
  );
};

export default OperatingPrinciples;