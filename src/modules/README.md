# src/modules

화면 컴포넌트가 직접 처리하기에는 경계가 필요한 데이터 변환 로직을 둔다.

## 파일 책임

- `careerTimeline.ts`: `ExperienceContent`를 연혁 UI에서 사용할 view model로 변환한다.

## 경계

- 모듈은 데이터를 새로 invent하지 않는다.
- 누락된 optional 값은 화면이 깨지지 않도록 최소 fallback만 만든다.
- UI 이벤트, DOM 상태, CSS 클래스는 컴포넌트 책임이다.
