# Jenna Nabridge — portfolio prototype

A static, responsive creative portfolio. Built with HTML, CSS and vanilla JavaScript, suitable for GitHub Pages.

## Preview locally

Open `index.html` in a web browser. For best results, run a local web server in this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Publish on GitHub Pages

1. Create a new **public** GitHub repository (for example `jenna-portfolio`).
2. Upload **all** files and the `assets` folder to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, `main`, `/ (root)`, then Save.
5. GitHub will show a preview URL similar to `https://YOUR-USERNAME.github.io/jenna-portfolio/`.
6. Test all pages on desktop and mobile before connecting your Squarespace domain.

## Important before going live

- All project imagery is **temporary cropped screenshots** of the user's existing site. Replace with original high-resolution assets.
- The Contact button is intentionally disabled until you replace `hello@example.com` with your actual email and remove the placeholder click handler in `script.js`.
- Add your real Resume and LinkedIn links to the About page.
- Confirm all project descriptions and credits. Current descriptions are high-level interpretations of the provided screenshots.
- Project data and image paths live in `script.js` (`projects` array); this is where you add future dirty sugar work or new clients.
- Fonts load from Google Fonts; the site uses local fallback fonts if offline.

## Domain (later, not yet)

Once the preview is approved, set the custom domain in GitHub Pages to `www.jennanabridge.com`, and follow GitHub's current custom-domain DNS instructions in your Squarespace Domains dashboard. Configure both the `www` and apex (`jennanabridge.com`) as appropriate, verify the domain, and enable HTTPS. Keep the existing Squarespace site live until the new domain routing works. **Do not cancel domain registration.**
