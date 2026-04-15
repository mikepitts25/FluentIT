# FluentIT — Research & Plan

## Context

You want to build an app that teaches IT concepts, tools, technologies, and engineering practices across branches of IT (cyber, DevOps, cloud, networking, data, etc.). The goal is not to make someone a practitioner but to help them *speak intelligently* about a topic — e.g., walk into a meeting and understand what "Kubernetes ingress," "zero trust," or "CI/CD" actually means.

The working title implied by the repo is **FluentIT** — fluency in IT vocabulary and concepts. That framing is a real differentiator and should drive the product.

Repo is currently empty (just a README). This document is the research answer + a recommended first direction.

---

## 1. Is it a good idea?

**Short answer: yes, with a sharp positioning.** The generic "teach IT concepts" space is crowded, but the niche you're describing — *conceptual fluency for people who don't need to build the thing* — is underserved.

### Evidence it's a real need
- Product managers, program managers, sales engineers, recruiters, executives, analysts, auditors, and career-switchers routinely sit in meetings where they need to understand, not implement, tech concepts.
- Skiplevel (skiplevel.co) has built a whole business on this exact pain for PMs: "PMs don't need to know how to code; they need to understand how systems fit together." That product being viable is evidence the market exists — but it's narrowly scoped (PMs, foundations only).
- Microlearning (1–3 min bursts) is the dominant format for workplace learning in 2026 and is well suited to vocabulary/concept delivery.
- The IT segment is projected to be the fastest-growing vertical inside corporate e-learning.

### Why this beats "just Google it"
- Definitions scattered across Wikipedia/vendor docs are dense, inconsistent, and often assume prior knowledge.
- What people actually need is: a plain-English definition → why it matters → how it fits with adjacent concepts → a 30-second mental model → a quick quiz that sticks. That's a curated product, not a search result.

---

## 2. Competitors

### Direct (conceptual/fluency-oriented)
| Product | What it does | Where FluentIT can beat it |
|---|---|---|
| **Skiplevel** | Tech foundations for PMs (APIs, DBs, architecture) | PM-only, foundations-only, course format (not bite-size daily). FluentIT can go broader (cyber/DevOps/cloud/data) and more habitual. |
| **Brilliant** | Interactive CS/math lessons | Strong on fundamentals/problem-solving, weak on real-world IT vocabulary (Terraform, SIEM, OAuth, Kafka). |
| **Computer Science Dictionary apps** | Offline glossary | Static, no pedagogy, no retention mechanism. |

### Adjacent (coding-oriented — different job)
- **Mimo** — "Duolingo for coding" (teaches you to write code).
- **SoloLearn, Codecademy, Enki** — coding skills and career paths.
- **Coursera / edX / Linux Foundation / A Cloud Guru / KodeKloud** — long-form certification prep.

**Key insight:** the well-known "Duolingo for X" players are all teaching people to *do* the skill (write code, configure clusters). **No well-known player owns "Duolingo for IT literacy"** — short daily lessons that make you conversationally fluent without turning you into an engineer. That's the open lane.

### Indirect
- Certification prep apps (CompTIA, AWS, Azure) — overkill and exam-focused.
- YouTube/blogs — free but unstructured, no retention loop.
- ChatGPT/Claude — on-demand explanations but no curriculum, no habit, no progress.

---

## 3. Market

- **Global e-learning:** ~$440B in 2025, growing ~20% CAGR through 2034.
- **Corporate e-learning:** ~$10.6B in 2026 → ~$15B by 2035 (~4% CAGR); IT is the fastest-growing vertical.
- **Cert-prep / cloud-skills market:** strong tailwinds — AWS alone holds ~31% cloud share, and cloud/AI skills demand keeps climbing into 2026.
- **Audience sizing (rough TAM signal):**
  - ~25M+ non-engineering roles in tech-adjacent jobs in the US alone (PM, sales eng, marketing, TPM, customer success, analysts, recruiters).
  - Tens of millions of career-switchers and early-career workers globally who need conceptual grounding before any certification.
- **Monetization precedents:** Duolingo (freemium + Super ~$7/mo), Brilliant (~$15/mo), Mimo (~$10/mo), Skiplevel (course-priced). A $5–$10/mo consumer tier + a B2B team tier is a proven shape.

