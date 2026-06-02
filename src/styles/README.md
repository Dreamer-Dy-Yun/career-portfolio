# src/styles

전역 스타일을 책임별로 분리한다.

## 파일 책임

- `global.css`: 스타일 import 진입점.
- `tokens.css`: 색상, 배경, 경계, 그림자, 최대 콘텐츠 폭 같은 디자인 토큰.
- `base.css`: reset, 기본 타이포그래피, focus-visible 스타일.
- `layout.css`: header, hash page frame, page section 폭, hero grid, footer 같은 페이지 골격.
- `components.css`: 반복 UI 스타일 import 진입점.
- `components/`: card, carousel, project, timeline, button 같은 반복 UI의 세부 스타일.
- `responsive.css`: 모바일과 print 대응.

## 레이아웃 기준

- 데스크톱에서는 페이지 공통 컨테이너가 화면을 넓게 사용한다.
- `--max`는 넓은 화면에서 과도한 중앙 집중 레이아웃을 막기 위한 최대 폭이다.
- 각 페이지는 `PageSection`을 사용하고, 본문은 상단 정렬한다.
- 콘텐츠가 길어질 경우 전체 문서 스크롤을 허용한다.
- 모바일에서는 단일 컬럼으로 전환한다.
