# Google Sheets Content Contract

포트폴리오 콘텐츠는 Google Sheets를 원본으로 사용할 수 있다. 앱은 `VITE_GOOGLE_SHEET_ID`가 있으면 아래 탭을 CSV로 읽어 `PortfolioContent`로 조립한다.

## 연결 방식

GitHub repository의 Actions variable에 아래 값을 설정한다.

```text
GOOGLE_SHEET_ID=<spreadsheet id>
```

배포 workflow는 이 값을 `VITE_GOOGLE_SHEET_ID`로 전달한다.

시트는 브라우저에서 읽을 수 있어야 하므로 공개 읽기 또는 웹 게시 상태여야 한다. 비공개 시트는 GitHub Pages에서 직접 읽을 수 없다.

## 탭 구조

필수 탭:

- `Meta`
- `Hero`
- `Roles`
- `OperatingPrinciples`
- `Projects`
- `Experiences`
- `SkillGroups`
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
| subtitle | ... |
| description | ... |
| chips | Workflow Modeling\|Data Boundary Design |

## Roles

| title | description | focus |
|---|---|---|
| Workflow & Data Modeling | ... | input / state / output boundary\|validation flow |

## OperatingPrinciples

| title | description |
|---|---|
| Input, state, output first | ... |

## Projects

| title | period | role | summary | problem | constraints | decisions | deliverables | meaning | stack |
|---|---|---|---|---|---|---|---|---|---|
| Project title | 2025 | Role | Summary | Problem | A\|B | A\|B | A\|B | Meaning | Python\|PostgreSQL |

## Experiences

| company | period | role | relation | summary | details | tags |
|---|---|---|---|---|---|---|
| Company | 2025 | Role | Concurrent | One sentence summary | Detail A\|Detail B | Tag A\|Tag B |

`relation`은 `Primary`, `Concurrent`, `Contract`, `Project`, `Part-time`처럼 소속 관계를 표시할 때 사용한다. 비워두면 표시하지 않는다.

`summary`, `details`, `tags`는 연혁 상세 패널에 표시된다. 값이 비어 있으면 화면은 `company`, `period`, `role`만으로 기본 표시한다.

## SkillGroups

| title | items |
|---|---|
| Database | PostgreSQL\|SQLAlchemy\|Schema design |

## Contact

| field | value |
|---|---|
| formUrl |  |
| email |  |
| note |  |

## 주의

- 공개 시트에는 전화번호, 주소, 내부 API URL, 계약 금액, 비공개 고객 정보를 넣지 않는다.
- 확인되지 않은 성과 수치나 과장된 문장을 넣지 않는다.
- Stack 항목의 출처나 숙련도를 임의로 분류하지 않는다.
- Google Form URL이 확정되지 않았다면 `Contact.formUrl`은 빈 값으로 둔다.
