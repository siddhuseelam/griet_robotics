# GRIET Robotics Club - Design Language & Architecture

This document serves as the foundational design system and architectural context for the GRIET Robotics Club website. All AI agents and developers should adhere to these rules to maintain a consistent, premium, and accessible user experience.

## 1. Color Palette

The official club palette consists of 5 core colors. Do not deviate from these colors unless adjusting opacity (`rgba` / `hsla`).

### Core Colors
| Color Name | HEX | HSL | RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Molten Lava** | `#780000` | `hsla(0, 100%, 24%, 1)` | `rgba(120, 0, 0, 1)` | Deep accents, gradients, dark hover states |
| **Brick Red** | `#c1121f` | `hsla(356, 83%, 41%, 1)` | `rgba(193, 18, 31, 1)` | Primary branding, buttons, active states |
| **Papaya Whip**| `#fdf0d5` | `hsla(40, 91%, 91%, 1)` | `rgba(253, 240, 213, 1)` | Primary text, light accents, backgrounds |
| **Deep Space Blue**| `#003049` | `hsla(201, 100%, 14%, 1)` | `rgba(0, 48, 73, 1)` | Primary background, deep surfacing |
| **Steel Blue** | `#669bbc` | `hsla(203, 39%, 57%, 1)` | `rgba(102, 155, 188, 1)` | Secondary text, borders, subtle highlights |

---

## 2. Color Pairing & Contrast Rules (CRITICAL)

To maintain a premium aesthetic and ensure readability (accessibility), strictly follow these pairing rules:

* **Rule 1: No Red Text or Icons on Dark Blue.** 
  Never use `Brick Red` (`#c1121f`) or `Molten Lava` (`#780000`) directly as text or isolated icons on `Deep Space Blue` (`#003049`). The contrast ratio is too low, causing visual vibration and making it look ugly and unreadable. If you need an icon next to a heading on a dark background, use `Steel Blue` (`#669bbc`) or `Papaya Whip` (`#fdf0d5`).
* **Rule 2: Proper Text Usage.**
  For text on `Deep Space Blue` backgrounds, **always** use `Papaya Whip` (`#fdf0d5`) for primary headings/text and `Steel Blue` (`#669bbc`) for secondary/muted text.
* **Rule 3: Using Red Safely.**
  If you must use `Brick Red`, use it as a **background color** (e.g., for a button, a tag, or a badge) and place `Papaya Whip` text inside it. Alternatively, use it as a structural accent like a border, an underline, or a box-shadow glow.
* **Rule 4: Glassmorphism.**
  When creating cards or elevated surfaces, use translucent overlays (e.g., `rgba(7, 59, 85, 0.95)`) over the `Deep Space Blue` background with a subtle `Steel Blue` border (`rgba(102, 155, 188, 0.35)`).

---

## 3. Typography

* **Primary Font:** `Zen Dots`
* **Usage:** `Zen Dots` is used globally across the entire site for all text elements (Headings, Paragraphs, Buttons, Links) to maintain a cohesive, futuristic robotics aesthetic. 
* **Import:** It is imported via Google Fonts in `index.css`.

---

## 4. Architecture & Organization

The project is a standard **React Single Page Application (SPA)** built with **Vite**.

### Directory Structure
* `/src/components/` - Reusable UI elements (Hero, EventGallery, Members, etc.).
* `/src/App.jsx` - The main routing file utilizing `react-router-dom` for SPA navigation.
* `/src/index.css` - The global stylesheet containing CSS variables, global resets, mobile media queries, and utility classes.
* `/src/assets/` - Static assets, images, and JSON data files (e.g., `teamData.json`).
* `/AI context/` - Documentation, rules, and AI context files (like this one).

### Design Patterns
1. **Responsive Design:** Mobile optimization is handled globally in `index.css` via `@media (max-width: 768px)`. Ensure all custom grids and flexboxes gracefully collapse to a single column on mobile.
2. **Inline Styles vs. CSS:** We heavily utilize inline React styles for dynamic component states (like hover effects and transitions), but rely on `index.css` for structural utilities (`.container`, `.section`, global `.btn` classes).
3. **Animations:** Micro-animations (like button scales on hover, or cards translating slightly on the Y-axis) are essential to the site's dynamic feel. Always use smooth cubic-bezier transitions.
