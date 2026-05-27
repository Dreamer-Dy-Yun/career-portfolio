# src

React + TypeScript + Vite 기반의 단일 페이지 포트폴리오 소스이다.

## 폴더 책임

- `components/`: 화면 구성 컴포넌트.
- `data/`: 로컬 seed 데이터와 콘텐츠 타입.
- `services/`: Google Sheets 등 외부 콘텐츠 출처 로더.
- `styles/`: 전역 CSS와 디자인 토큰.

## 데이터 흐름

1. `App.tsx`가 기본 콘텐츠로 `fallbackContent`를 사용한다.
2. `VITE_GOOGLE_SHEET_JSON_URL`이 있으면 `contentLoader`가 공개 JSON 데이터를 읽는다.
3. 실패하거나 구조가 맞지 않으면 로컬 seed를 유지한다.
4. Google Form URL은 콘텐츠의 `contact.formUrl` 또는 Google Sheets 데이터로 제공한다.
