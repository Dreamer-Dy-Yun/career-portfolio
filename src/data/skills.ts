export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: '언어',
    items: ['Python', 'C#', 'TypeScript', 'JavaScript', 'VBA', 'SQL'],
  },
  {
    category: '백엔드 / API',
    items: ['FastAPI', 'REST API', '데이터 모델링', 'API 연동', '비동기 처리'],
  },
  {
    category: '데이터베이스',
    items: ['PostgreSQL', 'SQLAlchemy', 'asyncpg', '트랜잭션 처리', '배치 upsert/update', '스키마 관리'],
  },
  {
    category: '프론트엔드',
    items: ['React', 'TypeScript', 'Vite', 'UI 플로우 설계'],
  },
  {
    category: 'AI / OCR / LLM',
    items: ['OCR 워크플로우 설계', 'LLM API 연동', '프롬프트 설계', 'JSON 출력 설계', '데이터 검증'],
  },
  {
    category: '자동화',
    items: ['RPA', '작업 자동화', '예외 처리 및 보정', '워크플로우 분리'],
  },
  {
    category: '업무 방식',
    items: ['QA / 검증', '요구사항 정리', '실무 협업'],
  },
];
