import type { HeroContent } from '../data/types';

type HeroProps = {
  hero: HeroContent;
};

const Hero = ({ hero }: HeroProps) => {
  return (
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Career Portfolio</p>
        <h1>{hero.name}</h1>
        <p className="hero-title">{hero.title}</p>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <p className="hero-description">{hero.description}</p>
        <ul className="chip-list" aria-label="Core keywords">
          {hero.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      </div>
      <div className="hero-panel" aria-label="Profile photo placeholder">
        <span>Photo</span>
        <strong>YD</strong>
        <p>프로필 사진 연결 예정</p>
      </div>
    </div>
  );
};

export default Hero;