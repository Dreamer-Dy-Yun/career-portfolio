# src/data

포트폴리오의 화면 콘텐츠 타입과 fallback seed 데이터를 관리합니다.

## 파일 책임

- `types.ts`: 화면 콘텐츠 계약. Google Sheets JSON도 이 구조를 기준으로 맞춥니다.
- `portfolioContent.ts`: Google Sheets 연결 전 또는 실패 시 사용하는 로컬 seed 데이터.

## 주요 데이터 구조

- `hero`: 첫 화면 이름, 포지션, 설명, 키워드.
- `roles`: Position 섹션의 역할별 설명과 focus 항목.
- `operatingPrinciples`: How I Structure Problems 섹션의 작업 원칙.
- `projects`: Evidence 섹션의 프로젝트 카드.
- `experiences`: Career 섹션의 회사, 기간, 역할.
- `skillGroups`: Stack 섹션의 역량 그룹.
- `contact`: Google Form 또는 이메일 문의 채널.

## ProjectContent 작성 기준

- `summary`: 프로젝트를 한 문장으로 요약합니다.
- `problem`: 업무나 데이터가 왜 구조화되어야 했는지 설명합니다.
- `constraints`: 입력 품질, 외부 시스템, 검증, 운영 제약을 씁니다.
- `decisions`: 어떤 설계 판단으로 문제를 풀었는지 씁니다.
- `deliverables`: 실제 구현 또는 산출물을 씁니다.
- `meaning`: 이 프로젝트가 사용자의 어떤 사고방식이나 강점을 보여주는지 씁니다.

## 작성 기준

- 확인되지 않은 성과 수치나 경력 해석을 넣지 않습니다.
- 프로젝트는 “무엇을 만들었는가”보다 “어떤 업무/데이터를 어떤 구조로 바꾸었는가”를 먼저 씁니다.
- 원본 데이터, 자동 처리 결과, 검증값, 운영 책임이 구분되는 경우 문구에서도 구분합니다.
- 백엔드, DB, API, UI는 정체성보다 구현 수단으로 표현합니다.
- IT가 아닌 경력은 억지로 IT 경험처럼 표현하지 않습니다.
- 공개 배포 기준으로 민감한 개인정보, 내부 URL, API key, 비공개 고객 정보를 넣지 않습니다.