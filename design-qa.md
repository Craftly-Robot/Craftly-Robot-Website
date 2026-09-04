# Product visual QA

## Follow-up: compact Home Workspace showcase

At the user's request, Home's lower Workspace showcase now uses its original `craftly-workspace-dashboard.svg` through the existing VideoShowcase poster fallback. Only the Home hero retains the new training overview. The existing square desktop / landscape mobile frame prevents the side-column preview from growing into a long dashboard. No shared CSS, product pages or hero visuals changed in this follow-up. This supersedes the two-Home-overview count below.

Desktop and mobile were visually checked in the in-app browser. The updated 26-test suite passes, including compact frame bounds at 390/818/1440 widths. Build passes; lint retains the six existing warnings. The configured `.githooks` directory was discovered missing on this branch and its two executable hooks were restored from `codex/git-workflow-safety` before editing. Related work remains on `codex/product-visual-system`, uncommitted and unpushed.

## Scope and reference

Approved training-first design: `exec-30c684a2-e516-4fae-a889-d5621ce7b31d.png`, supplied in the current task. The implementation follows its sidebar, personal/cloud GPU network, training hierarchy and three supporting feature groups. It intentionally removes the profile, numeric percentage and compute activation control. Existing site typography, monochrome tokens and genuine Craftly wordmark take precedence over the generated reference's approximate branding.

Home has two responsive training overview placements. Workspace has one overview and eleven feature scenes. Robot has sixteen topic-specific scenes. Documentation screenshots, Home RobotDemo, use-case visuals, navigation, footer, page ordering and surrounding marketing copy are unchanged. Existing VideoShowcase is retained when a real Workspace video source is configured.

## Evidence

- Desktop reference and implementation crop were inspected together in the same visual comparison. Crop normalized to the dashboard bounds, not the surrounding website. Evidence: `test-results/design-qa/dashboard.png`.
- Tablet Home: `test-results/design-qa/tablet-home.png`.
- Mobile Workspace: `test-results/design-qa/mobile.png`; lower stacked groups additionally inspected in browser.
- Tablet Robot: `test-results/design-qa/robot-tablet.png`.
- Captures are local verification artifacts in the ignored test-results directory and can be replaced by later test runs.

## Findings and corrections

| Finding | Severity | Resolution |
| --- | --- | --- |
| Initial wide network artwork made the training workload too small | Medium | Regenerated square artwork; verified GPU connections and central workload at desktop/tablet/mobile sizes |
| Small desktop node and pillar labels weakened hierarchy | Medium | Increased readable HTML label sizes; checked wrapping on tablet and mobile |
| Initial test selectors still expected removed screenshot files | Test issue | Updated assertions to rendered scene identifiers/counts; full suite rerun |
| Hidden mobile wordmark cannot be scrolled into view by image-load tests | Test issue | Check visible images; hidden sidebar branding remains intentionally collapsed |

No remaining blocking visual findings. Desktop hierarchy and sidebar proportions follow the selected reference. Mobile deliberately reorganizes instead of shrinking a full screenshot: icon sidebar, paired GPU cards, central workload, then three stacked feature groups. Training progress is explicitly illustrative and has no numerical value. Only the documentation CTA is interactive; the illustrated sidebar is not app navigation.

## Verification

- `npm run build`: passed, including TypeScript. Existing dependency eval/chunk-size warnings remain.
- `npm run lint`: passed with six existing set-state-in-effect warnings; none in the new visual component.
- `npm run test:e2e`: 26 passed (15 new visual tests and 11 existing smoke tests).
- Tests cover 390, 818 and 1440 pixel widths, scene counts, loaded visible image assets, no horizontal overflow, noninteractive sidebar, CTA destination/navigation, reduced-motion CSS, and one-time entrance state after leaving/re-entering view.
- Existing smoke suite covers `/`, `/download`, `/products/workspace`, `/products/robot`, `/use-cases/operations`, `/resources/documentation` and additional existing routes.
- Actual in-app browser inspection covered desktop Workspace, mobile Workspace and stacked groups, tablet Home and Robot, and the unchanged training documentation screenshot.
- `git diff --check`: passed.

## Asset provenance

The authentic wordmark is reused from `public/assets/brand/craftly-wordmark.svg`. Icons are named imports from the MIT-licensed `@tabler/icons-react` package. The text-free network illustration was generated with the built-in image generation tool from the approved design and exported as a 1024x1024 WebP at `public/assets/product-visuals/training-network.webp`. Generated source: `call_KrzlSBLQRP7yApBK9U5zchtf.png` in this task's generated-image outputs. All UI labels are responsive HTML rather than baked into that asset.

## Git handoff

Remote fetch succeeded before editing. Work is on `codex/product-visual-system`, created from the fetched `origin/main` (`7e83d06`). Hooks path and executable hooks were checked before editing. All changes are local and uncommitted. No push, deployment or merge was performed.

final result: passed
