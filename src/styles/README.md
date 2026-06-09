# src/styles

포트폴리오 화면 스타일을 책임 단위로 나눈다.

## Files

- `global.css`: CSS import 진입점.
- `tokens.css`: 색상, 배경, 간격, 최대 폭 등 디자인 토큰.
- `base.css`: reset, 기본 타이포그래피, focus-visible.
- `layout.css`: 전체 페이지, 첫 화면 dashboard, 문서 섹션, 헤더/푸터 레이아웃.
- `components.css`: 공통 텍스트, 태그, 버튼, 섹션 제목 스타일.
- `timeline.css`: 연혁의 메인 축, 좌우 배치, 병행/포함 branch 표현, 상세 패널.
- `timeline-projects.css`: 연혁에서 회사 클릭 시 펼쳐지는 하위 업무/프로젝트 목록.
- `document.css`: 자기소개, 대표 업무, 기술 맥락 등 일반 문서형 섹션.
- `responsive.css`: 모바일과 print 대응.

## Timeline rules

- 데스크톱에서는 중앙 축을 기준으로 연혁을 좌우 교차 배치한다.
- 선과 점은 같은 축을 공유해야 하며, 임의 offset으로 분리하지 않는다.
- 포함 기간은 Git graph처럼 짧은 side lane과 작은 점으로 표현한다.
- 같은 레벨의 병행 경력은 곁가지가 아니라 `병행` 상태로 남긴다.
- 모바일에서는 중앙 축을 단일 좌측 축으로 접고, branch lane도 본문 아래로 접는다.

## Boundary rules

- 프로젝트 펼침 스타일은 `timeline-projects.css`에 둔다.
- 연혁 계산 로직은 `src/modules/careerTimeline.ts`에서 처리하고 CSS에서 데이터를 추정하지 않는다.
- 데이터가 추가되어도 HTML을 직접 늘리지 않고 `PortfolioContent` 데이터로 렌더링한다.
