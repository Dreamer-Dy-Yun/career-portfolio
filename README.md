# Yun Dae-Young Career Portfolio

React + TypeScript + Vite 기반의 정적 경력 포트폴리오입니다. 현재 구조는 단순 프로필이 아니라 `이력서 + 자기소개서 + 경력기술서`를 한 화면에서 빠르게 읽히게 하는 문서형 웹 이력서입니다.

## Purpose

- 첫 화면에서 지원 정체성, 핵심 요약, 최근 연혁, 주요 역량을 함께 보여준다.
- 경력 연혁은 `기간 · 소속 · 역할`만 한 줄 흐름으로 보여주고, 요약과 상세는 선택 패널에서만 표시한다.
- 시작일과 종료일을 기준으로 겹치는 경력은 자동으로 `병행` 표기한다.
- Google Sheets 데이터만 수정해 이력, 자기소개, 대표 업무, 기술 맥락을 갱신한다.

## Tech stack

- React
- TypeScript
- Vite
- GitHub Pages
- Google Sheets public CSV

## Local commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages deployment

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행되고 `dist`가 GitHub Pages로 배포됩니다.

현재 Vite base는 repository page 기준입니다.

```ts
base: '/career-portfolio/'
```

## Google Sheets content source

GitHub repository Actions variable에 아래 값 중 하나를 설정합니다.

```text
GOOGLE_SHEET_ID=<spreadsheet id>
GOOGLE_SHEET_JSON_URL=<public json endpoint>
```

`GOOGLE_SHEET_ID`를 사용할 경우 브라우저에서 읽을 수 있도록 시트가 공개 읽기 또는 웹 게시 상태여야 합니다.

필요한 시트 구조는 `docs/google-sheets-content-contract.md`를 따릅니다.

## Content safety

- 확인되지 않은 성과 수치나 과장 표현을 넣지 않는다.
- 전화번호, 주소, API URL, API key, 계약 금액, 비공개 고객 정보를 넣지 않는다.
- IT가 아닌 경력을 억지로 IT 경력처럼 포장하지 않는다.
- 경력 병행 여부는 직접 입력하지 않고 `startDate`, `endDate`로 계산한다.
