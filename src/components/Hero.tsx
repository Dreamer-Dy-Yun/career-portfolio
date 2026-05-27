import { profile } from '../data/profile';
import { JobTarget } from '../data/jobTargets';
import ProfilePhotoUpload from './ProfilePhotoUpload';

type HeroProps = {
  selectedJobTarget?: JobTarget | null;
};

const Hero = ({ selectedJobTarget }: HeroProps) => {
  const title = selectedJobTarget?.headline ?? profile.title;
  const summary = selectedJobTarget?.summary ?? profile.summary;

  return (
    <section className="hero section" id="hero">
      <div className="hero-layout">
        <div>
          <p className="hero-kicker">경력 포트폴리오</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{title}</p>
          <p className="hero-description">{profile.tagline}</p>
          <p className="hero-summary">{summary}</p>
          <div className="hero-metrics">
            <span>백엔드 / 데이터 파이프라인 / 시스템 설계</span>
            <span>PostgreSQL / OCR·LLM / API 연동</span>
          </div>
        </div>
        <ProfilePhotoUpload />
      </div>
    </section>
  );
};

export default Hero;
