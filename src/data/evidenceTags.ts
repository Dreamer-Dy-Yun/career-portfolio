export type EvidenceTag = {
  id: string;
  label: string;
  description: string;
  relatedRolePerspectives: string[];
};

export const evidenceTags: EvidenceTag[] = [
  {
    id: 'postgresql-data-modeling',
    label: 'PostgreSQL Data Modeling',
    description:
      'Designed relational structures and schema-oriented data flows for operational systems.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
  },
  {
    id: 'api-integration',
    label: 'API Integration',
    description:
      'Worked with API-centered request/response handling and structured integration logic.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'Automation Refactoring', 'System Design'],
  },
  {
    id: 'ocr-llm-workflow',
    label: 'OCR / LLM Workflow',
    description: 'Structured OCR and LLM outputs into validation-ready business data.',
    relatedRolePerspectives: ['AI / OCR / LLM', 'Backend / Data Pipeline', 'System Design'],
  },
  {
    id: 'data-pipeline',
    label: 'Data Pipeline',
    description:
      'Converted fragmented operational inputs into structured and reusable data flows.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
  },
  {
    id: 'system-design',
    label: 'System Design',
    description:
      'Defined inputs, outputs, states, validation rules, and execution flows before implementation.',
    relatedRolePerspectives: ['System Design'],
  },
  {
    id: 'workflow-refactoring',
    label: 'Workflow Refactoring',
    description:
      'Reorganized fragile or scattered workflows into maintainable execution structures.',
    relatedRolePerspectives: ['Automation Refactoring', 'System Design'],
  },
  {
    id: 'qa-validation',
    label: 'QA / Validation',
    description:
      'Applied inspection, testing, validation, and quality-control thinking to implementation work.',
    relatedRolePerspectives: ['System Design', 'Backend / Data Pipeline'],
  },
  {
    id: 'visualization',
    label: 'Visualization',
    description:
      'Prepared structured and normalized data for clearer visual comparison and review.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
  },
];
