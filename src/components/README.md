# src/components

화면을 구성하는 React 컴포넌트 모음입니다. 각 컴포넌트는 표시 책임만 갖고, 경력 값이나 프로젝트 내용을 새로 만들지 않습니다.

## 파일 책임

- `Header.tsx`: 상단 내비게이션. `#/page-id` hash page 링크를 사용하고 현재 페이지를 `aria-current="page"`로 표시합니다.
- `PageSection.tsx`: 한 화면 단위 페이지 공통 컴포넌트. App은 현재 선택된 페이지 하나만 렌더링합니다.
- `Hero.tsx`: 첫 화면 내부 콘텐츠와 사진/시각 패널 영역.
- `CardCarousel.tsx`: 카드 묶음을 일정 시간마다 전환하는 공통 carousel. `itemsPerPage`로 한 화면에 보일 카드 수를 조정합니다.
- `RoleGrid.tsx`: Position 카드를 carousel로 표시합니다.
- `OperatingPrinciples.tsx`: How I Structure Problems 작업 원칙 카드를 carousel로 표시합니다.
- `ProjectGrid.tsx`: Evidence 프로젝트 카드를 carousel로 표시합니다. Problem, Constraints, Design Decisions, Deliverables, Meaning 구조를 사용합니다.
- `CareerTimeline.tsx`: 회사, 기간, 역할 중심의 Career 타임라인.
- `SkillCloud.tsx`: Stack 그룹을 carousel로 표시합니다. `direct`와 `ai-assisted` 항목을 구분합니다.
- `ContactPanel.tsx`: Google Form 중심 문의 채널. Google Form URL이 없으면 App에서 섹션 자체를 렌더링하지 않습니다.
- `Footer.tsx`: 하단 정보와 콘텐츠 출처 표시.

## 경계

- 컴포넌트는 데이터를 해석하거나 새 경력 의미를 만들지 않습니다.
- 데이터 변경은 `src/data` 또는 Google Sheets에서 처리합니다.
- 페이지 단위 레이아웃은 `PageSection.tsx`, `App.tsx`, `src/styles/layout.css`가 책임집니다.
- 카드 반복 UI는 `CardCarousel.tsx`와 `src/styles/components.css`가 책임집니다.
