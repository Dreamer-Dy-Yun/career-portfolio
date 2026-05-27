# src/data

포트폴리오의 기본 콘텐츠와 타입을 관리한다.

## 파일 책임

- `types.ts`: 화면 콘텐츠 계약.
- `portfolioContent.ts`: Google Sheets 연결 전 사용하는 로컬 seed 데이터.

## 콘텐츠 원칙

- 확인되지 않은 경력 해석, 성과 수치, 외부 링크를 넣지 않는다.
- 회사/기간/역할처럼 확인 가능한 사실과 사용자가 직접 제공한 프로젝트 내용만 넣는다.
- Google Sheets 연결 후에도 같은 `PortfolioContent` 구조를 유지한다.
