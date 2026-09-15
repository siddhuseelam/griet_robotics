# Modular UI Components - Design Guidelines

This document outlines the usage of standard, modular UI components within the GRIET Robotics Club website. To maintain consistency, reusability, and clean code, always use these components instead of hardcoding raw HTML (`<button>`, `<a>`) with inline styles.

## 1. The `<Button />` Component

Located at: `src/components/ui/Button.jsx`

The Button component acts as a central primitive for all actionable elements (buttons, internal links, and external links). It dynamically switches rendering between `<button>`, React Router `<Link>`, or `<a>` depending on the props (`to`, `href`, or neither).

### Variants
Always choose the variant based on the action's hierarchy:
* `variant="default"` (Primary): Uses the strong red gradient (`--brick-red` to `--molten-lava`). **Reserved exclusively for primary Call-to-Actions (CTAs)** like "Explore Events" or "Join Now".
* `variant="secondary"`: Uses the muted `Steel Blue` background. Ideal for secondary actions next to a primary CTA (e.g., "About Our Club").
* `variant="outline"`: Transparent with a border. **Use this for subtle actions** like "View Highlights" on cards or filtering buttons. *Crucial: Do not use primary red buttons for these small secondary actions, as they steal focus and break the visual hierarchy.*
* `variant="ghost"`: Transparent background that only appears on hover. Use for icon buttons or low-priority actions.

### Usage Example
```jsx
import { Button } from '../ui/Button';

// Internal Navigation Link (Primary CTA)
<Button to="/events" variant="default">Explore Events</Button>

// Secondary Action Button
<Button variant="outline" onClick={() => openModal()}>View Highlights</Button>

// External Link
<Button href="https://github.com" variant="ghost">View Code</Button>
```

## 2. Modularity & Avoiding Inline Styles
Whenever possible, abstract UI blocks into standard reusable components inside `src/components/ui/`. 
Do not litter the JSX with `style={{ padding: '...', borderRadius: '...' }}` for standard elements like buttons or badges. Always extend the global CSS or create a localized variant in the UI component itself.
