# DuckyDrive — Master Development Specification

The complete planning specification for DuckyDrive, published as a documentation site at
**https://duckydrive.github.io/**.

DuckyDrive is a gaming and project-discovery platform: one unified application with a catalogue of
games, sites, software and repositories, a username-only identity system (DuckyDrive ID), a
GitHub-powered publishing pipeline, and a staff-run live events system (DLES).

## What is on the site

| Path | Contents |
| --- | --- |
| `index.html` | Overview, full chapter index, locked decisions, design tokens |
| `chapters/*.html` | The specification itself: 17 chapters covering 47 required sections |
| `assets/` | Stylesheet, progressive-enhancement script, favicon |

## Chapters

| # | Chapter | Sections |
| --- | --- | --- |
| 01 | Executive Summary & Vision | 1-3 |
| 02 | Confirmed Decisions & Non-Goals | 4-5 |
| 03 | Design System, Navigation & UX | 6-7 |
| 04 | Catalogue, Search & Discovery | 8, 18, 19 |
| 05 | DuckyDrive ID, Profiles & Privacy | 10-11 |
| 06 | Friends, Chat, Messaging & Notifications | 12-14 |
| 07 | Library, Collections, Ratings & Progress | 15-17 |
| 08 | GitHub Integration, Deployments & Auto-Publishing | 20-22 |
| 09 | The `duckydrive.json` Standard | 23 |
| 10 | Supabase, Database & Service Contracts | 24-26 |
| 11 | SDK & Live Events (DLES) | 27-28 |
| 12 | Admin Panel, Staff Roles & Moderation | 29-31 |
| 13 | Security, Privacy & Media Policy | 32-34 |
| 14 | Performance, Accessibility & QA | 35-37 |
| 15 | CI/CD, Freebuff Workflow & Operations | 38-41 |
| 16 | Roadmap, Acceptance Criteria & Risk | 42-44 |
| 17 | Open Questions, Glossary & Appendices | 45-47 |

## Scope

This repository is documentation only. It contains no application code, no backend, no credentials
and no deployment configuration for the product itself. Product decisions, permissions, data model,
API contracts, security model and roadmap are recorded in the chapters.

## Key confirmed decisions

- One unified application; sections are internal views, never separate sites.
- Games are separate repositories deployed to separate paths on the same domain, opened full-screen.
- Username + password accounts with no mandatory email; recovery codes are primary.
- No Developer staff role; game editing requires verified GitHub repository permission.
- No chat or DM attachments, ever.
- Following a project never produces an update notification.
- No seasonal competitions or leaderboard resets.
- Live events (DLES) are started and stopped manually by authorised staff.
- No private developer analytics dashboard.
- Automatic publishing only after validation passes.
- Staff hierarchy is Owner, Administrator and Moderator only.
- In-game announcements are top banners, never centre-screen takeovers.
