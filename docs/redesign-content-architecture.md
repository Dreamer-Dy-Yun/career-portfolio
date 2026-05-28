# 포트폴리오 재설계 콘텐츠 구조 상세 계획

## 1. 문서 목적

이 문서는 현재 포트폴리오 재설계 방향을 바탕으로, 실제 이력 원문이 부족한 상태에서도 과장 없이 작성 가능한 콘텐츠 구조를 정의한다.

목표는 다음과 같다.

- 확인된 사실과 미확정 정보를 분리한다.
- 채용 담당자와 기술 검토자가 빠르게 역할 적합성을 판단할 수 있게 한다.
- 제조 QA, 일본 IT 운영, 자동화 QA, 백엔드 데이터 업무 흐름을 억지로 하나의 전문 경력처럼 포장하지 않는다.
- 프로젝트 설명은 성과 과장보다 입력 데이터, 제약, 설계 선택, 결과물 중심으로 작성한다.
- Google Sheets를 단순 CMS로 사용할 수 있도록 콘텐츠 필드와 컬럼 초안을 정리한다.

## 2. 작성 원칙

- 실제 원문 이력, 공개 가능한 프로젝트 정보, 사용 기술 근거가 확인된 항목만 확정 문장으로 작성한다.
- 확인되지 않은 성과 수치, 고객명, 비용, 매출, 계약 정보, 내부 시스템명은 쓰지 않는다.
- 비IT 경력은 IT 경력으로 변환하지 않고, 업무 감각과 운영 경험으로 연결한다.
- 기술명은 나열보다 어떤 데이터나 흐름을 다루는 데 사용했는지를 함께 설명한다.
- 백엔드, 데이터 파이프라인, OCR/LLM, 자동화 경험은 "전문가"가 아니라 "업무 흐름을 실행 가능한 시스템 구조로 정리하는 방향성"으로 표현한다.
- 실제 이력 입력 전까지는 강한 주장보다 검증 가능한 구조와 책임 범위를 보여준다.

## 3. 정체성 문장 후보 3개

### 후보 A

현장 업무와 운영 데이터를 이해하고, 이를 백엔드 API, 데이터베이스, 자동화 흐름으로 정리하는 개발자입니다.

- 장점: 기존 제조 QA, IT 운영, 자동화, 백엔드 프로젝트를 무리 없이 연결한다.
- 주의: "개발자" 표현을 쓰므로 실제 개발 프로젝트 근거가 프로젝트 섹션에서 받쳐줘야 한다.

### 후보 B

업무 절차와 데이터 흐름을 구조화해, 검증 가능한 백엔드 시스템과 자동화 도구로 구현하는 사람입니다.

- 장점: 과장된 전문성보다 문제 정리와 구현 능력을 강조한다.
- 주의: 다소 포괄적이므로 Hero 하단의 키워드로 Backend, Data Pipeline, OCR/LLM Workflow를 보완한다.

### 후보 C

제조 QA와 IT 운영 경험을 바탕으로, 입력 데이터와 제약 조건을 명확히 다루는 백엔드·데이터 파이프라인 개발을 지향합니다.

- 장점: 비IT 경력을 숨기지 않고 현재 방향과 연결한다.
- 주의: "지향"이라는 표현은 안전하지만 약하게 보일 수 있어 프로젝트 카드에서 실제 구현 내용을 구체화해야 한다.

## 4. 섹션별 콘텐츠 필드

### 4.1 Hero

목적: 첫 화면에서 이 사람이 어떤 역할에 맞는지 빠르게 판단하게 한다.

필드:

- `name`: 이름
- `headline`: 정체성 문장 1개
- `summary`: 2줄 이내의 보조 설명
- `keywords`: 핵심 키워드 4~5개
- `profileImageUrl`: 프로필 이미지 URL 또는 로컬 경로
- `profileImageAlt`: 이미지 대체 텍스트
- `primaryActionLabel`: 주요 버튼 문구
- `primaryActionUrl`: 문의 또는 이력서 링크
- `secondaryActionLabel`: 보조 버튼 문구
- `secondaryActionUrl`: 프로젝트 섹션 이동 또는 GitHub 링크

작성 기준:

- `headline`은 "최고", "전문가", "완벽" 같은 자기평가형 단어를 피한다.
- `summary`는 실제 경력 축을 설명하되, 확인되지 않은 성과 수치를 넣지 않는다.
- `keywords`는 화면 태그처럼 보이되 과도하게 많지 않게 유지한다.

### 4.2 Work Positioning

목적: 지원 가능한 역할과 업무 맥락을 구분한다.

카드 필드:

- `title`: 역할 이름
- `shortLabel`: 짧은 화면 표시명
- `description`: 어떤 업무 상황에 맞는지 설명
- `evidenceRefs`: 근거가 되는 프로젝트 또는 경력 ID 목록
- `relatedSkills`: 관련 기술 키워드
- `limits`: 아직 강하게 주장하지 않을 범위

