import type { PortfolioContent } from './types';

export const fallbackContent: PortfolioContent = {
  siteTitle: 'Yun Dae-Young Portfolio',
  hero: {
    name: 'Yun Dae-Young',
    title: 'Workflow & Data System Designer',
    subtitle: '복잡한 업무 흐름과 데이터를 규칙, 상태, 검증 구조로 정리하는 사람',
    description:
      '물리학, 진화심리학, 에이전트 기반 모델처럼 규칙과 상호작용이 패턴을 만드는 구조에 관심을 가져 왔습니다. 실무에서는 흩어진 업무 데이터, 외부 시스템 제약, 수기 검증 흐름을 분석해 처리 가능한 시스템 구조로 바꾸는 작업을 해왔습니다.',
    chips: ['Workflow Modeling', 'Data Boundary Design', 'Validation Flow', 'Rule-based Process', 'System Implementation'],
  },
  roles: [
    {
      title: 'Workflow & Data Modeling',
      description: '불명확한 업무 입력을 원본 데이터, 처리 상태, 검증 결과, 출력 구조로 분해합니다.',
      focus: ['input / state / output boundary', 'validation flow', 'business data modeling'],
    },
    {
      title: 'Rule-based System Design',
      description: '예외를 개별 분기로 누적하기보다, 반복 가능한 규칙과 처리 구조로 일반화합니다.',
      focus: ['reusable processing logic', 'rule / condition separation', 'workflow engine thinking'],
    },
    {
      title: 'Verification-oriented AI Workflow',
      description: 'OCR/LLM 결과를 확정값이 아니라 검증 전 데이터로 취급하고, 사람이 확인 가능한 흐름으로 연결합니다.',
      focus: ['raw / parsed / verified separation', 'coordinate and masking metadata', 'human verification loop'],
    },
    {
      title: 'Backend / DB Implementation',
      description: '설계한 업무 구조를 API, DB, 배치 처리, UI 흐름으로 구현합니다.',
      focus: ['PostgreSQL', 'FastAPI', 'batch processing', 'React workflow UI'],
    },
  ],
  operatingPrinciples: [
    {
      title: 'Input, state, output first',
      description: '불명확한 요구사항을 입력, 출력, 상태, 책임 경계로 분해합니다.',
    },
    {
      title: 'Separate verification stages',
      description: '원본 데이터, 자동 처리 결과, 사람이 검증한 값을 분리합니다.',
    },
    {
      title: 'Prefer system workflow over screen automation',
      description: '단순 화면 자동화보다 API, DB, 배치, 상태 기반 흐름으로 재구성할 수 있는지 먼저 봅니다.',
    },
    {
      title: 'Turn exceptions into rules',
      description: '예외 케이스를 개별 처리하기보다 규칙과 구조로 일반화합니다.',
    },
    {
      title: 'Make operation boundaries visible',
      description: '운영 리스크와 책임 경계를 문서와 시스템 구조에 남깁니다.',
    },
  ],
  projects: [
    {
      title: 'YIDO Dutyfree B2C Settlement System',
      period: '2025',
      role: 'Workflow Modeling / Backend / DB / UI',
      summary:
        '면세점 정산 업무에서 분리되어 있던 EDI, 이미지, AI 추출값, 수기 검증값을 추적 가능한 정산 데이터 구조로 전환했습니다.',
      problem:
        'EDI Excel, 영수증/여권 이미지, OCR/LLM 추출값, 수기 검증값이 서로 다른 흐름에 놓여 있어 정산 데이터의 연결과 검증 책임이 불명확했습니다.',
      constraints: [
        '입력 형식이 Excel, 이미지, AI 추출값, 수기 확인값으로 분리됨',
        'OCR/LLM 결과를 그대로 확정값으로 사용할 수 없음',
        '영수증-여권-EDI 매핑이 완전한 입력 품질을 전제로 할 수 없음',
      ],
      decisions: [
        '원본 입력, AI 추출값, 사람이 검증한 값을 분리',
        '영수증-여권-EDI 매핑 흐름을 중심 업무 구조로 정의',
        '검증 전/후 상태를 구분해 추적 가능한 데이터 흐름으로 설계',
      ],
      deliverables: ['PostgreSQL relational schema', 'FastAPI backend workflow', 'React image verification UI', 'usage and token tracking structure'],
      meaning:
        '단순 OCR 연동이 아니라, 불완전한 입력을 검증 가능한 정산 업무 상태로 전환한 사례입니다.',
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'OCR', 'LLM API'],
    },
    {
      title: 'PostgreSQL Multi-schema DB Manager',
      period: '2025',
      role: 'Rule-based DB Operation Design',
      summary:
        '반복되는 PostgreSQL schema 관리, table 생성, batch upsert/update 작업을 재사용 가능한 비동기 DB 실행 구조로 정리했습니다.',
      problem:
        '프로젝트마다 비슷한 DB 작업이 반복되었고, schema/table/constraint 처리 방식이 일회성 코드로 흩어질 위험이 있었습니다.',
      constraints: [
        'schema-scoped execution이 필요함',
        'batch insert/update 패턴이 반복됨',
        '특정 table이나 schema에 하드코딩하면 재사용성이 낮아짐',
      ],
      decisions: ['schema context를 실행 단위에 주입', 'batch upsert/update helper 분리', 'metadata 기반 table/constraint 처리'],
      deliverables: ['async SQLAlchemy manager', 'schema-scoped operation helpers', 'batch upsert/update helpers'],
      meaning:
        '반복되는 DB 예외 처리를 개별 SQL이 아니라 재사용 가능한 처리 규칙으로 일반화한 사례입니다.',
      stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'asyncpg'],
    },
    {
      title: 'OCR / LLM Document Parsing Pipeline',
      period: '2025',
      role: 'Verification-oriented AI Data Workflow',
      summary:
        '여권/영수증 이미지의 OCR/LLM 결과를 검증 대상 데이터로 다루고, 사람이 확인 가능한 필드 구조와 수정 흐름으로 연결했습니다.',
      problem:
        'AI 추출 결과에는 필드 오류와 불확실성이 있으므로, 업무 데이터로 쓰기 전에 원본 이미지와 대조 가능한 검증 구조가 필요했습니다.',
      constraints: [
        'OCR 결과가 항상 정확하지 않음',
        '마스킹 값은 보이는 문자 구조를 보존해야 함',
        '이미지 표시 크기가 바뀌어도 좌표 정보가 검토 가능해야 함',
      ],
      decisions: ['AI 출력값을 provisional data로 취급', '좌표와 마스킹 정보를 field metadata로 분리', '원본 이미지와 parsed result를 별도 레이어로 관리'],
      deliverables: ['field-level JSON structure', 'coordinate metadata', 'masking rule structure', 'validation-ready parsed records'],
      meaning:
        'AI 결과를 “자동 확정”하지 않고 사람이 검증 가능한 업무 데이터 흐름으로 바꾼 사례입니다.',
      stack: ['Python', 'OCR', 'LLM API', 'JSON', 'PostgreSQL'],
    },
    {
      title: 'ICT Data Extractor / Visual Normalization',
      period: '2025',
      role: 'Workflow Modeling / Data Normalization',
      summary:
        'ICT 검사 데이터의 수십~수천 개 측정 포인트를 스펙 기준으로 비교하기 위해, USL/LSL/Spec 중심의 시각 정규화 방식을 설계했습니다.',
      problem:
        '측정 포인트마다 단위, 범위, 규격 경계가 달라 단순 값 비교나 평균/표준편차 기반 정규화만으로는 검사 의미를 유지하기 어려웠습니다.',
      constraints: [
        '측정값과 규격값을 분리해서 다뤄야 함',
        'Mean/std 기반 정규화는 규격 중심 비교 목적에 맞지 않음',
        '다른 단위와 범위를 가진 측정 포인트를 같은 시각 기준으로 비교해야 함',
      ],
      decisions: [
        '측정값과 Spec/USL/LSL 값을 분리',
        'USL/LSL/Spec 중심의 visual normalization 적용',
        'Clamping, normalization constant, scale factor를 활용한 시각화용 변환 흐름 구성',
      ],
      deliverables: ['CSV parsing flow', 'normalized measurement records', 'visual comparison-ready data', 'PostgreSQL storage structure'],
      meaning:
        '단순 데이터 파싱이 아니라, 검사 데이터의 의미를 유지하면서 시각적 인지 부하를 줄이는 비교 구조를 만든 사례입니다.',
      stack: ['Python', 'Pandas', 'PostgreSQL', 'Data Visualization'],
    },
  ],
  experiences: [
    { company: 'Mining5000', period: '2023.11 - Present', role: 'PM / PL / Developer' },
    { company: 'JnC Systems', period: '2023.05 - 2023.10', role: 'PM / PL / Developer / QA' },
    { company: 'DK G&C', period: '2021.09 - 2023.04', role: 'PM / PL / Developer / QA / Tester' },
    { company: 'Transcosmos Japan', period: '2018.10 - 2021.07', role: 'System Engineer / IT Operations' },
    { company: 'KOHTECH', period: '2014.10 - 2015.10', role: 'QA' },
  ],
  skillGroups: [
    {
      title: 'Analysis / Modeling',
      items: ['Requirement structuring', 'Workflow modeling', 'Data boundary design', 'Validation state design', 'Operational risk analysis', 'Rule-based process design'],
    },
    { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'VBA'] },
    { title: 'Backend / API', items: ['FastAPI', 'REST API', 'Async processing', 'API integration'] },
    { title: 'Database', items: ['PostgreSQL', 'SQLAlchemy', 'asyncpg', 'Schema design'] },
    { title: 'AI / OCR', items: ['OCR workflow', 'LLM API', 'JSON output', 'Result validation'] },
    { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Workflow UI'] },
    { title: 'Operations', items: ['Legacy process refactoring', 'Workflow documentation', 'QA', 'Operational handoff'] },
  ],
  contact: {
    formUrl: '',
    email: '',
    note: '문의 채널은 Google Form 또는 이메일로 연결합니다. 실제 채널이 확정되기 전에는 버튼을 표시하지 않습니다.',
  },
};