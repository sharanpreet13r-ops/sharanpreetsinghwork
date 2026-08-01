# Sharan — Portfolio

Next.js 14 (App Router) + Tailwind CSS, with a real content backend:
[Sanity](https://sanity.io) running right inside your site at `/studio`.
No database to host, no separate app to remember — log into your own
site's `/studio` page and edit.

## One-time setup (do this once, no terminal required)

### 1. Create a free Sanity project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and sign up
   (you can use your GitHub or Google account).
2. Click **Create project**. Give it any name.
3. When it creates a dataset, keep it named `production` and set it to
   **Public** (this just means your site's read-only content can be
   fetched — you still need to log in to edit anything).
4. On the project's overview page, copy the **Project ID** — you'll need
   it in step 3 below.

### 2. Push this project to GitHub + Vercel

Follow the earlier steps you already have: upload the unzipped folder to
a new GitHub repo, then import that repo on [vercel.com/new](https://vercel.com/new).

### 3. Add environment variables in Vercel

Before (or after) your first deploy, go to your Vercel project →
**Settings → Environment Variables** and add:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | the Project ID you copied in step 1 |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `CONTACT_TO_EMAIL` | the email you want form submissions sent to |
| `RESEND_API_KEY` | *(optional, see Contact form section below)* |

Redeploy after adding these (Vercel → Deployments → ⋯ → Redeploy).

### 4. Fill in your content

Visit `yoursite.vercel.app/studio` and log in with the same account you
used for Sanity. You'll see three sections in the sidebar:

- **Site Settings** — your name, bio, skills, tech stack, socials, etc.
  (There's only one of these — it's already there, just click it and
  fill in the blanks.)
- **Projects** — click "+ Create" to add a case study.
- **Design Posts** — click "+ Create" to add a social/print post.

Use `STARTER-CONTENT.md` in this folder as a copy-paste starting point —
it has the same sample content the design was built around, so you can
just paste it in and swap in your real details afterward.

Every change you publish in the Studio shows up on your live site within
about a minute — no redeploy needed.

## Image sizing (kept deliberately simple)

Every image slot on the site is a fixed aspect-ratio box, so uploads of
different original sizes still line up cleanly — the box crops/covers the
image, it never distorts it.

| Slot | Aspect ratio | Recommended source size | Keep under |
|---|:---:|---|---|
| Hero / profile photo | 1:1 | 800×800px min | 500KB |
| Project cover (grid + detail) | 16:9–16:10 | 1600×1000px | 500KB |
| Project gallery image | 4:3 | 1200×900px | 500KB |
| Design post (social grid) | 5:6 | 1000×1200px | 400KB |

Anything larger will still work, it'll just load slower — Sanity's upload
dialog shows the file size as you drag an image in.

## Contact form

The form posts to `app/api/contact/route.js`, which validates the fields
and sends an email via [Resend](https://resend.com) (free tier is plenty
for a portfolio). Until you add an API key it still works end-to-end —
submissions are just logged on the server instead of emailed.

To turn on real email delivery:

1. Create a free Resend account and verify a sending domain (or use their
   shared `onboarding@resend.dev` sender for quick testing).
2. Add `RESEND_API_KEY` in Vercel's Environment Variables (see above).
3. Redeploy.

## Running it locally (optional — only if you ever want to preview changes on your own computer)

```bash
npm install
npm run dev
```

You'll need a `.env.local` file (copy `.env.example`) with the same
Sanity project ID/dataset for local content to load.

## Notes on the effects

- **Smooth scroll** — [Lenis](https://github.com/darkroomengineering/lenis),
  wired up in `components/SmoothScroll.js`. Disabled automatically if the
  visitor has "reduce motion" turned on at the OS level.
- **Custom cursor** — `components/CustomCursor.js`. Only active on devices
  with a mouse; touch devices keep the normal system cursor.
- **Background** — `components/SmokeBackground.js` is a CSS-animated
  gradient effect rather than a video file, so there's nothing to host or
  stream and it loads instantly.
- **Studio route** (`/studio`) intentionally doesn't load Tailwind or the
  custom cursor — it's kept separate so Sanity's own interface renders
  correctly.
