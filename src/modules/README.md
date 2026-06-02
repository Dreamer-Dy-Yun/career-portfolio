# src/modules

컴포넌트가 직접 처리하기에는 경계가 필요한 데이터 변환 로직을 둔다.

## Files

- `careerTimeline.ts`: `ExperienceContent`를 timeline view model로 변환한다.

## Boundary

- 이 모듈은 새 경력 내용을 만들어내지 않는다.
- `startDate`, `endDate`가 겹치는 경력을 자동으로 `isConcurrent` 상태로 계산한다.
- 날짜가 없거나 파싱할 수 없으면 병행 계산에서 제외한다.
- UI 이벤트, DOM 상태, CSS class는 컴포넌트 책임이다.
