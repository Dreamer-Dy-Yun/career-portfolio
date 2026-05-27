import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  const sectionClass = className ? `section ${className}` : 'section';

  return (
    <section id={id} className={sectionClass}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
