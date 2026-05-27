import { fallbackContent } from '../data/portfolioContent';
import type { PortfolioContent } from '../data/types';

type ContentLoadResult = {
  content: PortfolioContent;
  source: 'local' | 'google-sheet';
};

const contentUrl = import.meta.env.VITE_GOOGLE_SHEET_JSON_URL?.trim() ?? '';

const isPortfolioContent = (value: unknown): value is PortfolioContent => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<PortfolioContent>;

  return Boolean(
    candidate.hero &&
      Array.isArray(candidate.roles) &&
      Array.isArray(candidate.projects) &&
      Array.isArray(candidate.experiences) &&
      Array.isArray(candidate.skillGroups) &&
      candidate.contact,
  );
};

export const loadPortfolioContent = async (): Promise<ContentLoadResult> => {
  if (!contentUrl) {
    return { content: fallbackContent, source: 'local' };
  }

  try {
    const response = await fetch(contentUrl);

    if (!response.ok) {
      return { content: fallbackContent, source: 'local' };
    }

    const data = await response.json();

    if (!isPortfolioContent(data)) {
      return { content: fallbackContent, source: 'local' };
    }

    return { content: data, source: 'google-sheet' };
  } catch {
    return { content: fallbackContent, source: 'local' };
  }
};
