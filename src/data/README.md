# Career Portfolio Data Maintenance Notes

Version: v1.1

## Purpose of each file

- `profile.ts`: identity, summary, strengths, contact, and resume placeholders.
- `projects.ts`: project cards and project filter metadata.
- `experiences.ts`: timeline entries and optional evidence/function highlights.
- `skills.ts`: technical stack groupings.
- `targetRoles.ts`: optional reference role-positioning cards.
- `jobTargets.ts`: selectable target profiles for job-focused presentation.
- `evidenceTags.ts`: shared evidence labels used for projects and experiences.
- `src/data/README.md`: this document.

## Google Sheets CMS direction

- Google Sheets is the planned read-only CMS.
- Google Forms or email is the planned contact channel.
- Site-side write/edit features should not be added unless backend/auth is introduced later.
- Use `docs/google-sheets-cms-template.md` when creating or updating the spreadsheet.
- Keep `src/data/*.ts` as the local fallback when the public Sheet is unavailable.

## Stable ID and reference rules

- `evidenceTagIds` values are stable IDs from `evidenceTags.ts` and are used by projects, experiences, and counts.
- `fitByTarget` keys must match `jobTargets.id` values.
- Project `caseStudy` and `decisionTags` are optional and should use stable labels.

## Placeholder handling

- Omit email or external links that are placeholder values.
- Keep `email` as a concrete address only when safe to expose.
- If resume PDF is not ready, keep `resumeAvailable: false` and `resumeUrl` as an optional placeholder path.
- `links` should include only actual public links.

## Evidence data rules

- `caseStudy` (when present) should follow this structure:
  - `context`
  - `constraints[]`
  - `decisions[]` (`title`, `description`)
  - `result[]`
- `decisionTags` should describe implementation choices, not marketing outcomes.
- `evidence` and `functionHighlights` should stay concise and scan-friendly.
- `caseStudy.constraints` must avoid sensitive internal operational details.

## Project fit explanation rules

- `fitByTarget[targetId]` should explain practical reasons the project supports that target.
- Use evidence-oriented, factual language only.
- Do not claim guarantees, world-class results, or unsupported levels of quality.

## Public release caution

- Do not add private client details or sensitive operational facts.
- Do not add fake metrics.
- Do not add unsupported achievements.
- Keep all wording tied to implemented behavior and verifiable project context.
- Do not force non-IT work into IT language. Manufacturing QA, operations, and communication experience should remain explicit when that is the factual source of value.
