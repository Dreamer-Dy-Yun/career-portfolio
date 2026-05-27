import { Project } from '../data/projects';

type CaseStudyBlockProps = {
  caseStudy?: Project['caseStudy'];
};

const CaseStudyBlock = ({ caseStudy }: CaseStudyBlockProps) => {
  if (!caseStudy) {
    return null;
  }

  return (
    <section className="case-study-block" aria-label="프로젝트 케이스 스터디">
      <h4>케이스 스터디</h4>
      <p>{caseStudy.context}</p>
      {caseStudy.constraints.length ? (
        <div className="sub-list">
          <h5>제약 조건</h5>
          <ul>
            {caseStudy.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {caseStudy.decisions.length ? (
        <div className="sub-list">
          <h5>엔지니어링 결정</h5>
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
          <h5>결과</h5>
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
