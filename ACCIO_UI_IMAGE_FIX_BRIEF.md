# Accio UI + Image Fix Brief

Current goal: make technical fixes and prepare image usage without redesigning the site.

## Do Not Do

- Do not redesign the homepage.
- Do not generate new AI images.
- Do not use `assets/images/curated-v1`; that folder contains rejected candidates.
- Do not replace official page images until the owner confirms the final image selection.
- Do not crop or retouch images inside HTML/CSS beyond normal `object-fit` and `object-position`.

## Available Image Folders

Original source images:

```text
source-images/by-model/
```

Optimized web-ready candidate images:

```text
assets/images/optimized-v1/by-model/
```

Use the optimized folder for future website image references, not the raw source folder.

## Required UI Fix 1: Hero Height

Issue: The homepage Hero area still feels too tall / unchanged.

Required change:

- Reduce the homepage Hero vertical height.
- Keep the existing left title + right visual layout.
- Do not redesign the Hero content.
- Do not make the Hero image small; reduce empty vertical space instead.

Suggested CSS direction:

```css
.hero {
  min-height: auto;
  padding-top: clamp(56px, 6vw, 86px);
  padding-bottom: clamp(42px, 5vw, 72px);
}

.hero-grid {
  align-items: center;
}

.hero-visual,
.hero .image-slot {
  min-height: 0;
}

.hero .image-slot img {
  max-height: clamp(420px, 46vw, 620px);
  object-fit: contain;
}
```

If the actual class names differ, apply the same principle to the current Hero wrapper and image container.

Mobile rule:

```css
@media (max-width: 768px) {
  .hero {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .hero .image-slot img {
    max-height: none;
  }
}
```

## Required UI Fix 2: Form Checkbox Alignment

Issue: Form checkboxes and first-line label text are not aligned.

Required change:

- The checkbox square and the first line of text must align cleanly.
- Multi-line label text should wrap under the text, not under the checkbox.
- Do not make the checkbox oversized.

Suggested CSS:

```css
.checkbox-field,
.checkbox-label,
label:has(input[type=\"checkbox\"]) {
  display: grid;
  grid-template-columns: 16px 1fr;
  column-gap: 10px;
  align-items: start;
}

.checkbox-field input[type=\"checkbox\"],
.checkbox-label input[type=\"checkbox\"],
label:has(input[type=\"checkbox\"]) input[type=\"checkbox\"] {
  width: 16px;
  height: 16px;
  margin: 2px 0 0;
}
```

If `:has()` support is a concern, add a class to checkbox labels and use the class selectors only.

## Required Image Handling

Use this optimized image folder:

```text
assets/images/optimized-v1/by-model/
```

Do not use raw images directly in the live site.

Recommended first-pass mapping for review only:

```text
F20 device / kit:
assets/images/optimized-v1/by-model/F20/DSC06548.jpg
assets/images/optimized-v1/by-model/F20/DSC06536.jpg
assets/images/optimized-v1/by-model/F20/DSC06554.jpg

F10 system:
assets/images/optimized-v1/by-model/F10/DSC03753.jpg
assets/images/optimized-v1/by-model/F10/DSC03729.jpg

NK3 Ultra:
assets/images/optimized-v1/by-model/NK3-Ultra/DSC06732.jpg
assets/images/optimized-v1/by-model/NK3-Ultra/DSC06729.jpg

NK2 Ultra:
assets/images/optimized-v1/by-model/NK2-Ultra/DSC06952.jpg
assets/images/optimized-v1/by-model/NK2-Ultra/DSC06938.jpg

NK2 Pro:
assets/images/optimized-v1/by-model/NK2-Pro/DSC00975.jpg

NH4:
assets/images/optimized-v1/by-model/NH4/DSC06506.jpg

S2-140:
assets/images/optimized-v1/by-model/S2-140/DSC04922.jpg

Factory:
assets/images/optimized-v1/by-model/Factory/DSC02191.jpg
assets/images/optimized-v1/by-model/Factory/DSC02264.jpg
```

Important: this is a review mapping, not approval to replace the final homepage images.

## Expected Output From Accio

1. Confirm Hero height CSS was adjusted.
2. Confirm checkbox alignment was fixed.
3. Confirm optimized images are readable.
4. Provide a screenshot or local preview link.
5. Do not change the image selection unless explicitly approved.
