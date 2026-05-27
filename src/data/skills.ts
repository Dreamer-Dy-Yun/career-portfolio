export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'C#', 'TypeScript', 'JavaScript', 'VBA', 'SQL'],
  },
  {
    category: 'Backend / API',
    items: ['FastAPI', 'REST API', 'Async programming', 'API integration', 'Data validation'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQLAlchemy', 'asyncpg', 'Schema design', 'Batch upsert/update', 'Data normalization'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'UI workflow design'],
  },
  {
    category: 'AI / OCR / LLM',
    items: ['OCR workflow design', 'LLM API integration', 'Prompt structure', 'JSON output design', 'Result validation'],
  },
  {
    category: 'Automation',
    items: ['RPA', 'Process automation', 'Workflow refactoring', 'Legacy automation migration'],
  },
  {
    category: 'Design',
    items: ['System diagrams', 'Interface planning', 'Data flow design'],
  },
];
