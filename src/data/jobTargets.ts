export type JobTarget = {
  id: string;
  label: string;
  headline: string;
  summary: string;
  applicationSummary: string[];
  whyThisProfileFits: string[];
  preferredRolePerspectives: string[];
  preferredProjectCategories: string[];
};

export const jobTargets: JobTarget[] = [
  {
    id: 'backend-data',
    label: 'Backend / Data Pipeline',
    headline: 'Backend / Data Pipeline Engineer',
    summary:
      'Focused on backend workflows, PostgreSQL-based data modeling, API integration, and data pipelines that convert fragmented business operations into structured and verifiable systems.',
    applicationSummary: [
      'Yun Dae-Young is positioned for backend and data pipeline roles that require converting fragmented operational inputs into structured, reusable, and verifiable data flows.',
      'His experience includes PostgreSQL schema design, API integration, batch database operations, Excel data parsing, OCR result handling, and backend workflow implementation.',
      'He is most relevant where backend development is closely connected to business data modeling, operational process design, and data validation.',
    ],
    whyThisProfileFits: [
      'Experience with PostgreSQL schema design, async database handling, API integration, and data pipeline-oriented workflows.',
      'Project history includes converting Excel, OCR, API, and operational data into structured records.',
      'Suitable for backend roles where business data consistency and process reliability matter.',
    ],
    preferredRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
    preferredProjectCategories: ['Data Pipeline', 'Backend / Database', 'API Integration'],
  },
  {
    id: 'system-design',
    label: 'System Design',
    headline: 'System Design-oriented Developer',
    summary:
      'Focused on defining inputs, outputs, states, validation rules, and execution flows before implementation, especially in unclear or fragmented business environments.',
    applicationSummary: [
      'Yun Dae-Young is positioned for roles that require system-oriented thinking before implementation.',
      'His work often begins with defining inputs, outputs, states, validation rules, and execution flows in unclear or underdefined business environments.',
      'He is most relevant where the core challenge is not only coding, but structuring the problem so that implementation becomes maintainable and verifiable.',
    ],
    whyThisProfileFits: [
      'Experience defining inputs, outputs, states, validation rules, and reusable processing flows.',
      'Project history includes restructuring unclear operations into explicit system workflows.',
      'Suitable for roles where problem structuring and implementation design are both required.',
    ],
    preferredRolePerspectives: ['System Design', 'Backend / Data Pipeline'],
    preferredProjectCategories: ['Backend / Database', 'Data Pipeline', 'Data Visualization'],
  },
  {
    id: 'ai-ocr-llm',
    label: 'AI / OCR / LLM Workflow',
    headline: 'AI / OCR Workflow Engineer',
    summary:
      'Focused on making AI extraction results usable in business workflows through structured result formats, validation metadata, coordinate handling, and human verification flows.',
    applicationSummary: [
      'Yun Dae-Young is positioned for roles involving OCR, LLM, and AI-assisted data processing workflows.',
      'His experience focuses on making AI extraction results usable in business systems through structured result formats, field-level validation, coordinate handling, masking rules, and human verification flows.',
      'He is most relevant where AI output must be connected to real operational data, database records, and correction workflows.',
    ],
    whyThisProfileFits: [
      'Experience designing OCR/LLM result structures, field validation, coordinate handling, masking rules, and correction workflows.',
      'Project history connects AI extraction results to database records and business verification processes.',
      'Suitable for roles where AI output must become reliable operational data.',
    ],
    preferredRolePerspectives: ['AI / OCR / LLM', 'System Design'],
    preferredProjectCategories: ['AI / OCR / LLM', 'Data Pipeline'],
  },
  {
    id: 'automation-refactoring',
    label: 'Automation Refactoring',
    headline: 'Automation Refactoring Engineer',
    summary:
      'Focused on moving automation away from fragile task scripts toward reusable modules, API-centered logic, database-backed processes, and maintainable execution structures.',
    applicationSummary: [
      'Yun Dae-Young is positioned for roles that require improving fragile automation into maintainable system workflows.',
      'His experience includes replacing or supplementing UI-based automation with API-centered logic, database-backed processing, reusable modules, and clearer execution structures.',
      'He is most relevant where automation needs to become more reliable, traceable, and integrated with backend systems.',
    ],
    whyThisProfileFits: [
      'Experience reducing dependency on fragile UI automation by moving toward API-centered and database-backed workflows.',
      'Project history includes automation restructuring, reusable modules, and operational workflow design.',
      'Suitable for roles where automation must become maintainable, traceable, and system-integrated.',
    ],
    preferredRolePerspectives: ['Automation Refactoring', 'System Design', 'Backend / Data Pipeline'],
    preferredProjectCategories: ['API Integration', 'Data Pipeline', 'Backend / Database'],
  },
];