권장 카드:

- Backend / Data Pipeline
- System Design-oriented Developer
- OCR / LLM Workflow
- Automation Refactoring

작성 기준:

- 역할 카드는 직무 자격증명처럼 쓰지 않는다.
- `limits`에 "대규모 트래픽 운영 경험은 실제 근거 입력 전까지 주장하지 않음"처럼 경계도 기록한다.

### 4.3 Project Evidence

목적: 가장 중요한 섹션으로, 포트폴리오의 주장 근거를 제공한다.

프로젝트 필드:

- `id`: 프로젝트 고유 ID
- `title`: 프로젝트명
- `period`: 기간
- `role`: 담당 역할
- `context`: 프로젝트 배경
- `inputData`: 입력 데이터 또는 다룬 자료
- `constraints`: 제약 조건
- `problem`: 해결하려던 문제
- `designChoices`: 설계 선택
- `implementation`: 구현한 기능 또는 모듈
- `output`: 결과물
- `validation`: 검증 방식
- `techStack`: 사용 기술
- `publicScope`: 공개 가능한 범위
- `privateNotes`: 공개 금지 또는 내부 참고 메모
- `links`: GitHub, 배포 URL, 문서 링크
- `status`: 진행 상태

작성 기준:

- `problem`, `constraints`, `designChoices`, `validation`을 우선 작성한다.
- `output`은 "자동화 완료"보다 "어떤 입력을 받아 어떤 형태로 출력했는지"를 쓴다.
- `validation`이 없으면 "검증 방식 입력 필요"로 남긴다.
- 고객명, 내부 데이터, 실제 운영 수치는 공개 가능 여부가 확인되기 전까지 제외한다.

### 4.4 Career Timeline

목적: 실제 이력을 과장 없이 시간순으로 보여준다.

경력 필드:

- `company`: 회사명
- `period`: 기간
- `position`: 직책 또는 역할
- `domain`: 업무 도메인
- `summary`: 1~2줄 요약
- `responsibilities`: 담당 업무 목록
- `workSignals`: 현재 개발 방향과 연결되는 업무 감각
- `techOrTools`: 사용 도구 또는 기술
- `publicDetailLevel`: 공개 상세 수준
- `needsSourceText`: 원문 이력 입력 필요 여부

작성 기준:

- 제조 QA는 품질 기준, 검증 절차, 현장 문제 인식으로 연결한다.
- 일본 IT 운영은 운영 환경, 절차, 커뮤니케이션, 장애 대응 흐름으로 연결한다.
- 자동화 QA는 반복 업무 분석, 테스트 흐름, 프로젝트 수행 경험으로 연결한다.
- 백엔드 관련 회사 또는 프로젝트는 데이터 흐름, API, DB, 검증 책임 중심으로 작성한다.

### 4.5 Skill Stack

목적: 기술 나열이 아니라 업무 맥락과 연결된 역량 지도를 제공한다.

스킬 그룹 필드:

- `groupName`: 기술 그룹명
- `summary`: 해당 그룹을 어떤 업무에 사용했는지 설명
- `skills`: 기술명 목록
- `evidenceRefs`: 근거 프로젝트 또는 경력 ID
- `confidence`: 근거 수준
- `displayOrder`: 표시 순서

권장 그룹:

- Backend / API
- Data / Database
- OCR / LLM
- Frontend
- Automation / QA
- Communication / Operations

작성 기준:

- `confidence`는 `used`, `learning`, `supporting` 정도로 구분한다.
- 실제 사용 근거가 없는 기술은 메인 스택으로 올리지 않는다.
- 기술 로고 나열보다 어떤 문제를 다뤘는지 함께 표시한다.

### 4.6 Contact

목적: 개인정보 노출을 줄이고 문의 경로만 명확히 제공한다.

필드:

- `email`: 공개 이메일
- `formUrl`: Google Form URL
- `githubUrl`: GitHub URL
- `linkedinUrl`: LinkedIn 또는 외부 프로필 URL
- `resumeUrl`: 이력서 파일 또는 문서 URL
- `message`: 문의 안내 문구

작성 기준:

- 전화번호와 주소는 표시하지 않는다.
- `formUrl`이 없으면 준비 중 문구를 표시한다.
- 공개 이메일이 없으면 `mailto` 버튼을 노출하지 않는다.

## 5. Google Sheets 컬럼 설계 초안

### 5.1 `site_meta` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `siteTitle` | 사이트 제목 | Y | `Yun Dae-Young's Portfolio` |
| `language` | 기본 언어 | Y | `ko` |
| `updatedAt` | 콘텐츠 갱신일 | N | `2026-05-27` |
| `notice` | 임시 안내 문구 | N | `일부 프로젝트 상세는 공개 가능 범위 확인 중입니다.` |

