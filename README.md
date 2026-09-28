# Pinnacle Agribusiness Co. Ltd — Website

A redesigned multi-page website for Pinnacle Agribusiness Co. Ltd, built from the
company's own content and photography.

## Pages
- `index.html` — Home
- `about.html` — About (story, vision, mission, objectives, values)
- `services.html` — Services (10 core services)
- `projects.html` — Our Work (filterable photo portfolio)
- `team.html` — Team (editorial founder/team profiles)
- `contact.html` — Contact (map, office details, enquiry form)

## Features
- Light/dark theme toggle, persisted in `localStorage`, respecting system preference on first visit
- Fully responsive (desktop, tablet, mobile) with a mobile hamburger menu
- Floating WhatsApp button on every page
- Google Maps embed and "Open in Google Maps" link on the Contact page
- Contact form submits via `mailto:` to pinnacleagribusiness@gmail.com
- No build step, no framework — plain HTML5 / CSS3 / JavaScript

## Deploying to GitHub Pages
1. Create a new GitHub repository (or use an existing one).
2. Upload the **contents of this folder** (not the folder itself) to the repository root,
   so that `index.html` sits at the repository root.
3. In the repository, go to **Settings → Pages**, set the source branch (e.g. `main`) and
   folder to `/ (root)`, then save.
4. Your site will be published at `https://<username>.github.io/<repository-name>/`.

This folder also deploys as-is to any static host (Netlify, Vercel, plain web hosting, etc.) —
just upload everything inside `pinnacle/` to the web root.
