# src

React + TypeScript + Vite 기반 포트폴리오 소스다.

## 폴더 책임

- `components/`: 화면 구성 컴포넌트.
- `data/`: 로컬 fallback seed 데이터와 콘텐츠 타입.
- `modules/`: 컴포넌트 밖에서 관리해야 하는 데이터 변환 모듈.
- `services/`: Google Sheets table, 공개 JSON endpoint 등 외부 콘텐츠 출처 로더.
- `styles/`: 전역 CSS와 디자인 토큰.

## 데이터 흐름

1. `App.tsx`는 기본값으로 `fallbackContent`를 사용한다.
2. `VITE_GOOGLE_SHEET_JSON_URL`이 있으면 `contentLoader`가 공개 JSON 데이터를 읽는다.
3. 없으면 `VITE_GOOGLE_SHEET_ID`로 Google Sheets 탭 CSV를 읽는다.
4. Career 데이터의 `relation`은 동시 소속, 계약, 프로젝트성 참여 같은 관계 라벨로 표시된다.
5. 외부 데이터가 없거나 실패하면 `src/data/portfolioContent.ts`의 fallback seed를 사용한다.
6. Google Form URL은 콘텐츠의 `contact.formUrl` 또는 Google Sheets 데이터로 제공한다.
