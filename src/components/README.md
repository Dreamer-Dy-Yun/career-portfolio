# src/components

문서형 웹 이력서를 구성하는 React 컴포넌트다. 스타일은 Tailwind CSS utility class로 각 컴포넌트 안에서 표현한다.

## Files

- `uiClasses.ts`: 반복되는 Tailwind class 조합을 문자열 상수로 모은다.
- `Header.tsx`: 사이트 제목과 문서 성격을 표시한다.
- `ResumeDashboard.tsx`: 첫 화면의 이름, 지원 정체성, 요약, 최근 업무, 핵심 역량을 배치한다.
- `CareerTimeline.tsx`: 중앙 축 기반 연혁, 포함 기간 branch, 선택 상세 패널, 소속별 하위 업무 펼침을 표시한다.
- `CoverLetter.tsx`: 자기소개 문단을 표시한다.
- `WorkCases.tsx`: 대표 업무 또는 프로젝트성 경력 기술을 표시한다.
- `SkillSummary.tsx`: 기술을 사용 맥락별 한 줄 row와 badge로 표시한다.
- `Footer.tsx`: 현재 데이터 출처를 사용자용 문구로 표시한다.

## Boundary

- 컴포넌트는 전달받은 데이터를 표시한다.
- 경력 병행/포함 기간 계산은 `src/modules/careerTimeline.ts`가 담당한다.
- Google Sheets 호출과 fallback 판단은 `src/services`가 담당한다.
- Tailwind class는 컴포넌트 표현 책임이며, 새 일반 CSS 파일을 추가하지 않는다.
