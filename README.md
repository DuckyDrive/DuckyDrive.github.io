# DuckyDrive — Master Development Specification

The complete planning specification for DuckyDrive, published as a documentation site at
**https://duckydrive.github.io/**.

DuckyDrive is a gaming and project-discovery platform: one unified application with a catalogue of
games, sites, software and repositories, a username-only identity system (DuckyDrive ID), a
GitHub-powered publishing pipeline, and a staff-run live events system.

## Contents

`index.html` is the specification itself — a single, self-contained page with a sticky contents
sidebar, covering all 47 required sections:

1. Executive summary, product vision, scope and non-goals
2. Confirmed decisions, recommended defaults, validation register
3. Navigation and page inventory
4. Design system (colour, type, spacing, states, responsive, accessibility)
5. Catalogue, search, trending, recommendations
6. DuckyDrive ID, profiles and privacy
7. Friends, chat, private messaging, notifications
8. Library, collections, ratings, XP, achievements, leaderboards
9. GitHub integration, repository discovery, automatic publishing, deployment
10. `duckydrive.json` metadata standard
11. Supabase architecture, database schema, API contracts
12. DuckyDrive SDK and the Live Events System (DLES)
13. Admin Panel, staff hierarchy, permission model, moderation
14. Security threat model, privacy, storage and media policy
15. Performance, scalability, accessibility, testing and QA
16. CI/CD, Freebuff workflow, monitoring, backup and recovery
17. Roadmap, acceptance criteria, risk register, glossary, appendices

## Repository layout

| Path | Contents |
| --- | --- |
| `index.html` | The specification (single page, no build step). |
| `assets/styles.css` | Design tokens and styles in the confirmed dark / lime / purple direction. |
| `assets/app.js` | Small progressive enhancements: mobile contents drawer, active-section highlighting. |
| `assets/duck.svg` | Favicon. |

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
