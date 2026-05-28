import { fallbackContent } from '../data/portfolioContent';
import type { PortfolioContent, ProjectContent } from '../data/types';

type ContentLoadResult = {
  content: PortfolioContent;
  source: 'local' | 'google-sheet';
};

const contentUrl = import.meta.env.VITE_GOOGLE_SHEET_JSON_URL?.trim() ?? '';

const hasProjectShape = (project: Partial<ProjectContent>) => {
  return Boolean(
    typeof project.title === 'string' &&
      typeof project.period === 'string' &&
      typeof project.role === 'string' &&
      typeof project.summary === 'string' &&
      typeof project.problem === 'string' &&
      Array.isArray(project.constraints) &&
      Array.isArray(project.decisions) &&
      Array.isArray(project.deliverables) &&
      typeof project.meaning === 'string' &&
      Array.isArray(project.stack),
  );
};

const isPortfolioContent = (value: unknown): value is PortfolioContent => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<PortfolioContent>;

  return Boolean(
    candidate.hero &&
      Array.isArray(candidate.roles) &&
      Array.isArray(candidate.projects) &&
      candidate.projects.every((project) => hasProjectShape(project)) &&
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