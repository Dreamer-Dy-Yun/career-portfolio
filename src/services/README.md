# src/services

외부 콘텐츠 출처와 통신하는 계층이다.

## 파일 책임

- `contentLoader.ts`: 콘텐츠 로딩 우선순위를 관리한다. JSON endpoint, Google Sheets table, local fallback 순서로 처리한다.
- `googleSheetTables.ts`: Google Sheets 탭별 CSV를 읽어 `PortfolioContent` 구조로 조립한다.

## 로딩 우선순위

1. `VITE_GOOGLE_SHEET_JSON_URL`이 있으면 공개 JSON endpoint를 읽는다.
2. 없으면 `VITE_GOOGLE_SHEET_ID`로 Google Sheets 탭 CSV를 읽는다.
3. 둘 다 없거나 실패하면 `src/data/portfolioContent.ts`의 local fallback seed를 사용한다.

## 경계

- 이 계층은 데이터를 새로 만들거나 경력 의미를 추론하지 않는다.
- Google Sheets 데이터 구조가 맞지 않으면 local fallback으로 돌아간다.
- 콘텐츠 계약은 `src/data/types.ts`와 `docs/google-sheets-content-contract.md`를 기준으로 한다.
