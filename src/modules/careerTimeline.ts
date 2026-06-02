import type { ExperienceContent } from '../data/types';

export type CareerTimelineItem = {
  id: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  details: string[];
  tags: string[];
};

const buildTimelineId = (experience: ExperienceContent, index: number) => {
  return `${index}-${experience.company}-${experience.period}`.replace(/\s+/g, '-').toLowerCase();
};

const buildFallbackSummary = (experience: ExperienceContent) => {
  return [experience.role, experience.period].filter(Boolean).join(' / ');
};

export const createCareerTimelineItems = (experiences: ExperienceContent[]): CareerTimelineItem[] => {
  return experiences.map((experience, index) => ({
    id: buildTimelineId(experience, index),
    company: experience.company,
    period: experience.period,
    role: experience.role,
    summary: experience.summary?.trim() || buildFallbackSummary(experience),
    details: experience.details ?? [],
    tags: experience.tags ?? [],
  }));
};
