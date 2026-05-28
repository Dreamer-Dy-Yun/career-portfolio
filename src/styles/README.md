# src/styles

전역 스타일을 책임별로 분리합니다.

## 파일 책임

- `global.css`: CSS import 진입점.
- `tokens.css`: 색상, 배경, 그림자, 최대 폭 같은 디자인 토큰.
- `base.css`: reset, 기본 타이포그래피, focus 스타일, 데스크톱 scroll-snap 설정.
- `layout.css`: header, page rolling section, hero grid, footer 같은 페이지 골격.
- `components.css`: card, carousel, project, timeline, button 같은 반복 UI.
- `responsive.css`: 모바일과 print 대응. 모바일에서는 page rolling을 풀고 일반 스크롤로 전환합니다.

## 원칙

- 데스크톱은 `PageSection` 단위로 화면이 하나씩 걸리는 scroll-snap 구조를 사용하고, 일반 섹션 콘텐츠는 상단 정렬합니다.
- 모바일은 콘텐츠 길이와 터치 사용성을 우선해 일반 세로 스크롤을 사용합니다.
- 새 섹션이 생기면 `PageSection`을 사용하고, 섹션 자체 레이아웃과 내부 카드 스타일을 분리합니다.
