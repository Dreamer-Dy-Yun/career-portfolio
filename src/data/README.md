# src/data

포트폴리오의 화면 콘텐츠 타입과 fallback seed 데이터를 관리합니다.

## 파일 책임

- `types.ts`: 화면 콘텐츠 계약. Google Sheets JSON도 이 구조를 기준으로 맞춥니다.
- `portfolioContent.ts`: Google Sheets 연결 전 또는 실패 시 사용하는 로컬 seed 데이터.

## 주요 데이터 구조

- `hero`: 첫 화면 이름, 포지션, 설명, 키워드.
- `roles`: Position 섹션의 역할별 설명과 focus 항목.
- `operatingPrinciples`: How I Work 섹션의 작업 원칙.
- `projects`: Evidence 섹션의 프로젝트 카드. `inputs`, `decisions`, `output`은 각각 입력, 설계 결정, 결과물을 나타냅니다.
- `experiences`: Career 섹션의 회사, 기간, 역할.
- `skillGroups`: Stack 섹션의 역량 그룹.
- `contact`: Google Form 또는 이메일 문의 채널.

## 작성 기준

- 확인되지 않은 성과 수치나 경력 해석을 넣지 않습니다.
- 프로젝트는 “무엇을 만들었는가”보다 “어떤 업무/데이터를 어떤 구조로 바꾸었는가”를 먼저 씁니다.
- 원본 데이터, 자동 추출값, 검증값, 운영 책임이 구분되는 경우 문구에서도 구분합니다.
- IT가 아닌 경력은 억지로 IT 경험처럼 표현하지 않습니다.
- 공개 배포 기준으로 민감한 개인정보, 내부 URL, API key, 비공개 고객 정보를 넣지 않습니다.