# src/styles

전역 스타일을 책임 단위로 나눈다.

## Files

- `global.css`: CSS import 진입점.
- `tokens.css`: 색상, 배경, 간격, 최대 폭 토큰.
- `base.css`: reset, 기본 타이포그래피, focus-visible.
- `layout.css`: 전체 페이지, 헤더, 히어로, 섹션, 푸터 레이아웃.
- `components.css`: 타임라인, 태그, 링크 등 화면 구성 요소 스타일.
- `responsive.css`: 모바일과 print 대응.

## Rules

- 화면은 넓게 쓰되, 읽기 폭과 타임라인 구조를 유지한다.
- 과한 카드 경계와 섀도우는 사용하지 않는다.
- 모바일에서는 타임라인을 단일 컬럼으로 단순화한다.
- 프린트에서는 배경과 장식을 제거하고 경력 정보가 읽히게 한다.
