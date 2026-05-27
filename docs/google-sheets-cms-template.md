# Google Sheets CMS Template

아래 블록은 각 Google Sheets 탭에 그대로 붙여넣기 위한 TSV 형식이다.

## 탭: profile

```tsv
key	value
koreanName	윤대영
englishName	Yun Dae-Young
title	운영 데이터를 구조화하는 백엔드 / 데이터 파이프라인 엔지니어
tagline	품질, 운영, 자동화, 데이터 처리 경험을 연결해 검증 가능한 업무 흐름을 만듭니다.
summary	QA와 운영 현장 경험에서 출발해 API 연동, PostgreSQL 데이터 모델링, OCR/LLM 처리, 자동화 리팩토링으로 확장해 왔습니다. 모든 경력을 억지로 개발 이력으로 포장하기보다, 현장에서 얻은 검증 감각과 운영 이해를 데이터 중심 시스템 설계에 연결하는 데 집중합니다.
location	South Korea
email	
googleFormUrl	
resumeUrl	/resume.pdf
photoUrl	
```

## 탭: projects

```tsv
id	title	period	role	category	rolePerspectives	summary	problem	solution	evidence	impact	techStack	decisionTags	evidenceTagIds
yido-settlement	YIDO Dutyfree B2C Settlement System	2025	Backend / DB / Frontend / System Design	Data Pipeline	Backend / Data Pipeline|System Design|AI / OCR / LLM	EDI Excel, 영수증 이미지, 여권 이미지, OCR/LLM 추출, 검증, 매핑을 통합해 정산 흐름을 구조화한 시스템입니다.	Excel 형식, 이미지 입력, OCR 결과, 수기 검증값이 분산되어 매칭과 검증 부담이 컸습니다.	관계형 스키마, 파싱 파이프라인, OCR/LLM 결과 구조, 검증 UI를 연결해 정산 흐름을 정형화했습니다.	원천 데이터와 EDI 입력 분리|OCR/LLM 결과 구조화|이미지 기반 검수 UI 설계|사용량 추적 구조 준비	운영 데이터 흐름 구조화|수동 매칭 의존도 감소|토큰/사용량 추적 기반 준비	Python|FastAPI|PostgreSQL|SQLAlchemy|React|TypeScript|OCR|LLM API	구조화된 매핑|검증 우선 설계|추적 가능한 데이터 흐름|인간 검수	data-pipeline|postgresql-data-modeling|ocr-llm-workflow|system-design|qa-validation
postgres-manager	PostgreSQL Multi-schema DB Manager	2025	Backend / Database Architecture	Backend / Database	Backend / Data Pipeline|System Design	스키마 관리, 테이블 생성, 배치 upsert/update, 테넌트 분리를 재사용 가능한 유틸 계층으로 정리했습니다.	프로젝트별 DB 실행 로직이 중복되어 재사용이 어려웠습니다.	스키마 단위 실행 구조와 반복 SQL 패턴 추상화로 비동기 DB 관리기를 만들었습니다.	스키마 범위 실행 컨텍스트|비동기 배치 upsert/update|메타데이터 기반 처리	DB 작업 재사용성 개선|스키마 분리 관리 용이|중복 DB 로직 감소	Python|PostgreSQL|SQLAlchemy|asyncpg	스키마 스코프 실행|배치 upsert/update|추적 가능한 데이터 흐름	postgresql-data-modeling|data-pipeline|system-design
ocr-llm-pipeline	OCR / LLM Document Parsing Pipeline	2025	AI Workflow / Data Structuring	AI / OCR / LLM	AI / OCR / LLM|System Design|Backend / Data Pipeline	여권/영수증 이미지에서 추출한 값을 구조화해 재검토·수정 가능한 형태로 관리하는 파이프라인입니다.	OCR 결과는 오류와 신뢰도 이슈가 있어 그대로 운영 데이터로 쓰기 어렵습니다.	필드 단위 검증, 좌표/마스킹 처리, 원본 이미지와 파싱 결과 분리로 검증 흐름을 만들었습니다.	AI 결과 불확실성 반영|좌표 기반 값 표시|이미지/파싱 결과 분리	OCR/LLM 결과 검증 체계화|보정 가능한 데이터 경로 확보|원본과 결과 연결 명확화	Python|OCR|LLM API|JSON|PostgreSQL	가변 AI 출력 처리|검증 우선 설계|인간 검수|추적 가능한 데이터 흐름	ocr-llm-workflow|data-pipeline|system-design|qa-validation
ict-normalization	ICT Data Extractor / Visual Normalization	2025	Data Engineering / Visualization	Data Visualization	Backend / Data Pipeline|System Design	ICT 측정 CSV의 다양한 단위/범위를 기준 데이터와 규격 데이터로 나누어 정규화 기준을 통일했습니다.	측정점마다 단위와 범위가 달라 직접 비교가 어렵고 평균/표준편차 정규화가 목적에 맞지 않았습니다.	측정값과 규격값을 분리해 LSL/USL 중심 정규화로 시각화 가능한 출력 구조를 만들었습니다.	측정 데이터와 규격 데이터 분리|규격 기준 정규화 모델|시각화 출력 형식 정의	이질적 측정값 비교 가능|도메인 규격 의미 유지|후속 분석 출력 준비	Python|Pandas|PostgreSQL|Data Visualization	규격 중심 정규화|추적 가능한 데이터 흐름|검증 우선 설계	data-pipeline|visualization|qa-validation|system-design
```

