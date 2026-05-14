---
name: 3cslab-brand
description: >
  **3cslab Brand Applicator**: Applies 3cslab brand identity — colors, fonts, layout patterns, and design system — to any deliverable. Use this skill whenever the user wants to brand, style, or format ANY output with 3cslab identity. Trigger on: "3cslab brand," "3cslab colors," "3cslab styling," "apply 3cslab," "brand this," "make it look like 3cslab," or any request to apply navy/orange color schemes in a 3cslab context. Also trigger when producing documents, presentations, spreadsheets, PDFs, HTML, React components, charts, SVGs, or any visual output that should carry the 3cslab look. If the user has previously applied 3cslab branding in this session and asks to create another deliverable, apply branding automatically. This skill covers all visual output types: .docx, .pptx, .xlsx, .pdf, .html, .jsx, .svg, and more. When in doubt about whether to apply 3cslab branding, apply it — it's better to brand consistently than to forget.
---

# 3cslab Brand Applicator

This skill ensures every deliverable looks and feels unmistakably 3cslab. Before producing any visual output, read the full brand reference at `references/brand-system.md` (in this skill's directory) for exact hex codes, font specs, and layout templates.

## Brand Essentials (Quick Reference)

### Colors
| Role | Color | HEX |
|------|-------|-----|
| Primary (headings, backgrounds) | Deep Navy | #003366 |
| Accent (CTAs, emphasis) | Vibrant Orange | #FF5722 |
| Supporting | Soft Blue | #80B0D4 |
| Warm accent | Salmon | #FF8A65 |
| Subtle UI | Cool Gray | #B0BEC5 |
| Body text | Dark Gray | #333333 |
| Captions | Medium Gray | #666666 |
| Light backgrounds | Off-White | #F5F7FA |

**Ratio**: 60% navy/neutrals, 30% soft blue/gray, 10% orange/salmon. Orange is a spark, not a flood.

### Fonts
| Role | Font | Notes |
|------|------|-------|
| Headings & UI | **Inter** | Bold for H1 (24pt), Semi-Bold for H2 (18pt), Medium for H3 (14pt) |
| Body text | **Open Sans** | Regular 11pt for body, Bold for emphasis, Regular 9pt for captions |
| Pull quotes & accents | **Merriweather** | Italic 13pt for quotes, Bold 14pt for formal titles |

All three are free on Google Fonts. For web projects, load via Google Fonts API. For documents and presentations, use them as specified below.

### Accessibility
Always pair text and background colors that meet WCAG AA contrast:
- Deep Navy on White/Off-White ✓
- White on Deep Navy ✓
- Black on Soft Blue ✓
- Never use Salmon, Cool Gray, or Soft Blue as text on white backgrounds ✗

## Applying the Brand by File Type

The 3cslab brand skill works alongside the file-type skills (docx, pptx, xlsx, pdf). Read the relevant file-type skill first for mechanics, then apply these brand specifications on top.

---

### Word Documents (.docx)

Read the `docx` skill first for creation/editing mechanics. Then apply:

**Page setup:**
- US Letter (8.5 x 11in), 1-inch margins

**Header:**
- "3cslab" in Inter Bold, 9pt, Deep Navy
- Pipe separator and "Connect. Collaborate. Co-Create." in Open Sans, 8pt, Medium Gray italic
- Navy hairline rule beneath (BorderStyle.SINGLE, size 4, Deep Navy)

**Footer:**
- Page number centered, Open Sans 9pt, Cool Gray

**Typography mapping for docx-js:**

```
Heading 1: Inter, Bold, 48 half-points (24pt), Deep Navy (#003366)
Heading 2: Inter, Semi-Bold, 36 half-points (18pt), Deep Navy
Heading 3: Inter, Medium, 28 half-points (14pt), Deep Navy
Body text: Open Sans, Regular, 22 half-points (11pt), Dark Gray (#333333)
Captions:  Open Sans, Regular, 18 half-points (9pt), Medium Gray (#666666)
Pull quotes: Merriweather, Italic, 26 half-points (13pt), Deep Navy
             Left border: Vibrant Orange, size 16, space 12
```

**Accent usage in documents:**
- Vibrant Orange for: divider lines, CTA text, blockquote borders, key emphasis
- Soft Blue for: secondary blockquote borders, info callouts
- Cool Gray for: footer page numbers, subtle separators, taglines

**Numbering/bullets:**
- Use proper LevelFormat.BULLET numbering, never unicode bullet characters
- Body font (Open Sans) for bullet text

---

### Presentations (.pptx)

Read the `pptx` skill first for creation mechanics. Then apply:

**Title slides:**
- Background: Deep Navy (#003366)
- Title: Inter Bold, 36pt, White
- Subtitle: Open Sans Regular, 18pt, Soft Blue (#80B0D4)
- Thin Vibrant Orange accent line between title and subtitle
- 3cslab logo (white version) top-left if available

**Content slides:**
- Background: Off-White (#F5F7FA)
- Slide title: Inter Bold, 24pt, Deep Navy, positioned at top
- Body text: Open Sans Regular, 14pt, Dark Gray (#333333)
- Vibrant Orange for: key numbers, highlight boxes, callout borders
- One idea per slide

**Closing slides:**
- Background: Deep Navy
- 3cslab wordmark centered, white
- Contact info: Open Sans, Soft Blue
- MTP quote in Merriweather Italic below

**Chart colors (in order):** Deep Navy, Vibrant Orange, Soft Blue, Salmon, Cool Gray

---

### Spreadsheets (.xlsx)

Read the `xlsx` skill first for creation mechanics. Then apply:

**Header row:** Deep Navy background (#003366), White text, Inter Bold 11pt
**Alternating rows:** White and Off-White (#F5F7FA)
**Borders:** Cool Gray (#B0BEC5), thin
**Accent cells (totals, highlights):** Vibrant Orange text or Salmon background
**Body cells:** Open Sans Regular 11pt, Dark Gray (#333333)
**Chart colors:** Deep Navy, Vibrant Orange, Soft Blue, Salmon, Cool Gray (in that order)

---

### PDFs

Read the `pdf` skill first for creation mechanics. Then apply:

**Page layout:** Same as docx (US Letter, 1in margins, navy header rule, centered page number footer)
**Typography:** Match the docx type hierarchy (Inter headings, Open Sans body, Merriweather quotes)
**Accent usage:** Same patterns as docx

---

### HTML & React (.html, .jsx)

**CSS custom properties (recommended):**
```css
:root {
  --3cs-navy: #003366;
  --3cs-orange: #FF5722;
  --3cs-soft-blue: #80B0D4;
  --3cs-salmon: #FF8A65;
  --3cs-cool-gray: #B0BEC5;
  --3cs-dark-gray: #333333;
  --3cs-medium-gray: #666666;
  --3cs-off-white: #F5F7FA;
}
```

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:ital,wght@0,700;1,400&family=Open+Sans:wght@400;700&display=swap');
```

**Tailwind mapping (for .jsx):**
Since we can't use custom Tailwind colors, use inline styles for brand colors, or use the closest Tailwind utilities and override with style attributes:
```jsx
<h1 style={{ color: '#003366', fontFamily: 'Inter, sans-serif' }}>Heading</h1>
<p style={{ color: '#333333', fontFamily: 'Open Sans, sans-serif' }}>Body text</p>
```

**Button/CTA pattern:**
```css
.btn-3cs {
  background-color: #FF5722;
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11pt;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
}
.btn-3cs:hover {
  background-color: #FF8A65; /* Salmon for hover */
}
```

**Card/container pattern:**
```css
.card-3cs {
  background: #F5F7FA;
  border: 1px solid #B0BEC5;
  border-radius: 8px;
  padding: 24px;
}
```

**Dark section (hero, footer):**
- Background: Deep Navy
- Text: White or Off-White
- Accents: Vibrant Orange for links/CTAs, Soft Blue for secondary info

---

### SVG & Charts

**Chart color sequence:** Deep Navy, Vibrant Orange, Soft Blue, Salmon, Cool Gray
**Axis labels:** Open Sans Regular, 9pt, Medium Gray
**Chart title:** Inter Semi-Bold, 14pt, Deep Navy
**Grid lines:** Cool Gray at 0.5 opacity
**Background:** White or Off-White

---

## Common Patterns Across All Types

**Dividers/rules:** Vibrant Orange line (thin) for major section breaks. Navy hairline for subtle separators (like below headers).

**Pull quotes / blockquotes:** Merriweather Italic, Deep Navy text, with a thick Vibrant Orange left border.

**Info/tip callouts:** Soft Blue left border or background, Open Sans text.

**Sign-offs for Ying:**
```
Ying
Executive Director, 3cslab
Connect. Collaborate. Co-Create.
```
Name in Inter Bold Deep Navy, title in Open Sans Medium Gray, tagline in Merriweather Italic Cool Gray.

**The "3cslab" wordmark** is always lowercase, no spaces: `3cslab` — never "3CS Lab," "3CsLab," or "3CSLAB."

## What NOT to Do

- Do not make orange the dominant color. It's 10% of the palette, max.
- Do not use Salmon or Cool Gray as primary text colors.
- Do not substitute other fonts for Inter, Open Sans, or Merriweather.
- Do not use more than 3 fonts in any single piece.
- Do not use gradients, drop shadows, or glows on the logo or branded elements.
- Do not use low-contrast text/background combinations.
