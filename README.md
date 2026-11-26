# DuckyDrive — Master Development Specification

The complete planning specification for DuckyDrive, published as a documentation site at
**https://duckydrive.github.io/**.

DuckyDrive is a gaming and project-discovery platform: one unified application with a catalogue of
games, sites, software and repositories, a username-only identity system (DuckyDrive ID), a
GitHub-powered publishing pipeline, and a staff-run live events system.

## Pages

| Page | Contents |
| --- | --- |
| `index.html` | Executive summary, vision, confirmed decisions, non-goals, design system and navigation |
| `product.html` | Catalogue and discovery, GitHub publishing and deployment, `duckydrive.json`, identity and profiles, chat and notifications, library, ratings and progression |
| `platform.html` | Supabase architecture, database schema, API contracts, SDK, live events (DLES), Admin Panel, staff permissions and moderation |
| `operations.html` | Security and privacy, media policy, performance and accessibility, QA, CI/CD, Freebuff workflow, monitoring and backups, roadmap, risks, glossary |

Together these cover all 47 sections of the required specification structure.

## Repository layout

| Path | Contents |
| --- | --- |
| `index.html`, `product.html`, `platform.html`, `operations.html` | The specification, as static pages with no build step |
| `assets/styles.css` | Design tokens and styles in the confirmed dark / lime / purple direction |
| `assets/app.js` | Small progressive enhancements: mobile contents drawer, active-section highlighting |
| `assets/duck.svg` | Favicon |

Open `index.html` directly in a browser, or serve the folder with `python3 -m http.server 8000`.
No dependencies, no build, no backend.

## Scope

This repository is documentation only. It contains no application code, no backend, no credentials
and no deployment configuration for the product itself.

## Key confirmed decisions

- One unified application; sections are internal views, never separate sites.
- Games are separate repositories deployed to separate paths on the same domain.
- Username + password accounts with no mandatory email; recovery codes are primary.
- No Developer staff role; game editing requires verified GitHub repository permission.
- No chat or DM attachments, ever.
- Following a project never produces an update notification.
- No seasonal competitions or leaderboard resets.
- Live events (DLES) are started and stopped manually by authorised staff.
- No private developer analytics dashboard.
- Automatic publishing only after validation passes.
