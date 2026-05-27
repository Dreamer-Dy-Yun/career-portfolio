# Career Portfolio

## Version

v1.0

## Project name

Career Portfolio

## Purpose

Single-page static career portfolio for Yun Dae-Young, focused on backend systems, data pipeline design, PostgreSQL, API integration, OCR/LLM workflows, and practical system design.

## Tech stack

- React
- TypeScript
- Vite

## Features

- Static single-page site with role-target switching
- Category and role-perspective project filtering
- Project relevance sorting and target fit badges
- Evidence index and evidence tags shared across projects/experiences
- Case-study section for major projects
- Application-oriented summary sections and recruiter-friendly content
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

## Local development commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Release checklist

- `npm run build` passes
- Page order and headings are coherent and readable
- Filters, job target selector, and case study toggle still work
- No fake links, no sensitive personal data, and no placeholder-sensitive render paths
- Print layout contains the core release sections
- Version label is shown as `v1.0`

## Privacy and content safety

- Do not add sensitive personal information (phone number, address, internal identifiers).
- Do not add fake metrics or unsupported achievements.
- Do not add fake external links.
- Do not expose internal client names or internal project secrets unless explicitly intended for public sharing.

## v1.0 Release Notes

- First public-ready version.
- Single-page static career portfolio.
- Job-target based positioning.
- Evidence-based project presentation.
- GitHub Pages deployment workflow.
- Privacy-conscious placeholder handling.

