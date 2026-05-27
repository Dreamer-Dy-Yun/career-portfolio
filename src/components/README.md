# src/components

화면을 구성하는 React 컴포넌트 모음이다.

## 파일 책임

- `Header.tsx`: 상단 내비게이션.
- `Hero.tsx`: 첫 화면과 사진 영역.
- `Section.tsx`: 공통 섹션 래퍼.
- `RoleGrid.tsx`: 지원 포지션 카드.
- `ProjectGrid.tsx`: 프로젝트 근거 카드.
- `CareerTimeline.tsx`: 회사, 기간, 역할 중심의 경력 타임라인.
- `SkillCloud.tsx`: 기술 스택 그룹.
- `ContactPanel.tsx`: Google Form 또는 이메일 문의 채널.
- `Footer.tsx`: 하단 정보와 콘텐츠 출처 표시.

## 경계

- 컴포넌트는 경력 값을 새로 만들지 않는다.
- 데이터 변경은 `src/data` 또는 Google Sheets에서 처리한다.
