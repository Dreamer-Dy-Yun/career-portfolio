export type Profile = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location?: string;
  email?: string;
  links?: {
    label: string;
    url: string;
  }[];
  coreStrengths: {
    title: string;
    description: string;
  }[];
  resumeAvailable?: boolean;
  resumeUrl?: string;
};

export const profile: Profile = {
  name: 'Yun Dae-Young',
  title: 'Backend / Data Pipeline / System Design Engineer',
  tagline: 'Turning undefined operations into structured, verifiable systems.',
  summary:
    'I design practical systems that transform fragmented business operations, Excel data, OCR results, API responses, and manual workflows into structured, maintainable, and verifiable data flows.',
  location: 'South Korea',
  email: 'contact@example.com',
  links: [],
  resumeAvailable: false,
  resumeUrl: '/resume.pdf',
  coreStrengths: [
    {
      title: 'Data Pipeline Design',
      description:
        'Designs data flows that convert raw, inconsistent operational data into structured and reusable forms.',
    },
    {
      title: 'Backend / API Integration',
      description:
        'Builds API-centered workflows that reduce dependency on fragile manual or UI-based operations.',
    },
    {
      title: 'PostgreSQL Data Modeling',
      description:
        'Designs relational structures for consistency, traceability, and operational use.',
    },
    {
      title: 'OCR / LLM Workflow Design',
      description:
        'Structures AI extraction results so they can be validated, corrected, and used in business workflows.',
    },
    {
      title: 'Process Automation Architecture',
      description: 'Treats automation as system design, not just task scripting.',
    },
    {
      title: 'System Refactoring',
      description: 'Reorganizes scattered logic into reusable modules and clearer execution flows.',
    },
  ],
};
