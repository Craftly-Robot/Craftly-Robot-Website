# Notice Board visual QA

final result: passed

## Target and scope

- Selected target: first displayed concept, `exec-67201c15-5f34-4a32-902a-765c1e4e9d45.png`, in `/Users/fahmidhasantaohid/.codex/generated_images/01a07205-d631-7721-8f4c-21cd7109fe1d/`.
- Route: `/resources/documentation/workspace/tasks-operations/notices`.
- Replaced only the two screenshot elements with semantic illustrative UI. Original article copy and navigation remain intact. Sample list is intentionally static, as selected in the brief.

## Visual comparison

- Compared the selected reference and rendered desktop page together in the same inspection input. The reference is a standalone 1536×1024 image; implementation occupies the existing documentation column rather than expanding the page to match the reference canvas. Typography uses existing site tokens for readability at this smaller size. This is a responsive adaptation, not pixel-identical canvas reproduction.
- Preserved the two-column hierarchy, three outline icons, first-row gray selection and black marker, stacked panel heading/caption, announcement text and audience divider.
- Desktop 1440×1000 and tablet 834×1194 retain two columns. Mobile 390px places the article below the three notices. No horizontal overflow measured at inspected widths; content remains readable.
- No actionable P0/P1/P2 findings. An initial clipped capture was rejected and replaced with a valid full-page viewport capture before acceptance.

## Behavior and checks

- At 390×600 before entry: opacity 0 and no `revealed` class; transition is opacity only, 500ms.
- After scrolling into view: opacity 1 and `revealed` present. After scrolling away and back: opacity remains 1 and class persists.
- Emulated reduced motion: preference true, opacity 1; global transition duration reduced to 0.00001s. Emulation cleared after inspection.
- Clicked Projects navigation, verified destination content, and clicked Notice Board to return successfully.
- Browser console error log empty. Build and lint passed. Build retains dependency eval and bundle-size warnings.
- No global CSS, routes, dependencies or other product views changed. Viewport override reset after verification.

## Evidence

Screenshots are stored in `/Users/fahmidhasantaohid/.codex/visualizations/2026/09/05/01a07205-d631-7721-8f4c-21cd7109fe1d/`:

- `notice-desktop.png`
- `notice-tablet.png`
- `notice-mobile.png`
