import { profile } from '../data/profile';
import { JobTarget } from '../data/jobTargets';

type HeroProps = {
  selectedJobTarget?: JobTarget | null;
};

const Hero = ({ selectedJobTarget }: HeroProps) => {
  const title = selectedJobTarget?.headline ?? profile.title;
  const summary = selectedJobTarget?.summary ?? profile.summary;

  return (
    <section className="hero section" id="hero">
      <p className="hero-kicker">Career Portfolio</p>
      <h1>{profile.name}</h1>
      <p className="hero-title">{title}</p>
      <p className="hero-description">{profile.tagline}</p>
      <p className="hero-summary">{summary}</p>
    </section>
  );
};

export default Hero;