### 5.2 `hero` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `name` | 이름 | Y | `Yun Dae-Young` |
| `headline` | 정체성 문장 | Y | 후보 A/B/C 중 선택 |
| `summary` | 2줄 이내 설명 | Y | `현장 업무와 데이터 흐름을 구조화합니다.` |
| `keywords` | 쉼표 구분 키워드 | Y | `Backend, Data Pipeline, OCR/LLM, Automation` |
| `profileImageUrl` | 이미지 URL | N | `/profile.jpg` |
| `primaryActionLabel` | 주요 버튼 문구 | N | `문의하기` |
| `primaryActionUrl` | 주요 버튼 URL | N | Google Form URL |
| `secondaryActionLabel` | 보조 버튼 문구 | N | `프로젝트 보기` |
| `secondaryActionUrl` | 보조 버튼 URL | N | `#projects` |

### 5.3 `positioning` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `id` | 역할 카드 ID | Y | `backend-data` |
| `title` | 역할 제목 | Y | `Backend / Data Pipeline` |
| `shortLabel` | 짧은 표시명 | N | `Backend` |
| `description` | 업무 상황 설명 | Y | `입력 데이터와 저장 구조를 정리해 API 흐름으로 연결합니다.` |
| `evidenceRefs` | 근거 ID 목록 | N | `project-mining5000` |
| `relatedSkills` | 관련 기술 | N | `Python, PostgreSQL, API` |
| `limits` | 주장하지 않을 범위 | N | `대규모 트래픽 운영 경험은 근거 입력 전까지 제외` |
| `displayOrder` | 표시 순서 | Y | `1` |

### 5.4 `projects` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `id` | 프로젝트 ID | Y | `project-mining5000` |
| `title` | 프로젝트명 | Y | `백엔드 데이터 업무 시스템 구현` |
| `period` | 기간 | N | `2025.00 - 2026.00` |
| `role` | 담당 역할 | Y | `Backend / Data Pipeline` |
| `context` | 배경 | Y | `업무 데이터를 정리하고 조회 가능한 구조가 필요했습니다.` |
| `inputData` | 입력 데이터 | Y | `입력 필요` |
| `constraints` | 제약 조건 | Y | `입력 필요` |
| `problem` | 문제 정의 | Y | `입력 필요` |
| `designChoices` | 설계 선택 | Y | `입력 필요` |
| `implementation` | 구현 내용 | Y | `입력 필요` |
| `output` | 결과물 | Y | `입력 필요` |
| `validation` | 검증 방식 | N | `입력 필요` |
| `techStack` | 기술 스택 | N | `Python, PostgreSQL` |
| `publicScope` | 공개 가능 범위 | Y | `summary-only` |
| `links` | 공개 링크 | N | GitHub 또는 배포 URL |
| `status` | 상태 | Y | `published`, `draft`, `private` |
| `displayOrder` | 표시 순서 | Y | `1` |

### 5.5 `experiences` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `id` | 경력 ID | Y | `exp-kohtech` |
| `company` | 회사명 | Y | `KOHTECH` |
| `period` | 근무 기간 | Y | `입력 필요` |
| `position` | 직책 또는 역할 | N | `제조 QA` |
| `domain` | 업무 도메인 | Y | `Manufacturing QA` |
| `summary` | 요약 | Y | `입력 필요` |
| `responsibilities` | 담당 업무 | Y | `입력 필요` |
| `workSignals` | 현재 방향과 연결되는 업무 감각 | N | `검증 절차, 품질 기준, 현장 이슈 파악` |
| `techOrTools` | 사용 도구 | N | `입력 필요` |
| `publicDetailLevel` | 공개 상세 수준 | Y | `basic`, `summary`, `detailed` |
| `displayOrder` | 표시 순서 | Y | `1` |

### 5.6 `skills` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `groupName` | 그룹명 | Y | `Backend / API` |
| `summary` | 사용 맥락 | Y | `업무 데이터를 API와 저장 구조로 연결하는 데 사용` |
| `skills` | 쉼표 구분 기술명 | Y | `Python, FastAPI, REST API` |
| `evidenceRefs` | 근거 ID 목록 | N | `project-mining5000` |
| `confidence` | 근거 수준 | Y | `used` |
| `displayOrder` | 표시 순서 | Y | `1` |

### 5.7 `contact` 시트

| 컬럼 | 설명 | 필수 | 예시 |
| --- | --- | --- | --- |
| `email` | 공개 이메일 | N | `name@example.com` |
| `formUrl` | Google Form URL | N | `https://forms.gle/...` |
| `githubUrl` | GitHub URL | N | `https://github.com/...` |
| `linkedinUrl` | LinkedIn URL | N | 빈 값 가능 |
| `resumeUrl` | 이력서 URL | N | 빈 값 가능 |
| `message` | 문의 안내 문구 | Y | `프로젝트와 협업 문의는 아래 채널로 부탁드립니다.` |

