# Content Editing Guide

## Donors

Edit `src/data/donors.json`. Simple array of names:

```json
[
  "First Last",
  "Another Donor"
]
```

## Rovers

Edit `src/data/roverInfo.json`.

### Entry format

```json
{
  "year": "2025",
  "name": "Rover Name",
  "image_path": "/roverImages/2025/main.jpg",
  "desc": [
    "First paragraph.",
    "Second paragraph."
  ],
  "slideshow": [
    "/roverImages/2025/img1.jpg",
    "/roverImages/2025/img2.jpg"
  ]
}
```

### Adding a new rover

1. Create a folder: `public/roverImages/YEAR/`
2. Add rover images to that folder
3. Add an entry to `src/data/roverInfo.json`

## Images

| Type | Location | Reference as |
|------|----------|-------------|
| General (hero, team photos) | `public/images/` | `/images/filename.jpg` |
| Sponsor logos | `public/sponsorImages/` | `sponsorImages/filename.png` |
| Rover images | `public/roverImages/YEAR/` | `/roverImages/YEAR/filename.jpg` |

In Astro pages:
```astro
<img src="/images/photo.jpg" alt="Description" />
```

## Executive Board

Hardcoded in `src/pages/contact.astro`. Search for the board member section and update names, titles, and emails directly.

## Pages

All pages live in `src/pages/`. File path becomes the URL:

| File | URL |
|------|-----|
| `index.astro` | `/` |
| `about.astro` | `/about` |
| `rovers.astro` | `/rovers` |
| `sponsor.astro` | `/sponsor` |
| `donate.astro` | `/donate` |
| `join.astro` | `/join` |
| `contact.astro` | `/contact` |
| `memory.astro` | `/memory` |

To add a page, create `src/pages/pagename.astro`.

## Navigation and Footer

- Navigation: `src/components/Header.astro`
- Footer: `src/layouts/BaseLayout.astro` and `src/components/SponsorFooter.astro`

## Site Metadata

- Global: `src/layouts/BaseLayout.astro` (title template, default description)
- Per-page: edit the frontmatter in each `.astro` file
