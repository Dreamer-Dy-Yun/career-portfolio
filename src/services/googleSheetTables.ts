import type { PortfolioContent } from '../data/types';

type SheetRecord = Record<string, string>;

const sheetNames = {
  meta: 'Meta',
  hero: 'Hero',
  experiences: 'Experiences',
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
      continue;
    }

    if (character === '"') {
      isQuoted = !isQuoted;
      continue;
    }

    if (character === ',' && !isQuoted) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((character === '\n' || character === '\r') && !isQuoted) {
      if (character === '\r' && nextCharacter === '\n') {
        index += 1;
      }

      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    cell += character;
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
  const [meta, hero, experiences, contact] = await Promise.all([
    fetchSheetRecords(sheetId, sheetNames.meta),
    fetchSheetRecords(sheetId, sheetNames.hero),
    fetchSheetRecords(sheetId, sheetNames.experiences),
    fetchOptionalSheetRecords(sheetId, sheetNames.contact),
  ]);

  return {
    siteTitle: valueByKey(meta, 'siteTitle'),
    hero: {
      name: valueByKey(hero, 'name'),
      title: valueByKey(hero, 'title'),
      subtitle: valueByKey(hero, 'subtitle'),
      description: valueByKey(hero, 'description'),
      keywords: splitList(valueByKey(hero, 'keywords')),
    },
    experiences: experiences.map((experience) => ({
      company: experience.company,
      period: experience.period,
      role: experience.role,
      startDate: experience.startDate,
      endDate: experience.endDate,
      summary: experience.summary,
      details: splitList(experience.details),
      tags: splitList(experience.tags),
    })),
    contact: {
      formUrl: valueByKey(contact, 'formUrl'),
      email: valueByKey(contact, 'email'),
    },
  };
};
