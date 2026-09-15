# shadcn/ui — Developer Context & Build Rules

> Every lesson learned building the GRIET Robotics Club site with shadcn/ui. Read this before touching any component.
>
> This file covers **how the library behaves** — API, install, theme, deploy.
> For **which component to reach for and how to compose it**, read `AI context/component-guide.md`.
> For **what files exist and where**, read `AI context/components.md`.

---

## 1. What is shadcn/ui?

Not a dependency — a collection of components **copied into the project** at `src/components/ui/`. Each file is ours to own and modify.

- Components: `src/components/ui/<component>.jsx`
- Theme variables: `src/index.css`
- Registry metadata: `components.json`

Install with the CLI, never by hand:

```bash
npx shadcn@latest add card badge button
npx shadcn@latest add button -o   # overwrite after a preset change
```

---

## 2. ⚠️ This install is **Base UI**, not Radix

`components.json` sets `"style": "base-vega"`. The primitives are built on **`@base-ui/react`**, so the API differs from most shadcn documentation and examples online.

### `render`, not `asChild`

```jsx
// ❌ Radix-era — leaks an `asChild` attribute to the DOM and nests two <button>s
<Button asChild><Link to="/events">Events</Link></Button>

// ✅ Base UI
<Button render={<Link to="/events" />}>Events</Button>
<SheetTrigger render={<Button variant="ghost" size="icon-sm" />}><ListIcon /></SheetTrigger>
```

### `nativeButton`

Base UI warns when a button-like component renders something that isn't a `<button>`. `ui/button.jsx` has been modified to infer this: if `render` is given and isn't a `<button>`, it passes `nativeButton={false}` automatically. **Other** button-like primitives still need it explicitly:

```jsx
<CollapsibleTrigger nativeButton={false} render={<Item render={<button type="button" />} />}>
```

### Prop differences worth remembering

| Component | Radix habit | Base UI reality |
|---|---|---|
| `Accordion` | `type="single" collapsible` | `multiple={false}` (the default); value is an **array** |
| `ToggleGroup` | `type="single"`, `value` is a string | `value` is an **array**; `onValueChange` receives an array; `multiple` for multi-select |
| `Select` | trigger shows the item's children | shows the raw value — pass `items={[{value,label}]}` on `Select` so `SelectValue` renders the label |
| `Tabs` | `TabsTrigger` / `TabsContent` | same `value` API; internally `Tabs.Tab` / `Tabs.Panel` |
| `Dialog`/`Sheet`/`Drawer` | `open` / `onOpenChange` | same, plus a second `eventDetails` argument on the callback |
| `Progress` | `<Progress value={n} />` | root takes children; style the track via `*:data-[slot=progress-track]:…` |

### `CommandDialog` does **not** provide the cmdk context

shadcn's `CommandDialog` is only the Dialog shell. Wrap the contents yourself or you get `Cannot read properties of undefined (reading 'subscribe')`:

```jsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput … />
    <CommandList>…</CommandList>
  </Command>
</CommandDialog>
```

---

## 3. Icons — Phosphor, not Lucide

`components.json` sets `"iconLibrary": "phosphor"`, and the generated `ui/*` files import from `@phosphor-icons/react`. Use the same library everywhere so the site doesn't mix two icon styles.

```jsx
import { ArrowRightIcon, CalendarDotsIcon, RobotIcon } from "@phosphor-icons/react"
```

- Names are the `Icon`-suffixed exports (`ListIcon`, `XIcon`, `CaretDownIcon`).
- `weight="fill"` gives the solid cut — good for active/selected states.
- **Never `import * as Phosphor`** — it pulls all 3,000 icons into the bundle. Data files reference icons by name; `src/lib/icons.jsx` holds an explicit registry and is the only place that maps strings to components.

---

## 4. Theme, colours and fonts

Colours come from the shadcn preset in `src/index.css` (`--background`, `--primary`, `--muted-foreground`, …) in both `:root` and `.dark`. Fonts come from `@theme inline`:

- `--font-heading` → **Geist Variable** → `font-heading` (all headings, nav, card titles)
- `--font-sans` → **Oxanium Variable** → `font-sans` (body, applied to `html`)

**Rules**

- Never hardcode a hex or `rgba()` in a component.
- Never introduce a custom CSS class for a UI primitive.
- Don't invent font families. There is no Zen Dots here; the old `font-[Zen Dots]` classes matched nothing and were removed.

To change the theme, apply a preset and rebuild:

```bash
npx shadcn@latest apply <PRESET_CODE>
npm run build
```

---

## 5. File naming — case sensitivity (breaks Render)

Linux filesystems are case-sensitive; Windows is not. All `ui/` files are lowercase, and imports must match. If git is tracking the wrong case, rename in two steps:

```bash
git mv src/components/ui/Button.jsx src/components/ui/button-temp.jsx
git mv src/components/ui/button-temp.jsx src/components/ui/button.jsx
```

---

## 6. Patterns used in this project

### Responsive modal — Dialog on desktop, Drawer on phone

`src/components/responsive-modal.jsx` switches on `useIsMobile()`. Used by the event highlights gallery and the team member profile. Callers never branch on viewport themselves.

### Mobile navigation

`Sheet` (`side="right"`, `p-0 gap-0`, own close button) → header / `ScrollArea` body / `SheetFooter`.
Top-level links are `Item` rows rendered as router `Link`s; entries with children are wrapped in a `Collapsible` that auto-opens on the active branch. The sheet closes on route change. The footer carries the register CTA, `ModeToggleGroup` and socials.

### Images

Use `SmartImage` (`src/components/smart-image.jsx`). It combines `AspectRatio` + `Skeleton` **and** checks `img.complete` on mount — a cached image can finish decoding before React attaches `onLoad`, which otherwise leaves the skeleton up forever.

### Filter toolbars

`InputGroup` for search (with an inline clear button), `Select` for sort, `ToggleGroup` for filters and layout switches, `Empty` for the no-results state. See `Members.jsx`.

### Long lists of chips

`-mx-4 overflow-x-auto px-4` on a phone, `lg:flex-wrap lg:overflow-visible` once there is room.

---

## 7. Performance

Routes other than the home page are `React.lazy` chunks in `App.jsx` with a `Spinner` fallback. Keep it that way — Phosphor plus Base UI makes a single bundle uncomfortably large. Check `npm run build` output before and after adding a heavy dependency.

---

## 8. Deployment checklist (Render)

1. `npm run build` locally — if it fails here it fails there.
2. All `ui/` imports lowercase.
3. All Phosphor icon names exist (a wrong name is a build-time `[MISSING_EXPORT]`).
4. Open the app at 390px and click through every page, including the mobile menu.
5. Console clean — Base UI warnings usually mean a `render`/`nativeButton` mistake.
