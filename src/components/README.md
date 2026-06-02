# src/components

화면을 구성하는 React 컴포넌트 모음이다. 컴포넌트는 전달받은 데이터를 표시하고, 경력 의미나 성과를 새로 만들지 않는다.

## 파일 책임

- `Header.tsx`: 상단 내비게이션. `#/page-id` hash page 링크와 현재 페이지 표시를 담당한다.
- `PageSection.tsx`: 한 화면 단위의 공통 페이지 레이아웃.
- `Hero.tsx`: 첫 화면의 이름, 타이틀, 설명, 사진 자리 표시 영역.
- `CardCarousel.tsx`: 카드 묶음을 일정 시간마다 전환하는 공통 carousel.
- `RoleGrid.tsx`: Position 카드 표시.
- `OperatingPrinciples.tsx`: Thinking Pattern 카드 표시.
- `ProjectGrid.tsx`: Evidence 프로젝트 카드 표시.
- `CareerTimeline.tsx`: 회사, 기간, 역할 목록과 hover/click/focus 기반 상세 패널 표시.
- `SkillCloud.tsx`: Stack 그룹을 왼쪽 분류명과 오른쪽 배지 목록 형태로 표시한다. 항목 출처나 숙련도는 임의로 표시하지 않는다.
- `ContactPanel.tsx`: Google Form 또는 이메일 문의 채널 표시. 채널이 없으면 App에서 페이지 자체를 숨긴다.
- `Footer.tsx`: 하단 정보와 콘텐츠 출처 표시.

## 경계

- 컴포넌트는 데이터를 해석하거나 새로운 경력 의미를 만들지 않는다.
- 데이터 변경은 `src/data` 또는 Google Sheets에서 처리한다.
- 페이지 단위 레이아웃은 `PageSection.tsx`, `App.tsx`, `src/styles/layout.css`가 책임진다.
- 카드 반복 UI는 `CardCarousel.tsx`와 `src/styles/components.css`가 책임진다.
