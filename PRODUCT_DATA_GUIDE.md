# Dermadream Product Data Guide

This guide explains how to maintain the scalable product catalog framework.

## Data Source

Primary catalog data lives in:

`assets/data/products.json`

The current structure keeps categories ready while leaving `models` empty until the product line is confirmed.

## Add A Category

Add a new object under `categories`:

```json
{
  "id": "example-category",
  "name": "Example Category",
  "description": "B2B manufacturer-oriented category description.",
  "slug": "example-category",
  "href": "example-category.html",
  "models": []
}
```

Then create a matching category page by copying:

`products/category-template.html`

## Add Models Later

When specific models are confirmed, add model objects inside the right category:

```json
{
  "id": "model-slug",
  "name": "Model Name",
  "shortDescription": "B2B positioning sentence.",
  "href": "model-slug.html",
  "image": "../assets/images/products/model-slug/main.jpg",
  "status": "confirmed"
}
```

Do not invent model names, specifications, or performance claims before confirmation.

## Create A Model Detail Page

Copy:

`products/model-template.html`

Rename it to the final model slug, for example:

`products/model-slug.html`

Then update:

- Page title and meta description
- Model name
- Product positioning
- Specification table
- Packaging options
- Related product links
- RFQ link

## Image Storage

Recommended structure:

`assets/images/products/{category-or-model}/`

Use clean, compressed web images. Do not stretch images, do not add AI-generated replacements unless explicitly approved, and keep the visual tone suitable for a professional B2B independent site.

## Compliance Copy Rules

Use B2B supply language:

- Manufacturer supply
- OEM/ODM project support
- Batch order planning
- Private label packaging
- Distributor and wholesaler supply
- Model selection support
- Reorder supply

Avoid medical or performance-claim wording, including:

- treatment
- clinical
- scar
- acne
- collagen
- skin repair
- hair growth
- guaranteed results
- before and after
- skin improvement

## QA Checklist

After adding or changing product data:

- `products/index.html` opens correctly.
- Category pages open correctly.
- Model pages open correctly.
- Header and Footer links work.
- Related product links work.
- RFQ buttons point to `contact.html`.
- Images load without distortion.
- Mobile view has no horizontal overflow.
- No unconfirmed model names or specifications are added.
