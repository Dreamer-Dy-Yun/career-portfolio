# .github/workflows

GitHub Pages 배포 workflow를 둔다.

## Files

- `deploy.yml`: `main` push 또는 수동 실행으로 Vite build 결과물(`dist`)을 GitHub Pages에 배포한다.

## Runtime note

- GitHub-hosted JavaScript actions의 Node.js 20 deprecation 경고를 피하기 위해 `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`를 workflow 전역 env로 설정한다.
- Node 24 대응 major를 사용한다: `actions/checkout@v6`, `actions/setup-node@v6`, `actions/upload-pages-artifact@v5`, `actions/deploy-pages@v5`.
- 프로젝트 앱 빌드 Node 버전은 `actions/setup-node`의 `node-version: 22`를 사용한다.
