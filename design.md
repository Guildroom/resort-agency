# Design System

## Color Palette

### Brand Colors

#### Espresso (Primary)
- **Hex:** `#30251E`
- **Usage:** Primary text, headers, footer, dark overlays, primary-button hover, selected dark surfaces

#### Walnut (Secondary / Dominant Warm Tone)
- **Hex:** `#654631`
- **Usage:** Primary buttons, links, secondary text, borders, navigation accents. Walnut and espresso should dominate the palette.

#### Forest (Garden Accent)
- **Hex:** `#354B3B`
- **Usage:** Garden-related accents, success states, selected highlights, small section backgrounds. Represents the property's tropical gardens.

#### Linen (Balanced Light Tone)
- **Hex:** `#F0E7DA`
- **Usage:** Main page background, light text on dark surfaces, breathing space between photo-heavy sections.

#### Bronze (Subtle Accent)
- **Hex:** `#B69B78`
- **Usage:** Restrained highlights only: star ratings, active carousel dots, small decorative icons, thin dividers. Never use bronze for body text on linen.

### Derived Supporting Tones

#### Warm Surface
- **Hex:** `#FBF8F2`
- **Usage:** Cards, panels, elevated surfaces

#### Deep Linen
- **Hex:** `#E8DCCA`
- **Usage:** Subtle section backgrounds, hover states, icon circles

#### Muted Border
- **Hex:** `#D8C9B6`
- **Usage:** Borders, dividers, image placeholders

## Typography

### Cormorant Garamond — Headings · Luxury Editorial
- **Usage:** `h1`–`h6` and editorial display text
- **Character:** High-contrast serif with an elegant boutique-resort feeling
- **Source:** `public/font/Cormorant_Garamond`

### DM Sans — Body · Modern Minimalist
- **Usage:** Body copy, navigation, buttons, forms, and UI labels
- **Character:** Clean, readable, and sophisticated without competing with the headings
- **Source:** `public/font/DM_Sans`

## Color Usage Guidelines

### Dominance
- Walnut and espresso are the dominant colors.
- Forest green is used deliberately for garden, nature, and success cues.
- Linen provides balance and generous whitespace.
- Bronze is a subtle accent, not a primary surface or text color.

### Text
- **Primary Text:** Espresso `#30251E`
- **Secondary Text:** Walnut `#654631`
- **On Dark Backgrounds:** Linen `#F0E7DA`
- **Avoid:** Bronze text on linen (insufficient contrast)

### Backgrounds
- **Page Background:** Linen `#F0E7DA`
- **Content Containers:** Warm Surface `#FBF8F2`
- **Subtle Sections:** Deep Linen `#E8DCCA`
- **Dark Sections / Footer:** Espresso `#30251E`
- **Nature / Garden Sections:** Forest `#354B3B`

### Interactive Elements
- **Primary Buttons:** Walnut `#654631` with Linen text
- **Primary Hover:** Espresso `#30251E`
- **Secondary Buttons:** Transparent with Walnut border and Espresso text
- **Secondary Hover:** Deep Linen `#E8DCCA`
- **Active / Selected:** Forest `#354B3B`
- **Subtle Accents:** Bronze `#B69B78`
- **Borders:** Muted Border `#D8C9B6`

## Photography Guidelines

- Authentic photographs of the property are the main visual focus.
- Avoid excessive gold ornaments, decorative hotel illustrations, and continuous animations.
- Prefer real photographs from `/hero`, `/villa`, and `/bungalow`.
- Keep overlays subtle and dark (espresso) so photos remain readable and prominent.
- Animation should be limited to gentle fade-ins and user-triggered transitions.

## Accessibility
- Ensure WCAG AA contrast (minimum 4.5:1 for normal text, 3:1 for large text).
- Bronze is decorative and must not carry essential text information on light surfaces.
- Provide focus-visible outlines using bronze at 2px.
- Do not rely on color alone to communicate availability or status.

## Color Palette Preview

```css
:root {
  /* Core palette */
  --color-espresso: #30251E;
  --color-walnut: #654631;
  --color-forest: #354B3B;
  --color-linen: #F0E7DA;
  --color-bronze: #B69B78;

  /* Derived supporting tones */
  --color-surface: #FBF8F2;
  --color-light-beige: #E8DCCA;
  --color-border: #D8C9B6;

  /* Legacy aliases */
  --color-primary: var(--color-espresso);
  --color-secondary: var(--color-walnut);
  --color-background: var(--color-linen);
  --color-accent-gold: var(--color-bronze);
  --color-forest-green: var(--color-forest);
  --color-olive: var(--color-forest);
  --color-text-secondary: var(--color-walnut);
}
```
