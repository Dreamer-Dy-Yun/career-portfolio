# Yun Dae-Young Career Portfolio

Version: release-2026.05

React + TypeScript + Vite 기반의 정적 싱글 페이지 포트폴리오입니다. 포지셔닝은 단순 기술 스택보다 불명확한 업무, 데이터, 검증, 운영 조건을 실행 가능한 시스템 구조로 전환하는 능력을 중심에 둡니다.

## 기본 환경

- 콘텐츠 관리: Google Sheets 공개 JSON URL
- 문의 접수: Google Form 또는 이메일
- 배포: GitHub Actions + GitHub Pages
- 프론트엔드: React, TypeScript, Vite

## 주요 섹션

- Hero: Business System Design 중심의 첫 화면
- Position: 지원 역할과 역할별 근거
- How I Work: 업무를 시스템 구조로 바꾸는 작업 원칙
- Evidence: 프로젝트별 Inputs, Design Decisions, Outputs
- Career: 회사, 기간, 역할 중심 경력
- Stack: Analysis / Design을 포함한 기술·업무 역량
- Contact: Google Form 또는 이메일 연결

## 로컬 실행

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Google Sheets 연결

`VITE_GOOGLE_SHEET_JSON_URL` 환경 변수를 설정하면 앱이 공개 JSON 콘텐츠를 읽습니다. 설정하지 않으면 `src/data/portfolioContent.ts`의 fallback seed 데이터를 사용합니다.

Google Sheets 데이터도 `src/data/types.ts`의 `PortfolioContent` 구조를 따라야 합니다. `operatingPrinciples`는 없을 경우 fallback 데이터를 사용합니다.

## GitHub Pages 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행되고 `dist`가 GitHub Pages로 배포됩니다.

현재 Vite base는 repository page 기준입니다.

```ts
base: '/career-portfolio/'
```

## 콘텐츠 안전 기준

- 확인되지 않은 경력 해석, 성과 수치, 외부 링크를 넣지 않습니다.
- 전화번호, 주소, 내부 URL, API key, 비공개 고객 정보는 넣지 않습니다.
- 프로젝트는 기능 나열보다 입력 데이터, 제약, 설계 결정, 결과 구조를 중심으로 작성합니다.
- IT가 아닌 경력은 억지로 IT 경험으로 포장하지 않습니다.