**Verdict on market:** healthy, growing, and the *specific niche* (conceptual fluency, not practitioner skills) is not owned by anyone.

---

## 4. Recommended positioning

> **FluentIT: become conversational in tech in 5 minutes a day.** Short, daily, spaced-repetition lessons on IT concepts across cybersecurity, DevOps, cloud, networking, data, and AI — written for people who need to *understand* the conversation, not build the system.

### Differentiators to commit to
1. **Concept-first, not code-first.** No IDEs, no YAML, no terminals.
2. **Role-aware tracks.** "PM at a SaaS company," "Sales eng at a cybersecurity vendor," "New to DevOps meetings," "Career switcher → cyber."
3. **Meeting-ready format.** Every concept card has: plain-English definition, 1-sentence "why it matters," analogy, "sounds smart to say," and common confusions.
4. **Spaced repetition + streaks.** Retention is the moat; one-shot reading is not.
5. **AI "meeting prep" feature.** Paste a meeting agenda or Slack thread → get a 3-minute brief on the unfamiliar terms. This is the killer feature ChatGPT can *sort of* do but not package as a habit.

---

## 5. Risks / honest concerns

- **"Why not just ChatGPT?"** Must answer with: curated pedagogy, retention (spaced repetition), habit (streaks), and role-specific paths. LLM is a feature inside FluentIT, not a competitor.
- **Content volume.** IT moves fast; a small team can't hand-author thousands of concept cards without AI-assisted authoring + expert review.
- **B2C e-learning retention** is notoriously hard (Duolingo is an outlier). B2B (team licenses for onboarding) may be the more durable revenue.
- **Crowded app store** — positioning must be razor-sharp or it reads as "another coding app."

---

## 6. Locked-in MVP direction

Based on your answers:

- **Primary audience:** IT practitioners cross-training (e.g., sysadmin → cyber, cloud eng → data, network eng → DevOps). Smaller audience than consumer but higher willingness to pay and higher baseline literacy — we can assume they know what TCP is but not what a SIEM does.
- **Scope:** Broad-but-shallow across the major IT domains at launch — **cybersecurity, DevOps, cloud, networking, data/DB, AI/ML**. This becomes the differentiator: one place to sample every adjacent discipline.
- **Platform:** Mobile-first, iOS + Android. Habit/streak product; the phone is where daily micro-learning lives.

### Tighter positioning for this audience
> **FluentIT: 5 minutes a day to stay current on the IT domains next to yours.** Built for working IT pros who need to speak fluently about cyber, DevOps, cloud, data, networking, and AI — without sitting through another full course.

This is a sharper claim than the consumer version because:
- Practitioners don't want "ELI5." They want "assume I know networking; explain the cloud-native equivalent."
- Cross-training fits the "adjacent domain" mental model — perfect for a matrix UX.

### MVP feature set (v1)
1. **Domain matrix home screen.** 6 domains × skill levels; tap a cell to start a track.
2. **Concept cards** — plain-English definition, "why it matters," analogy from adjacent IT domains (e.g., "think of IAM roles like sudoers"), common confusions, and a quick 2-question check.
3. **Spaced-repetition review** — daily stack built from cards you've seen; use an existing FSRS implementation.
4. **Streaks + daily goal** (Duolingo-style).
5. **"Meeting prep" LLM feature** — paste an agenda/Slack thread/JD, get a 3-minute brief on the unfamiliar terms, with links into cards you can add to your deck.
6. **Offline mode** for commute/plane.

### Content strategy
- Target **~100 concept cards per domain at launch** (600 total) — enough for 2–3 months of daily use per domain.
- Author pipeline: LLM drafts using a strict card template → domain expert review → edit → publish. This is the only realistic way to hit that volume.
- Versioning matters (cloud services rename constantly); store cards in git-backed Markdown with front-matter so review/PR flows work.

