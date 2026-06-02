import { fallbackContent } from '../data/portfolioContent';
import type { ExperienceContent, PortfolioContent, WorkCaseContent } from '../data/types';
import { loadPortfolioContentFromGoogleSheet } from './googleSheetTables';

type ContentLoadResult = {
  content: PortfolioContent;
  source: 'local' | 'google-sheet';
};

const contentUrl = import.meta.env.VITE_GOOGLE_SHEET_JSON_URL?.trim() ?? '';
const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID?.trim() ?? '';

const hasExperienceShape = (experience: Partial<ExperienceContent>) => {
  return Boolean(experience.company && experience.period && experience.role);
};

const hasWorkCaseShape = (workCase: Partial<WorkCaseContent>) => {
  return Boolean(workCase.title && workCase.period && workCase.role && workCase.summary);
};

const isPortfolioContent = (value: unknown): value is PortfolioContent => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<PortfolioContent>;

  return Boolean(
    candidate.siteTitle &&
      candidate.hero &&
      Array.isArray(candidate.hero.keywords) &&
      candidate.profileSummary &&
      Array.isArray(candidate.profileSummary.lines) &&
      Array.isArray(candidate.profileSummary.strengths) &&
      Array.isArray(candidate.selfIntroduction) &&
      Array.isArray(candidate.experiences) &&
      candidate.experiences.every((experience) => hasExperienceShape(experience)) &&
      Array.isArray(candidate.workCases) &&
      candidate.workCases.every((workCase) => hasWorkCaseShape(workCase)) &&
      Array.isArray(candidate.skillGroups) &&
      candidate.contact,
  );
};

export const loadPortfolioContent = async (): Promise<ContentLoadResult> => {
  if (contentUrl) {
    try {
      const response = await fetch(contentUrl);
      const data = response.ok ? await response.json() : null;

      if (isPortfolioContent(data)) {
        return { content: data, source: 'google-sheet' };
      }
    } catch {
      return { content: fallbackContent, source: 'local' };
    }
  }

  if (sheetId) {
    try {
      const data = await loadPortfolioContentFromGoogleSheet(sheetId);

      if (isPortfolioContent(data)) {
        return { content: data, source: 'google-sheet' };
      }
    } catch {
      return { content: fallbackContent, source: 'local' };
    }
  }

  return { content: fallbackContent, source: 'local' };
};
