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
    label: '백엔드 / 데이터 파이프라인',
    headline: '백엔드 / 데이터 파이프라인 엔지니어',
    summary:
      '운영에서 파편화된 입력을 정리해 구조화하고, 검증 가능한 데이터 처리를 만드는 백엔드형 업무에 집중합니다.',
    applicationSummary: [
      '백엔드/데이터 파이프라인 관점에서 Excel 파싱, API 연계, OCR 결과 정합성 관리, 데이터 모델 설계 경험을 보유합니다.',
      '요건이 불명확한 상황에서도 입력 정규화와 흐름 정리를 우선해 구현 가능한 형태로 정리해 왔습니다.',
      '실행에서 신뢰 가능한 상태 추적 구조를 중심으로 프로젝트를 운영해 왔습니다.',
    ],
    whyThisProfileFits: [
      'PostgreSQL 스키마 설계와 비동기 DB 처리, API 연계 경험을 함께 갖춘 백엔드-데이터 연계형 포지션과의 적합도가 높습니다.',
      '운영 데이터 정리와 예외 관리 경험이 있어 안정적인 처리 흐름을 만들 수 있습니다.',
      '요건이 불명확한 정산·운영 업무에서 구조화와 추적 포인트를 확보한 이력이 있습니다.',
    ],
    preferredRolePerspectives: ['Backend / Data Pipeline', 'System Design'],
    preferredProjectCategories: ['Data Pipeline', 'Backend / Database', 'API Integration'],
  },
  {
    id: 'system-design',
    label: '시스템 설계',
    headline: '시스템 설계형 개발자',
    summary:
      '실행 전 요구사항을 입력/출력/상태/예외 흐름으로 정리한 뒤 구현하는 방식으로, 운영 가능한 시스템 설계를 선호합니다.',
    applicationSummary: [
      '요구사항이 명확하지 않은 환경에서 입력/출력/상태를 구분해 실행 단위를 정리하는 접근을 반복해 왔습니다.',
      '기능 구현 이전에 경계와 예외 흐름을 정의해 구현 누락을 줄이는 작업을 수행했습니다.',
      '시스템 설계를 통해 유지·보수 비용을 낮추는 방식으로 확장해 왔습니다.',
    ],
    whyThisProfileFits: [
      '요건 분해와 실행 경계 정리가 핵심인 프로젝트에서 체계적 설계를 제시할 수 있습니다.',
      '불명확한 흐름을 정형화해 요구사항-구현 간 간극을 줄인 이력이 있습니다.',
      '실행 상태와 검증 조건을 함께 설계해 반복 운영을 안정화한 경험이 있습니다.',
    ],
    preferredRolePerspectives: ['System Design', 'Backend / Data Pipeline'],
    preferredProjectCategories: ['Backend / Database', 'Data Pipeline', 'Data Visualization'],
  },
  {
    id: 'ai-ocr-llm',
    label: 'AI / OCR / LLM 워크플로우',
    headline: 'AI / OCR 워크플로우 엔지니어',
    summary:
      'OCR/LLM 결과를 운영용 데이터로 사용하기 위한 검증 기반 구조와 워크플로우 전환을 설계하는 역할에 적합합니다.',
    applicationSummary: [
      'OCR, LLM 추출 결과를 즉시 신뢰하지 않고 검증 가능한 데이터로 전환해 운영에 반영한 경험이 있습니다.',
      '좌표, 마스킹, 검증 메타를 함께 설계해 보정 흐름으로 연결한 프로젝트 진행 경험이 있습니다.',
      '자동 추출값을 사람이 점검하고 보정할 수 있는 루프를 고려한 시스템 설계가 가능합니다.',
    ],
    whyThisProfileFits: [
      'AI 결과의 불완전성을 전제로 설계해 구조를 안정화하는 접근이 강점입니다.',
      '검출값-이미지-수정 이력의 연결 구조를 만들 수 있습니다.',
      '운영 데이터와 AI 출력 연결이 필요한 작업에서 실무형 연동이 가능합니다.',
    ],
    preferredRolePerspectives: ['AI / OCR / LLM', 'System Design'],
    preferredProjectCategories: ['AI / OCR / LLM', 'Data Pipeline'],
  },
  {
    id: 'automation-refactoring',
    label: '자동화 리팩토링',
    headline: '자동화 리팩토링 엔지니어',
    summary:
      '취약한 자동화 흐름을 모듈형 구조로 바꾸고 API·DB 기반 처리로 회복력 높은 운영 구조를 만든 방향으로 정리합니다.',
    applicationSummary: [
      'UI 중심 자동화에서 API 중심 구조로 전환해 유지보수성을 높인 경험을 갖추고 있습니다.',
      '예외·재실행 시나리오를 반영한 처리 단위를 만들고 데이터 기반 운영으로 정리한 바 있습니다.',
      '자동화의 취약점이 드러나는 지점을 먼저 파악해 실행 분리로 전환한 경험이 있습니다.',
    ],
    whyThisProfileFits: [
      '자동화 과업을 반복 가능한 유닛으로 쪼개고 의존도를 줄이는 작업이 가능합니다.',
      '테스트/검수 포인트가 살아 있는 작업 흐름을 구성할 수 있습니다.',
      'UI 취약성을 완화하고 백엔드 기반 구조로 이동해 신뢰도를 높이는 데 익숙합니다.',
    ],
    preferredRolePerspectives: ['Automation Refactoring', 'System Design', 'Backend / Data Pipeline'],
    preferredProjectCategories: ['API Integration', 'Data Pipeline', 'Backend / Database'],
  },
];
