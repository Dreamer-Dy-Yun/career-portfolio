# Yun Dae-Young Career Portfolio

Version: rebuild-2026.05

React + TypeScript + Vite 기반의 정적 단일 페이지 포트폴리오입니다.

## 기본 환경

- 콘텐츠 관리: Google Sheets 공개 JSON URL
- 문의 접수: Google Form 또는 이메일
- 배포: GitHub Actions + GitHub Pages
- 프론트엔드: React, TypeScript, Vite

## 로컬 실행

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Google Sheets 연결

`VITE_GOOGLE_SHEET_JSON_URL` 환경 변수를 설정하면 런타임에 공개 JSON 콘텐츠를 읽습니다.
설정하지 않으면 `src/data/portfolioContent.ts`의 로컬 seed 데이터를 사용합니다.

자세한 구조는 `docs/google-sheets-content-contract.md`를 기준으로 합니다.

## GitHub Pages 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행되고 `dist`가 GitHub Pages로 배포됩니다.

현재 Vite base는 repository page 기준입니다.

```ts
base: '/career-portfolio/'
```

## 콘텐츠 원칙

- 확인되지 않은 경력 해석을 쓰지 않습니다.
- 가짜 성과 수치와 외부 링크를 넣지 않습니다.
- 비공개 고객 정보, 전화번호, 주소, 내부 URL, API key를 넣지 않습니다.
- 경력 상세는 실제 이력 원문이 확보된 뒤 추가합니다.
