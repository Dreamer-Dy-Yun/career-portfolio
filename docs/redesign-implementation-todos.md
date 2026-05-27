# Redesign Implementation TODOs

## 문서 목적

이 문서는 `D:\DEV\CAREER_PORTFOLIO` 리디자인 구현을 멀티 에이전트 방식으로 진행하기 위한 상세 TODO 계획이다. 각 TODO는 파일 소유권 충돌을 피하도록 Phase 1~5로 분리하며, 에이전트가 동시에 작업할 때도 수정 가능 파일과 읽기 전용 파일의 경계를 명확히 한다.

## 공통 작업 원칙

- 모든 작업자는 본 문서에 명시된 `수정 가능 파일`과 `생성 가능 파일`만 변경한다.
- 다른 Phase의 소유 파일은 명시적으로 읽기 전용 또는 수정 금지로 둔다.
- API, mock, 화면 구조, 데이터 계약, 폴더 책임이 바뀌면 해당 Phase의 완료 조건에 포함된 문서를 함께 갱신한다.
- 기존 UI 스타일과 화면 리듬을 유지하되, 리디자인 목표에 맞는 책임 분리와 데이터 흐름을 우선한다.
- 프론트에서 존재하지 않는 비즈니스 값을 임의 생성하지 않는다. 필요한 데이터가 없으면 API 계약, fallback, 빈 상태, TODO로 드러낸다.
- 특별한 사유가 없는 한 한 파일의 코드는 300라인을 넘기지 않는다. 초과가 예상되면 컴포넌트, 데이터, 스타일, 서비스 책임으로 분리한다.
- 각 Phase 완료 전 `npm run build`를 최소 검증 기준으로 삼는다. 테스트 스크립트가 추가되기 전까지 `pnpm run test:run`은 실행 불가 항목으로 기록한다.

## Phase 1. 콘텐츠 계약과 데이터 경계 고정

### TODO 1-1. 포트폴리오 콘텐츠 타입과 seed 데이터 책임 분리

