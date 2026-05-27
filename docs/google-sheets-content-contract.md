# Google Sheets Content Contract

포트폴리오 콘텐츠는 Google Sheets에서 관리하되, 화면은 아래 JSON 구조를 기대한다.

## 권장 운영 방식

1. Google Sheets에 콘텐츠를 입력한다.
2. Apps Script 또는 공개 JSON 변환 레이어로 `PortfolioContent` JSON을 반환한다.
3. GitHub Pages 빌드 환경에 `VITE_GOOGLE_SHEET_JSON_URL`을 설정한다.
4. 문의는 Google Form URL을 `contact.formUrl`에 넣는다.

## 최상위 구조

```json
{
  "siteTitle": "Yun Dae-Young Portfolio",
  "hero": {},
  "roles": [],
  "projects": [],
  "experiences": [],
  "skillGroups": [],
  "contact": {}
}
```

## 주의

- 공개 JSON에는 전화번호, 주소, 내부 API URL, 계약 금액, 비공개 고객 정보를 넣지 않는다.
- 확인되지 않은 성과 수치나 과장된 문장을 넣지 않는다.
- Google Form URL이 확정되지 않았으면 빈 문자열로 둔다.
