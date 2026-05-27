# role-reference-map.md

## 문서 구성

- `common-rules.md`
  - 모든 역할이 가장 먼저 읽는 공통 규칙
- `orchestrator.md`
  - plan/todo 분해 및 작업 할당 규칙
- `sub-agent.md`
  - 작업 수행 및 review 작성 규칙
- `qa.md`
  - 검증, 반려, 완료 판단 기준

## 역할별 읽기/수정 범위

### Orchestrator

- 읽기 전용:
  - `PLAN-*.md`, `TODO-*.md`, `REVIEW-*.md`, `DONE*.md`
  - 변경 대상 코드/데이터 파일(요건 판단용)
- 수정 가능:
  - `mulAg/plan/*`, `mulAg/todo/*`, `mulAg/review/*`, `mulAg/done/*`
  - `role-reference-map.md`(필요 시)

### Sub-Agent (Worker)

- 읽기 전용:
  - `AGENTS.md`, `mulAg/common-rules.md`, `mulAg/role-reference-map.md`, `mulAg/sub-agent.md`, `mulAg/qa.md`
  - todo에 지정된 읽기 전용 파일
- 수정 가능:
  - 각 todo가 선언한 `수정 가능 파일` 범위만
- 생성 가능:
  - 각 todo가 선언한 `생성 가능 파일` 범위만

### QA

- 읽기 전용:
  - `plan`, `todo`, `review`, `done`, 실제 변경 파일
  - todo/review와 연관된 코드
- 수정 불가:
  - 소스 코드, 설정 파일, 테스트 파일, 산출물 파일 직접 수정 금지

## 파일 수정권 점유 규칙

- todo의 `수정 가능 파일`/`생성 가능 파일`은 해당 todo의 파일 점유권 선언으로 간주한다.
- 충돌 방지 위해 동일 파일 동시 점유는 금지한다.

## 참고

- plan/todo 상태 및 위치는 반드시 문서 ID 및 상호 참조 항목으로 연결되어야 한다.
