# src/data

화면 데이터 타입과 기본 경력 데이터를 둔다.

## Files

- `types.ts`: 이력서, 자기소개서, 경력기술서 화면의 데이터 계약.
- `portfolioContent.ts`: Google Sheets 연결 실패 또는 미설정 시 사용하는 기본 경력 데이터.

## Content rules

- 기본 경력 데이터는 확인 가능한 최소 경력 정보만 넣는다.
- IT가 아닌 경력을 억지로 IT 경력처럼 바꾸지 않는다.
- 전화번호, 주소, 비공개 고객 정보, API URL, API key를 넣지 않는다.
- 확인되지 않은 성과 수치나 과장 표현을 넣지 않는다.
- 경력 병행 여부는 `startDate`, `endDate`로 계산하므로 직접 입력하지 않는다.

## Main structures

- `hero`: 첫 화면 이름, 타이틀, 한 줄 설명, 키워드.
- `profileSummary`: 이력서형 핵심 요약과 강점.
- `selfIntroduction`: 자기소개 문단.
- `experiences`: 회사, 기간, 역할, 한 줄 요약, 상세, 태그.
- `workCases`: 대표 업무 또는 프로젝트성 경력 기술. `company`가 `experiences.company`와 일치하면 연혁 하위 프로젝트로 연결된다.
- `skillGroups`: 기술 사용 맥락.
- `contact`: Google Form 또는 이메일.
