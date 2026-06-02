export type HeroContent = {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  keywords: string[];
};

export type ProfileSummaryContent = {
  headline: string;
  lines: string[];
  strengths: string[];
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

export type WorkCaseContent = {
  title: string;
  period: string;
  role: string;
  summary: string;
  details: string[];
  keywords: string[];
};

export type SkillGroupContent = {
  title: string;
  items: string[];
};

export type ContactContent = {
  formUrl?: string;
  email?: string;
};

export type PortfolioContent = {
  siteTitle: string;
  hero: HeroContent;
  profileSummary: ProfileSummaryContent;
  selfIntroduction: string[];
  experiences: ExperienceContent[];
  workCases: WorkCaseContent[];
  skillGroups: SkillGroupContent[];
  contact: ContactContent;
};