- 목적: 화면이 직접 임의 데이터를 만들지 않도록 포트폴리오 콘텐츠의 타입, seed 데이터, 외부 데이터 입력 경계를 고정한다.
- 수정 가능 파일: `src/data/*`, `src/services/*`, `docs/google-sheets-content-contract.md`, `docs/README.md`
- 생성 가능 파일: `src/data/portfolioContent.ts`, `src/data/portfolioTypes.ts`, `src/services/portfolioContentService.ts`
- 읽기 전용 파일: `src/App.tsx`, `src/components/*`, `src/styles/*`, `docs/portfolio-redesign-plan.md`, `package.json`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`, `.github/*`
- 완료 기준: `PortfolioContent` 또는 동등한 콘텐츠 계약이 정의되고, seed 데이터와 외부 입력 변환 책임이 `src/data` 또는 `src/services` 뒤에 위치한다.
- 검증 기준: `npm run build`가 성공하고, 화면/컴포넌트에서 Google Sheets 또는 mock 데이터를 직접 참조하지 않는다.

### TODO 1-2. Google Sheets 공개 JSON 계약 정리

- 목적: Google Sheets를 CMS처럼 사용할 때 필요한 공개 JSON 구조와 fallback 정책을 문서화한다.
- 수정 가능 파일: `docs/google-sheets-content-contract.md`, `docs/README.md`
- 생성 가능 파일: 없음
- 읽기 전용 파일: `src/data/*`, `src/services/*`, `docs/portfolio-redesign-plan.md`
- 수정 금지 파일: `src/components/*`, `src/App.tsx`, `dist/*`, `node_modules/*`, `.git/*`
- 완료 기준: 섹션별 필수/선택 필드, 누락 필드 처리, 공개 금지 정보, fallback seed 사용 조건이 문서에 명시된다.
- 검증 기준: 계약 문서만 보고 Hero, Work Positioning, Project Evidence, Career Timeline, Skill Stack, Contact 데이터의 출처와 필수값을 판단할 수 있다.

## Phase 2. 화면 섹션 구조와 컴포넌트 경계 구현

### TODO 2-1. 리디자인 섹션 컴포넌트 분리

- 목적: Hero, Work Positioning, Project Evidence, Career Timeline, Skill Stack, Contact를 독립 컴포넌트로 분리해 화면 책임을 명확히 한다.
- 수정 가능 파일: `src/App.tsx`, `src/components/*`, `src/README.md`, `docs/README.md`
- 생성 가능 파일: `src/components/HeroSection.tsx`, `src/components/WorkPositioningSection.tsx`, `src/components/ProjectEvidenceSection.tsx`, `src/components/CareerTimelineSection.tsx`, `src/components/SkillStackSection.tsx`, `src/components/ContactSection.tsx`
- 읽기 전용 파일: `src/data/*`, `src/services/*`, `src/styles/*`, `docs/google-sheets-content-contract.md`, `docs/portfolio-redesign-plan.md`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`, `.github/*`
- 완료 기준: `src/App.tsx`는 섹션 조립과 최상위 레이아웃 책임만 갖고, 각 섹션의 세부 렌더링은 전용 컴포넌트로 이동한다.
- 검증 기준: `npm run build`가 성공하고, 각 컴포넌트가 props로 받은 계약 데이터만 사용한다.

### TODO 2-2. 모바일 우선 레이아웃 흐름 정리

- 목적: 데스크톱 12컬럼 방향과 모바일 1열 흐름을 분리해 섹션별 레이아웃 충돌을 줄인다.
- 수정 가능 파일: `src/components/*`, `src/styles/*`, `src/README.md`
- 생성 가능 파일: `src/components/PageSection.tsx`, `src/components/SectionHeader.tsx`
- 읽기 전용 파일: `src/data/*`, `src/services/*`, `docs/*`, `package.json`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`
- 완료 기준: 반복되는 섹션 wrapper, 제목, 보조 설명 구조가 공통 컴포넌트로 정리되고 모바일에서 정보 순서가 깨지지 않는다.
- 검증 기준: `npm run build`가 성공하고, 브라우저 수동 확인 시 주요 섹션이 360px 폭과 데스크톱 폭에서 모두 읽히는 순서를 유지한다.

## Phase 3. 시각 디자인 시스템과 스타일 책임 정리

### TODO 3-1. 디자인 토큰과 전역 스타일 정리

- 목적: 색상, 타이포그래피, 여백, 카드, 버튼, 태그 스타일을 전역 토큰 중심으로 정리한다.
- 수정 가능 파일: `src/styles/*`, `src/README.md`, `docs/README.md`
- 생성 가능 파일: `src/styles/tokens.css`, `src/styles/layout.css`, `src/styles/components.css`
- 읽기 전용 파일: `src/App.tsx`, `src/components/*`, `src/data/*`, `src/services/*`, `docs/portfolio-redesign-plan.md`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`
- 완료 기준: 주요 색상은 3개 이하의 강한 축으로 정리되고, 카드/패널/버튼/태그의 기본 스타일 책임이 스타일 파일에 명확히 위치한다.
- 검증 기준: `npm run build`가 성공하고, 컴포넌트 내부 inline style 또는 중복 class 패턴이 불필요하게 늘지 않는다.

### TODO 3-2. Project Evidence 강조 스타일 구현

- 목적: 가장 중요한 프로젝트 증거 섹션이 단순 카드 나열이 아니라 입력 데이터, 제약, 설계 선택, 결과물을 읽기 쉬운 구조로 보이게 한다.
- 수정 가능 파일: `src/components/ProjectEvidenceSection.tsx`, `src/styles/*`, `src/README.md`
- 생성 가능 파일: `src/components/ProjectEvidenceCard.tsx`
- 읽기 전용 파일: `src/data/*`, `src/services/*`, `docs/google-sheets-content-contract.md`, `docs/portfolio-redesign-plan.md`
- 수정 금지 파일: `src/App.tsx` 단독 구조 변경, `dist/*`, `node_modules/*`, `.git/*`
- 완료 기준: 프로젝트 카드가 프로젝트명, 기간/역할, 입력 데이터, 제약 조건, 설계 선택, 결과물, 기술을 구분해 표시한다.
- 검증 기준: `npm run build`가 성공하고, 공개 불가 정보나 검증 불가 수치가 하드코딩되지 않는다.

## Phase 4. 외부 콘텐츠 연결과 fallback 처리

### TODO 4-1. Google Sheets JSON fetch 어댑터 구현

- 목적: 외부 공개 JSON URL을 통한 콘텐츠 로딩을 `src/services` 뒤에 두고, 실패 시 seed fallback을 명시적으로 사용한다.
- 수정 가능 파일: `src/services/*`, `src/data/*`, `src/README.md`, `docs/google-sheets-content-contract.md`
- 생성 가능 파일: `src/services/googleSheetsPortfolioAdapter.ts`, `src/services/contentFallback.ts`
- 읽기 전용 파일: `src/App.tsx`, `src/components/*`, `src/styles/*`, `vite.config.ts`, `package.json`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`, `.github/*`
- 완료 기준: URL 미설정, fetch 실패, 필수값 누락, stale 응답 가능성이 구분되고 fallback 사용 조건이 코드와 문서에 드러난다.
- 검증 기준: `npm run build`가 성공하고, 컴포넌트가 fetch 또는 mock을 직접 호출하지 않는다.

### TODO 4-2. Contact 채널 계약과 표시 조건 구현

- 목적: Google Form URL, email, 준비 중 상태를 계약에 맞게 표시하고 전화번호/주소 같은 불필요한 개인정보를 노출하지 않는다.
- 수정 가능 파일: `src/components/ContactSection.tsx`, `src/data/*`, `docs/google-sheets-content-contract.md`, `src/README.md`
- 생성 가능 파일: 없음
- 읽기 전용 파일: `src/services/*`, `src/styles/*`, `docs/portfolio-redesign-plan.md`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`
- 완료 기준: Google Form URL이 있으면 버튼으로, email이 있으면 mailto로, 둘 다 없으면 준비 중 상태로 표시한다.
- 검증 기준: `npm run build`가 성공하고, contact 표시 로직이 존재하지 않는 값을 임의 생성하지 않는다.

## Phase 5. 배포 검증, 문서 갱신, 마무리 QA

### TODO 5-1. 빌드와 GitHub Pages 배포 기준 정리

- 목적: 정적 사이트 빌드와 GitHub Pages 배포 전 확인해야 할 기준을 명확히 한다.
- 수정 가능 파일: `README.md`, `docs/README.md`, `.github/*`
- 생성 가능 파일: `.github/workflows/deploy-pages.yml`
- 읽기 전용 파일: `src/*`, `package.json`, `vite.config.ts`, `docs/google-sheets-content-contract.md`, `docs/portfolio-redesign-plan.md`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`
- 완료 기준: 빌드 명령, 배포 트리거, Pages 대상 브랜치/아티팩트, placeholder 링크 확인 항목이 문서화된다.
- 검증 기준: `npm run build`가 성공하고, 배포 workflow를 수정했다면 YAML 문법과 Pages artifact 경로를 확인한다.

### TODO 5-2. 최종 리디자인 QA 체크리스트 작성

- 목적: 구현 결과가 리디자인 목표와 데이터 계약을 모두 만족하는지 확인하는 QA 기준을 남긴다.
- 수정 가능 파일: `docs/README.md`, `README.md`
- 생성 가능 파일: `docs/redesign-qa-checklist.md`
- 읽기 전용 파일: `src/*`, `docs/google-sheets-content-contract.md`, `docs/portfolio-redesign-plan.md`, `package.json`
- 수정 금지 파일: `dist/*`, `node_modules/*`, `.git/*`, `.github/*`
- 완료 기준: 채용 담당자 관점, 기술 검토자 관점, 모바일/데스크톱, fallback, contact, 공개 금지 정보, placeholder 링크 항목이 체크리스트에 포함된다.
- 검증 기준: `npm run build`가 성공하고, 체크리스트 기준으로 수동 확인한 미해결 항목이 문서에 남는다.

## Phase 간 파일 소유권 충돌 방지 규칙

- Phase 1은 데이터 계약과 서비스 경계만 담당하고 화면 구조를 변경하지 않는다.
- Phase 2는 컴포넌트 구조와 화면 조립만 담당하고 외부 fetch 정책을 변경하지 않는다.
- Phase 3은 스타일과 시각 시스템만 담당하고 데이터 계약을 변경하지 않는다.
- Phase 4는 외부 데이터 연결과 fallback만 담당하고 섹션 레이아웃을 재설계하지 않는다.
- Phase 5는 검증, 배포, 문서 마무리만 담당하고 기능 구현을 새로 시작하지 않는다.
- 같은 파일을 여러 Phase에서 수정해야 하는 경우 먼저 이전 Phase가 완료된 뒤 후속 Phase가 이어받는다. 동시에 작업하지 않는다.

## 전체 완료 기준

- 리디자인 화면이 Hero, Work Positioning, Project Evidence, Career Timeline, Skill Stack, Contact 흐름을 갖춘다.
- 데이터 계약, fallback, 외부 Google Sheets 연결 책임이 `src/api`가 없는 현재 구조에서는 `src/services` 뒤에 위치한다.
- 화면 컴포넌트는 API/mock/fetch를 직접 호출하지 않는다.
- 주요 문서가 현재 폴더/파일 책임과 구현 상태를 설명한다.
- `npm run build`가 성공한다.
- `pnpm run test:run`은 현재 `package.json`에 스크립트가 없으므로, 테스트 스크립트 도입 전까지는 미실행 사유를 최종 보고에 기록한다.
