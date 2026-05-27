# orchestrator.md

## plan 참조 규칙

1. `mulAg/md/plan/active/`의 plan을 읽는다.
2. plan을 바탕으로 todo를 분해한다.
3. plan은 상태를 `active`로 두고, todo가 모두 완결되면 `plan/done/` 또는 `plan/archived/`로 이동한다.

## todo 작성 규칙

todo 템플릿 필수 항목:

- 문서 ID
- 상태
- 참조 plan
- 목적
- 작업 범위
- 선행 조건
- 수정 가능 파일
- 생성 가능 파일
- 읽기 전용 파일
- 수정 금지 파일
- 입력
- 출력
- 작업 단계
- 완료 기준
- 검증 기준

## 작업 경계 정의

- 한 todo는 명확한 책임 경계를 가진다.
- 파일 충돌이 예상되면 단일 todo로 통합하거나 순차 배치한다.
- 공통 영향 파일(`README.md`, 배포 설정 등)은 필요 시 단일 todo에서만 다룬다.

## 파일 접근 권한 정의

- Sub-Agent에 할당할 때 수정 파일/생성 파일은 독점적으로 점유한다.
- TODO에 지정되지 않은 파일은 작업 범위 밖이다.

## 선행 조건 정의

- 선행 todo가 완료/검토 되지 않으면 후속 todo는 할당하지 않는다.
- 배포/설정 변경은 필요한 경우 사전 점검(배포 규칙 준수) 포함.

## 병렬 작업 가능 조건

다음이 모두 충족될 때만 병렬 배정한다.

- 수정 파일이 겹치지 않음
- 생성 파일이 겹치지 않음
- 서로 입력/출력 의존이 없음
- 동일 진입점/공통 영향 파일 동시 수정 없음

## Sub-Agent 충돌 방지 규칙

- 동일 파일 동시 편집 금지
- todo 외 작업은 review에 이슈로 기록
- 충돌 의심 시 작업 즉시 blocked 처리 및 Orchestrator 재할당

## 문서 상태 관리

- todo: `pending → assigned → running → review → done/rejected/blocked/canceled`
- plan: `active/done/archived`
- review: 승인 시 `mulAg/md/done/`로 이동, 반려 시 `mulAg/md/review/rejected/`
