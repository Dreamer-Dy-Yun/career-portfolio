import type { WorkCaseContent } from '../data/types';

type WorkCasesProps = {
  workCases: WorkCaseContent[];
};

const WorkCases = ({ workCases }: WorkCasesProps) => {
  if (workCases.length === 0) {
    return null;
  }

  return (
    <section className="document-section" aria-labelledby="work-cases-title">
      <div className="section-title">
        <p className="eyebrow">Career Description</p>
        <h2 id="work-cases-title">대표 업무</h2>
      </div>
      <div className="work-list">
        {workCases.map((workCase) => (
          <article className="work-row" key={workCase.title}>
            <header>
              <span>{workCase.period}</span>
              <strong>
                {workCase.title} · {workCase.role}
              </strong>
            </header>
            <p>{workCase.summary}</p>
            {workCase.details.length > 0 ? (
              <ul>
                {workCase.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
            <ul className="compact-tags">
              {workCase.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkCases;
