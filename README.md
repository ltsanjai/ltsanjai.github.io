# Developer Portfolio

A premium, dark, futuristic developer portfolio built with React, Vite, Tailwind CSS,
and Framer Motion. Repositories are loaded live from the GitHub public API — no
backend, no token required.

## Quick start

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Personalize it

Everything you need to change lives in **`src/config/portfolio.js`**:

- `GITHUB_USERNAME` — set this to your real GitHub username so the Projects,
  Featured Project (optional), and GitHub Stats sections load real data.
- `profile` — your name, tagline, bio, badge text.
- `contact` — email, GitHub URL, LinkedIn URL.
- `aboutHighlights` — the four bullet points in the About card.
- `skillGroups` — the technologies shown in the Skills grid, grouped by category.
- `currentlyLearning` — the cards in the "Currently Exploring" section.
- `featuredProject` — set to `null` to hide the featured project card, or fill
  it in with a real project once you have one worth showcasing.

Replace every `[PLACEHOLDER]` value before deploying — nothing has been
invented on your behalf (no fake bio, no fake contact details, no fake stats).

## Notes

- GitHub data comes from the **unauthenticated** public REST API
  (`api.github.com`), which is rate-limited to 60 requests/hour per visitor IP.
  That's normal for a portfolio's traffic; if you ever need more headroom,
  you'd need to proxy requests through a backend with a token — this project
  intentionally avoids that to stay static/serverless.
- The custom cursor (glow dot + trailing ring + spotlight) is automatically
  disabled on touch devices and when the visitor has `prefers-reduced-motion`
  enabled.
- Forked repositories are excluded from the Projects grid so it only shows
  your own work.

## Project structure

```
src/
├── components/       # UI sections and pieces
├── config/
│   └── portfolio.js  # <- edit this file to personalize everything
├── hooks/
│   └── useGitHub.js  # fetches user + repos from the GitHub API
├── App.jsx
├── main.jsx
└── index.css
```
