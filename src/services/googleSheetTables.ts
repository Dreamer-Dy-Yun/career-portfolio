import type { PortfolioContent } from '../data/types';

type SheetRecord = Record<string, string>;

const sheetNames = {
  meta: 'Meta',
  hero: 'Hero',
  profileSummary: 'ProfileSummary',
  selfIntroduction: 'SelfIntroduction',
  experiences: 'Experiences',
  workCases: 'WorkCases',
  skillGroups: 'SkillGroups',
  contact: 'Contact',
} as const;

const parseCsv = (text: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let isQuoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const nextCharacter = text[index + 1];

    if (character === '"' && isQuoted && nextCharacter === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      isQuoted = !isQuoted;
    } else if (character === ',' && !isQuoted) {
      row.push(cell);
      cell = '';
    } else if ((character === '\n' || character === '\r') && !isQuoted) {
      if (character === '\r' && nextCharacter === '\n') {
        index += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += character;
    }
  }

  row.push(cell);
  rows.push(row);

  return rows.filter((cells) => cells.some((value) => value.trim()));
};

const rowsToRecords = (rows: string[][]): SheetRecord[] => {
  const [headers = [], ...bodyRows] = rows;
  const normalizedHeaders = headers.map((header) => header.trim());

  return bodyRows.map((cells) =>
    normalizedHeaders.reduce<SheetRecord>((record, header, index) => {
      record[header] = cells[index]?.trim() ?? '';
      return record;
    }, {}),
  );
};

const fetchSheetRecords = async (sheetId: string, sheetName: string): Promise<SheetRecord[]> => {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load sheet: ${sheetName}`);
  }

  return rowsToRecords(parseCsv(await response.text()));
};

const fetchOptionalSheetRecords = async (sheetId: string, sheetName: string): Promise<SheetRecord[]> => {
  try {
    return await fetchSheetRecords(sheetId, sheetName);
  } catch {
    return [];
  }
};

const splitList = (value = '') => {
  return value
    .split(/\n|\|/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const valueByKey = (records: SheetRecord[], key: string) => {
  return records.find((record) => record.key === key || record.field === key)?.value ?? '';
};

export const loadPortfolioContentFromGoogleSheet = async (sheetId: string): Promise<PortfolioContent> => {
  const [meta, hero, profileSummary, selfIntroduction, experiences, workCases, skillGroups, contact] = await Promise.all([
    fetchSheetRecords(sheetId, sheetNames.meta),
    fetchSheetRecords(sheetId, sheetNames.hero),
    fetchSheetRecords(sheetId, sheetNames.profileSummary),
    fetchSheetRecords(sheetId, sheetNames.selfIntroduction),
    fetchSheetRecords(sheetId, sheetNames.experiences),
    fetchSheetRecords(sheetId, sheetNames.workCases),
    fetchSheetRecords(sheetId, sheetNames.skillGroups),
    fetchOptionalSheetRecords(sheetId, sheetNames.contact),
  ]);

  return {
    siteTitle: valueByKey(meta, 'siteTitle'),
    hero: {
      name: valueByKey(hero, 'name'),
      title: valueByKey(hero, 'title'),
      subtitle: valueByKey(hero, 'subtitle'),
      summary: valueByKey(hero, 'summary'),
      keywords: splitList(valueByKey(hero, 'keywords')),
    },
    profileSummary: {
      headline: valueByKey(profileSummary, 'headline'),
      lines: splitList(valueByKey(profileSummary, 'lines')),
      strengths: splitList(valueByKey(profileSummary, 'strengths')),
    },
    selfIntroduction: selfIntroduction.map((row) => row.paragraph).filter(Boolean),
    experiences: experiences.map((experience) => ({
      company: experience.company,
      period: experience.period,
      role: experience.role,
      entryType: experience.entryType === 'milestone' ? 'milestone' : undefined,
      startDate: experience.startDate,
      endDate: experience.endDate,
      summary: experience.summary,
      details: splitList(experience.details),
      tags: splitList(experience.tags),
    })),
    workCases: workCases.map((workCase) => ({
      company: workCase.company,
      title: workCase.title,
      period: workCase.period,
      role: workCase.role,
      summary: workCase.summary,
      details: splitList(workCase.details),
      keywords: splitList(workCase.keywords),
    })),
    skillGroups: skillGroups.map((group) => ({
      title: group.title,
      items: splitList(group.items),
    })),
    contact: {
      formUrl: valueByKey(contact, 'formUrl'),
      email: valueByKey(contact, 'email'),
    },
  };
};
