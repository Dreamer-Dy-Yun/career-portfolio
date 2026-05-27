export type Profile = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location?: string;
  email?: string;
  links?: {
    label: string;
    url: string;
  }[];
  coreStrengths: {
    title: string;
    description: string;
  }[];
  resumeAvailable?: boolean;
  resumeUrl?: string;
};

export const profile: Profile = {
  name: 'Yun Dae-Young',
  title: '백엔드 / 데이터 파이프라인 / 시스템 설계 엔지니어',
  tagline: '불명확한 운영 업무를 구조화해 유지보수 가능한 데이터와 실행 흐름으로 연결합니다.',
  summary:
    '비즈니스 운영 데이터, Excel 파일, OCR 결과, API 응답, 수동 처리 결과를 분석해 구조화하고 추적 가능한 데이터 흐름으로 바꾸는 데 집중했습니다.',
  location: 'South Korea',
  email: 'contact@example.com',
  links: [],
  resumeAvailable: false,
  resumeUrl: '/resume.pdf',
  coreStrengths: [
    {
      title: '데이터 파이프라인 설계',
      description:
        '분산된 원천 데이터를 단계별로 연결해 품질, 정합성, 추적 가능성을 확보하는 흐름을 만듭니다.',
    },
    {
      title: '백엔드 / API 연동',
      description:
        'UI 중심 구현보다 API 계약 기반 통합과 예외 처리, 상태 추적을 함께 고려해 설계합니다.',
    },
    {
      title: 'PostgreSQL 데이터 모델링',
      description: '스키마, 인덱스, 실행 단위를 구분해 재사용 가능한 데이터 구조를 유지합니다.',
    },
    {
      title: 'OCR / LLM 워크플로우',
      description:
        'OCR/LLM 결과를 검증 가능한 구조로 분리해 후속 보정과 데이터 적재가 가능하도록 처리합니다.',
    },
    {
      title: '프로세스 설계',
      description: '자동화 규칙을 검증 규칙과 분리해 장기 운영에서 회귀 대응이 쉬운 구조로 구성합니다.',
    },
    {
      title: '시스템 리팩터링',
      description:
        '조직별 과제 흐름을 하나의 스크립트로 몰아넣기보다 모듈로 나눠 유지보수가 쉬운 형태로 바꿉니다.',
    },
  ],
};
