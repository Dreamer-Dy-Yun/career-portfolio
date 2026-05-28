# Yun Dae-Young Career Portfolio

Version: release-2026.05

React + TypeScript + Vite 기반의 정적 커리어 포트폴리오다. 백엔드 기술 자체보다 복잡한 업무 흐름, 데이터, 검증 조건을 시스템 구조로 정리하는 역량을 보여주는 데 초점을 둔다.

## 기본 환경

- Content: Google Sheets 공개 JSON URL 또는 local fallback seed
- Contact: Google Form 또는 이메일
- Deploy: GitHub Actions + GitHub Pages
- Frontend: React, TypeScript, Vite

## 주요 화면

- Home: Workflow & Data System Designer 중심의 첫 화면
- Position: 업무 모델링, 규칙 기반 설계, 검증 중심 AI workflow, Backend / DB 구현
- Thinking Pattern: 문제를 구조화하는 방식
- Evidence: 프로젝트별 문제, 제약, 설계 판단, 산출물, 의미
- Career: 회사, 기간, 역할 중심의 이력
- Stack: Analysis / Modeling을 포함한 기술 및 업무 역량
- Contact: Google Form URL이 있을 때만 노출

## 로컬 실행

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행되고 `dist`가 GitHub Pages로 배포된다.

현재 Vite base는 repository page 기준이다.

```ts
base: '/career-portfolio/'
```

## 데이터 수정

- 기본 콘텐츠는 `src/data/portfolioContent.ts`에서 수정한다.
- 화면 콘텐츠 타입은 `src/data/types.ts`를 따른다.
- Google Sheets 연동 시 `VITE_GOOGLE_SHEET_JSON_URL` 환경 변수를 사용한다.
- Google Sheets JSON 구조는 `docs/google-sheets-content-contract.md`를 따른다.

## 콘텐츠 안전 기준

- 확인되지 않은 성과 수치, 경력 해석, 외부 링크를 넣지 않는다.
- 전화번호, 주소, 내부 URL, API key, 비공개 고객 정보는 넣지 않는다.
- Stack 항목의 출처나 숙련도를 임의로 분류하지 않는다.
- 출처나 숙련도 분류가 필요하면 사용자가 기준과 값을 먼저 확정한다.
- IT가 아닌 경력은 억지로 IT 경험처럼 포장하지 않는다.
