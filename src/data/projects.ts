export type Project = {
  title: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  keywords: string[];
  category: string;
  rolePerspectives: string[];
  evidence?: string[];
  fitByTarget?: Record<string, string>;
  evidenceTagIds: string[];
  caseStudy?: {
    context: string;
    constraints: string[];
    decisions: {
      title: string;
      description: string;
    }[];
    result: string[];
  };
  decisionTags?: string[];
};

export const projects: Project[] = [
  {
    title: 'YIDO Dutyfree B2C Settlement System',
    period: '2025',
    role: 'Backend / DB / Frontend / System Design',
    summary:
      'A duty-free settlement workflow system integrating EDI Excel uploads, receipt images, passport images, OCR/LLM parsing, validation, and mapping.',
    problem:
      'The business process involved heterogeneous Excel formats, unstructured receipt/passport images, OCR uncertainty, and manual matching work.',
    solution:
      'Designed relational schema, parsing pipeline, OCR/LLM result structure, validation flow, and React-based image verification UI.',
    impact: [
      'Converted fragmented operational data into structured workflow data.',
      'Reduced manual matching burden through rule-based mapping.',
      'Prepared tenant-aware usage and LLM token tracking.',
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'OCR', 'LLM API'],
    keywords: ['Data Pipeline', 'OCR', 'LLM', 'Settlement', 'PostgreSQL'],
    category: 'Data Pipeline',
    rolePerspectives: ['Backend / Data Pipeline', 'System Design', 'AI / OCR / LLM'],
    evidence: [
      'Designed receipt/passport/EDI data flow',
      'Structured OCR/LLM parsing result format',
      'Built validation-oriented image verification UI',
      'Prepared usage and token tracking structure',
    ],
    fitByTarget: {
      'backend-data':
        'Shows backend/data pipeline fit through EDI parsing, OCR result handling, relational schema design, and workflow-oriented data mapping.',
      'system-design':
        'Shows system design fit through structuring unclear settlement operations into validation, mapping, and verification flows.',
      'ai-ocr-llm':
        'Shows AI/OCR workflow fit through receipt/passport image parsing, field validation, and human verification design.',
    },
    evidenceTagIds: [
      'data-pipeline',
      'postgresql-data-modeling',
      'ocr-llm-workflow',
      'system-design',
      'qa-validation',
    ],
    decisionTags: [
      'Structured mapping',
      'Validation-first design',
      'Traceable data flow',
      'Human verification',
    ],
    caseStudy: {
      context:
        'A business workflow involving duty-free EDI Excel uploads, receipt images, passport images, OCR/LLM parsing, validation, and mapping needed to be structured into a maintainable settlement process.',
      constraints: [
        'Source data came from different formats including Excel files, images, OCR results, and manually verified records.',
        'OCR and LLM outputs required validation before they could be trusted as business data.',
        'Receipt, passport, and EDI records needed to be connected without assuming perfect input quality.',
        'The system needed to support future usage tracking and LLM token aggregation.',
      ],
      decisions: [
        {
          title: 'Separate raw inputs from verified records',
          description:
            'Kept raw images, parsed OCR/LLM outputs, and human-verified data conceptually separate so each stage could be traced and corrected.',
        },
        {
          title: 'Use structured mapping flow',
          description:
            'Designed the workflow around receipt-passport-EDI mapping rather than treating image parsing as an isolated task.',
        },
        {
          title: 'Prepare validation-first UI',
          description:
            'Built the image verification flow around review and correction instead of assuming automatic extraction would always be correct.',
        },
      ],
      result: [
        'The project data flow became easier to reason about across image upload, OCR/LLM parsing, validation, and settlement mapping.',
        'The design made human verification and later correction workflows explicit.',
        'The structure prepared the system for usage tracking and token-based operational monitoring.',
      ],
    },
  },
  {
    title: 'PostgreSQL Multi-schema DB Manager',
    period: '2025',
    role: 'Backend / Database Architecture',
    summary:
      'An asynchronous PostgreSQL utility layer designed for schema management, table creation, batch upsert/update, and tenant-style data separation.',
    problem: 'Repeated database operations needed to be reusable across projects without hardcoding schema/table behavior.',
    solution:
      'Built reusable async database manager using SQLAlchemy and asyncpg with schema-scoped execution, batch operations, and metadata-based helpers.',
    impact: [
      'Improved database operation reuse.',
      'Reduced duplicated DB handling logic.',
      'Supported schema-level separation.',
    ],
    techStack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'asyncpg'],
    keywords: ['Database', 'Async', 'Schema', 'Reusability'],
    category: 'Backend / Database',
    rolePerspectives: ['Backend / Data Pipeline', 'System Design'],
    evidence: [
      'Implemented async session handling',
      'Designed schema-scoped execution pattern',
      'Added reusable batch upsert/update helpers',
      'Supported tenant-style schema separation',
    ],
    fitByTarget: {
      'backend-data':
        'Shows backend/database fit through reusable async database operations, schema-scoped execution, and batch upsert/update handling.',
      'system-design':
        'Shows system design fit through generalizing repeated database operations into reusable execution patterns.',
    },
    evidenceTagIds: ['postgresql-data-modeling', 'data-pipeline', 'system-design'],
    decisionTags: ['Schema-scoped execution', 'Batch database operations', 'Traceable data flow'],
    caseStudy: {
      context:
        'Repeated PostgreSQL operations across schema management, table creation, batch upsert/update, and tenant-style separation needed to be reusable instead of being handled as one-off database scripts.',
      constraints: [
        'Database logic had to support schema-scoped execution.',
        'Repeated insert/update patterns needed reusable handling.',
        'The utility layer needed to work with asynchronous SQLAlchemy and asyncpg.',
        'The design had to avoid hardcoding a single table or schema assumption.',
      ],
      decisions: [
        {
          title: 'Use schema-scoped execution',
          description:
            'Designed database operations so schema context could be injected and controlled during execution.',
        },
        {
          title: 'Generalize batch operations',
          description:
            'Built reusable helpers for batch upsert and update instead of repeating project-specific SQL logic.',
        },
        {
          title: 'Keep metadata-driven behavior',
          description:
            'Used table and constraint metadata to reduce hardcoded assumptions in database operations.',
        },
      ],
      result: [
        'Repeated database operations became easier to reuse across projects.',
        'Schema-level separation became easier to manage.',
        'The design reduced duplicated database handling logic.',
      ],
    },
  },
  {
    title: 'OCR / LLM Document Parsing Pipeline',
    period: '2025',
    role: 'AI Workflow / Data Structuring',
    summary:
      'A document parsing workflow for converting passport and receipt images into structured fields with coordinates, masking rules, and validation metadata.',
    problem: 'OCR results are uncertain and require structured validation before business use.',
    solution:
      'Designed JSON structures for parsed fields, coordinate handling, image/result hashing, and human verification workflow.',
    impact: [
      'Made OCR output verifiable.',
      'Improved traceability of extracted fields.',
      'Separated raw image management from structured recognition results.',
    ],
    techStack: ['Python', 'OCR', 'LLM API', 'JSON', 'PostgreSQL'],
    keywords: ['OCR', 'LLM', 'Validation', 'Data Structuring'],
    category: 'AI / OCR / LLM',
    rolePerspectives: ['AI / OCR / LLM', 'System Design', 'Backend / Data Pipeline'],
    evidence: [
      'Defined field-level extraction structure',
      'Designed coordinate and masking rule handling',
      'Separated raw image storage from parsed result records',
      'Added validation-ready metadata concept',
    ],
    fitByTarget: {
      'ai-ocr-llm':
        'Shows AI/OCR workflow fit through structured extraction formats, coordinate handling, masking rules, and validation metadata.',
      'system-design':
        'Shows system design fit through separating raw image handling, parsed results, and validation-ready metadata.',
      'backend-data':
        'Shows backend/data pipeline fit by converting unstructured OCR results into database-ready structured records.',
    },
    evidenceTagIds: [
      'ocr-llm-workflow',
      'data-pipeline',
      'system-design',
      'qa-validation',
    ],
    decisionTags: [
      'Provisional AI output',
      'Validation-first design',
      'Human verification',
      'Traceable data flow',
    ],
    caseStudy: {
      context:
        'Passport and receipt images needed to be converted into structured fields that could be reviewed, corrected, and used in downstream business workflows.',
      constraints: [
        'OCR output could contain uncertainty and field-level errors.',
        'Masked values needed to preserve visible character structure.',
        'Coordinate information needed to remain usable even when images were resized or displayed differently.',
        'Raw image management and parsed result management needed to remain separate.',
      ],
      decisions: [
        {
          title: 'Treat AI output as provisional data',
          description:
            'Designed OCR/LLM extraction results as validation-ready data rather than final trusted records.',
        },
        {
          title: 'Preserve coordinate and masking metadata',
          description:
            'Included coordinate and masking-related structure so extracted fields could be reviewed against the source image.',
        },
        {
          title: 'Separate raw and parsed layers',
          description:
            'Kept image files and parsed field records conceptually separate to improve traceability and correction handling.',
        },
      ],
      result: [
        'OCR/LLM output became easier to validate and correct.',
        'The data structure supported review workflows instead of only extraction.',
        'The design improved traceability from source image to parsed field.',
      ],
    },
  },
  {
    title: 'ICT Data Extractor / Visual Normalization',
    period: '2025',
    role: 'Data Engineering / Visualization',
    summary:
      'A parser and normalization workflow for ICT inspection data, separating raw CSV data, specification values, measured values, and visual normalization metrics.',
    problem: 'Measurement data had different ranges, units, and specification boundaries, making direct comparison difficult.',
    solution:
      'Built extraction and normalization logic based on specification-centered scaling rather than mean/std-based scaling.',
    impact: [
      'Enabled consistent visual comparison across heterogeneous measurement points.',
      'Prepared data for high-dimensional analysis and visualization.',
    ],
    techStack: ['Python', 'Pandas', 'PostgreSQL', 'Data Visualization'],
    keywords: ['Data Engineering', 'Normalization', 'Visualization'],
    category: 'Data Visualization',
    rolePerspectives: ['Backend / Data Pipeline', 'System Design'],
    evidence: [
      'Parsed raw CSV inspection data',
      'Separated measured values and specification values',
      'Designed specification-centered normalization',
      'Prepared data for visual comparison',
    ],
    fitByTarget: {
      'backend-data':
        'Shows data pipeline fit through CSV parsing, specification separation, and normalized measurement data preparation.',
      'system-design':
        'Shows system design fit through defining a consistent normalization model for heterogeneous measurement points.',
    },
    evidenceTagIds: ['data-pipeline', 'visualization', 'qa-validation', 'system-design'],
    decisionTags: ['Specification-centered normalization', 'Traceable data flow', 'Validation-first design'],
    caseStudy: {
      context:
        'ICT inspection CSV data contained many measurement points with different units, ranges, and specification boundaries, making direct comparison difficult.',
      constraints: [
        'Raw measurement data and specification data needed to be separated.',
        'Mean/std-based normalization was not suitable for the intended visual comparison.',
        'Measurement points needed a consistent visual scale despite different units and ranges.',
        'The output needed to support later visualization and high-dimensional comparison.',
      ],
      decisions: [
        {
          title: 'Separate measured values and specification values',
          description:
            'Parsed and represented measurement data separately from specification boundaries to keep the normalization logic explicit.',
        },
        {
          title: 'Use specification-centered normalization',
          description:
            'Used LSL/USL-centered scaling so visual comparison remained tied to domain limits rather than distribution statistics.',
        },
        {
          title: 'Prepare visualization-ready output',
          description:
            'Structured the normalized data so it could be used directly for visual review and comparison.',
        },
      ],
      result: [
        'Heterogeneous measurement points became easier to compare visually.',
        'The normalization model remained tied to domain specifications.',
        'The output became more suitable for downstream visualization.',
      ],
    },
  },
];
