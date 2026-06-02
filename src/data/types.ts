export type HeroContent = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
};

export type ExperienceContent = {
  company: string;
  period: string;
  role: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  details?: string[];
  tags?: string[];
};

export type ContactContent = {
  formUrl?: string;
  email?: string;
};

export type PortfolioContent = {
  siteTitle: string;
  hero: HeroContent;
  experiences: ExperienceContent[];
  contact: ContactContent;
};
