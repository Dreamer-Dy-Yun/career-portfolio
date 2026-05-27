# src/services

외부 데이터 출처와 통신하는 얇은 계층이다.

## 파일 책임

- `contentLoader.ts`: `VITE_GOOGLE_SHEET_JSON_URL`이 있으면 공개 JSON 콘텐츠를 읽고, 없거나 실패하면 로컬 seed 데이터를 사용한다.

## 경계

- 이 계층은 데이터를 꾸미거나 새로운 경력 값을 만들지 않는다.
- Google Sheets 데이터 구조가 잘못되면 조용히 로컬 seed로 돌아가되, 성공한 것처럼 가짜 데이터를 만들지 않는다.
