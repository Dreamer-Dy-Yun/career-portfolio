# Google Sheets Content Contract

포트폴리오 콘텐츠는 Google Sheets에서 관리할 수 있으며, 화면은 아래 JSON 구조를 기준으로 읽습니다.

## 권장 운영 방식

1. Google Sheets에 콘텐츠를 입력합니다.
2. Apps Script 또는 공개 JSON 변환 레이어로 `PortfolioContent` JSON을 반환합니다.
3. GitHub Pages 빌드 환경에 `VITE_GOOGLE_SHEET_JSON_URL`을 설정합니다.
4. 문의는 Google Form URL을 `contact.formUrl`에 넣습니다.

## 최상위 구조

```json
{
  "siteTitle": "Yun Dae-Young Portfolio",
  "hero": {},
  "roles": [],
  "operatingPrinciples": [],
  "projects": [],
  "experiences": [],
  "skillGroups": [],
  "contact": {}
}
```

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

- 공개 JSON에는 전화번호, 주소, 내부 API URL, 계약 금액, 비공개 고객 정보를 넣지 않습니다.
- 확인되지 않은 성과 수치나 과장된 문장을 넣지 않습니다.
- 백엔드, DB, API, UI는 정체성이 아니라 업무 구조를 구현하는 수단으로 씁니다.
- Google Form URL이 확정되지 않았다면 빈 문자열로 둡니다.