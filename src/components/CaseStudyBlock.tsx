import { Project } from '../data/projects';

type CaseStudyBlockProps = {
  caseStudy?: Project['caseStudy'];
};

const CaseStudyBlock = ({ caseStudy }: CaseStudyBlockProps) => {
  if (!caseStudy) {
    return null;
  }

  return (
    <section className="case-study-block" aria-label="Project case study">
      <h4>Case Study</h4>
      <p>{caseStudy.context}</p>
      {caseStudy.constraints.length ? (
        <div className="sub-list">
          <h5>Constraints</h5>
          <ul>
            {caseStudy.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {caseStudy.decisions.length ? (
        <div className="sub-list">
          <h5>Engineering Decisions</h5>
          <ul>
            {caseStudy.decisions.map((decision) => (
              <li key={decision.title}>
                <strong>{decision.title}:</strong> {decision.description}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {caseStudy.result.length ? (
        <div className="sub-list">
          <h5>Result</h5>
          <ul>
            {caseStudy.result.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default CaseStudyBlock;
