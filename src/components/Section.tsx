import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, eyebrow, title, children }: SectionProps) => {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
};

export default Section;
