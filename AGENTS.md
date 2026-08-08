# AGENTS.md

This file is the permanent engineering constitution for the Craftly website.

IMPORTANT:
From this point forward, EVERY coding agent working on this repository MUST read AGENTS.md BEFORE modifying, creating, deleting, or refactoring ANY code.

The purpose of this file is to prevent careless changes, architectural mistakes, visual regressions, broken routes, duplicated components, incorrect assets, and unverified implementations.

============================================================
1. HIGHEST PRIORITY RULE
============================================================

AGENTS.md is the project's permanent source of truth for engineering behavior.

Before ANY task:

1. Read AGENTS.md completely.
2. Inspect the existing implementation.
3. Understand the current architecture.
4. Identify which files/components are actually relevant.
5. Make the smallest safe change necessary.
6. Run/build the project.
7. Verify the result in the actual browser whenever the task affects UI.
8. Only then report completion.

NEVER skip these steps.

============================================================
2. NEVER ASSUME — INSPECT FIRST
============================================================

Never assume how the project works.

Before changing code, inspect:

- relevant React components
- routing
- CSS
- data files
- asset files
- hooks
- existing reusable components
- current browser behavior

If a component already exists:

USE IT.

Do NOT create a duplicate component without a strong architectural reason.

If a utility already exists:

REUSE IT.

If a style/token already exists:

REUSE IT.

============================================================
3. DO NOT REBUILD WORKING SYSTEMS
============================================================

Never rewrite working code just because another implementation is easier.

Before replacing something, determine:

- Why does it currently exist?
- What depends on it?
- Which routes use it?
- Which components import it?
- Will the change affect other pages?

Preserve existing working behavior.

Use minimal, targeted changes.

============================================================
4. ROUTING RULES
============================================================

The application uses route-based page architecture.

Global layout may contain only genuinely global elements such as:

- Navbar
- global navigation
- Footer
- global providers
- global layout utilities

Home-only content MUST remain inside HomePage.

Do NOT put HomePage-specific content into Layout.tsx.

For example:

HOME:

Navbar
↓
HomePage
↓
Home-specific sections
↓
Footer

DOWNLOAD:

Navbar
↓
DownloadPage
↓
Footer

PRODUCT:

Navbar
↓
ProductPage
↓
Footer

USE CASE:

Navbar
↓
UseCasePage
↓
Footer

RESOURCE:

Navbar
↓
ResourcePage
↓
Footer

Never allow Home Hero or Home-only sections to appear on unrelated routes.

============================================================
5. NAVBAR RULES
============================================================

Navbar is global.

Navbar must work consistently on every route.

Desktop navigation:

Products
Use Cases
Resources

must use the project's defined navigation data.

Dropdown behavior:

- Hover opens the corresponding dropdown.
- No click should be required for desktop hover behavior.
- Only one dropdown can be open at a time.
- Moving from trigger into dropdown must keep dropdown open.
- Moving to another navigation item switches the active dropdown.
- Moving completely away closes the dropdown after a short delay.

Never implement three independent dropdown states.

Use one active menu state.

Conceptually:

activeMenu:
"products"
"useCases"
"resources"
null

Dropdown must NOT push page content downward.

Dropdown must overlay page content.

Dropdown positioning must be tied to the navbar/navigation system, NOT HomePage/Hero.

============================================================
6. BRAND / LOGO RULES
============================================================

The real Craftly brand assets must always be used.

Never recreate the Craftly logo using:

- generic fonts
- cursive fonts
- handwriting fonts
- CSS
- typed text
- approximate SVG text

If a supplied asset exists, use the real asset.

If the full logo contains multiple elements but only the wordmark is required:

create/use a dedicated wordmark asset.

For example:

public/assets/brand/craftly-wordmark.svg

The navbar must use the actual Craftly wordmark artwork.

Never replace it with:

<span>Craftly</span>

unless explicitly requested.

Always preserve:

- aspect ratio
- proportions
- visual quality
- intended spacing

============================================================
7. ASSET RULES
============================================================

Before creating an image, video, logo, icon, or visual placeholder:

CHECK:

public/assets/

first.

Never invent an asset if the required asset already exists.

Video placeholders must remain functional and replaceable.

When a real video is not available:

use the existing video placeholder architecture.

Do NOT hardcode random external video URLs.

Do NOT remove video support just because the actual video has not been supplied yet.

============================================================
8. DESIGN SYSTEM
============================================================

The website follows a minimal Craftly visual language.

Do not randomly introduce:

- colors
- gradients
- shadows
- fonts
- border radii
- animation styles
- spacing systems

