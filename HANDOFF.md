# Microneedling B2B Website Preview Handoff

Date: 2026-06-24

## Current Status

This is an independent preview prototype, not the Accio original project.

Preview project path:

`/Users/kakei/Documents/New project`

Accio original project was not overwritten:

`/Users/kakei/AccioWork/2026-06-23-19-40-13/microneedling-b2b-website`

## Main Preview URL

When the local server is running from this folder:

`http://127.0.0.1:4178/homepage-effect-preview.html`

Start server:

```bash
cd "/Users/kakei/Documents/New project"
python3 -m http.server 4178
```

If port `4178` is already occupied, start another local port and open the same page path.

## Files Created

- `homepage-effect-preview.html`
- `index.html`
- `assets/css/preview-pages.css`
- `assets/js/site.js`
- `contact.html`
- `factory-quality.html`
- `faq.html`
- `oem-odm.html`
- `private-label-packaging.html`
- `products/index.html`
- `products/device-platforms.html`
- `products/needle-cartridges.html`
- `products/applicator-heads.html`
- `products/nano-silicone-crystal-heads.html`
- `products/derma-rollers-multi-head-tools.html`

## Preview Images

Generated preview-only images are saved as real JPG files here:

- `assets/images/home/hero-product-system.jpg`
- `assets/images/home/product-system-overview.jpg`
- `assets/images/home/f20-m30-application.jpg`
- `assets/images/home/nk3-ultra-closeup.jpg`
- `assets/images/home/nh4-application.jpg`
- `assets/images/home/qc-production.jpg`
- `assets/images/home/product-spec-preview.jpg`
- `assets/images/home/oem-starter-kit.jpg`

Note: these images are suitable for layout preview only. They should be replaced with real product, packaging, and factory photos before launch.

## Business Information Integration

Applied the latest real business direction supplied by the user:

- Brand: Dermadream
- Company: Guangzhou Dermadream Electronic Technology Co., Ltd.
- Location: Guangdong, China
- Email: sales@dermadream.com.cn
- WhatsApp: +86 189 9849 0241
- Website positioning: manufacturer-led B2B independent site for cosmetic-use microneedling tool systems, OEM/ODM, private label packaging, and reorder supply support.

Updated product structure:

- Microneedling Device Systems
- Microneedling Needle Cartridges
- Standalone Applicator Tools
- Crystal / Nano / Silicone Head Options
- Derma Rollers & Multi-Head Tools
- Private Label Packaging & Starter Kits

Important classification decision:

- `Reorder Supply Support` is treated as a supply/service support logic, not a product category.

## Pages Updated With Real Business Direction

- Homepage:
  - Kept the approved visual direction.
  - Strengthened manufacturer advantages.
  - Updated product system, RFQ fields, footer contact, and buyer flow.
- Products:
  - Rebuilt the product system around six real categories.
  - Added priority model references such as F20, M30, M10, M20, M7, NK3 PRO, NK3 Ultra, NK2 PRO, NH4, S2-140, S1, NH3, N in 1 system, Derma Roller 540, and N1.
  - Added `products/derma-rollers-multi-head-tools.html`.
- OEM/ODM:
  - Added sample workflow, batch workflow, MOQ and lead-time guidance, customization scope, and project boundaries.
- Factory & Quality:
  - Added controlled assembly, inspection, packaging, shipment support, and document support language.
  - Certificate/document wording is intentionally conservative and project-specific.
- Private Label Packaging:
  - Added product box, manual, insert/tray, storage box, starter kit, protective packaging, and asset-planning sections.
- FAQ:
  - Updated buyer questions around model matching, private label, MOQ, samples, documentation, shipping, and quote preparation.
- Contact:
  - Updated RFQ form fields for target model, packaging need, timeline, quantity, market, and private label requirements.

## Latest Save Point

Saved after the latest correction round on 2026-06-24:

- Compliance words such as `ISO`, `CE`, and `RoHS` were intentionally kept where they already appeared.
- Added a reusable site script at `assets/js/site.js`.
- Added mobile navigation across all preview pages, including Products subpages.
- Mobile navigation now exposes Home, Products, OEM/ODM, Factory, FAQ, Contact, Contact Sales, and WhatsApp.
- Improved homepage mobile hero flow so the product image appears earlier after the CTA area.
- Slightly tightened the homepage desktop hero spacing and heading scale.
- Added static RFQ form feedback for required-field errors and a sales-contact fallback message after valid entry.
- Removed placeholder footer social items (`in`, `ig`, `yt`) across the site.
- Refreshed the share zip after these changes.

## Compliance And Wording Rules

The current content avoids medical, treatment, guaranteed-result, and unsupported certification claims.

Certificate/documentation wording is handled as selected-product or selected-project support only. Do not change it into blanket claims such as every product being certified or globally approved.

## QA Completed

- 13 HTML files exist.
- Internal link and local image path checks passed.
- Mobile menu was verified on Homepage and Products.
- RFQ form feedback was verified on Contact.
- Footer social placeholders were removed.
- Local URL checks were performed on `http://127.0.0.1:4178/`.
- Compliance terms `ISO`, `CE`, and `RoHS` are intentionally retained per user instruction.
- No base64 images were added.
- The Accio original project files were not changed.

## Share Package

Current share package:

`/Users/kakei/Documents/New project/microneedling-b2b-preview-share.zip`

This zip should be refreshed after every major change before sending to colleagues.

## Still Needed Before Production

- Replace preview images with real product, factory, QC, packaging, and shipment photos.
- Confirm final model specs, especially newer/priority models such as M30.
- Confirm which certificates, reports, patents, and export documents can be publicly mentioned.
- Confirm actual MOQ, sample lead time, batch lead time, and private-label lead time if the current guidance differs.
- Provide official logo, approved brand assets, social links, and any backup contact email.
- Add final SEO metadata, sitemap, robots, and schema after launch content is confirmed.

## Next Recommended Step

Do not redesign the homepage again.

Next work should focus on replacing preview assets with real photos, tightening product model specifications, and preparing an approved migration plan into the Accio project only after user confirmation.
