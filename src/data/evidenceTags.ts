export type EvidenceTag = {
  id: string;
  label: string;
  description: string;
  relatedRolePerspectives: string[];
};

export const evidenceTags: EvidenceTag[] = [
  {
    id: 'postgresql-data-modeling',
    label: 'PostgreSQL 데이터 모델링',
    description: '운영 시스템의 관계형 구조와 스키마 중심 데이터 흐름을 설계합니다.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
  },
  {
    id: 'api-integration',
    label: 'API 연동',
    description: '요청/응답 계약을 기준으로 API 경계를 정리하고 통합 흐름을 구성합니다.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'Automation Refactoring', 'System Design'],
  },
  {
    id: 'ocr-llm-workflow',
    label: 'OCR / LLM 워크플로우',
    description: 'OCR/LLM 출력을 검증 가능한 데이터로 변환해 운영 단계에 연결합니다.',
    relatedRolePerspectives: ['AI / OCR / LLM', 'Backend / Data Pipeline', 'System Design'],
  },
  {
    id: 'data-pipeline',
    label: '데이터 파이프라인',
    description: '분산된 입력을 정규화·검증해 추적 가능한 데이터 흐름으로 변환합니다.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
  },
  {
    id: 'system-design',
    label: '시스템 설계',
    description: '요구사항, 상태, 예외를 기준으로 실행 경계를 정리하는 작업 방식입니다.',
    relatedRolePerspectives: ['System Design'],
  },
  {
    id: 'workflow-refactoring',
    label: '워크플로우 리팩토링',
    description: '산재한 실행 절차를 모듈화해 재사용성과 운영성을 높이는 작업 방식입니다.',
    relatedRolePerspectives: ['Automation Refactoring', 'System Design'],
  },
  {
    id: 'qa-validation',
    label: 'QA / 검증',
    description: '검증 단계와 점검 기준을 운영 이슈 대응에 반영해 품질을 관리합니다.',
    relatedRolePerspectives: ['System Design', 'Backend / Data Pipeline'],
  },
  {
    id: 'visualization',
    label: '시각화',
    description: '분석과 점검 단계에서 해석 가능한 형태로 데이터를 정리해 비교를 용이하게 합니다.',
    relatedRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
  },
];
