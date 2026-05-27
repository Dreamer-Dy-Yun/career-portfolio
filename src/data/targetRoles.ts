export type TargetRole = {
  title: string;
  description: string;
  evidence: string[];
};

export const targetRoles: TargetRole[] = [
  {
    title: 'Backend / Data Pipeline Engineer',
    description:
      'Designs and implements data-oriented backend workflows that transform raw operational inputs into structured, reusable, and verifiable data.',
    evidence: [
      'PostgreSQL schema design and batch database operations',
      'API integration and response normalization',
      'Excel, OCR, and operational data parsing workflows',
    ],
  },
  {
    title: 'System Design-oriented Developer',
    description:
      'Focuses on defining inputs, outputs, states, and execution flow before implementation.',
    evidence: [
      'Reusable database manager and schema-scoped execution',
      'Modular processing flow design',
      'Structured validation and error-handling approach',
    ],
  },
  {
    title: 'AI / OCR Workflow Engineer',
    description:
      'Builds practical workflows around OCR and LLM outputs so extracted data can be validated and used in business processes.',
    evidence: [
      'OCR field structure design',
      'Coordinate and masking rule handling',
      'Human verification workflow design',
    ],
  },
  {
    title: 'Automation Refactoring Engineer',
    description:
      'Moves automation away from fragile task scripts toward structured workflows, reusable modules, and maintainable data pipelines.',
    evidence: [
      'RPA-to-API integration direction',
      'Legacy automation workflow restructuring',
      'Process automation architecture',
    ],
  },
];
