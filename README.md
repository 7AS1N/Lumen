# Lumen

A tiny, beautiful, **classless** CSS framework. Write semantic HTML and it looks great: no classes, no JavaScript, no build step.

- Responsive layout (auto-fit card grid, sticky sidebar)
- Buttons, inputs, textarea, select, checkbox, radio
- Headings, paragraphs, lists, quotes, code, tables
- Automatic dark mode (follows system theme)

---

## Quick start

### Option 1: Use it directly in your project

1. Copy `lumen.css` into your project, for example into a `css/` folder.
2. Link it in the `<head>` of your HTML:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My site</title>
  <link rel="stylesheet" href="css/lumen.css">
</head>
<body>
  <header>
    <h1>Hello, Lumen</h1>
    <p>Styled with zero classes.</p>
  </header>
  <main>
    <p>Your content here.</p>
  </main>
  <footer>Footer</footer>
</body>
</html>
```

The `viewport` meta tag is required for the responsive layout to work on phones.

### Option 2: Use it as a CDN

First host the file somewhere public. Two easy, free ways:

**A. GitHub + jsDelivr**

1. Push `lumen.css` to a public GitHub repo.
2. Optionally create a release or tag (e.g. `v1.0.0`).
3. Link it through jsDelivr:

```html
<!-- Latest from the default branch -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO/lumen.css">

<!-- Pinned to a version (recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@1.0.0/lumen.css">
```

**B. npm + jsDelivr / unpkg**

1. Add a `package.json` next to `lumen.css`:

```json
{
  "name": "lumen-css",
  "version": "1.0.0",
  "description": "A tiny classless CSS framework",
  "main": "lumen.css",
  "style": "lumen.css",
  "files": ["lumen.css"],
  "license": "MIT"
}
```

2. Publish with `npm publish`. (Pick a unique package name if `lumen-css` is taken.)
3. Link it:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lumen-css@1.0.0/lumen.css">
<!-- or -->
<link rel="stylesheet" href="https://unpkg.com/lumen-css@1.0.0/lumen.css">
```

Replace `YOUR_USERNAME`, `YOUR_REPO` and the version number with your own.

---

## How it works

Lumen styles elements by what they are. Use the right HTML tag and you get the right look.

### Layout

| Markup | Result |
| --- | --- |
| `body > header`, `main`, `footer` | Centered container with comfortable padding |
| `section` containing `article`s | Responsive auto-fit card grid |
| `main` containing an `aside` | Content plus sticky sidebar on wide screens |
| `nav > ul > li > a` | Pill-style navigation (`aria-current="page"` highlights the active link) |

```html
<section>
  <h2>Features</h2>
  <article><h3>Fast</h3><p>Tiny and quick.</p></article>
  <article><h3>Simple</h3><p>No classes.</p></article>
  <article><h3>Pretty</h3><p>Looks great by default.</p></article>
</section>
```

Content directly inside the grid `section` that is not an `article` (such as the `h2` above) spans the full width.

### Forms

Wrap controls in `<label>` and `<form>`:

```html
<form>
  <label>Email
    <input type="email" placeholder="you@example.com" required>
  </label>

  <label>Topic
    <select>
      <option>General</option>
      <option>Support</option>
    </select>
  </label>

  <label>Message
    <textarea></textarea>
  </label>

  <fieldset>
    <legend>Options</legend>
    <label><input type="checkbox"> Subscribe</label>
    <label><input type="radio" name="plan" checked> Free</label>
    <label><input type="radio" name="plan"> Pro</label>
  </fieldset>

  <p>
    <button type="submit">Send</button>
    <button type="reset">Reset</button>
  </p>
</form>
```

A label that wraps a checkbox or radio lays out inline automatically.

### Buttons

| Markup | Look |
| --- | --- |
| `<button>` or `<button type="submit">` | Gradient primary button |
| `<button type="button">` or `<button type="reset">` | Outlined secondary button |
| `<a role="button" href="#">` | A link that looks like a primary button |

Put buttons inside one `<p>` and they sit side by side and wrap on small screens.

### Typography

`h1`–`h6`, `p`, `a`, `strong`, `mark`, `code`, `kbd`, `pre`, `blockquote`, `ul`, `ol`, `table`, `hr` and `details` are all styled. The `h1` uses a gradient automatically.

---

## Customizing

All colors, spacing and fonts are CSS variables at the top of `lumen.css`. Override them in your own stylesheet, loaded after Lumen:

```css
:root {
  --accent: #ff5d8f;
  --accent-2: #ffb35d;
  --radius: 6px;
  --width: 60rem;
  --font: "Inter", system-ui, sans-serif;
}
```

Common variables:

| Variable | Controls |
| --- | --- |
| `--accent`, `--accent-2` | Brand colors (buttons, links, focus, gradient) |
| `--bg`, `--surface`, `--text`, `--muted`, `--border` | Page and card colors |
| `--radius`, `--radius-sm` | Corner roundness |
| `--width` | Max content width |
| `--font`, `--mono` | Font stacks |

### Dark mode

Dark mode follows the user's system setting through `prefers-color-scheme`. To override the dark palette, set your variables inside:

```css
@media (prefers-color-scheme: dark) {
  :root { --accent: #ff8fb1; }
}
```

To force light mode only, remove the dark `@media` block and the `color-scheme` line in `lumen.css`.

---

## Browser support

Lumen uses modern CSS (`:has()`, `color-mix()`, `:user-invalid`, `clip-path`). It works in current versions of Chrome, Edge, Safari and Firefox. Older browsers fall back to simple stacked layouts.

## License

MIT. Use it however you like.
