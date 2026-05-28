# src/styles

전역 스타일을 책임별로 분리합니다.

## 파일 책임

- `global.css`: CSS import 진입점.
- `tokens.css`: 색상, 배경, 그림자, 최대 폭 같은 디자인 토큰.
- `base.css`: reset, 기본 타이포그래피, focus 스타일.
- `layout.css`: header, 현재 hash page frame, hero grid, footer 같은 페이지 골격.
- `components.css`: card, carousel, project, timeline, button 같은 반복 UI.
- `responsive.css`: 모바일과 print 대응. 모바일에서는 page rolling을 풀고 일반 스크롤로 전환합니다.

## 원칙

- App은 hash page 기준으로 현재 페이지 하나만 렌더링합니다.
- 각 페이지는 `PageSection`을 사용하고, 일반 페이지 콘텐츠는 상단 정렬합니다.
- 페이지 내부 콘텐츠가 길어질 경우 해당 페이지 안에서만 스크롤합니다.
