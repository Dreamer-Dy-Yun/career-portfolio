export type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  techStack?: string[];
  functionHighlights?: {
    label: string;
    items: string[];
  }[];
  evidenceTagIds?: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Mining5000',
    period: '2023.11 - Present',
    role: 'PM / PL / Developer',
    summary:
      'Led and implemented backend, database, automation, API integration, and operational system design tasks across multiple business projects.',
    highlights: [
      'Designed data-oriented business workflows.',
      'Built API and database integration structures.',
      'Worked across planning, implementation, testing, and stakeholder communication.',
    ],
    functionHighlights: [
      {
        label: 'Backend / Data',
        items: [
          'Designed database-backed workflows for operational business data.',
          'Worked on API integration and structured data processing.',
        ],
      },
      {
        label: 'System Design',
        items: [
          'Defined processing flows across planning, implementation, testing, and validation.',
          'Structured unclear requirements into implementable units.',
        ],
      },
      {
        label: 'Automation / Operations',
        items: ['Refactored automation-oriented work toward maintainable execution structures.'],
      },
    ],
    evidenceTagIds: [
      'data-pipeline',
      'postgresql-data-modeling',
      'api-integration',
      'ocr-llm-workflow',
      'system-design',
      'workflow-refactoring',
    ],
  },
  {
    company: 'JnC Systems',
    period: '2023.05 - 2023.10',
    role: 'PM / PL / Developer / QA',
    summary:
      'Handled project management, implementation, QA, and technical coordination across automation-related projects.',
    highlights: [
      'Supported project execution across planning, development, testing, and delivery.',
      'Worked on automation-related implementation and quality control.',
    ],
    functionHighlights: [
      {
        label: 'Communication',
        items: [
          'Coordinated planning, implementation, testing, and delivery across project participants.',
        ],
      },
      {
        label: 'QA / Testing',
        items: ['Supported quality checks across implementation and delivery stages.'],
      },
    ],
    evidenceTagIds: ['workflow-refactoring', 'qa-validation', 'system-design'],
  },
  {
    company: 'DK G&C',
    period: '2021.09 - 2023.04',
    role: 'PM / PL / Developer / QA / Tester',
    summary: 'Worked on automation, project delivery, testing, and operational process improvement.',
    highlights: [
      'Participated in delivery, testing, and process automation tasks.',
      'Supported operational improvement through structured automation.',
    ],
    functionHighlights: [
      {
        label: 'System Design',
        items: [
          'Organized delivery and testing flow into repeatable execution steps.',
          'Contributed to operational process improvement through structured work design.',
        ],
      },
      {
        label: 'QA / Testing',
        items: ['Handled testing tasks tied to operational process changes.'],
      },
    ],
    evidenceTagIds: ['workflow-refactoring', 'qa-validation', 'system-design'],
  },
  {
    company: 'Transcosmos Japan',
    period: '2018.10 - 2021.07',
    role: 'System Engineer / ITOS',
    summary: 'Worked in Japan-based IT operations and system engineering environment.',
    highlights: [
      'Delivered work under Japanese business and technical communication context.',
      'Built practical experience in operational IT environments.',
    ],
    functionHighlights: [
      {
        label: 'Communication',
        items: ['Worked in a Japanese business and technical communication environment.'],
      },
      {
        label: 'Automation / Operations',
        items: ['Built practical experience in operational IT environments.'],
      },
    ],
    evidenceTagIds: ['qa-validation', 'system-design'],
  },
  {
    company: 'KOHTECH',
    period: '2014.10 - 2015.10',
    role: 'QA',
    summary: 'Performed QA work in a manufacturing-related environment.',
    highlights: [
      'Worked with inspection, defect tracking, and quality control processes.',
    ],
    functionHighlights: [
      {
        label: 'QA / Testing',
        items: ['Worked with inspection, defect tracking, and quality control processes.'],
      },
    ],
    evidenceTagIds: ['qa-validation'],
  },
];
