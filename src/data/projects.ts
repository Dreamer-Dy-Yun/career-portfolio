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
      'EDI Excel 업로드, 영수증 이미지, 여권 이미지, OCR/LLM 추출, 검증, 매핑을 통합해 정산 흐름을 구조화한 시스템입니다.',
    problem:
      '사업 현장에서 Excel 형식이 제각각이고, 영수증/여권 이미지와 OCR 결과는 신뢰도가 다르며, 수기 매칭 작업이 필요했습니다.',
    solution:
      '관계형 스키마, 파싱 파이프라인, OCR/LLM 결과 구조, 검증 흐름, 그리고 React 기반 이미지 검수 UI를 연결해 정산 절차를 정형화했습니다.',
    impact: [
      '분산된 운영 데이터 흐름을 하나의 구조화된 작업 흐름으로 통합했습니다.',
      '규칙 기반 매핑으로 수동 매칭 의존도를 줄였습니다.',
      '테넌트/사용량 단위를 고려한 사용 추적 포맷 기반 설계를 반영했습니다.',
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'OCR', 'LLM API'],
    keywords: ['Data Pipeline', 'OCR', 'LLM', 'Settlement', 'PostgreSQL'],
    category: 'Data Pipeline',
    rolePerspectives: ['Backend / Data Pipeline', 'System Design', 'AI / OCR / LLM'],
    evidence: [
      '원천 데이터와 Excel/EDI 입력을 구분해 처리했습니다.',
      'OCR/LLM 결과를 구조화해 정합성 기반으로 관리했습니다.',
      '이미지 기반 검수 UI를 통해 리뷰 가능한 상태를 설계했습니다.',
      '테넌트 기반 운영을 위한 추적 가능한 정산 흐름을 만들었습니다.',
    ],
    fitByTarget: {
      'backend-data':
        'EDI 입력 파싱, OCR 결과 처리, 관계형 스키마 설계, 워크플로우형 매핑 처리로 데이터 파이프라인 역량을 보여줍니다.',
      'system-design':
        '불명확한 정산 규칙을 검증, 매핑, 승인 단계로 분해해 시스템 구조를 정리했습니다.',
      'ai-ocr-llm':
        '영수증/여권 이미지 처리와 필드 검증, UI 검수 결합으로 AI 추출 결과를 실무 데이터로 전환했습니다.',
    },
    evidenceTagIds: ['data-pipeline', 'postgresql-data-modeling', 'ocr-llm-workflow', 'system-design', 'qa-validation'],
    decisionTags: ['구조화된 매핑', '검증 우선 설계', '추적 가능한 데이터 흐름', '인간 검수'],
    caseStudy: {
      context:
        '면세 B2C 정산 과정은 EDI Excel, 영수증 이미지, 여권 이미지, OCR/LLM 파싱, 유효성 검증, 매핑이 한 번에 연결되는 구조였습니다. 이들을 유지보수 가능한 정산 구조로 정리했습니다.',
      constraints: [
        '입력 원천이 Excel, 이미지, OCR 결과, 수기 검증값으로 분산되어 있었습니다.',
        'OCR/LLM 결과는 신뢰성 점검 없이 바로 비즈니스 데이터로 쓰기 어렵습니다.',
        '영수증, 여권, EDI 기록 간 연결은 입력 품질이 일정하지 않습니다.',
        '향후 사용량 추적과 토큰 집계 확장을 고려해야 했습니다.',
      ],
      decisions: [
        {
          title: '원천 데이터와 검증 데이터 분리',
          description:
            '원본 이미지, OCR/LLM 결과, 인간 검수 완료 데이터 계층을 분리해 각 단계의 수정 이력을 추적할 수 있도록 설계했습니다.',
        },
        {
          title: '구조화된 매핑 흐름 도입',
          description:
            '이미지 파싱 결과를 개별 작업이 아닌 영수증-여권-EDI 매핑 단계로 연결해 일괄적인 처리 경로를 만들었습니다.',
        },
        {
          title: '검증 우선 UI 설계',
          description:
            '자동 추출이 항상 정답이 아니므로, 조회/수정/승인 경로가 가능한 검수 인터페이스를 먼저 구성했습니다.',
        },
      ],
      result: [
        '입력-추출-검증-매핑 흐름이 한 번에 추적 가능해졌습니다.',
        '인간 검수와 재작업 경로를 명시해 운영 상태 복구가 쉬워졌습니다.',
        '토큰 사용량 집계 및 사용 이력 연계 설계가 가능한 기반을 마련했습니다.',
      ],
    },
  },
  {
    title: 'PostgreSQL Multi-schema DB Manager',
    period: '2025',
    role: 'Backend / Database Architecture',
    summary:
      '스키마 관리, 테이블 생성, 배치 upsert/update, 테넌트 분리를 반복 구현 가능한 유틸 계층으로 재사용 가능하게 정리했습니다.',
    problem:
      '프로젝트별로 DB 스키마/테이블 실행 로직이 중복되어 한 번 작성한 코드가 반복 사용되지 못했습니다.',
    solution:
      '스키마 단위 실행 구조와 반복 SQL 패턴 추상화를 통해 비동기 환경에서 재사용 가능한 DB 관리기를 만들었습니다.',
    impact: [
      'DB 작업 재작성량을 줄이고 실행 규칙의 재사용성을 높였습니다.',
      '프로젝트 간 하드코딩 의존도를 감소시켰습니다.',
      '스키마 구분 작업의 반복 구현을 줄였습니다.',
    ],
    techStack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'asyncpg'],
    keywords: ['Database', 'Async', 'Schema', 'Reusability'],
    category: 'Backend / Database',
    rolePerspectives: ['Backend / Data Pipeline', 'System Design'],
    evidence: [
      '스키마 범위 실행 컨텍스트 설계',
      '비동기 배치 upsert/update 처리',
      '테이블/제약 조건 메타데이터 기반 처리',
      '반복 작업 삭제를 위한 공통 헬퍼 정리',
    ],
    fitByTarget: {
      'backend-data':
        'API/데이터 처리에서 DB 입출력 작업을 재사용할 수 있는 형태로 설계한 점과 배치 업데이트 패턴이 연결됩니다.',
      'system-design':
        '반복 패턴을 실행 규칙으로 추상화해 구현 단위를 분리한 점이 시스템 설계 관점과 일치합니다.',
    },
    evidenceTagIds: ['postgresql-data-modeling', 'data-pipeline', 'system-design'],
    decisionTags: ['스키마 스코프 실행', '배치 upsert/update', '추적 가능한 데이터 흐름'],
    caseStudy: {
      context:
        '스키마 생성, 테이블 생성, 업서트/업데이트 등 PostgreSQL 작업이 프로젝트별 스크립트로 흩어져 있던 부분을 재사용 가능한 유틸로 통합했습니다.',
      constraints: [
        'DB 실행 로직이 스키마/테이블을 고정 가정해 재사용이 어려웠습니다.',
        'insert/update 패턴이 중복 구현되어 유지보수가 부담되었습니다.',
        '비동기 SQLAlchemy와 asyncpg를 함께 사용할 때 실행 컨텍스트가 안정적으로 관리되어야 했습니다.',
        '단일 스키마 가정이 남아 있으면 텐턴트 분리에 확장이 어렵습니다.',
      ],
      decisions: [
        {
          title: '스키마 스코프 실행 구조',
          description:
            '스키마 정보를 실행 시점에 주입받아 동일 로직으로 다중 스키마를 처리할 수 있게 만들었습니다.',
        },
        {
          title: '배치 작업 추상화',
          description:
            'upsert/update를 패턴화해 반복 SQL 대신 공통 헬퍼 호출로 처리하도록 바꿨습니다.',
        },
        {
          title: '메타데이터 기반 처리',
          description:
            '테이블/제약 조건 정보를 메타로 다루어 고정값 의존을 줄이고 변경 유연성을 높였습니다.',
        },
      ],
      result: [
        'DB 실행 코드의 재사용이 쉬워졌습니다.',
        '다중 스키마 분리 작업의 일관성이 높아졌습니다.',
        '기능 추가 시 중복 구현이 크게 줄었습니다.',
      ],
    },
  },
  {
    title: 'OCR / LLM Document Parsing Pipeline',
    period: '2025',
    role: 'AI Workflow / Data Structuring',
    summary:
      '여권/영수증 이미지에서 추출한 값을 구조화해 재검토·수정 가능한 형태로 관리하는 파이프라인을 설계했습니다.',
    problem:
      'OCR 결과는 필드 오류나 신뢰도 이슈가 있어 그대로 운영 데이터로 쓰기 어렵고, 마스킹과 좌표 정보도 화면 환경별로 관리가 필요했습니다.',
    solution:
      '필드 단위 검증, 좌표/마스킹 처리, 원본 이미지와 파싱 결과 분리를 통해 추적 가능한 검증 흐름을 만들었습니다.',
    impact: [
      'OCR/LLM 결과 신뢰성 이슈 대응을 체계화했습니다.',
      '수정/보정이 가능한 검증 데이터 경로를 확보했습니다.',
      '원본 이미지와 파싱 결과의 추적 연결을 명확히 만들었습니다.',
    ],
    techStack: ['Python', 'OCR', 'LLM API', 'JSON', 'PostgreSQL'],
    keywords: ['OCR', 'LLM', 'Validation', 'Data Structuring'],
    category: 'AI / OCR / LLM',
    rolePerspectives: ['AI / OCR / LLM', 'System Design', 'Backend / Data Pipeline'],
    evidence: [
      'AI 결과 불확실성을 반영한 검증 설계',
      '좌표 기반 값 표시 및 수정',
      '이미지/파싱 결과 분리',
      '검토 가능한 메타 데이터 구조',
    ],
    fitByTarget: {
      'ai-ocr-llm':
        'OCR/LLM 추출 결과의 구조화와 검증/보정 설계를 통해 AI/OCR 운영 파이프라인 역량을 보여줍니다.',
      'system-design':
        '원천 입력, 추출 결과, 검증 단계의 책임 경계를 분리해 구현 체계를 정리했습니다.',
      'backend-data':
        '추출 결과를 후처리 테이블로 적재하기 위한 구조적 파이프라인 설계가 데이터 처리 흐름에 적합합니다.',
    },
    evidenceTagIds: ['ocr-llm-workflow', 'data-pipeline', 'system-design', 'qa-validation'],
    decisionTags: ['가변 AI 출력 처리', '검증 우선 설계', '인간 검수', '추적 가능한 데이터 흐름'],
    caseStudy: {
      context:
        '여권 및 영수증 이미지를 운영 데이터로 사용하려면, OCR 결과를 즉시 신뢰할 수 없습니다. 추출값을 검토 가능한 형태로 만들어 사람이 보정 가능한 과정이 필요했습니다.',
      constraints: [
        'OCR 결과에 오류가 섞일 수 있어 필드 신뢰도 관리가 필요했습니다.',
        '마스킹 문자열을 보존하면서 가시성을 유지해야 했습니다.',
        '이미지 크기 변환 시에도 좌표 기준을 유지해야 했습니다.',
        '원본 이미지와 추출 레코드는 분리되어야 했습니다.',
      ],
      decisions: [
        {
          title: 'AI 출력은 임시 데이터로 취급',
          description:
            'OCR/LLM 결과를 즉시 최종값이 아닌 provisional 데이터로 보고, 보정 가능한 구조를 기본값으로 두었습니다.',
        },
        {
          title: '좌표/마스킹 정보 보존',
          description:
            '필드의 좌표와 마스킹 규칙을 함께 저장해 화면/검수 과정에서 값의 출처를 추적할 수 있게 했습니다.',
        },
        {
          title: '원본-파싱 계층 분리',
          description:
            '이미지 자산과 파싱 레코드를 분리하여 회수성 및 보정 이력을 안정적으로 남기도록 구성했습니다.',
        },
      ],
      result: [
        '추출값 검토/수정 프로세스가 분명해졌습니다.',
        '추적이 가능한 검증 메타와 연결된 AI 추출이 가능해졌습니다.',
        '운영 데이터로의 연결 경로가 명확해졌습니다.',
      ],
    },
  },
  {
    title: 'ICT Data Extractor / Visual Normalization',
    period: '2025',
    role: 'Data Engineering / Visualization',
    summary:
      'ICT 측정 CSV의 다양한 단위/범위를 기준 데이터와 규격 데이터로 나누어 정규화 기준을 통일했습니다.',
    problem: '측정점마다 단위와 범위가 달라 직접 비교가 어렵고, 평균표준편차 방식의 정규화가 목적 적합하지 않았습니다.',
    solution: '측정값과 규격값을 분리해 LSL/USL 중심 정규화로 가시성 중심 파이프라인을 구성했습니다.',
    impact: [
      '이질적인 측정값을 한 화면에서 비교 가능한 형태로 바꿨습니다.',
      '규격 기준 정규화로 도메인 의미를 유지했습니다.',
      '후속 시각화/분석에 바로 이어지는 출력 구조를 만들었습니다.',
    ],
    techStack: ['Python', 'Pandas', 'PostgreSQL', 'Data Visualization'],
    keywords: ['Data Engineering', 'Normalization', 'Visualization'],
    category: 'Data Visualization',
    rolePerspectives: ['Backend / Data Pipeline', 'System Design'],
    evidence: [
      '측정 데이터와 규격 데이터의 분리 저장',
      '규격 기준 정규화 모델 설계',
      '시각화를 위한 정규화 출력 형식 정의',
    ],
    fitByTarget: {
      'backend-data':
        '원천 CSV 수집, 측정값 분해, 정규화 출력 생성으로 데이터 파이프라인 역할이 드러납니다.',
      'system-design':
        '변량이 다른 측정 데이터를 규격 기반 모델로 통일해 실행 가능한 시스템 구조를 제시했습니다.',
    },
    evidenceTagIds: ['data-pipeline', 'visualization', 'qa-validation', 'system-design'],
    decisionTags: ['규격 중심 정규화', '추적 가능한 데이터 흐름', '검증 우선 설계'],
    caseStudy: {
      context:
        'ICT 점검 CSV는 항목별 단위와 범위가 달라 직접 비교가 어려웠고, 규격값까지 함께 다뤄야 하는 요구가 있었습니다.',
      constraints: [
        '원천 CSV에서 측정값과 규격값을 함께 정리해야 했습니다.',
        '평균/표준편차 기반 정규화는 도메인 규격 해석에 적합하지 않았습니다.',
        '항목마다 사용 단위가 달라 시각 비교 기준을 통일해야 했습니다.',
        '출력은 단순 수치값보다 분석/시각화를 고려해야 했습니다.',
      ],
      decisions: [
        {
          title: '측정값/규격값 분리',
          description:
            '측정치와 사양치의 성격을 분리해 파이프라인 단계에서 각 역할을 명확히 구분했습니다.',
        },
        {
          title: '규격 중심 정규화',
          description:
            '항목별 LSL/USL 범위를 기준으로 정규화해, 분포 추정보다 규격 준수 판단이 쉽도록 했습니다.',
        },
        {
          title: '시각화 친화 출력',
          description:
            '정규화된 결과를 시각 검토에 바로 사용할 수 있는 형태로 정리해 분석 단계 진입 장벽을 낮췄습니다.',
        },
      ],
      result: [
        '항목 간 비교가 안정적으로 가능해졌습니다.',
        '규격 기반 해석이 일관적으로 유지됩니다.',
        '분석/시각화 단계와의 연결이 쉬워졌습니다.',
      ],
    },
  },
];
