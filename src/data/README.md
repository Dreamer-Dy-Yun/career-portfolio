# src/data

화면 데이터 타입과 local fallback seed를 둔다.

## Files

- `types.ts`: 공개 프로필 화면의 데이터 계약.
- `portfolioContent.ts`: Google Sheets 연결 실패 또는 미설정 시 사용하는 fallback 데이터.

## Content rules

- fallback 데이터는 확인 가능한 최소 경력 정보만 넣는다.
- IT가 아닌 경력을 억지로 IT 경력처럼 바꾸지 않는다.
- 전화번호, 주소, 비공개 고객 정보, API URL, API key를 넣지 않는다.
- 확인되지 않은 성과 수치나 과장 표현을 넣지 않는다.
- 경력 병행 여부는 `startDate`, `endDate`로 계산하므로 직접 입력하지 않는다.

## Experience fields

- `company`: 소속명.
- `period`: 화면 표시용 기간.
- `startDate`, `endDate`: 병행 여부 계산용 날짜.
- `role`: 당시 역할.
- `summary`, `details`, `tags`: 상세 패널 표시용 선택 데이터.
