# src/components

경력 중심 공개 프로필을 구성하는 React 컴포넌트다.

## Files

- `Header.tsx`: 사이트 제목과 데이터 출처 설명을 표시한다.
- `CareerTimeline.tsx`: 경력 목록과 hover/click/focus 기반 상세 패널을 표시한다.
- `Footer.tsx`: 현재 content source를 표시한다.

## Boundary

- 컴포넌트는 전달받은 데이터를 표시한다.
- 경력 병행 계산은 `src/modules/careerTimeline.ts`가 담당한다.
- Google Sheets 호출과 fallback 판단은 `src/services`가 담당한다.
- Contact는 `App.tsx`에서 실제 채널이 있을 때만 섹션을 만든다.
