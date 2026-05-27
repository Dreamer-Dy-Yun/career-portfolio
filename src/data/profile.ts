export type Profile = {
  koreanName: string;
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location?: string;
  email?: string;
  contactFormUrl?: string;
  photoUrl?: string;
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
  koreanName: '윤대영',
  name: 'Yun Dae-Young',
  title: '운영 데이터를 구조화하는 백엔드 / 데이터 파이프라인 엔지니어',
  tagline: '품질, 운영, 자동화, 데이터 처리 경험을 연결해 검증 가능한 업무 흐름을 만듭니다.',
  summary:
    'QA와 운영 현장 경험에서 출발해 API 연동, PostgreSQL 데이터 모델링, OCR/LLM 처리, 자동화 리팩토링으로 확장해 왔습니다. 모든 경력을 억지로 개발 이력으로 포장하기보다, 현장에서 얻은 검증 감각과 운영 이해를 데이터 중심 시스템 설계에 연결하는 데 집중합니다.',
  location: 'South Korea',
  email: 'contact@example.com',
  contactFormUrl: '',
  photoUrl: '',
  links: [],
  resumeAvailable: false,
  resumeUrl: '/resume.pdf',
  coreStrengths: [
    {
      title: '운영 데이터 구조화',
      description:
        'Excel, 이미지, API 응답, 수기 검증값처럼 흩어진 입력을 추적 가능한 데이터 흐름으로 정리합니다.',
    },
    {
      title: '검증 가능한 처리 흐름',
      description:
        '자동 추출이나 자동화 결과를 그대로 믿지 않고, 검수·보정·예외 처리가 가능한 구조로 설계합니다.',
    },
    {
      title: 'PostgreSQL 기반 모델링',
      description: '업무 상태, 원천 데이터, 검증 결과를 분리해 재사용 가능한 관계형 구조로 만듭니다.',
    },
    {
      title: 'OCR / LLM 실무 연결',
      description:
        'OCR/LLM 결과를 비즈니스 데이터로 쓰기 전에 좌표, 마스킹, 필드 검증 단위로 나눠 관리합니다.',
    },
    {
      title: 'QA와 운영 감각',
      description: '제조 QA, 운영 IT, 프로젝트 검수 경험을 바탕으로 결함 추적과 재작업 경로를 고려합니다.',
    },
    {
      title: '자동화 리팩토링',
      description:
        '스크립트 중심 자동화를 API, DB, 검증 흐름이 분리된 유지보수 가능한 구조로 옮깁니다.',
    },
  ],
};
