# Yun Dae-Young Career Portfolio

React + TypeScript + Vite + Tailwind CSS 기반의 정적 경력 포트폴리오입니다. 현재 구조는 단순 프로필이 아니라 `이력서 + 자기소개서 + 경력기술서`를 한 화면에서 빠르게 읽히게 하는 문서형 웹 이력서입니다.

## Purpose

- 첫 화면에서 지원 정체성, 핵심 요약, 최근 업무, 주요 역량을 함께 보여준다.
- 경력 연혁은 `기간 · 소속 · 역할` 중심으로 압축하고, 요약과 상세는 선택 패널에서 표시한다.
- 시작일과 종료일을 기준으로 포함되는 기간은 연혁의 보조 branch로 표시한다.
- 소속을 선택하면 연결된 대표 업무가 펼쳐진다.
- Google Sheets 데이터만 수정해 이력, 자기소개, 대표 업무, 기술 맥락을 갱신한다.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
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

## Tailwind styling boundary

- `src/styles/global.css`는 Tailwind import만 담당한다.
- 레이아웃, 연혁, badge, 반응형, print 표현은 컴포넌트의 Tailwind class로 처리한다.
- 새 일반 CSS 파일을 추가하지 않는다.

## Content safety

- 확인되지 않은 성과 수치나 과장 표현을 넣지 않는다.
- 전화번호, 주소, API URL, API key, 계약 금액, 비공개 고객 정보를 넣지 않는다.
- IT가 아닌 경력을 억지로 IT 경력처럼 포장하지 않는다.
- 경력 병행/포함 기간은 직접 입력하지 않고 `startDate`, `endDate`로 계산한다.
