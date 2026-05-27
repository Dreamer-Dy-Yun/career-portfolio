import type { HeroContent } from '../data/types';

type HeroProps = {
  hero: HeroContent;
};

const Hero = ({ hero }: HeroProps) => {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Career Portfolio</p>
          <h1>{hero.name}</h1>
          <p className="hero-title">{hero.title}</p>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>
          <ul className="chip-list" aria-label="핵심 키워드">
            {hero.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>
        <div className="hero-panel" aria-label="사진 영역">
          <span>Photo</span>
          <strong>YD</strong>
          <p>프로필 사진 연결 예정</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
