# Yun Dae-Young Career Portfolio

Version: focused-career-layout

React + TypeScript + Vite 기반의 정적 경력 포트폴리오입니다. 현재 버전은 장식적인 섹션을 줄이고, 경력 타임라인과 Google Sheets 기반 데이터 갱신 흐름에 집중합니다.

## Purpose

- 경력을 첫 화면에서 바로 확인할 수 있게 한다.
- 시작일과 종료일을 기준으로 겹치는 소속은 자동으로 병행 표기한다.
- HTML/TSX를 직접 수정하지 않고 Google Sheets 데이터 변경으로 공개 내용을 갱신할 수 있게 한다.
- Google Form 또는 이메일이 등록되기 전에는 문의 영역을 표시하지 않는다.

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

## Data update guide

- `Meta`: 사이트 제목.
- `Hero`: 이름, 포지션, 설명, 키워드.
- `Experiences`: 회사, 기간, 시작일, 종료일, 역할, 상세 설명, 태그.
- `Contact`: Google Form URL 또는 이메일. 값이 없으면 문의 영역을 표시하지 않음.

## Content safety

- 확인되지 않은 성과 수치나 과장 표현을 넣지 않는다.
- 전화번호, 주소, API URL, API key, 계약 금액, 비공개 고객 정보를 넣지 않는다.
- IT가 아닌 경력을 억지로 IT 경력처럼 포장하지 않는다.
- 경력 병행 여부는 직접 입력하지 않고 `startDate`, `endDate`로 계산한다.
