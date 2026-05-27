import type { PortfolioContent } from './types';

export const fallbackContent: PortfolioContent = {
  siteTitle: 'Yun Dae-Young Portfolio',
  hero: {
    name: '윤대영',
    title: 'Backend / Data Pipeline / System Design',
    subtitle: '운영 데이터와 업무 흐름을 시스템으로 정리하는 개발자',
    description:
      'Excel, 이미지, OCR/LLM 결과, API 응답, 수기 확인값처럼 형태가 다른 입력을 처리 가능한 데이터 흐름으로 바꾸는 프로젝트를 해왔습니다.',
    chips: ['Backend', 'PostgreSQL', 'API Integration', 'OCR / LLM', 'Automation Refactoring'],
  },
  roles: [
    {
      title: 'Backend / Data Pipeline',
      description: '운영 입력을 API, DB, 배치 처리 흐름으로 정리하는 역할',
      focus: ['PostgreSQL schema', 'API request/response', 'Excel/OCR data flow'],
    },
    {
      title: 'System Design',
      description: '입력, 상태, 검증, 예외, 출력의 경계를 먼저 잡는 역할',
      focus: ['workflow boundary', 'validation state', 'reusable execution'],
    },
    {
      title: 'OCR / LLM Workflow',
      description: 'AI 출력값을 사람이 확인하고 업무 데이터로 연결하는 역할',
      focus: ['field structure', 'coordinate data', 'human verification'],
    },
  ],
  projects: [
    {
      title: 'YIDO Dutyfree B2C Settlement System',
      period: '2025',
      role: 'Backend / DB / Frontend / System Design',
      summary: 'EDI Excel, 영수증 이미지, 여권 이미지, OCR/LLM 결과, 검증 UI를 연결한 정산 업무 시스템',
      inputs: ['EDI Excel', 'receipt image', 'passport image', 'OCR/LLM result'],
      decisions: ['raw input과 검증 데이터를 분리', '영수증-여권-EDI 매핑 흐름 설계', '이미지 검증 UI 구성'],
      output: ['정산 데이터 흐름 구조화', '검증 가능한 이미지 확인 흐름', '사용량/토큰 추적 기반 준비'],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'OCR', 'LLM API'],
    },
    {
      title: 'PostgreSQL Multi-schema DB Manager',
      period: '2025',
      role: 'Backend / Database Architecture',
      summary: 'schema 관리, table 생성, batch upsert/update를 재사용하기 위한 비동기 DB 유틸리티',
      inputs: ['schema name', 'table metadata', 'batch records'],
      decisions: ['schema-scoped execution', 'batch helper 분리', 'metadata 기반 처리'],
      output: ['반복 DB 작업 재사용', 'schema 단위 분리', 'DB 처리 로직 중복 감소'],
      stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'asyncpg'],
    },
    {
      title: 'OCR / LLM Document Parsing Pipeline',
      period: '2025',
      role: 'AI Workflow / Data Structuring',
      summary: '여권과 영수증 이미지를 필드, 좌표, 마스킹, 검증 메타데이터로 구조화한 문서 처리 흐름',
      inputs: ['passport image', 'receipt image', 'OCR text', 'LLM parsed fields'],
      decisions: ['AI 출력을 검증 전 데이터로 취급', '좌표와 마스킹 정보 유지', '원본과 파싱 결과 분리'],
      output: ['필드 단위 검증 가능', '원본 이미지와 추출값 추적', '수정 가능한 데이터 구조'],
      stack: ['Python', 'OCR', 'LLM API', 'JSON', 'PostgreSQL'],
    },
    {
      title: 'ICT Data Extractor / Visual Normalization',
      period: '2025',
      role: 'Data Engineering / Visualization',
      summary: 'ICT 검사 CSV에서 측정값과 규격값을 분리하고 시각 비교를 위한 정규화 값을 만든 데이터 처리 작업',
      inputs: ['inspection CSV', 'measured values', 'LSL/USL specification'],
      decisions: ['측정값과 규격값 분리', 'specification-centered normalization', '시각화용 출력 구조'],
      output: ['측정 포인트 간 비교 가능', '규격 기준 해석 유지', '시각화 준비 데이터 생성'],
      stack: ['Python', 'Pandas', 'PostgreSQL', 'Data Visualization'],
    },
  ],
  experiences: [
    { company: 'Mining5000', period: '2023.11 - Present', role: 'PM / PL / Developer' },
    { company: 'JnC Systems', period: '2023.05 - 2023.10', role: 'PM / PL / Developer / QA' },
    { company: 'DK G&C', period: '2021.09 - 2023.04', role: 'PM / PL / Developer / QA / Tester' },
    { company: 'Transcosmos Japan', period: '2018.10 - 2021.07', role: 'System Engineer / ITOS' },
    { company: 'KOHTECH', period: '2014.10 - 2015.10', role: 'Manufacturing QA' },
  ],
  skillGroups: [
    { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'VBA'] },
    { title: 'Backend / API', items: ['FastAPI', 'REST API', 'Async processing', 'API integration'] },
    { title: 'Database', items: ['PostgreSQL', 'SQLAlchemy', 'asyncpg', 'schema design'] },
    { title: 'AI / OCR', items: ['OCR workflow', 'LLM API', 'JSON output', 'result validation'] },
    { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'workflow UI'] },
    { title: 'Operations', items: ['QA', 'process automation', 'workflow refactoring'] },
  ],
  contact: {
    formUrl: '',
    email: '',
    note: '문의는 Google Form 또는 이메일 채널이 확정된 뒤 연결합니다.',
  },
};
