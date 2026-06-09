import type { ExperienceContent } from '../data/types';

export type CareerTimelineItem = {
  id: string;
  company: string;
  period: string;
  role: string;
  isConcurrent: boolean;
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

const parseDateValue = (value?: string, fallbackEnd = false) => {
  if (!value?.trim()) {
    return null;
  }

  if (/present|current|now/i.test(value)) {
    return new Date(8640000000000000).getTime();
  }

  const normalizedValue = value.trim().replace(/\./g, '-');
  const parts = normalizedValue.split('-').map((part) => Number(part));
  const [year, month = fallbackEnd ? 12 : 1, day = fallbackEnd ? 31 : 1] = parts;

  if (!year || Number.isNaN(year)) {
    return null;
  }

  return new Date(year, month - 1, day).getTime();
};

const getDateRange = (experience: ExperienceContent) => {
  const start = parseDateValue(experience.startDate);
  const end = parseDateValue(experience.endDate, true);

  if (start === null || end === null) {
    return null;
  }

  return { start, end };
};

const hasOverlap = (current: ExperienceContent, others: ExperienceContent[]) => {
  const currentRange = getDateRange(current);

  if (!currentRange) {
    return false;
  }

  return others.some((other) => {
    if (other === current) {
      return false;
    }

    const otherRange = getDateRange(other);

    if (!otherRange) {
      return false;
    }

    return currentRange.start <= otherRange.end && otherRange.start <= currentRange.end;
  });
};

export const createCareerTimelineItems = (experiences: ExperienceContent[]): CareerTimelineItem[] => {
  return experiences.map((experience, index) => ({
    id: buildTimelineId(experience, index),
    company: experience.company,
    period: experience.period,
    role: experience.role,
    isConcurrent: hasOverlap(experience, experiences),
    summary: experience.summary?.trim() || buildFallbackSummary(experience),
    details: experience.details ?? [],
    tags: experience.tags ?? [],
  }));
};
