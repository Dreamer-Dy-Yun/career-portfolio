import type { PortfolioContent } from '../data/types';

type SheetRecord = Record<string, string>;

const sheetNames = {
  meta: 'Meta',
  hero: 'Hero',
  roles: 'Roles',
  principles: 'OperatingPrinciples',
  projects: 'Projects',
  experiences: 'Experiences',
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
  const [meta, hero, roles, principles, projects, experiences, skillGroups, contact] = await Promise.all([
    fetchSheetRecords(sheetId, sheetNames.meta),
    fetchSheetRecords(sheetId, sheetNames.hero),
    fetchSheetRecords(sheetId, sheetNames.roles),
    fetchSheetRecords(sheetId, sheetNames.principles),
    fetchSheetRecords(sheetId, sheetNames.projects),
    fetchSheetRecords(sheetId, sheetNames.experiences),
    fetchSheetRecords(sheetId, sheetNames.skillGroups),
    fetchSheetRecords(sheetId, sheetNames.contact),
  ]);

  return {
    siteTitle: valueByKey(meta, 'siteTitle'),
    hero: {
      name: valueByKey(hero, 'name'),
      title: valueByKey(hero, 'title'),
      subtitle: valueByKey(hero, 'subtitle'),
      description: valueByKey(hero, 'description'),
      chips: splitList(valueByKey(hero, 'chips')),
    },
    roles: roles.map((role) => ({
      title: role.title,
      description: role.description,
      focus: splitList(role.focus),
    })),
    operatingPrinciples: principles.map((principle) => ({
      title: principle.title,
      description: principle.description,
    })),
    projects: projects.map((project) => ({
      title: project.title,
      period: project.period,
      role: project.role,
      summary: project.summary,
      problem: project.problem,
      constraints: splitList(project.constraints),
      decisions: splitList(project.decisions),
      deliverables: splitList(project.deliverables),
      meaning: project.meaning,
      stack: splitList(project.stack),
    })),
    experiences: experiences.map((experience) => ({
      company: experience.company,
      period: experience.period,
      role: experience.role,
    })),
    skillGroups: skillGroups.map((group) => ({
      title: group.title,
      items: splitList(group.items),
    })),
    contact: {
      formUrl: valueByKey(contact, 'formUrl'),
      email: valueByKey(contact, 'email'),
      note: valueByKey(contact, 'note'),
    },
  };
};
