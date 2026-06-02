# src

React + TypeScript + Vite 소스 폴더다. 현재 화면은 `이력서 + 자기소개서 + 경력기술서`를 하나의 문서형 웹 프로필로 구성한다.

## Folders

- `components/`: 화면 구성 컴포넌트.
- `data/`: fallback content와 화면 데이터 타입.
- `modules/`: 컴포넌트 밖에서 처리할 데이터 변환 로직.
- `services/`: Google Sheets 또는 공개 JSON에서 content를 읽는 로더.
- `styles/`: 전역 CSS, 레이아웃, 반응형/프린트 스타일.

## Data flow

1. `App.tsx`가 먼저 `fallbackContent`를 렌더링한다.
2. `contentLoader`가 `VITE_GOOGLE_SHEET_JSON_URL` 또는 `VITE_GOOGLE_SHEET_ID`를 확인한다.
3. 외부 데이터가 유효하면 화면 데이터를 교체한다.
4. 경력 병행 여부는 `startDate`, `endDate` 기반으로 `src/modules/careerTimeline.ts`에서 계산한다.
5. 문의 URL 또는 이메일이 없으면 Contact 섹션은 렌더링하지 않는다.
