# Google Sheets Content Contract

이 사이트는 Google Sheets를 공개 읽기 데이터 원본으로 사용할 수 있다. GitHub Actions variable의 `GOOGLE_SHEET_ID`가 설정되어 있으면 브라우저가 아래 탭을 CSV로 읽어 `PortfolioContent`로 조립한다.

## Required tabs

- `Meta`
- `Hero`
- `Experiences`

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
| subtitle | 업무 흐름과 데이터를 구조화하는 개발자 |
| description | 불명확한 업무 입력, 흩어진 데이터, 검증 흐름을 실행 가능한 시스템 구조로 정리하는 방향의 경력을 보여준다. |
| keywords | Workflow Modeling\|Data Boundary\|Validation Flow |

## Experiences

| company | period | startDate | endDate | role | summary | details | tags |
|---|---|---|---|---|---|---|---|
| Company | 2025.01 - 2025.12 | 2025-01 | 2025-12 | Role | One sentence summary | Detail A\|Detail B | Tag A\|Tag B |

### Date rules

- `period`는 화면 표시용 문자열이다.
- `startDate`, `endDate`는 병행 여부 계산용 값이다.
- 날짜 형식은 `YYYY-MM`, `YYYY-MM-DD`, `YYYY.MM`, `YYYY.MM.DD`를 사용한다.
- 현재 재직 중이면 `endDate`에 `Present`를 넣는다.
- 여러 경력의 날짜 구간이 겹치면 화면에서 자동으로 `병행` 배지를 표시한다.
- 사용자가 `병행` 여부를 직접 입력하지 않는다.

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
- 회사명 공개가 애매하면 사용자 확인 후 일반명으로 바꾼다.
