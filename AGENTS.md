# AI Agent Collaboration Guidelines & Project Context

## 1. Operational Modes & Standards
**Primary Directive:** All output must adhere to professional software engineering standards.
-   **Responsive Design:** Mobile-first approach. All layouts must adapt fluidly between mobile (primary traffic source) and desktop.
-   **CSS Architecture:** 
    -   **Strictly NO inline styles** (unless for dynamic state).
    -   Use a global stylesheet (`style.css`) to maintain consistency.
    -   Follow DRY (Don't Repeat Yourself) principles for classes.
-   **Code Quality:** Semantic HTML5 tags (header, nav, main, footer) are mandatory for accessibility.

## 2. Design Specifications
### Global Elements
-   **Navigation:** Hamburger menu (top-right or top-left) expanding to links: "Privacy", "Support".
-   **Footer:** Standard layout containing Copyright © [Year] Fleeflame, and other legal links.

### Pages
#### Homepage (`index.html`)
-   **Layout:** Minimalist.
-   **Content:** 
    -   **Logo:** Centered vertically and horizontally in the viewport. Source: `img/vectorstock_14826597_transparent.png` (preferred).
    -   **Text:** Company name "flee flame" displayed below the logo.
    -   **Typography:** Clean, legible font (Sans-Serif preferred for modern look).

#### Privacy Policy (`privacy.html`)
-   Standard text layout, readable on small screens.

#### Support (`support.html`)
-   Clear contact information or support instructions.

## 3. Project Goal
**Fleeflame:** A minimalist company website referenced by mobile apps.
**Status:** Baseline Setup.

## 4. Localization Maintenance Scripts
-   When adding or updating non-English app pages (`*.fr.html`, `*.es.html`, `*.pt.html`, `*.vi.html`) that contain store CTA badges, ensure badge image language matches page language.
-   Run from repo root:
    -   `./scripts/apply_localized_badges.sh` for Spelling Bee localized About/Install pages.
    -   `./scripts/apply_localized_badges_all.sh` for all localized app pages under `apps/`.
-   After running a script, verify changes with `git status --short` and commit/push if expected.
