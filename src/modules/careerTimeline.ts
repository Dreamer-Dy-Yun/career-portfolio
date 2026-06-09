import type { ExperienceContent, ExperienceEntryType } from '../data/types';

export type CareerTimelineBranchItem = {
  id: string;
  company: string;
  period: string;
  role: string;
  entryType: ExperienceEntryType;
  summary: string;
  details: string[];
  tags: string[];
};

export type CareerTimelineItem = CareerTimelineBranchItem & {
  isConcurrent: boolean;
  branchItems: CareerTimelineBranchItem[];
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

const getRangeDuration = (range: { start: number; end: number }) => {
  return range.end - range.start;
};

const isContainedRange = (child: { start: number; end: number }, parent: { start: number; end: number }) => {
  return child.start >= parent.start && child.end <= parent.end && getRangeDuration(child) < getRangeDuration(parent);
};

const createBranchItem = (experience: ExperienceContent, index: number): CareerTimelineBranchItem => ({
  id: buildTimelineId(experience, index),
  company: experience.company,
  period: experience.period,
  role: experience.role,
  entryType: experience.entryType ?? 'period',
  summary: experience.summary?.trim() || buildFallbackSummary(experience),
  details: experience.details ?? [],
  tags: experience.tags ?? [],
});

export const createCareerTimelineItems = (experiences: ExperienceContent[]): CareerTimelineItem[] => {
  const rangedExperiences = experiences
    .map((experience, index) => ({
      experience,
      index,
      range: getDateRange(experience),
    }))
    .filter((entry): entry is { experience: ExperienceContent; index: number; range: { start: number; end: number } } =>
      Boolean(entry.range),
    );

  const parentIndexByChildIndex = new Map<number, number>();

  rangedExperiences.forEach((child) => {
    const parent = rangedExperiences
      .filter((candidate) => candidate.index !== child.index && isContainedRange(child.range, candidate.range))
      .sort((left, right) => getRangeDuration(left.range) - getRangeDuration(right.range))[0];

    if (parent) {
      parentIndexByChildIndex.set(child.index, parent.index);
    }
  });

  const mainExperiences = experiences.filter((_, index) => !parentIndexByChildIndex.has(index));

  return experiences
    .map((experience, index) => {
      if (parentIndexByChildIndex.has(index)) {
        return null;
      }

      const branchItems = experiences
        .map((branchExperience, branchIndex) =>
          parentIndexByChildIndex.get(branchIndex) === index ? createBranchItem(branchExperience, branchIndex) : null,
        )
        .filter((item): item is CareerTimelineBranchItem => Boolean(item));

      return {
        ...createBranchItem(experience, index),
        isConcurrent: hasOverlap(experience, mainExperiences),
        branchItems,
      };
    })
    .filter((item): item is CareerTimelineItem => Boolean(item));
};
