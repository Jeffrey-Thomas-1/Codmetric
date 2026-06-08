
# Visiting Japan — Travel Blog

Japan-themed, responsive travel blog page with: posts, a photo gallery (CSS grid), hover effects, and a contact form.

To view the site locally, open `index.html` in your browser. No build steps required.

Files added/updated:
- `index.html` — main page (Japan theme)
- `styles.css` — Japan color palette and fonts
- `script.js` — contact form handling
- `assets/images/japan/` — place your six photos here (see instructions)

Image instructions:
- Place your six photos in `assets/images/japan/` and name them `photo1.jpg` through `photo6.jpg` (or `png/webp`).
- Recommended sizes: hero images 1200–2000px wide; gallery images 800–1200px.
- Example filenames: `kyoto-temple.jpg`, `tokyo-street.jpg`, etc.
Images: I detected your uploaded photos in `assets/images/japan/` and integrated them into the homepage posts and gallery. Filenames used:

- `36539a0322b6870b0f2200f6a81792a0.jpg`
- `8507bef87fe53c84cfea88baa3030573.jpg`
- `b6b861f8e6b52a6c98014e7b72d8e30c.jpg`
- `d4cd273cd4a74c4f3917c991316d0bb7.jpg`
- `d761d9a3ed399ad167517acd49392b68.jpg`
- `de73490c592382c468e6531f0859492a.jpg`

If you want different filenames or captions, provide them and I'll update the captions accordingly.

Contact form: The form supports two modes:
- Demo mode (default): shows a localized demo confirmation when no HTTP(S) endpoint is configured.
- Live mode: provide a `Formspree` form action (or any HTTPS POST endpoint) and either add it as the form `action` or set `data-endpoint` on the form. Example `action` value for Formspree: `https://formspree.io/f/your-form-id` — replace `your-form-id` with your Formspree ID.

Important: the site will only attempt a network submit when the endpoint begins with `http://` or `https://`. If you open the site from the filesystem (file://), the demo mode will be used unless you set a proper HTTPS endpoint.

If you want me to deploy the site and wire a live submission endpoint, provide the endpoint details (or create a Formspree form and give me the ID).
