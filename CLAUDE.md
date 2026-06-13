# Poquito Landing Page — Claude Code Guidelines

## Project Overview

This project contains **five completely independent landing pages** for Poquito Mahjong. Each version is self-contained and must never share code or assets with another version.

## Landing Page Versions

| URL | Directory | Assets | Design Pattern |
|-----|-----------|--------|----------------|
| `/` | `app/(root)/` | `public/images/` (root-level images) | Base / Root |
| `/v1` | `app/v1/` | `public/images/v1/` | v1 Original |
| `/v2` | `app/v2/` | `public/images/v2/` | Cinematic Luxury Studio |
| `/v3` | `app/v3/` | `public/images/v3/` | Minimalist High-Fidelity Grid |
| `/v4` | `app/v4/` | `public/images/v4/` | Immersive Micro-Interactive |

Design briefs: `design_brief_v2.md` → v2, `design_brief_v3.md` → v3, `design_brief_v4.md` → v4.

## Strict Isolation Rules

**1. No cross-version imports.**
Each landing page may only import from within its own directory. Never import a component, utility, or type from another version.

```
# FORBIDDEN — importing across versions
import X from '../(root)/components/X'   # in v1 or v2
import X from '../v1/components/X'       # in v2 or (root)
```

**2. Components are version-scoped.**
Each version has its own `components/` directory. To reuse a pattern from another version, copy the file and modify it within the destination — do not create a shared import.

**3. Assets are version-scoped.**
- Root LP (`/`) uses images from `public/images/` directly.
- `/v1` uses images from `public/images/v1/` only.
- `/v2` uses images from `public/images/v2/` only.
- `/v3` uses images from `public/images/v3/` only.
- `/v4` uses images from `public/images/v4/` only.
- Exception: `/images/poquito-logo.png` is a shared asset used by the tile mosaic in v2/v3/v4 hero sections.

Do not reference another version's image path from any component.

**4. Fonts are a shared static asset — not shared code.**
`public/fonts/` contains binary font files. Each version's `globals.css` independently declares `@font-face` pointing to `/fonts/...`. This is fine — it references a file, not a shared module.

**5. Each version has its own `globals.css` and `layout.tsx`.**
Do not modify `app/layout.tsx` (it is intentionally minimal — just `<html><body>`). Each landing page imports its own `globals.css` from its own `layout.tsx`.

## When Working on a Version

- Treat that version's directory as your entire working context.
- Look only at files within `app/(root)/`, `app/v1/`, `app/v2/`, `app/v3/`, or `app/v4/` (whichever you're editing).
- Do not reference or check how another version implements something — each version diverges independently.

## Directory Structure Reference

```
app/
├── layout.tsx              # Bare shell only: <html><body> — do not add styles here
├── (root)/                 # Root landing page — URL: /
│   ├── layout.tsx          # Metadata + imports ./globals.css
│   ├── page.tsx
│   ├── globals.css
│   ├── components/         # (root)-only components
│   └── (legal)/            # /privacy-policy, /terms-of-use, /refund-policy, /cookie-policy
├── v1/                     # v1 landing page — URL: /v1
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/         # v1-only components
├── v2/                     # v2 landing page — URL: /v2 — Cinematic Luxury Studio
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
├── v3/                     # v3 landing page — URL: /v3 — Minimalist High-Fidelity Grid
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
└── v4/                     # v4 landing page — URL: /v4 — Immersive Micro-Interactive
    ├── layout.tsx
    ├── page.tsx
    ├── globals.css
    └── components/

public/
├── fonts/                  # Shared font files (binary assets, not code)
└── images/
    ├── poquito-logo.png    # Shared: used by v2/v3/v4 tile mosaic hero only
    ├── ...                 # Root LP images
    ├── v1/                 # v1-only images
    ├── v2/                 # v2-only images (Cinematic Luxury Studio)
    ├── v3/                 # v3-only images (Minimalist Grid)
    └── v4/                 # v4-only images (Immersive Micro-Interactive)
```

## Verification Checklist

After changes to any version, confirm:
- `npm run dev` — all five routes load without errors
- No cross-version import paths exist: `grep -r "from.*\.\./v1" app/v2/` returns nothing
- Each version's components reference only their own image path prefix
- v2/v3/v4 may reference `/images/poquito-logo.png` for the tile mosaic (exception to isolation, it's a binary asset)
