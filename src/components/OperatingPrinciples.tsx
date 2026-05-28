import type { OperatingPrincipleContent } from '../data/types';
import CardCarousel from './CardCarousel';

type OperatingPrinciplesProps = {
  principles?: OperatingPrincipleContent[];
};

const OperatingPrinciples = ({ principles = [] }: OperatingPrinciplesProps) => {
  const items = principles.map((principle) => (
    <article className="principle-card" key={principle.title}>
      <h3>{principle.title}</h3>
      <p>{principle.description}</p>
    </article>
  ));

  return <CardCarousel ariaLabel="Thinking pattern carousel" items={items} />;
};

export default OperatingPrinciples;