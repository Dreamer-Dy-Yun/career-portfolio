# src/styles

전역 스타일을 책임별로 분리한다.

## 파일 책임

- `global.css`: CSS import 진입점.
- `tokens.css`: 색상, 반경, 그림자, 최대 폭 같은 디자인 토큰.
- `base.css`: reset, 기본 타이포그래피, focus 스타일.
- `layout.css`: 헤더, 히어로, 섹션, 푸터 등 페이지 골격.
- `components.css`: 카드, 프로젝트, 타임라인, 버튼 등 반복 UI.
- `responsive.css`: 모바일과 print 대응.

## 원칙

- 줄 수보다 책임 경계를 우선한다.
- 새 섹션이 생기면 layout과 component 책임을 분리한다.
