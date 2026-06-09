# src/styles

Tailwind CSS 진입점만 둔다.

## Files

- `global.css`: Tailwind CSS를 import하는 전역 CSS 진입점.

## Boundary

- 화면 레이아웃, 카드, 배지, 연혁 축, 반응형, print 대응은 React 컴포넌트의 Tailwind class로 표현한다.
- 이 폴더에는 별도 디자인 토큰 CSS, 컴포넌트 CSS, timeline CSS를 두지 않는다.
- Tailwind로 처리하기 어려운 예외가 생기면 먼저 컴포넌트 경계와 데이터 구조를 재검토한다.
