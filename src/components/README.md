# src/components

화면을 구성하는 React 컴포넌트 모음입니다. 각 컴포넌트는 표시 책임만 갖고, 경력 값이나 프로젝트 내용을 새로 만들지 않습니다.

## 파일 책임

- `Header.tsx`: 상단 내비게이션.
- `Hero.tsx`: 첫 화면과 사진/시각 패널 영역.
- `Section.tsx`: 공통 섹션 래퍼.
- `RoleGrid.tsx`: Position 카드.
- `OperatingPrinciples.tsx`: How I Structure Problems 작업 원칙 카드.
- `ProjectGrid.tsx`: Evidence 프로젝트 카드. Problem, Constraints, Design Decisions, Deliverables, Meaning 구조를 표시합니다.
- `CareerTimeline.tsx`: 회사, 기간, 역할 중심의 Career 타임라인.
- `SkillCloud.tsx`: Stack 그룹.
- `ContactPanel.tsx`: Google Form 또는 이메일 문의 채널.
- `Footer.tsx`: 하단 정보와 콘텐츠 출처 표시.

## 경계

- 컴포넌트는 데이터를 해석하거나 새 경력 의미를 만들지 않습니다.
- 데이터 변경은 `src/data` 또는 Google Sheets에서 처리합니다.
- 표시 구조가 바뀌면 이 문서와 관련 CSS 책임도 함께 갱신합니다.