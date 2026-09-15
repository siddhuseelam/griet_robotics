# Modular UI Components — Design Guidelines

How the GRIET Robotics Club site is put together. This project uses **shadcn/ui exclusively** for UI primitives.

> **Read first:**
> - `AI context/component-guide.md` — which component to use for what, and how to compose it. Start here when building anything new.
> - `AI context/shadcn-context.md` — Base UI API differences, install and deploy rules. Not optional: this install is Base UI flavoured and behaves differently from the Radix docs you may remember.
>
> This file is the map of what exists and where it lives.

---

## Core rules

1. **shadcn only.** Never a raw `<button>`, `<input>`, `<select>`. Use the primitive from `src/components/ui/`.
2. **Lowercase import paths.** `./ui/button`, never `./ui/Button` — a capital breaks the Linux build on Render.
3. **Tokens, not hex.** `bg-primary`, `text-muted-foreground`, `border-border`. Never a hardcoded colour.
4. **`font-heading` for headings, `font-sans` for body.** Both come from the shadcn theme (Geist / Oxanium). There is no `Zen Dots` in this project — `font-[Zen Dots]` silently fell back to nothing and has been removed.
5. **`render={<X />}`, not `asChild`.** See shadcn-context.md §2.
6. **Mobile first.** Every new section must be checked at 390px before it ships.

---

## Layout shell

| File | Purpose |
|---|---|
| `src/App.jsx` | Routes, providers (`ThemeProvider`, `TooltipProvider`), scroll reset, lazy route chunks |
| `src/components/site-header.jsx` | Sticky header: logo, desktop `NavigationMenu` with dropdown panels, ⌘K trigger, theme toggle, scroll-progress bar |
| `src/components/mobile-nav.jsx` | The mobile menu — `Sheet` + `Collapsible` groups + `Item` rows + sticky footer CTA |
| `src/components/site-footer.jsx` | Four-column footer, newsletter `InputGroup`, socials |
| `src/components/command-menu.jsx` | ⌘K / Ctrl+K palette (`CommandDialog`) — pages, team domains, quick actions |
| `src/components/mode-toggle.jsx` | `ModeToggle` (dropdown, desktop) and `ModeToggleGroup` (segmented, mobile sheet) |

## Pages

| File | Route | Notes |
|---|---|---|
| `Hero.jsx` | `/` | Hero + composes `home-sections.jsx` and `HomeTeam.jsx` |
| `home-sections.jsx` | `/` | `TechStrip`, `HomeHighlights`, `HomeDomains`, `HomeCta` |
| `HomeTeam.jsx` | `/` | Autoplaying leads carousel |
| `EventGallery.jsx` | `/events` | Upcoming card + filterable past events |
| `EventDetails.jsx` | `/events/next-gen-robotics` | Facts, tabs, FAQ, sticky mobile register bar |
| `About.jsx` | `/about` | Stats, pillars, timeline, domains, FAQ |
| `Members.jsx` | `/team` | Searchable, filterable, sortable roster with grid/list layouts |
| `Contact.jsx` | `/contact` | Contact details + validated `Field` form |

## Shared helpers

| File | Purpose |
|---|---|
| `src/lib/site-data.js` | Nav, events, FAQs, socials — the single source of truth |
| `src/lib/team.js` | Normalises the messy Google-Form roster into domains, ranks and photos |
| `src/lib/icons.jsx` | String → Phosphor icon registry (only the icons listed are bundled) |
| `src/lib/nav.js` | `isActivePath(pathname, to)` |
| `src/hooks/use-media-query.js` | `useMediaQuery`, `useIsMobile` |
| `src/components/section-heading.jsx` | Eyebrow + title + lede, used by every section |
| `src/components/smart-image.jsx` | `AspectRatio` + `Skeleton` image that also handles cached loads |
| `src/components/responsive-modal.jsx` | `Dialog` on desktop, `Drawer` on mobile |

---

## Installed components

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button`
`button-group` `card` `carousel` `checkbox` `collapsible` `command` `dialog` `drawer`
`dropdown-menu` `empty` `field` `hover-card` `input` `input-group` `item` `kbd` `label`
`navigation-menu` `pagination` `popover` `progress` `radio-group` `scroll-area` `select`
`separator` `sheet` `skeleton` `sonner` `spinner` `switch` `table` `tabs` `textarea`
`toggle` `toggle-group` `tooltip`

Add more with `npx shadcn@latest add <name>` — never hand-write a file into `ui/`.

---

## Button variants — when to use what

| Variant | Use case |
|---|---|
| `default` | The one primary action on a screen — "Register now", "Explore events" |
| `secondary` | A supporting action beside a primary — "View highlights" |
| `outline` | Filters, toolbars, low-priority actions on cards |
| `ghost` | Icon-only buttons, header actions, anything that shouldn't compete |
| `destructive` | Delete / irreversible |
| `link` | Inline text link that happens to be a button |

Sizes: `xs` `sm` `default` `lg` plus `icon-xs` `icon-sm` `icon` `icon-lg`.
Put trailing icons as `<Icon data-icon="inline-end" />` so the variant tightens the right padding.

---

## Responsive rules

- **Breakpoints that matter here:** `sm` 640 (two-column cards), `md` 768 (desktop nav appears, side-by-side layouts), `lg` 1024 (search field and Register button appear in the header).
- **Never let the page scroll sideways.** Long chip rows go in `-mx-4 overflow-x-auto px-4` and wrap again at `lg`. Tables go in their own `overflow-x-auto`.
- **Truncation:** `Item`'s `ItemTitle` is `w-fit` by default — add `block w-full truncate` and `min-w-0` on `ItemContent`, or it will push past its row.
- **Modals:** use `ResponsiveModal`. A centred dialog on a phone is worse than a drawer every time.
- **Tap targets:** rows in the mobile sheet are `Item size="default"` (~52px). Don't shrink them.
- **Sticky mobile CTA:** `EventDetails` pins the register bar to the bottom on `md:hidden` and pads the page with `pb-28` to compensate.
