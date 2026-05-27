import { profile } from '../data/profile';
import { JobTarget } from '../data/jobTargets';
import ProfilePhoto from './ProfilePhoto';

type HeroProps = {
  selectedJobTarget?: JobTarget | null;
  contactHref: string;
  resumeHref?: string;
};

const Hero = ({ selectedJobTarget, contactHref, resumeHref }: HeroProps) => {
  const title = selectedJobTarget?.headline ?? profile.title;
  const summary = selectedJobTarget?.summary ?? profile.summary;

  return (
    <section className="hero section" id="hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">Career Portfolio</p>
          <h1>{profile.koreanName}</h1>
          <p className="hero-name-sub">{profile.name}</p>
          <p className="hero-title">{title}</p>
          <p className="hero-description">{profile.tagline}</p>
          <p className="hero-summary">{summary}</p>
          <div className="hero-metrics">
            <span>운영 데이터 구조화</span>
            <span>PostgreSQL / API</span>
            <span>OCR·LLM 검증 흐름</span>
            <span>QA / 운영 기반</span>
          </div>
          <div className="hero-actions">
            <a className="button-primary" href={contactHref}>
              문의하기
            </a>
            {resumeHref ? (
              <a className="button-secondary" href={resumeHref} download>
                이력서
              </a>
            ) : null}
          </div>
        </div>
        <ProfilePhoto />
      </div>
    </section>
  );
};

export default Hero;
