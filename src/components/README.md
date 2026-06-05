# src/components

문서형 웹 이력서를 구성하는 React 컴포넌트다.

## Files

- `Header.tsx`: 사이트 제목과 문서 성격을 표시한다.
- `ResumeDashboard.tsx`: 첫 화면의 이름, 지원 정체성, 요약, 최근 연혁, 핵심 역량을 배치한다.
- `CareerTimeline.tsx`: `기간 · 소속 · 역할 · 요약` 한 줄 행과 선택 상세 패널을 표시한다.
- `CoverLetter.tsx`: 자기소개 문단을 표시한다.
- `WorkCases.tsx`: 대표 업무 또는 프로젝트성 경력 기술을 표시한다.
- `SkillSummary.tsx`: 기술을 사용 맥락별로 표시한다.
- `Footer.tsx`: 현재 데이터 출처를 사용자용 문구로 표시한다.

## Boundary

- 컴포넌트는 전달받은 데이터를 표시한다.
- 경력 병행 계산은 `src/modules/careerTimeline.ts`가 담당한다.
- Google Sheets 호출과 fallback 판단은 `src/services`가 담당한다.
