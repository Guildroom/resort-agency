# Design System

## Color Palette

### Primary Colors

#### Dark Timber (Primary)
- **Hex:** `#3C2817`
- **Usage:** Primary text, headers, navigation, footer, buttons

#### Walnut Brown (Secondary)
- **Hex:** `#614633`
- **Usage:** Secondary buttons, links, accents, secondary text

### Background Colors

#### Natural Cream (Background)
- **Hex:** `#F5F1E8`
- **Usage:** Main page background, content areas

#### Surface
- **Hex:** `#FFFFFF`
- **Usage:** Cards, panels, elevated surfaces

### Accent Colors

#### Sage Green (Accent)
- **Hex:** `#8F9F8F`
- **Usage:** Highlights, badges, decorative elements, primary buttons

#### Soft Sage
- **Hex:** `#CEDAC9`
- **Usage:** Subtle sections, cards, hover backgrounds

### Supporting Colors

#### Warm Sand
- **Hex:** `#B3A389`
- **Usage:** Borders, muted backgrounds, dividers

## Color Usage Guidelines

### Text
- **Primary Text:** Dark Timber `#3C2817`
- **Secondary Text:** Walnut Brown `#614633`
- **On Dark Backgrounds:** Surface `#FFFFFF`

### Backgrounds
- **Page Background:** Natural Cream `#F5F1E8`
- **Content Containers:** Surface `#FFFFFF`
- **Subtle Sections:** Soft Sage `#CEDAC9`

### Interactive Elements
- **Primary Buttons:** Sage Green `#8F9F8F`
- **Secondary Buttons:** Walnut Brown `#614633`
- **Hover States:** Sage Green `#8F9F8F` or Soft Sage `#CEDAC9`
- **Borders:** Warm Sand `#B3A389`

### Accessibility
- Ensure sufficient contrast ratios (WCAG AA minimum 4.5:1 for normal text)
- Test color combinations for readability
- Provide alternative indicators beyond color alone

## Color Palette Preview

```css
:root {
  /* Primary */
  --color-primary: #3C2817;
  --color-secondary: #614633;
  
  /* Backgrounds */
  --color-background: #F5F1E8;
  --color-surface: #FFFFFF;
  
  /* Accents */
  --color-accent-gold: #8F9F8F;
  --color-forest-green: #614633;
  --color-olive: #8F9F8F;
  
  /* Supporting */
  --color-light-beige: #CEDAC9;
  --color-border: #B3A389;
  --color-text-secondary: #614633;
}
```
