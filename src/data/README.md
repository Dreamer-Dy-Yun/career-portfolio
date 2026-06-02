# src/data

화면에 표시되는 포트폴리오 기본 데이터와 Google Sheets 연동 계약을 관리한다.

## 파일 책임

- `types.ts`: 화면 콘텐츠 타입 계약.
- `portfolioContent.ts`: Google Sheets 연결 실패 또는 미설정 시 사용하는 fallback seed 데이터.

## 주요 데이터 구조

- `hero`: 첫 화면 이름, 타이틀, 설명, 키워드.
- `roles`: Position 페이지의 역할 카드.
- `operatingPrinciples`: Thinking Pattern 페이지의 문제 구조화 원칙.
- `projects`: Evidence 페이지의 프로젝트 카드.
- `experiences`: Career 페이지의 회사, 기간, 역할, 상세 설명, 태그.
- `skillGroups`: Stack 페이지의 역량 그룹.
- `contact`: Google Form 또는 이메일 문의 채널.

## 작성 기준

- 확인되지 않은 경력 해석, 성과 수치, 외부 링크를 넣지 않는다.
- IT가 아닌 경력은 억지로 IT 경험처럼 확장하지 않는다.
- 프로젝트는 기능 나열보다 문제 상황, 제약 조건, 설계 판단, 산출물, 의미를 중심으로 적는다.
- Backend, DB, API, UI는 정체성이 아니라 구조를 구현하는 수단으로 표현한다.
- Stack 항목의 출처나 숙련도를 임의로 분류하지 않는다.
- 사용자가 기준과 값을 직접 확정하기 전까지 Stack 항목에는 별도 출처 라벨을 붙이지 않는다.
- Career 연혁은 `summary`, `details`, `tags`만 바꾸면 상세 패널이 자동 갱신되도록 작성한다.
- 공개 배포 기준으로 전화번호, 주소, 내부 URL, API key, 비공개 고객 정보는 넣지 않는다.

## Contact 처리

- `contact.formUrl`이 비어 있으면 Contact 페이지를 렌더링하지 않는다.
- 실제 Google Form 또는 이메일 채널이 확정된 뒤에만 문의 UI를 노출한다.
