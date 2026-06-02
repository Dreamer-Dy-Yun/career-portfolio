import type { PortfolioContent } from './types';

export const fallbackContent: PortfolioContent = {
  siteTitle: "Yun Dae-Young's Portfolio",
  hero: {
    name: 'Yun Dae-Young',
    title: 'Workflow & Data System Designer',
    subtitle: '업무 흐름과 데이터를 구조화하는 개발자',
    description:
      '불명확한 업무 입력, 흩어진 데이터, 검증 흐름을 실행 가능한 시스템 구조로 정리하는 방향의 경력을 보여준다.',
    keywords: ['Workflow Modeling', 'Data Boundary', 'Validation Flow', 'Backend / DB', 'Automation Refactoring'],
  },
  experiences: [
    {
      company: 'Mining5000',
      period: '2023.11 - Present',
      startDate: '2023-11',
      endDate: 'Present',
      role: 'PM / PL / Developer',
      summary: '기획, 개발, 테스트, 이해관계자 커뮤니케이션을 함께 수행한 프로젝트 경험.',
      details: ['업무 요구사항을 구현 단위로 나누고 실행 흐름을 정리.', 'API, DB, 자동화, 운영 데이터 흐름이 포함된 작업 수행.'],
      tags: ['Workflow', 'Backend', 'Database'],
    },
    {
      company: 'JnC Systems',
      period: '2023.05 - 2023.10',
      startDate: '2023-05',
      endDate: '2023-10',
      role: 'PM / PL / Developer / QA',
      summary: '자동화 관련 프로젝트에서 일정, 구현, QA, 전달 과정을 함께 다룬 경력.',
      details: ['프로젝트 진행과 품질 확인 업무를 병행.', '개발 산출물과 운영 요구 사이의 간극을 조정.'],
      tags: ['Automation', 'QA', 'Delivery'],
    },
    {
      company: 'DK G&C',
      period: '2021.09 - 2023.04',
      startDate: '2021-09',
      endDate: '2023-04',
      role: 'PM / PL / Developer / QA / Tester',
      summary: '자동화, 테스트, 납품, 운영 개선 성격의 업무를 수행한 경력.',
      details: ['프로젝트 실행 과정에서 구현, 테스트, 전달 업무 참여.', '업무 절차를 정리하고 자동화 대상 흐름을 다룸.'],
      tags: ['Automation', 'Testing', 'Operations'],
    },
    {
      company: 'Transcosmos Japan',
      period: '2018.10 - 2021.07',
      startDate: '2018-10',
      endDate: '2021-07',
      role: 'System Engineer / IT Operations',
      summary: '일본 IT 운영 환경에서 시스템 엔지니어링과 운영 업무를 경험.',
      details: ['운영 환경에서 절차와 커뮤니케이션 기반의 업무 수행.', '기술 지원과 운영 흐름을 다루는 경험 축적.'],
      tags: ['IT Operations', 'System Engineer'],
    },
    {
      company: 'KOHTECH',
      period: '2014.10 - 2015.10',
      startDate: '2014-10',
      endDate: '2015-10',
      role: 'QA',
      summary: '제조 관련 환경에서 QA 업무 수행.',
      details: ['검사, 결함 확인, 품질 관리 프로세스와 연결된 업무 경험.'],
      tags: ['QA'],
    },
  ],
  contact: {
    formUrl: '',
    email: '',
  },
};
