# Wave Logo Assets

## Instructions

### How to Add Your Wave Logo

1. **File Location:** `src/assets/wave-logo.svg` (or replace with your image)

2. **Supported Formats:**
   - SVG (.svg) - Recommended for logos
   - PNG (.png) - With transparency
   - JPG (.jpg) - Compressed format
   - WebP (.webp) - Modern format

3. **Recommended Specifications:**
   - Size: 200x200px or larger
   - Aspect Ratio: Square (1:1)
   - Format: SVG or PNG with transparent background
   - File Size: < 50KB

4. **Steps to Replace:**
   - Replace the current `wave-logo.svg` with your logo image
   - Keep the same filename: `wave-logo.svg`
   - If using a different format, update the import in Header and Footer components

5. **Alternative: Use Different Filename**
   - If you want to use a different filename (e.g., `logo.png`):
   - Update `src/components/Header.jsx` - Line: `import waveLogo from '../assets/wave-logo.svg'`
   - Update `src/components/Footer.jsx` - Line: `import waveLogo from '../assets/wave-logo.svg'`
   - Change both to your new filename

## Where the Logo Appears

- Header (top-left navigation) - 40x40px
- Footer (bottom-left) - 40x40px
- Both with hover effects and proper styling applied

## Current Logo

The placeholder SVG is ready to be replaced with your official Wave logo image.

---

**Need Help?**
- The logo is automatically used in Header and Footer components
- CSS classes: `.logo-img` (header), `.footer-logo-img` (footer)
- Both are styled in `src/styles/Header.css` and `src/styles/Footer.css`
