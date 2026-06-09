# src/services

외부 content source와 통신하는 계층이다.

## Files

- `contentLoader.ts`: 공개 JSON, Google Sheets, 기본 경력 데이터의 로딩 우선순위를 관리한다.
- `googleSheetTables.ts`: Google Sheets CSV 탭을 읽어 `PortfolioContent`로 조립한다.

## Loading order

1. `VITE_GOOGLE_SHEET_JSON_URL`
2. `VITE_GOOGLE_SHEET_ID`
3. `src/data/portfolioContent.ts`

## Boundary

- 이 계층은 데이터를 새로 발명하지 않는다.
- 외부 데이터 구조가 맞지 않거나 `???`, replacement character 같은 깨진 문자열이 감지되면 기본 경력 데이터로 돌아간다.
- Google Sheets 계약은 `docs/google-sheets-content-contract.md`를 따른다.
