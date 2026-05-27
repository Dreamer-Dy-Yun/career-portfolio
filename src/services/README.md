# src/services

외부 콘텐츠 출처와 통신하는 얇은 계층입니다.

## 파일 책임

- `contentLoader.ts`: `VITE_GOOGLE_SHEET_JSON_URL`이 있으면 공개 JSON 콘텐츠를 읽고, 없거나 실패하면 로컬 seed 데이터를 사용합니다.

## 경계

- 이 계층은 데이터를 꾸미거나 새로운 경력 값을 만들지 않습니다.
- Google Sheets 데이터 구조가 맞지 않으면 조용히 로컬 seed로 돌아가지만, 성공처럼 가짜 데이터를 만들지 않습니다.
- 콘텐츠 계약은 `src/data/types.ts`와 `docs/google-sheets-content-contract.md`를 기준으로 합니다.