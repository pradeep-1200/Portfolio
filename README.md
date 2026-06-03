Premium Portfolio

This is a Next.js 15 app scaffold for a premium personal portfolio.

Quick edits:

- Edit `data/site.ts` and set `name` to your full name (e.g. `Jane Doe`).
- Update the links in `data/site.ts` for `github`, `linkedin`, etc.
- Add your resume to `public/resume.pdf`.

Run locally:

```powershell
npm install
npm run dev   # development
npm run build # production build
npm run start # start production server
```

Contact form: add EmailJS env vars to `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Where to change your name and links

- `data/site.ts` — set `name`, `resume`, and `links`.

If you want, I can update the site with your real name, links, and assets now.
