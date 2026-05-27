export type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  techStack?: string[];
  functionHighlights?: {
    label: string;
    items: string[];
  }[];
  evidenceTagIds?: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Mining5000',
    period: '2023.11 - Present',
    role: 'PM / PL / Developer',
    summary:
      '요구사항 정리, 백엔드 API 연계, 데이터 처리 파트, 테스트/운영 이슈 대응을 함께 수행했습니다.',
    highlights: [
      '불명확한 업무 구조를 기준-매핑-예외 규칙으로 분해해 실행 단위로 정리했습니다.',
      'API 연계와 데이터 처리 작업에서 검증 포인트를 함께 설계했습니다.',
      '테스트, 배포, 이해관계자 커뮤니케이션을 반복 수행했습니다.',
    ],
    functionHighlights: [
      {
        label: 'Backend / Data',
        items: [
          'DB 기반 작업 흐름을 단계별로 분해해 처리 단위를 고정했습니다.',
          'API 연계 기능의 데이터 경계와 상태 관리를 명확히 했습니다.',
        ],
      },
      {
        label: 'System Design',
        items: [
          '요구사항을 실행 단계로 나눠 구현 가능 형태로 정리했습니다.',
          '테스트-배포-운영의 연계를 위한 처리 경계를 구조화했습니다.',
        ],
      },
      {
        label: 'Automation / Operations',
        items: ['운영이 반복되는 업무를 스크립트 중심이 아니라 흐름 중심으로 정리해 재사용성을 높였습니다.'],
      },
    ],
    evidenceTagIds: [
      'data-pipeline',
      'postgresql-data-modeling',
      'api-integration',
      'ocr-llm-workflow',
      'system-design',
      'workflow-refactoring',
    ],
  },
  {
    company: 'JnC Systems',
    period: '2023.05 - 2023.10',
    role: 'PM / PL / Developer / QA',
    summary:
      '자동화 프로젝트의 기획, 개발, QA, 전달 과정을 함께 다루며 실행 단위와 품질 기준을 관리했습니다.',
    highlights: [
      '기획~개발~테스트 전달 경로를 한 흐름으로 정리해 일정 대응력을 유지했습니다.',
      '품질 점검 항목과 의사결정 기록을 정렬해 협업 이슈를 줄였습니다.',
    ],
    functionHighlights: [
      {
        label: 'Automation / Operations',
        items: ['운영 업무와 개발 진행을 연결해 산출물 전달 기준을 정리했습니다.'],
      },
      {
        label: 'QA / Testing',
        items: ['품질 이슈를 테스트 전후로 추적 가능한 항목으로 정리했습니다.'],
      },
    ],
    evidenceTagIds: ['workflow-refactoring', 'qa-validation', 'system-design'],
  },
  {
    company: 'DK G&C',
    period: '2021.09 - 2023.04',
    role: 'PM / PL / Developer / QA / Tester',
    summary:
      '업무 자동화와 테스트, 인도 과정을 수행하며 현장 업무를 전달 가능한 작업 단위로 정리했습니다.',
    highlights: [
      '반복 작업 실행을 분해해 일정과 산출물이 유지되도록 조정했습니다.',
      '품질 체크 항목을 재정의해 재작업 비용을 줄였습니다.',
    ],
    functionHighlights: [
      {
        label: 'Automation / Operations',
        items: [
          '운영 동선을 기준으로 실행 순서를 정렬하고 체크 단위를 명확히 했습니다.',
          '과업 간 의존 관계를 분리해 검토 포인트를 줄였습니다.',
        ],
      },
      {
        label: 'QA / Testing',
        items: ['품질 검토 기준을 반복 작업에 반영해 결함 탐지를 용이하게 만들었습니다.'],
      },
    ],
    evidenceTagIds: ['workflow-refactoring', 'qa-validation', 'system-design'],
  },
  {
    company: 'Transcosmos Japan',
    period: '2018.10 - 2021.07',
    role: 'System Engineer / ITOS',
    summary:
      '일본 현장의 IT 운영 환경에서 운영 체계와 현장 커뮤니케이션을 기반으로 시스템 지원 업무를 수행했습니다.',
    highlights: [
      '운영 이슈를 업무 관점에서 단계별로 정리해 대응 기준을 만들었습니다.',
      '실무 환경에서의 협업 문서를 통한 변경 이력을 관리했습니다.',
    ],
    functionHighlights: [
      {
        label: 'Communication',
        items: ['일본어 기반의 업무 커뮤니케이션 환경에서 요구사항과 변경 사항을 정리했습니다.'],
      },
      {
        label: 'Automation / Operations',
        items: ['운영 프로세스의 안정적 수행을 위한 절차 정비를 수행했습니다.'],
      },
    ],
    evidenceTagIds: ['qa-validation', 'system-design'],
  },
  {
    company: 'KOHTECH',
    period: '2014.10 - 2015.10',
    role: 'Manufacturing QA',
    summary: '제조 품질 관리 환경에서 검사 기준, 결함 추적, 품질 보고 흐름을 경험했습니다.',
    highlights: ['검사 항목과 결함 보고 체계를 기준으로 품질 이슈를 정리했습니다.'],
    functionHighlights: [
      {
        label: 'QA / Testing',
        items: ['검사 항목 기반으로 결함 추적 및 수정 이력 관리를 수행했습니다.'],
      },
    ],
    evidenceTagIds: ['qa-validation'],
  },
];
