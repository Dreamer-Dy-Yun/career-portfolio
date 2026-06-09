# Google Sheets Content Contract

이 사이트는 Google Sheets를 공개 읽기 데이터 원본으로 사용할 수 있다. `GOOGLE_SHEET_ID`가 설정되어 있으면 아래 탭을 CSV로 읽어 화면 데이터를 만든다.

## Required tabs

- `Meta`
- `Hero`
- `ProfileSummary`
- `SelfIntroduction`
- `Experiences`
- `WorkCases`
- `SkillGroups`

## Optional tabs

- `Contact`

리스트 값은 `|` 또는 줄바꿈으로 구분한다.

## Meta

| key | value |
|---|---|
| siteTitle | Yun Dae-Young's Portfolio |

## Hero

| field | value |
|---|---|
| name | Yun Dae-Young |
| title | Workflow & Data System Designer |
| subtitle | 업무 흐름과 데이터를 실행 가능한 구조로 정리하는 사람 |
| summary | 불명확한 요구, 흩어진 운영 데이터, 검증이 필요한 결과값을 입력·상태·책임·출력 단위로 분해한다. |
| keywords | Workflow Modeling\|Data Boundary\|Validation Flow |

## ProfileSummary

| key | value |
|---|---|
| headline | 이력서, 자기소개서, 경력기술서를 한 화면에서 빠르게 읽히게 구성한 경력 프로필입니다. |
| lines | Line A\|Line B |
| strengths | 업무 구조화\|데이터 흐름 정리 |

## SelfIntroduction

| paragraph |
|---|
| 자기소개 문단 1 |
| 자기소개 문단 2 |

## Experiences

| company | period | startDate | endDate | role | summary | details | tags |
|---|---|---|---|---|---|---|---|
| Company | 2025.01 - 2025.12 | 2025-01 | 2025-12 | Role | 한 줄 요약 | Detail A\|Detail B | Tag A\|Tag B |

### Experience rules

- `period`는 화면 표시용 문자열이다.
- `startDate`, `endDate`는 병행 여부 계산용 값이다.
- 날짜 형식은 `YYYY-MM`, `YYYY-MM-DD`, `YYYY.MM`, `YYYY.MM.DD`를 사용한다.
- 현재 재직 중이면 `endDate`에 `Present`를 넣는다.
- 여러 경력의 날짜 구간이 겹치면 화면에서 자동으로 `병행` 배지를 표시한다.
- 사용자가 `병행` 여부를 직접 입력하지 않는다.

## WorkCases

| company | title | period | role | summary | details | keywords |
|---|---|---|---|---|---|---|
| Mining5000 | Work title | 2025 | Role | 한 줄 요약 | Detail A\|Detail B | Python\|PostgreSQL |

- `company`는 `Experiences.company`와 같은 값을 사용한다.
- 값이 일치하면 연혁에서 해당 소속을 클릭했을 때 하위 프로젝트로 펼쳐진다.

## SkillGroups

| title | items |
|---|---|
| Backend / Data | Python\|FastAPI\|PostgreSQL |

## Contact

| field | value |
|---|---|
| formUrl | https://forms.gle/... |
| email | contact@example.com |

`formUrl`과 `email`이 모두 비어 있으면 문의 영역을 표시하지 않는다.

## Public data rules

- 전화번호, 주소, API URL, API key, 비공개 고객 정보, 계약 금액을 넣지 않는다.
- 확인되지 않은 성과 수치나 과장된 문장을 넣지 않는다.
- IT가 아닌 경력을 억지로 IT 경험처럼 바꾸지 않는다.
