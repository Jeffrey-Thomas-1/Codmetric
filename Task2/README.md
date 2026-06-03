# Classic Pancakes — Single-page Recipe

Files added:
- [index.html](index.html)
- [styles.css](styles.css)

How to view locally:

1. Open `index.html` in your browser directly, or run a simple HTTP server from this folder:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

What you may want to do next:
- Replace the placeholder image in `index.html` with your own photo (replace the `src` URL in the `<img>`).
- Edit the recipe title, ingredients, directions in `index.html`.
- Add more recipes by duplicating the `<article class="recipe">` block and updating content.
- Deploy to GitHub Pages by committing these files to a repo and enabling Pages.

If you'd like, I can:
- Add multiple recipe cards and a small navigation.
- Convert this into a template with a JSON data file to render multiple recipes.
- Optimize images and add accessibility enhancements.

Image files required

Place the following images in an `images/` folder next to `index.html`:

- `images/pancakes.jpg` — Classic Pancakes (recommended: 1200×800 or 4:3, JPEG or WebP)
- `images/carbonara.jpg` — Spaghetti Carbonara (recommended: 1200×800)
- `images/veggie-stirfry.jpg` — Vegetable Stir-Fry (recommended: 1200×800)

Guidelines:
- Use descriptive file names and provide meaningful `alt` text (already in `index.html`).
- Aim for 100–300 KB per image for good load speed; optionally resize and compress.

Next steps I can do for you:
- Convert the site to load images lazily and add responsive `srcset` entries.
- Make the recipes data-driven (JSON) so you can add recipes without editing HTML.