## 6. 금지 문구

다음 문구는 실제 근거가 입력되기 전까지 사용하지 않는다.

- `전문가`
- `최고의`
- `완벽한`
- `업계 최고 수준`
- `대규모 트래픽을 안정적으로 처리`
- `프로덕션에서 검증된`
- `완전 자동화`
- `혁신적인`
- `압도적인 성능 개선`
- `수십 배 개선`
- `매출 향상에 기여`
- `고객 만족도 향상`
- `엔터프라이즈급`
- `풀스택 전문가`
- `AI 전문가`
- `LLM 전문가`
- `시스템 아키텍트`
- `리드 개발자`
- `팀을 성공적으로 이끎`
- `고객사 핵심 시스템 구축`
- `실시간 처리 보장`
- `무중단 운영`
- `보안 완비`

조건부 사용 가능 문구:

- `운영 환경`: 실제 운영 배포 또는 운영 업무 근거가 있을 때만 사용한다.
- `자동화`: 자동 실행 범위와 사람이 개입하는 지점을 함께 설명할 때만 사용한다.
- `검증`: 테스트, 수동 QA, 로그 확인, 사용자 확인 등 방식이 명확할 때만 사용한다.
- `성과`: 수치, 전후 비교, 검증 출처가 있을 때만 사용한다.

## 7. 실제 이력 입력이 필요한 항목 목록

### 7.1 개인 기본 정보

- 한글 이름, 영문 이름 표기
- 공개 이메일 사용 여부
- GitHub URL
- LinkedIn 또는 외부 프로필 URL 사용 여부
- 공개 이력서 URL 또는 PDF 제공 여부
- 프로필 사진 사용 여부와 공개 가능 이미지

### 7.2 경력 원문

- 각 회사의 정확한 근무 기간
- 각 회사의 직책 또는 공식 역할명
- KOHTECH 제조 QA에서 실제 담당한 품질 업무
- Transcosmos Japan에서 실제 담당한 IT 운영 업무
- DK G&C / JnC Systems에서 수행한 자동화 QA 또는 프로젝트 업무
- Mining5000에서 담당한 백엔드, 데이터, API, OCR/LLM 관련 업무
- 각 회사별 공개 가능한 업무 범위

### 7.3 프로젝트 원문

- 공개 가능한 프로젝트명
- 프로젝트별 기간
- 개인 담당 범위
- 입력 데이터 종류
- 주요 제약 조건
- 설계 선택 이유
- 구현한 기능 목록
- 결과물 형태
- 검증 방식
- 사용 기술의 실제 사용 범위
- 공개 가능한 링크
- 공개하면 안 되는 내부 정보

### 7.4 성과와 검증 근거

- 정량 성과가 있다면 측정 기준과 출처
- 성능 개선 수치가 있다면 전후 비교 방식
- 자동화 효과가 있다면 수작업 대비 어떤 부분이 줄었는지
- 장애 감소, 오류 감소, 업무 시간 감소 같은 표현의 근거
- 테스트 또는 QA 방식
- 배포 또는 운영 여부

### 7.5 Google Sheets 운영 정보

- 실제 Google Sheets URL
- 공개 JSON 변환 방식
- Apps Script 사용 여부
- Google Form URL
- GitHub Pages 배포 URL
- 로컬 seed 데이터 유지 여부
- 공개 JSON에 포함하지 않을 민감 정보 기준

## 8. 콘텐츠 작성 우선순위

1. Career Timeline의 사실 정보부터 채운다.
2. Project Evidence에서 공개 가능한 프로젝트 2~4개를 선별한다.
3. 각 프로젝트의 입력 데이터, 제약, 설계 선택, 결과물을 먼저 작성한다.
4. 검증 방식과 공개 가능 범위를 확인한다.
5. Hero 정체성 문장은 실제 프로젝트 근거에 맞춰 후보 A/B/C 중 선택하거나 조합한다.
6. Skill Stack은 프로젝트 근거가 있는 기술만 상단에 배치한다.
7. Contact는 공개 가능한 채널만 노출한다.

## 9. 미확정 정보 처리 규칙

- 모르는 정보는 빈 문장으로 꾸미지 않고 `입력 필요`로 둔다.
- 공개 여부가 불명확한 정보는 `publicScope`를 `private` 또는 `summary-only`로 둔다.
- 화면에는 `입력 필요` 텍스트를 그대로 노출하지 않는다.
- 화면 노출 전 변환 단계에서 미확정 필드는 숨기거나 안전한 빈 상태 문구로 대체한다.
- 미확정 항목이 핵심 근거라면 해당 프로젝트 카드는 `draft` 상태로 둔다.
