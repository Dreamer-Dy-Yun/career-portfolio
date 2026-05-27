import type { PortfolioContent } from './types';

export const fallbackContent: PortfolioContent = {
  siteTitle: 'Yun Dae-Young Portfolio',
  hero: {
    name: 'Yun Dae-Young',
    title: 'Business System Designer / Backend & Data Pipeline Engineer',
    subtitle: '불명확한 업무 요구, 흩어진 운영 데이터, 외부 시스템 제약을 분석해 실행 가능한 시스템 구조로 전환하는 개발자',
    description:
      '면세점 정산, OCR/LLM 문서 처리, PostgreSQL 기반 데이터 모델링, ICT 검사 데이터 정규화 작업에서 입력, 검증 상태, 책임 경계, 운영 흐름을 먼저 정의하고 백엔드, DB, API, UI로 연결해 왔습니다.',
    chips: ['Business System Design', 'Data Workflow', 'PostgreSQL', 'API Integration', 'OCR / LLM'],
  },
  roles: [
    {
      title: 'Backend / Data Workflow Engineering',
      description: 'Excel, API 응답, OCR 결과, 수기 확인값처럼 서로 다른 운영 입력을 DB/API/배치 흐름으로 구조화합니다.',
      focus: ['Data boundary', 'PostgreSQL modeling', 'API and OCR data flow'],
    },
    {
      title: 'Business System Analysis & Design',
      description: '요구가 불명확한 업무를 입력, 출력, 상태, 권한, 책임 경계로 분해하고 구현 가능한 시스템 단위로 재조립합니다.',
      focus: ['Requirement structuring', 'Responsibility boundary', 'Validation state'],
    },
    {
      title: 'Human-in-the-loop AI Data Workflow',
      description: 'OCR/LLM 결과를 최종값으로 보지 않고 원본, 추출값, 검증값, 수정 흐름이 분리된 업무 데이터로 다룹니다.',
      focus: ['Raw / parsed / verified data', 'Coordinate and masking metadata', 'Human verification'],
    },
  ],
  operatingPrinciples: [
    {
      title: 'Define the boundary first',
      description: '요구사항이 불명확할수록 입력, 출력, 상태, 책임 경계를 먼저 정의합니다.',
    },
    {
      title: 'Separate raw, parsed, verified data',
      description: '원본 데이터, AI/자동 추출값, 사람이 검증한 값을 분리해 추적과 수정을 가능하게 둡니다.',
    },
    {
      title: 'Prefer API/DB workflow over UI automation',
      description: '화면 자동화에 바로 묶기보다 API, DB, 데이터 흐름 기반 재구성을 우선 검토합니다.',
    },
    {
      title: 'Generalize repeated exceptions',
      description: '반복되는 예외 처리는 하드코딩보다 재사용 가능한 처리 구조로 정리합니다.',
    },
    {
      title: 'Leave operational decisions visible',
      description: '운영 리스크와 책임 경계는 상태값, 문서, 검증 흐름으로 남깁니다.',
    },
  ],
  projects: [
    {
      title: 'YIDO Dutyfree B2C Settlement System',
      period: '2025',
      role: 'Business System Design / Backend / DB / Frontend',
      summary:
        '면세점 정산 업무에서 EDI Excel, 영수증/여권 이미지, OCR/LLM 추출값, 수기 검증값이 분리되어 발생하던 데이터 단절을 정리하고, 검증 전/후 데이터와 매핑 흐름을 분리해 추적 가능한 정산 시스템 구조로 설계·구현했습니다.',
      inputs: ['EDI Excel', '영수증/여권 이미지', 'OCR/LLM 추출값', '수기 검증값', '정산 매핑 기준'],
      decisions: [
        '원본 이미지, AI 추출값, 검증 완료 데이터를 분리',
        '영수증-여권-EDI 매핑을 중심 흐름으로 설계',
        '자동 추출 결과를 바로 확정하지 않고 검증 UI에서 수정 가능하게 구성',
        '사용량과 LLM 토큰 추적이 가능한 데이터 구조 준비',
      ],
      output: ['추적 가능한 정산 데이터 흐름', '검증 전/후 상태가 분리된 업무 구조', '이미지 확인과 데이터 매핑을 연결한 운영 UI'],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'OCR', 'LLM API'],
    },
    {
      title: 'PostgreSQL Multi-schema DB Manager',
      period: '2025',
      role: 'Backend / Database Architecture',
      summary:
        '반복되는 PostgreSQL schema 관리, table 생성, batch upsert/update 작업을 프로젝트별 일회성 SQL이 아니라 재사용 가능한 비동기 DB 실행 구조로 정리했습니다.',
      inputs: ['Schema name', 'Table metadata', 'Batch records', 'Conflict constraints'],
      decisions: ['Schema-scoped execution', 'Reusable batch upsert/update helpers', 'Metadata-driven table handling'],
      output: ['반복 DB 작업 재사용', 'Schema 단위 데이터 분리', '프로젝트별 DB 처리 로직 중복 감소'],
      stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'asyncpg'],
    },
    {
      title: 'OCR / LLM Document Parsing Pipeline',
      period: '2025',
      role: 'AI Data Workflow / Data Structuring',
      summary:
        '여권/영수증 이미지에서 나온 OCR/LLM 결과를 최종값이 아니라 검증 대상 데이터로 다루고, 좌표, 마스킹, 해시, 필드 구조를 분리해 수정 가능한 문서 처리 흐름으로 구성했습니다.',
      inputs: ['Passport image', 'Receipt image', 'OCR text', 'LLM parsed fields', 'Field coordinates'],
      decisions: ['AI 출력값을 provisional data로 취급', '좌표와 마스킹 정보를 필드 구조에 포함', '원본 이미지와 파싱 결과 레이어 분리'],
      output: ['필드 단위 검증 가능', '원본 이미지와 추출값 추적 가능', '수정 가능한 구조화 데이터'],
      stack: ['Python', 'OCR', 'LLM API', 'JSON', 'PostgreSQL'],
    },
    {
      title: 'ICT Data Extractor / Visual Normalization',
      period: '2025',
      role: 'Data Engineering / Visualization',
      summary:
        'ICT 검사 데이터의 여러 측정 포인트를 스펙 기준으로 비교 가능하게 만들기 위해, Spec/USL/LSL 중심의 시각 정규화 방식을 설계하고 CSV 파싱, DB 저장, 시각화용 데이터 변환 흐름을 구성했습니다.',
      inputs: ['Inspection CSV', 'Measured values', 'Spec / USL / LSL values'],
      decisions: ['측정값과 규격값 분리', 'Spec-centered visual normalization', 'Clamping과 scale factor 기반 출력 구조'],
      output: ['서로 다른 측정 포인트 비교 가능', '규격 기준 해석 유지', '시각화 준비 데이터 생성'],
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
      title: 'Analysis / Design',
      items: ['Requirement structuring', 'Workflow decomposition', 'Data boundary design', 'Validation state design', 'Operational risk analysis', 'Responsibility mapping'],
    },
    { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'VBA'] },
    { title: 'Backend / API', items: ['FastAPI', 'REST API', 'Async processing', 'API integration'] },
    { title: 'Database', items: ['PostgreSQL', 'SQLAlchemy', 'asyncpg', 'Schema design'] },
    { title: 'AI / OCR', items: ['OCR workflow', 'LLM API', 'JSON output', 'Result validation'] },
    { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Workflow UI'] },
    { title: 'Automation / Operations', items: ['Process automation', 'Workflow refactoring', 'QA', 'Operational documentation'] },
  ],
  contact: {
    formUrl: '',
    email: '',
    note: '문의 채널은 Google Form 또는 이메일로 연결합니다. 실제 채널이 확정되기 전에는 버튼을 표시하지 않습니다.',
  },
};