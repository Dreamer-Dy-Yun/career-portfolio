export type TargetRole = {
  title: string;
  description: string;
  evidence: string[];
};

export const targetRoles: TargetRole[] = [
  {
    title: '백엔드 / 데이터 파이프라인',
    description:
      '복잡한 운영 입력을 수집해 처리하고, 검증 가능한 데이터로 바꾸는 구조 설계 경험이 핵심입니다.',
    evidence: [
      'PostgreSQL 모델링 기반의 데이터 설계',
      'API 연계와 파싱/맵핑 설계',
      'Excel, OCR, 수기 데이터 결합 기반 처리',
    ],
  },
  {
    title: '시스템 설계',
    description:
      '요구사항이 애매한 영역을 먼저 구조로 정리하고, 실행 경계와 상태 전이를 명확히 하는 방식으로 접근합니다.',
    evidence: [
      '문제 분해를 중심으로 한 데이터 처리 설계',
      '작업 순서/예외 처리 분리',
      '요건-검증-실행 연결 구조 설계',
    ],
  },
  {
    title: 'AI / OCR / LLM 워크플로우',
    description:
      'OCR/LLM 결과를 바로 최종값으로 사용하지 않고, 검증·보정 가능한 흐름으로 전환하는 방식에 집중합니다.',
    evidence: ['OCR 추출 결과 구조화', '좌표 기반 검수 설계', '검증 메타데이터 설계'],
  },
  {
    title: '자동화 리팩토링',
    description:
      '자동화 작업을 단순 스크립트 실행 단위가 아닌 운영 가능한 설계 단위로 전환해 장기 유지보수를 개선합니다.',
    evidence: ['RPA의 작업 단위 정리', 'API 중심 처리로 전환', '운영 규칙 기반 구조화'],
  },
];
