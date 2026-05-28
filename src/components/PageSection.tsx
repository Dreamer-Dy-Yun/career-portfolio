import type { ReactNode } from 'react';

type PageSectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  variant?: 'default' | 'hero';
  children: ReactNode;
};

const PageSection = ({ id, eyebrow, title, variant = 'default', children }: PageSectionProps) => {
  return (
    <section className={`page-section page-section-${variant}`} id={id}>
      <div className="page-section-inner">
        {eyebrow || title ? (
          <div className="page-section-heading">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
          </div>
        ) : null}
        <div className="page-section-body">{children}</div>
      </div>
    </section>
  );
};

export default PageSection;
