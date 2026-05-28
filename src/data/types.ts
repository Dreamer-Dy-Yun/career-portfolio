export type HeroContent = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  chips: string[];
};

export type RoleContent = {
  title: string;
  description: string;
  focus: string[];
};

export type OperatingPrincipleContent = {
  title: string;
  description: string;
};

export type ProjectContent = {
  title: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  constraints: string[];
  decisions: string[];
  deliverables: string[];
  meaning: string;
  stack: string[];
};

export type ExperienceContent = {
  company: string;
  period: string;
  role: string;
};

export type SkillItem = string;

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export type ContactContent = {
  formUrl?: string;
  email?: string;
  note: string;
};

export type PortfolioContent = {
  siteTitle: string;
  hero: HeroContent;
  roles: RoleContent[];
  operatingPrinciples?: OperatingPrincipleContent[];
  projects: ProjectContent[];
  experiences: ExperienceContent[];
  skillGroups: SkillGroup[];
  contact: ContactContent;
};