### Stack recommendation
- **Client:** React Native (Expo) — single codebase iOS + Android, fast iteration, good offline story, large ecosystem. Flutter is a fine alternative; pick whichever the founding dev knows.
- **Content:** Markdown + YAML front-matter in a git repo; bundled into the app with OTA updates via Expo EAS Update.
- **Spaced repetition:** existing open-source FSRS library — do **not** invent our own scheduler.
- **Backend:** start serverless (Supabase or Firebase) for auth, progress sync, and streaks. Don't build a bespoke backend yet.
- **LLM:** Claude API for the meeting-prep feature — keep the prompt stateless, cache common term lookups.
- **Analytics:** PostHog or Amplitude for retention funnels from day 1.

### Monetization
- Free tier: 3 cards/day, one active domain, no meeting-prep.
- Pro ($9–12/mo): unlimited cards, all domains, meeting-prep, offline, streak freezes.
- Teams (later): bulk licenses for IT orgs doing cross-training / upskilling programs.

### Pre-build validation (worth doing in parallel with setup)
- Landing page with the locked positioning + waitlist.
- Post 10 sample cards in /r/sysadmin, /r/devops, /r/cybersecurity as free previews — measure click-through to waitlist.
- Goal: 500 waitlist signups before public launch.

---

## 7. Critical files (future)

Repo is empty. Proposed structure for the React Native / Expo build:
- `apps/mobile` — Expo React Native app (iOS + Android from one codebase)
- `packages/content` — concept cards as Markdown + YAML front-matter, grouped by domain (cyber, devops, cloud, network, data, ai)
- `packages/srs` — thin wrapper around an existing open-source FSRS library
- `packages/ui` — shared RN components (card, review, streak widgets)
- `services/ai` — Claude API wrapper for meeting-prep + quiz variant generation
- `scripts/authoring` — LLM-assisted card drafting tooling for content authors
- Supabase (or Firebase) project for auth + progress sync — config only, no self-hosted backend at MVP

Reuse, don't reinvent:
- **FSRS** open-source scheduler (ts-fsrs or similar) — battle-tested spaced-repetition math.
- **Anki**'s card model as a reference for the front/back/cloze structure.
- **Expo EAS Update** for pushing new cards without app-store releases.

---

## 8. Verification (when we get to code)

- Content: peer-review each concept card for factual accuracy (have an actual cyber/DevOps/cloud practitioner sign off per domain).
- Pedagogy: 7-day retention test with 10 beta users per track — can they correctly use the term unprompted a week later?
- Product: waitlist → activated user conversion, day-1/day-7/day-30 retention, streak length, premium conversion.
- End-to-end: run the app locally, complete a full lesson, trigger a spaced-repetition review, use meeting-prep on a sample agenda.

---

## Sources

- [AwareGO — Microlearning for Cybersecurity 2026](https://awarego.com/the-ultimate-guide-to-micro-learning-for-cybersecurity-in-2026/)
- [Linux Foundation — 2026 IT Education & Certification Trends](https://training.linuxfoundation.org/blog/2026-top-10-it-education-certification-trends/)
- [iMocha — L&D Program for Software Developers 2026](https://www.imocha.io/blog/creating-ld-program-for-software-developers)
- [Skiplevel — Technical training for non-engineers](https://www.skiplevel.co/)
- [MIT Professional Education — Technology Leadership Program](https://professional.mit.edu/course-catalog/technology-leadership-program)
- [Grand View Research — E-learning Services Market](https://www.grandviewresearch.com/industry-analysis/e-learning-services-market)
- [Precedence Research — Corporate E-Learning Market](https://www.precedenceresearch.com/corporate-e-learning-market)
- [Fortune Business Insights — E-learning Services Market](https://www.fortunebusinessinsights.com/industry-reports/e-learning-services-market-100757)
- [iSpring — eLearning Statistics for 2026](https://www.ispring.com/knowledge-hub/elearning-statistics)
- [BenchPrep — IT Certification Exam Prep Platforms 2026](https://ai.benchprep.com/resources/the-ultimate-guide-to-it-certification-exam-prep-p)
- [G2 — Duolingo Alternatives](https://www.g2.com/products/duolingo/competitors/alternatives)
- [CodenQuest — Mimo Alternatives](https://codenquest.com/blog/mimo-alternatives)
- [Ascend Education — Study Apps for Tech Students 2025](https://ascendeducation.com/news/smart-study-apps-for-tech-learners-which-ones-are-worth-it-in-2025/)