## 탭: experiences

```tsv
id	company	period	role	summary	highlights	functionHighlights	evidenceTagIds
mining5000	Mining5000	2023.11 - Present	PM / PL / Developer	요구사항 정리, 백엔드 API 연계, 데이터 처리, 테스트/운영 이슈 대응을 함께 수행했습니다.	불명확한 업무 구조를 기준-매핑-예외 규칙으로 분해|API 연계와 데이터 처리 검증 포인트 설계|테스트, 배포, 이해관계자 커뮤니케이션 수행	Backend / Data: DB 기반 작업 흐름 분해, API 데이터 경계 정리; System Design: 요구사항 실행 단계 분리; Automation / Operations: 반복 업무를 흐름 중심으로 정리	data-pipeline|postgresql-data-modeling|api-integration|ocr-llm-workflow|system-design|workflow-refactoring
jnc	JnC Systems	2023.05 - 2023.10	PM / PL / Developer / QA	자동화 프로젝트의 기획, 개발, QA, 전달 과정을 함께 다루며 실행 단위와 품질 기준을 관리했습니다.	기획-개발-테스트 전달 경로 정리|품질 점검 항목과 의사결정 기록 정렬	Automation / Operations: 운영 업무와 개발 진행 연결; QA / Testing: 품질 이슈 추적 항목 정리	workflow-refactoring|qa-validation|system-design
dkgc	DK G&C	2021.09 - 2023.04	PM / PL / Developer / QA / Tester	업무 자동화와 테스트, 인도 과정을 수행하며 현장 업무를 전달 가능한 작업 단위로 정리했습니다.	반복 작업 실행 분해|품질 체크 항목 재정의	Automation / Operations: 운영 동선 기준 실행 순서 정렬; QA / Testing: 품질 검토 기준 반영	workflow-refactoring|qa-validation|system-design
transcosmos	Transcosmos Japan	2018.10 - 2021.07	System Engineer / ITOS	일본 현장의 IT 운영 환경에서 운영 체계와 현장 커뮤니케이션을 기반으로 시스템 지원 업무를 수행했습니다.	운영 이슈 대응 기준 정리|협업 문서 기반 변경 이력 관리	Communication: 일본어 업무 커뮤니케이션; Automation / Operations: 운영 절차 정비	qa-validation|system-design
kohtech	KOHTECH	2014.10 - 2015.10	Manufacturing QA	제조 품질 관리 환경에서 검사 기준, 결함 추적, 품질 보고 흐름을 경험했습니다.	검사 항목과 결함 보고 체계 기준으로 품질 이슈 정리	QA / Testing: 검사 항목 기반 결함 추적	qa-validation
```

## 탭: evidenceTags

```tsv
id	label	description	relatedRolePerspectives
postgresql-data-modeling	PostgreSQL 데이터 모델링	운영 시스템의 관계형 구조와 스키마 중심 데이터 흐름을 설계합니다.	Backend / Data Pipeline|System Design
api-integration	API 연동	요청/응답 계약을 기준으로 API 경계를 정리하고 통합 흐름을 구성합니다.	Backend / Data Pipeline|Automation Refactoring|System Design
ocr-llm-workflow	OCR / LLM 워크플로우	OCR/LLM 출력을 검증 가능한 데이터로 변환해 운영 단계에 연결합니다.	AI / OCR / LLM|Backend / Data Pipeline|System Design
data-pipeline	데이터 파이프라인	분산된 입력을 정규화·검증해 추적 가능한 데이터 흐름으로 변환합니다.	Backend / Data Pipeline|System Design
system-design	시스템 설계	요구사항, 상태, 예외를 기준으로 실행 경계를 정리하는 작업 방식입니다.	System Design
workflow-refactoring	워크플로우 리팩토링	산재한 실행 절차를 모듈화해 재사용성과 운영성을 높이는 작업 방식입니다.	Automation Refactoring|System Design
qa-validation	QA / 검증	검증 단계와 점검 기준을 운영 이슈 대응에 반영해 품질을 관리합니다.	System Design|Backend / Data Pipeline
visualization	시각화	분석과 점검 단계에서 해석 가능한 형태로 데이터를 정리해 비교를 용이하게 합니다.	Backend / Data Pipeline|System Design
```

## 탭: skills

```tsv
category	items
언어	Python|C#|TypeScript|JavaScript|VBA|SQL
백엔드 / API	FastAPI|REST API|데이터 모델링|API 연동|비동기 처리
데이터베이스	PostgreSQL|SQLAlchemy|asyncpg|트랜잭션 처리|배치 upsert/update|스키마 관리
프론트엔드	React|TypeScript|Vite|UI 플로우 설계
AI / OCR / LLM	OCR 워크플로우 설계|LLM API 연동|프롬프트 설계|JSON 출력 설계|데이터 검증
자동화	RPA|작업 자동화|예외 처리 및 보정|워크플로우 분리
업무 방식	QA / 검증|요구사항 정리|실무 협업|일본어 업무 커뮤니케이션|제조 품질 관리
```

## 탭: settings

```tsv
key	value
siteVersion	v1.1
contentSource	google-sheets-readonly
contactMode	google-form-or-email
googleFormUrl	
resumeAvailable	false
```
