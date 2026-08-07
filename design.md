# Design System

## Color Palette

### Primary Colors

#### Charcoal (Primary)
- **Hex:** `#1C1B1A`
- **Usage:** Primary text, headers, main UI elements

#### Warm Beige (Secondary)
- **Hex:** `#E0D1BC`
- **Usage:** Secondary elements, subtle backgrounds, accents

### Background Colors

#### Background
- **Hex:** `#F9F7F3`
- **Usage:** Main page background, off-white base

#### Surface
- **Hex:** `#FFFFFF`
- **Usage:** Cards, panels, elevated surfaces

### Accent Colors

#### Accent Gold
- **Hex:** `#C8A97E`
- **Usage:** Highlights, call-to-action elements, premium features

#### Forest Green
- **Hex:** `#4D5D4A`
- **Usage:** Success states, nature-themed elements, secondary actions

#### Olive
- **Hex:** `#707A55`
- **Usage:** Tertiary accents, muted highlights

### Supporting Colors

#### Light Beige
- **Hex:** `#F2E8DA`
- **Usage:** Hover states, subtle backgrounds, disabled states

#### Border
- **Hex:** `#D7CCBE`
- **Usage:** Dividers, borders, outlines

#### Text Secondary
- **Hex:** `#66615B`
- **Usage:** Secondary text, captions, metadata

## Color Usage Guidelines

### Text
- **Primary Text:** Charcoal `#1C1B1A`
- **Secondary Text:** Text Secondary `#66615B`
- **On Dark Backgrounds:** Surface `#FFFFFF`

### Backgrounds
- **Page Background:** Background `#F9F7F3`
- **Content Containers:** Surface `#FFFFFF`
- **Subtle Sections:** Light Beige `#F2E8DA`

### Interactive Elements
- **Primary Buttons:** Accent Gold `#C8A97E`
- **Secondary Buttons:** Forest Green `#4D5D4A`
- **Hover States:** Olive `#707A55` or Light Beige `#F2E8DA`
- **Borders:** Border `#D7CCBE`

### Accessibility
- Ensure sufficient contrast ratios (WCAG AA minimum 4.5:1 for normal text)
- Test color combinations for readability
- Provide alternative indicators beyond color alone

## Color Palette Preview

```css
:root {
  /* Primary */
  --color-primary: #1C1B1A;
  --color-secondary: #E0D1BC;
  
  /* Backgrounds */
  --color-background: #F9F7F3;
  --color-surface: #FFFFFF;
  
  /* Accents */
  --color-accent-gold: #C8A97E;
  --color-forest-green: #4D5D4A;
  --color-olive: #707A55;
  
  /* Supporting */
  --color-light-beige: #F2E8DA;
  --color-border: #D7CCBE;
  --color-text-secondary: #66615B;
}
```
