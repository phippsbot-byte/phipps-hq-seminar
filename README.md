# Phipps HQ Seminar

A lightweight Socratic seminar app for product and engineering decisions.

What it does:
- creates a seminar from a topic, baseline concept, and roster
- uses a research analyst to produce a shared context packet
- lets a moderator open the room and periodically synthesize the discussion
- rotates full-thought turns across the roster so the discussion stays legible
- exports the final moderator memo as the session decision

Current architecture:
- front-end: static Pages app in `public/`
- backend: Hermes API server seminar endpoints under `/api/seminars`
- storage: SQLite inside Hermes `DiscussionStore`

Important current limitation:
- the Pages front-end currently talks to a public Hermes backend exposed via Cloudflare Tunnel
- the front-end is stable enough to demo, but the backend exposure path should be replaced with a named tunnel or proper Cloudflare-native backend before calling it production