Use the existing design tokens.

Before adding a new visual value, inspect:

src/index.css

and existing component styles.

Reuse existing tokens whenever possible.

============================================================
9. VISUAL REFERENCE RULE
============================================================

When the user provides:

- screenshot
- screen recording
- video
- reference website
- design reference

treat it as a visual specification.

Do NOT approximate important interaction or layout behavior.

Analyze:

- spacing
- typography
- positioning
- hierarchy
- animation
- hover behavior
- transitions
- responsive behavior
- section ordering
- component relationships

However:

Do NOT blindly copy unrelated implementation details.

Recreate the intended visual/interaction behavior using the project's architecture.

============================================================
10. ANIMATION RULES
============================================================

Animations must be:

- smooth
- intentional
- performant
- subtle
- consistent

Do NOT add:

- random bounce
- excessive scaling
- unnecessary parallax
- flashy effects
- slow animations
- animation everywhere

Reuse existing animation utilities/constants when available.

Respect reduced-motion preferences.

============================================================
11. RESPONSIVE RULES
============================================================

Every UI change must consider:

Desktop
Tablet
Mobile

Desktop hover behavior must NOT be forced onto mobile.

Mobile navigation should use the existing mobile navigation architecture.

Never break mobile layout while fixing desktop layout.

============================================================
12. CSS RULES
============================================================

Avoid CSS hacks.

DO NOT solve layout problems using arbitrary values such as:

margin-top: 500px;
left: 173px;
top: 431px;

unless the value is genuinely required by the design.

Never use random transforms to hide structural problems.

If an element is in the wrong position:

inspect its:

- containing block
- position context
- flex/grid parent
- stacking context
- overflow
- transform
- z-index

Fix the underlying layout problem.

============================================================
13. Z-INDEX / STACKING CONTEXT
============================================================

Do not solve every layering problem by increasing z-index.

Before changing z-index, inspect:

- position
- transform
- opacity
- filter
- isolation
- overflow
- stacking contexts

Use the smallest correct z-index hierarchy.

============================================================
14. COMPONENT ARCHITECTURE
============================================================

Prefer reusable components.

Do not duplicate:

Navbar
Dropdown
Button
Card
Section heading
Video component
Resource card
Product card
CTA

if an existing reusable component already performs the required role.

Use data-driven components where appropriate.

Keep content separate from presentation whenever the existing architecture supports it.

============================================================
15. DATA / CONTENT ARCHITECTURE
============================================================

Marketing content should remain centralized where possible.

Use:

src/data/

for:

- navigation
- products
- use cases
- resources
- downloads
- site content

Do not scatter repeated marketing copy throughout components unnecessarily.

============================================================
16. TYPE SAFETY
============================================================

This is a TypeScript project.

Avoid:

any

unless absolutely necessary.

Prefer proper interfaces/types.

Do not silence TypeScript errors just to make the build pass.

Fix the underlying type problem.

============================================================
17. ACCESSIBILITY
============================================================

Every interactive component must remain accessible.

Consider:

- keyboard navigation
- focus states
- semantic HTML
- aria labels where necessary
- button vs div
- accessible navigation
- reduced motion

Desktop hover-only behavior must not make navigation inaccessible to keyboard users.

============================================================
18. PERFORMANCE
============================================================

Do not introduce unnecessary:

- re-renders
- event listeners
- huge dependencies
- expensive animations
- unnecessary canvas work
- duplicated data

Clean up event listeners and timers.

Use existing hooks/utilities where possible.

============================================================
19. ROUTE SAFETY
============================================================

Before modifying a global component such as:

Navbar
Layout
Footer
Router
Global CSS

determine which routes depend on it.

A change to a global component can affect EVERY page.

After modifying a global component, test at minimum:

/
 /download
 /products/workspace
 /products/robot
 /use-cases/operations
 /resources/documentation

Do not assume one page represents the entire application.

============================================================
20. BROWSER VERIFICATION
============================================================

For UI changes:

DO NOT rely only on:

npm run build

A successful build does NOT mean the UI is correct.

Run the application.

Open it in the browser.

Actually verify the relevant interaction visually.

For example, if changing navbar hover:

physically test:

Products hover
→ dropdown opens

Move into dropdown
→ remains open

Use Cases hover
→ Products closes
→ Use Cases opens

Resources hover
→ Use Cases closes
→ Resources opens

Move away
→ dropdown closes

If the behavior is wrong:

CONTINUE DEBUGGING.

Do NOT report success.

============================================================
21. BUILD VERIFICATION
============================================================

