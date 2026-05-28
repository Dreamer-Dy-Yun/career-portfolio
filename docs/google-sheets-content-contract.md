# Google Sheets Content Contract

포트폴리오 콘텐츠는 Google Sheets에서 관리할 수 있으며, 화면은 아래 JSON 구조를 기준으로 읽는다.

## 운영 방식

1. Google Sheets에 콘텐츠를 입력한다.
2. Apps Script 또는 공개 JSON 변환 레이어로 `PortfolioContent` JSON을 반환한다.
3. GitHub Pages 빌드 환경에 `VITE_GOOGLE_SHEET_JSON_URL`을 설정한다.
4. 문의는 Google Form URL을 `contact.formUrl`에 넣는다.

## 최상위 구조

```json
{
  "siteTitle": "Yun Dae-Young's Portfolio",
  "hero": {},
  "roles": [],
  "operatingPrinciples": [],
  "projects": [],
  "experiences": [],
  "skillGroups": [],
  "contact": {}
}
```

## SkillGroup 구조

```json
{
  "title": "Database",
  "items": ["PostgreSQL", "SQLAlchemy", "Schema design"]
}
```

`items`는 기본적으로 문자열 배열을 사용한다. 출처, 숙련도, AI 도움 여부는 사용자가 명시적으로 확인한 경우에만 별도 필드로 확장한다.

## ProjectContent 구조

```json
{
  "title": "Project title",
  "period": "2025",
  "role": "Workflow Modeling / Backend / DB / UI",
  "summary": "One sentence summary",
  "problem": "Problem situation",
  "constraints": ["Constraint 1"],
  "decisions": ["Design decision 1"],
  "deliverables": ["Deliverable 1"],
  "meaning": "Why this project matters",
  "stack": ["Python", "PostgreSQL"]
}
```

## 주의

- 공개 JSON에는 전화번호, 주소, 내부 API URL, 계약 금액, 비공개 고객 정보를 넣지 않는다.
- 확인되지 않은 성과 수치나 과장된 문장을 넣지 않는다.
- Backend, DB, API, UI는 업무 구조를 구현하는 수단으로 적는다.
- Google Form URL이 확정되지 않았다면 빈 문자열로 둔다.
- Google Form URL이 비어 있으면 Contact 페이지는 표시하지 않는다.
