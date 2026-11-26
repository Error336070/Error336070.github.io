# Security research site

Personal site for advisories, research write-ups and disclosure contact. Built with Astro and deployed to GitHub Pages.

## ⚠️ The one rule

**Never commit embargoed material to this repo.** It's public, and git history keeps everything forever, even after you delete a file. Draft advisories live outside the repo (or in a separate private repo) until the fix window has ended. `draft: true` in front matter only hides a page from the build. It does **not** hide it from anyone reading the repo.

## 1. Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## 2. Personalize

Edit **`src/site.config.ts`** (name, handle, email, GitHub, PGP fingerprint, URL). Then update the same email and URL in **`public/.well-known/security.txt`**, and set its `Expires` date to less than a year ahead (RFC 9116 requires it). Renew it yearly.

The About text lives in `src/pages/about.astro`, the policy in `src/pages/disclosure-policy.astro`.

## 3. Get a dedicated security email

Use a separate address just for reports (Proton Mail works well and handles PGP natively). Once you have a domain, `security@yourdomain` looks most professional.

## 4. Generate your PGP key

```bash
gpg --quick-generate-key "Ata Kemal Tur <security@yourdomain>" ed25519 sign 2y
gpg --quick-add-key <FINGERPRINT> cv25519 encr 2y
gpg --fingerprint security@yourdomain                         # paste into site.config.ts
gpg --armor --export security@yourdomain > public/pgp.asc     # replaces the placeholder
```

Back up the private key and a revocation certificate somewhere offline. If you use Proton, you can export the key it generates instead.

## 5. Deploy to GitHub Pages

1. Create a **public** repo named exactly **`Error336070.github.io`**.
2. Push:
   ```bash
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/Error336070/Error336070.github.io.git
   git push -u origin main
   ```
3. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. The site goes live at `https://error336070.github.io`.

## 6. Custom domain (optional, ~$10/yr)

1. Buy the domain (Cloudflare Registrar or Porkbun are cheap and have no markup tricks).
2. Add DNS: four `A` records for the apex pointing to GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` for `www` pointing to `error336070.github.io`.
3. Create `public/CNAME` containing just `yourdomain.com`.
4. Update `url` in `src/site.config.ts` and every URL in `security.txt`.
5. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS**.

## Adding content

- **Advisory** (only after the embargo ends): copy `templates/advisory.md` to `src/content/advisories/<slug>.md`, fill it in, and push.
- **Research post:** copy `templates/research.md` to `src/content/research/<slug>.md`. Keep `draft: true` until it's ready.

Severity badges, CVE/CWE links, the advisory table, RSS and the sitemap all update automatically.

## Structure

```
src/
  site.config.ts          personal settings
  content.config.ts       content schemas (advisories, research)
  content/advisories/     published advisories (Markdown)
  content/research/       write-ups (Markdown)
  pages/                  routes
  layouts/, components/   shared UI
  styles/global.css       theme (dark by default, light via system preference)
public/
  .well-known/security.txt
  pgp.asc, favicon.svg
templates/                copy-paste starters
```