After code changes:

run the appropriate checks available in package.json.

At minimum verify:

- TypeScript/build
- lint if configured
- application starts successfully

Fix errors before completion.

============================================================
22. DO NOT CLAIM SUCCESS WITHOUT VERIFICATION
============================================================

NEVER say:

"Done"
"Fixed"
"Implemented successfully"
"Everything works"

unless the implementation has actually been verified.

If something could not be tested:

say exactly what could not be tested.

Never fabricate verification.

============================================================
23. BEFORE/AFTER SAFETY CHECK
============================================================

Before modifying code, identify:

WHAT IS CHANGING?

WHAT MUST NOT CHANGE?

Example:

Task:
Fix navbar dropdown.

Must change:
Navbar dropdown interaction.

Must NOT change:
Hero
Footer
Download page
Product pages
global typography

After implementation verify that protected areas remain unchanged.

============================================================
24. MINIMAL CHANGE PRINCIPLE
============================================================

Always prefer:

SMALLEST SAFE CHANGE

over:

LARGE REFACTOR

unless the existing architecture is fundamentally preventing the requested behavior.

Do not refactor unrelated code during a focused task.

============================================================
25. WHEN A BUG APPEARS
============================================================

Follow this process:

1. Reproduce the bug.
2. Inspect browser behavior.
3. Inspect DOM.
4. Inspect relevant React component.
5. Inspect CSS.
6. Identify root cause.
7. Make minimal fix.
8. Re-run.
9. Verify original behavior.
10. Verify related routes/components.

Never patch symptoms repeatedly without identifying the root cause.

============================================================
26. WHEN USER PROVIDES A SCREENSHOT
============================================================

Do not simply say:

"Looks good."

Compare the screenshot against the requested behavior.

Identify:

- wrong spacing
- wrong alignment
- missing elements
- wrong font
- wrong asset
- incorrect positioning
- incorrect interaction
- incorrect page structure

Then fix the actual implementation.

============================================================
27. WHEN USER PROVIDES A REFERENCE WEBSITE
============================================================

The reference is used to understand:

- layout
- interaction
- animation
- hierarchy
- visual language

Do not blindly duplicate source code.

Recreate the relevant behavior in Craftly's own architecture.

============================================================
28. NO UNREQUESTED FEATURES
============================================================

Do not add:

- authentication
- analytics
- CMS
- database
- unnecessary libraries
- unnecessary pages
- extra animations
- extra sections
- extra navigation items

unless explicitly requested.

============================================================
29. BEFORE EVERY TASK — MANDATORY CHECKLIST
============================================================

Before coding, answer internally:

[ ] Did I read AGENTS.md?
[ ] Did I inspect the existing implementation?
[ ] Do I understand the relevant component hierarchy?
[ ] Do I know which routes are affected?
[ ] Do I know which files need changing?
[ ] Am I reusing existing components?
[ ] Am I reusing existing assets?
[ ] Am I avoiding unnecessary refactoring?
[ ] Have I identified what must NOT change?

============================================================
30. AFTER EVERY TASK — MANDATORY CHECKLIST
============================================================

Before reporting completion:

[ ] Build passes.
[ ] TypeScript errors are resolved.
[ ] Relevant browser page was tested.
[ ] Relevant interaction was physically tested.
[ ] Relevant routes were tested.
[ ] No unrelated section was broken.
[ ] No duplicate components were introduced.
[ ] No placeholder hacks were introduced.
[ ] No random CSS positioning hacks were introduced.
[ ] Existing design system was preserved.
[ ] Actual assets are being used.
[ ] The requested behavior matches the user's specification.

============================================================
31. IMPORTANT PROJECT-SPECIFIC RULE
============================================================

This website is being built carefully section-by-section.

Therefore:

DO NOT jump ahead.

If the user says:

"Fix Home first"

then work ONLY on Home.

If the user says:

"Fix Navbar"

then work ONLY on Navbar.

If the user says:

"Fix Download"

then work ONLY on Download.

Do not modify unrelated sections unless the requested feature genuinely requires it.

============================================================
32. FINAL AGENT BEHAVIOR
============================================================

You are not allowed to treat the user's latest message as the only source of truth.

You MUST combine:

1. User's current request
2. Existing codebase
3. AGENTS.md
4. Existing design system
5. Existing architecture
6. Existing assets
7. Browser behavior

The goal is NOT merely to produce code that compiles.

The goal is to produce a stable, maintainable, visually accurate Craftly website.

============================================================
END OF AGENTS.md
============================================================
