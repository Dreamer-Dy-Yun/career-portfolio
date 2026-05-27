# Career Portfolio

## Version

v1.1

## Project name

Career Portfolio

## Purpose

Korean-first single-page career portfolio for Yun Dae-Young. The v1.1 direction is a recruiter/technical-review screen for a backend and data pipeline engineer whose value also comes from QA, operations, manufacturing quality, and communication experience.

## Tech stack

- React
- TypeScript
- Vite

## Features

- Korean-first positioning and redesigned page structure
- Role-target switching without hiding non-matching projects
- Project relevance sorting and target fit badges
- Evidence index and evidence tags shared across projects/experiences
- Case-study section for major projects
- Career base section that keeps non-IT experience explicit
- Google Sheets CMS template for future read-only content operation
- Placeholder-safe contact and resume rendering

## Deployment

- GitHub Pages workflow: `.github/workflows/deploy.yml`
- Workflow triggers:
  - `push` on `main`
  - `workflow_dispatch`
- Build step uses `npm run build`
- Deployment uses `actions/deploy-pages@v4`
- Base path note in `vite.config.ts`:
  - Keep `base: "/"` for user pages.
  - Use repository path (for example `"/career-portfolio/"`) only if repository is explicitly deployed as a project page.

Current deployment uses `base: "/career-portfolio/"`.

## Data updates

- `src/data/profile.ts`
  - Name/title/tagline/summary
  - Core strengths
  - Contact and resume availability
- `src/data/projects.ts`
  - Project metadata, evidence, fit mapping, case studies, decision tags
  - `category`, `rolePerspectives`, `evidenceTagIds`, `fitByTarget`, `caseStudy`, `decisionTags`
- `src/data/experiences.ts`
  - Timeline items and optional `functionHighlights`, `evidenceTagIds`
- `src/data/skills.ts`
  - Technical stack groups and labels
- `src/data/jobTargets.ts`
  - Target presets and role-specific summary copy
- `src/data/evidenceTags.ts`
  - Shared evidence labels used in projects and timeline
- `src/data/targetRoles.ts`
  - Optional role-positioning reference section data
- `docs/google-sheets-cms-template.md`
  - Paste-ready Google Sheets tabs
- `docs/career-portfolio-cms-template.xlsx`
  - Spreadsheet template that can be imported into Google Sheets

## Local development commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Release checklist

- `npm run build` passes
- Page order and headings are coherent and readable
- Job target selector and case study details still work
- No fake links, no sensitive personal data, and no placeholder-sensitive render paths
- Print layout contains the core release sections
- Version label is shown as `v1.1`

## Privacy and content safety

- Do not add sensitive personal information (phone number, address, internal identifiers).
- Do not add fake metrics or unsupported achievements.
- Do not add fake external links.
- Do not expose internal client names or internal project secrets unless explicitly intended for public sharing.
- Do not force non-IT career history into IT wording. Manufacturing QA, operations, and communication work should remain factual.

## v1.1 Release Notes

- Korean-first public screen redesign.
- Clearer identity around backend, data pipelines, QA/operations background, and system design.
- Reduced filter-heavy layout in favor of recruiter and technical-review scanability.
- Added Google Sheets CMS design and import template.
- Replaced temporary browser-only photo upload with a stable profile photo placeholder.

## v1.0 Release Notes

- First public-ready version.
- Single-page static career portfolio.
- Job-target based positioning.
- Evidence-based project presentation.
- GitHub Pages deployment workflow.
- Privacy-conscious placeholder handling.
