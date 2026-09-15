# Component Guide — what to reach for, and how to build with it

The decision manual for this site. When you add a section, a page or a feature, this tells you **which shadcn component to use, why, and how to compose it** so the new thing looks like it was always there.

**Read the other two docs for different questions:**

| Question | Doc |
|---|---|
| "Which component do I use for this?" (you are here) | `component-guide.md` |
| "What files exist and where do they live?" | `components.md` |
| "How does the Base UI API differ? How do I install/deploy?" | `shadcn-context.md` |

> ⚠️ `designrules.md` describes an older direction (custom red/blue palette, Zen Dots, inline styles). The site does **not** use that any more — it runs on the stock shadcn theme tokens and Geist/Oxanium. Where the two disagree, this guide wins.

---

## 0. The three rules that keep it consistent

1. **Never invent a primitive.** If you are writing `<div className="rounded-lg border p-4">`, you wanted `Card` or `Item`. If you are writing `<button className="...">`, you wanted `Button`.
2. **Never invent a value.** Colours are tokens (`bg-primary`, `text-muted-foreground`). Spacing is the Tailwind scale. Radius comes from `--radius`. No hex, no `rgba()`, no magic pixel values except where this guide gives one.
3. **Every list has three states.** Loading (`Skeleton`/`Spinner`), empty (`Empty`), and populated. If you ship a list with only the third, it is unfinished.

---

## 1. Start here: the chooser

| I need to… | Use | Not |
|---|---|---|
| Group related content in a box | `Card` | a styled `div` |
| Show one row in a list (icon, text, action) | `Item` | `Card` per row |
| Show a short status word | `Badge` | coloured text |
| Trigger an action | `Button` | `<button>`, `<a class="btn">` |
| Navigate somewhere | `Button render={<Link/>}` or a plain `Link` | `onClick={() => navigate()}` |
| Let someone pick one of 2–4 things, always visible | `Tabs` or `ToggleGroup` | `Select` |
| Let someone pick one of many things | `Select` | a long `ToggleGroup` |
| Filter a list by category | `ToggleGroup variant="outline"` | `Tabs` |
| Switch between views of the *same* thing | `Tabs` | `ToggleGroup` |
| Hide long secondary text | `Accordion` | `Collapsible` |
| Hide an arbitrary block of UI | `Collapsible` | `Accordion` |
| Show detail without leaving the page | `ResponsiveModal` | `Dialog` directly |
| Confirm something destructive/irreversible | `AlertDialog` | `Dialog` |
| Show a rich preview on hover | `HoverCard` | `Tooltip` |
| Label an icon-only control | `Tooltip` | nothing |
| Show a small interactive panel on click | `Popover` | `Dialog` |
| Say "this worked" after an action | `toast` (sonner) | an inline message |
| Say "read this before you act" inline | `Alert` | a `Card` with red text |
| Show nothing-here | `Empty` | a bare `<p>` |
| Show content is loading | `Skeleton` (layout known) / `Spinner` (unknown) | blank space |
| Show progress or a ratio | `Progress` | a text percentage alone |
| Show a person | `Avatar` (+ `AvatarGroup`) | an `<img>` |
| Show comparable rows of data | `Table` | a `div` grid |
| Show search + inline button/icon | `InputGroup` | `Input` beside a `Button` |
| Show a form | `Field` family | bare labels and inputs |
| Show a keyboard shortcut | `Kbd` | `<code>` |
| Show an image at a fixed shape | `SmartImage` | `<img>` |
| Scroll a long region inside a fixed box | `ScrollArea` | `overflow-y-auto` |
| Page through > ~30 items | `Pagination` | infinite list |

---

## 2. Surfaces — Card vs Item vs Alert vs Empty

These four cover almost every "box" you will ever need. Picking the right one is most of what makes the site look coherent.

### `Card` — a self-contained block of content

Use when the box could stand alone: an event, a feature, a form, a stat, a person.

```jsx
<Card>
  <CardHeader>
    <CardTitle className="font-heading text-lg">Send us a message</CardTitle>
    <CardDescription>We usually reply within a couple of days.</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter className="border-t">…</CardFooter>
</Card>
```

- `size="sm"` tightens the internal `--card-spacing` from 6 to 4. Use it for stat tiles and dense grids.
- `CardHeader` auto-lays-out a `CardAction` into the top-right — use that slot instead of absolute positioning.
- For an image-led card, set `className="p-0 overflow-hidden"` and put `SmartImage` first.
- **Don't nest Cards.** A Card inside a Card means one of them wanted to be an `Item`.

### `Item` — one row in a list

Use when the box is one of several siblings in a vertical list: a nav row, a contact, a member, a key/value pair, a bullet.

```jsx
<Item variant="outline" render={<Link to={to} />}>
  <ItemMedia variant="icon" className="size-9 rounded-md border bg-muted/50">
    <PhoneIcon className="size-4" />
  </ItemMedia>
  <ItemContent className="min-w-0 gap-0.5">
    <ItemTitle className="block w-full truncate">Pranav</ItemTitle>
    <ItemDescription className="truncate">+91 79899 07555</ItemDescription>
  </ItemContent>
  <ItemActions className="shrink-0">
    <Button variant="ghost" size="icon-sm"><CopyIcon /></Button>
  </ItemActions>
</Item>
```

- `variant`: `default` (borderless, for bullets), `outline` (a real row), `muted` (a filled row — good for summaries).
- `size`: `default` (~52px, use for anything tappable), `sm`, `xs`.
- `render` it as `Link` or `button` so the **whole row** is the target, not just the title.
- **Truncation trap:** `ItemTitle` is `w-fit` by default and will push past its row. For anything that can overflow, use `min-w-0` on `ItemContent`, `block w-full truncate` on `ItemTitle`, `flex-nowrap` on `Item`, and `shrink-0` on `ItemActions`.

### `Alert` — a message the reader must notice before acting

```jsx
<Alert>
  <CalendarDotsIcon className="size-4" />
  <AlertTitle className="font-heading text-sm">Next-Gen Robotics</AlertTitle>
  <AlertDescription className="text-xs">18 – 19 September 2026 · registrations are open.</AlertDescription>
  <AlertAction>
    <Button size="xs" variant="outline" render={<Link to={to} />}>Details</Button>
  </AlertAction>
</Alert>
```

Variants: `default`, `destructive`. Use `AlertAction` for the one button — never lay one out manually. An Alert is for *standing* information; a transient "saved!" is a toast.

### `Empty` — the zero state

Required on every filterable list.

```jsx
<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon"><UserIcon /></EmptyMedia>
    <EmptyTitle>No members found</EmptyTitle>
    <EmptyDescription>Nothing matches “{query}”. Try a different search.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline" onClick={clearFilters}>Clear filters</Button>
  </EmptyContent>
</Empty>
```

Always name what was searched and always offer the way out.

---

## 3. Actions — Button

One `default` button per screen region. Everything else steps down.

| Variant | Use for | Example here |
|---|---|---|
| `default` | The single primary action | "Register your team" |
| `secondary` | A real action next to the primary | "View 3 highlights" |
| `outline` | Toolbars, filters, low-stakes | "Clear filters", "Open in Maps" |
| `ghost` | Icon-only, header actions, anything that must not compete | copy/share icons, nav search |
| `destructive` | Irreversible | pair with `AlertDialog` |
| `link` | Inline text that happens to be a button | rare |

Sizes: `xs` `sm` `default` `lg`, and `icon-xs` `icon-sm` `icon` `icon-lg`. Use an `icon-*` size whenever there is no label — never a normal size with one child.

```jsx
// Trailing icon: the data attribute tightens the right padding
<Button size="lg" render={<Link to="/events" />}>
  Explore events
  <ArrowRightIcon data-icon="inline-end" className="size-4" />
</Button>

// Leading icon needs nothing
<Button variant="outline"><MapPinIcon className="size-4" />Open in Maps</Button>
```

**Rules**

- Navigation is `render={<Link to="…" />}`. External links are `render={<a href target="_blank" rel="noopener noreferrer" />}` with an `ArrowUpRightIcon`.
- Every icon-only button needs `aria-label` **and** a `Tooltip`.
- Related icon buttons go in a `ButtonGroup` so they join into one control:

```jsx
<ButtonGroup>
  <Button variant="outline" size="icon-sm" aria-label="Call"><PhoneIcon /></Button>
  <Button variant="outline" size="icon-sm" aria-label="Copy"><CopyIcon /></Button>
</ButtonGroup>
```

- Buttons stack on mobile: `className="flex flex-col gap-2 sm:flex-row"` around them, full-width children below `sm`.

---

## 4. Disclosure — the decision tree

This is where consistency usually breaks. Work down the list and take the first match.

1. **Is it a whole new page's worth of content?** → a route, not a component.
2. **Does it need the user's full attention / block the page?** → `ResponsiveModal` (Dialog on desktop, Drawer on phone). Use `AlertDialog` instead if you are asking them to confirm something they cannot undo.
3. **Are these parallel views of the same subject?** (About / Schedule / FAQ / Contact) → `Tabs`.
4. **Is it a list of questions or long passages, one at a time?** → `Accordion` (`multiple={false}` is the default — one open at a time).
5. **Is it one arbitrary block that expands in place?** (a nav group, "show advanced") → `Collapsible`.
6. **Is it a small interactive panel anchored to a control?** (a filter menu, a date picker) → `Popover`.
7. **Is it a menu of commands?** → `DropdownMenu`.
8. **Is it extra detail on hover, mouse only?** → `HoverCard` (rich) or `Tooltip` (one line).
9. **Is it site-wide search / jump-to?** → the `CommandMenu` palette.

Never put a `Tooltip` on something touch users must read — phones have no hover. Anything essential goes in the visible layout.

### Modals: always `ResponsiveModal`

```jsx
<ResponsiveModal
  open={Boolean(selected)}
  onOpenChange={(open) => !open && setSelected(null)}
  title={selected?.name ?? ""}
  description="Role · Domain"
>
  <div className="px-6 pb-6">…</div>
</ResponsiveModal>
```

A centred dialog on a 390px screen is worse than a drawer every time. Let the helper decide; don't import `Dialog` directly for content modals.

---

## 5. Selection & filtering

| Control | When |
|---|---|
| `Tabs` | 2–5 **views**, always visible, content swaps below |
| `ToggleGroup` | **Filters** and layout switches; 2–8 options; can be many if it scrolls |
| `Select` | One of many (6+), or where space is tight |
| `RadioGroup` | One of few, inside a **form**, where the choice is submitted |
| `Checkbox` | An independent yes/no in a form |
| `Switch` | An immediate on/off preference that takes effect straight away |

`ToggleGroup` in this codebase is single-select by default; `value` is an **array**:

```jsx
<ToggleGroup
  variant="outline"
  value={[category]}
  onValueChange={(next) => setCategory(next[0] ?? "All")}
  className="w-max lg:w-full lg:flex-wrap"
>
  <ToggleGroupItem value="All" size="sm" className="gap-1.5">
    <UsersThreeIcon className="size-4" />
    All
    <Badge variant="secondary" className="ml-0.5">43</Badge>
  </ToggleGroupItem>
</ToggleGroup>
```

Put counts in a `secondary` Badge inside the chip — it tells people what a filter will do before they tap it.

`spacing={0}` welds the group into one segmented control (used for the theme switch and the grid/list toggle). Default spacing keeps them as separate chips (used for filters).

`Select` must be given `items` or the trigger shows the raw value:

```jsx
<Select items={sortOptions} value={sort} onValueChange={setSort}>
  <SelectTrigger size="sm"><SelectValue placeholder="Sort" /></SelectTrigger>
  <SelectContent>{sortOptions.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}</SelectContent>
</Select>
```

### The standard filter toolbar

Search left, controls right, chips on their own row, a result count under it:

```jsx
<div className="flex flex-col gap-4">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    <InputGroup className="sm:max-w-sm">…</InputGroup>
    <div className="flex items-center gap-2 sm:ml-auto">
      <Select … /> <ToggleGroup … />
    </div>
  </div>
  <div className="-mx-4 overflow-x-auto px-4 pb-1 lg:mx-0 lg:overflow-visible lg:px-0">
    <ToggleGroup className="w-max lg:w-full lg:flex-wrap">…</ToggleGroup>
  </div>
  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
    <span>Showing {n} of {total}</span>
    {hasFilters && <Button variant="ghost" size="xs" onClick={clear}>Clear filters</Button>}
  </div>
</div>
```

`Members.jsx` is the reference implementation. Copy its shape.

---

## 6. Forms

Every form field is a `Field`. No exceptions — it handles label association, description, error colour and the invalid ring for you.

```jsx
<form onSubmit={submit} noValidate>
  <FieldGroup>
    <Field data-invalid={Boolean(errors.email)}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" aria-invalid={Boolean(errors.email)} … />
      <FieldDescription>We only use this to reply.</FieldDescription>
      <FieldError>{errors.email}</FieldError>
    </Field>

    <Field orientation="horizontal">
      <Checkbox id="consent" checked={v} onCheckedChange={set} />
      <FieldLabel htmlFor="consent" className="font-normal">It's fine to email me back.</FieldLabel>
    </Field>

    <Button type="submit" size="lg" disabled={sending} className="w-full">
      {sending ? <Spinner /> : <PaperPlaneTiltIcon className="size-4" />}
      {sending ? "Sending…" : "Send message"}
    </Button>
  </FieldGroup>
</form>
```

- `FieldGroup` supplies the vertical rhythm. Don't add your own `space-y`.
- `orientation="horizontal"` for checkbox/switch/radio rows; `vertical` (default) for everything else.
- Set both `data-invalid` on the `Field` and `aria-invalid` on the control.
- Use `FieldSet` + `FieldLegend` to group related fields; `FieldSeparator` to divide sections.
- Validate on submit, not on every keystroke. Show a `toast.error("Check the highlighted fields.")` alongside the inline errors.
- Disable the submit button and swap its icon for `Spinner` while working.

### `InputGroup` — inputs with attached bits

Use whenever an input needs a leading icon, a trailing clear/submit button, or a unit label.

```jsx
<InputGroup>
  <InputGroupAddon><MagnifyingGlassIcon /></InputGroupAddon>
  <InputGroupInput value={query} onChange={…} placeholder="Search by name" aria-label="Search" />
  {query && (
    <InputGroupAddon align="inline-end">
      <InputGroupButton size="icon-xs" aria-label="Clear search" onClick={() => setQuery("")}><XIcon /></InputGroupButton>
    </InputGroupAddon>
  )}
</InputGroup>
```

`align`: `inline-start` (default), `inline-end`, `block-start`, `block-end`. A search field without a clear button is unfinished.

---

## 7. Data display

### Grid of cards vs list of items vs table

- **Card grid** — visual, scannable, each entry has an image/avatar. Team roster, event highlights, features.
- **Item list** — dense, text-first, one action per row. Contacts, nav, settings, key/value summaries.
- **Table** — 3+ comparable columns that people scan *down*. The event schedule. Always wrap it:

```jsx
<div className="overflow-x-auto">
  <Table>…</Table>
</div>
```

Standard responsive grid for cards:

```jsx
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
```

Two columns on a phone, not one — these cards are compact enough and one-column wastes the screen. For wide content cards (events), go `grid-cols-1 md:grid-cols-2`.

### `Badge`

Status and counts only. One or two words, never a sentence.

| Variant | Meaning |
|---|---|
| `default` | Live / open / primary status ("Upcoming", "Open") |
| `secondary` | A neutral label or a count ("Workshop", "43") |
| `outline` | A quieter category, or metadata |
| `destructive` | Closed, failed, error |

### `Avatar`

```jsx
<Avatar size="lg">
  <AvatarImage src={photo} alt={name} />
  <AvatarFallback>{initials}</AvatarFallback>
  {isLead && <AvatarBadge><SealCheckIcon className="size-3!" weight="fill" /></AvatarBadge>}
</Avatar>
```

Always supply `AvatarFallback` with initials — remote photos fail often. `AvatarGroup` + `AvatarGroupCount` for "43 members" social proof.

### `Progress`

For a ratio the reader should feel, not just read: seats filled, members per domain.

```jsx
<Progress value={pct} className="gap-1.5">
  <ProgressLabel className="text-xs font-normal text-muted-foreground">27 of 40 filled</ProgressLabel>
  <span className="ml-auto text-xs tabular-nums text-muted-foreground">{pct}%</span>
</Progress>
```

Always pair the bar with a number. Use `tabular-nums` so it doesn't jitter.

### `Separator`

Between sections of different *kinds*, not between every item. `orientation="vertical"` needs an explicit height (`className="h-3"`) and usually `hidden sm:block`.

### `Pagination`

Use it past ~30 items. Prefer it to infinite scroll — it is linkable and reachable by keyboard.

---

## 8. Feedback & async

| Situation | Component |
|---|---|
| Action succeeded / failed, transient | `toast.success` / `toast.error` from `sonner` |
| Something copied to clipboard | `toast.success("Email copied", { description: value })` + an inline `CheckIcon` swap for ~1.5s |
| A route chunk is loading | `Spinner` in the `Suspense` fallback |
| Content whose shape you know is loading | `Skeleton` sized like the real thing |
| A destructive confirm | `AlertDialog` |
| A standing warning | `Alert` |

Skeletons must match the final layout — a `Skeleton` in a different shape than the content it replaces causes a jump. `SmartImage` already handles the image case.

---

## 9. Media

- **`SmartImage`** for every content image. It gives you `AspectRatio` + `Skeleton` + the cached-image fix. Ratios: `16/9` covers, `16/10` features, `4/3` gallery, `1/1` avatars.
- **`AspectRatio`** directly only when the child isn't an `<img>` (a map embed, a video).
- **`Carousel`** for a horizontal set the reader browses: team leads, gallery photos, a tech strip. Add `embla-carousel-autoplay` for ambient strips, never for content people must read.
  - Arrows are desktop-only: `<div className="hidden gap-2 sm:flex">` with `CarouselPrevious/Next` set to `static size-9 translate-y-0`. Phones swipe.
  - Slide widths: `basis-[62%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4` — show a sliver of the next card on mobile so it reads as scrollable.
- **`ScrollArea`** for a scrolling region inside a fixed-height container (the mobile sheet body, a long description in a modal). Needs `min-h-0 flex-1` when it's a flex child.

---

## 10. Page & section structure

Every page follows the same skeleton:

```jsx
export default function Thing() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="…" title="…" description="…" />
        <section className="mt-16 md:mt-24">…</section>
      </div>
    </div>
  )
}
```

- **Always `SectionHeading`.** Never hand-roll an eyebrow/title/lede — it is what makes the vertical rhythm match across pages. `align="center"` for hero-ish headers, default left for everything else.
- **Page padding:** `py-12 md:py-20`. **Between sections:** `mt-16 md:mt-24`, or `py-16 md:py-24` when the section carries its own `border-b`.
- **Width:** `max-w-5xl` for text-led pages, `max-w-4xl` for a single reading column, no max for card grids.
- **Horizontal padding is always `px-4` on the container.** Don't add more inside.

### Typography scale

| Role | Class |
|---|---|
| Page title | `font-heading text-[clamp(2rem,7vw,3.5rem)] leading-[1.05] font-semibold tracking-tight text-balance` |
| Section title | handled by `SectionHeading` |
| Card / sub title | `font-heading text-lg` |
| Eyebrow | `font-heading text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase` |
| Body | default (`font-sans`) |
| Supporting | `text-sm text-muted-foreground leading-relaxed` |
| Meta / metadata rows | `text-xs text-muted-foreground` |

Headings are `font-heading`. Body is inherited. Never set a font family inline.

### Icon sizes

`size-3` in a Badge · `size-3.5` in metadata rows · `size-4` default (buttons, items, inputs) · `size-5` section markers and card headers · `size-6+` only in `EmptyMedia` and hero art.

---

## 11. Responsive playbook

| Breakpoint | What changes |
|---|---|
| `sm` 640 | Cards go 2-up, button rows go horizontal, filter toolbars go inline |
| `md` 768 | Desktop nav replaces the Sheet; two-column layouts appear; sticky mobile CTAs disappear |
| `lg` 1024 | Header gains the search field and Register button; chip rows wrap instead of scrolling |

**Non-negotiables**

- The page never scrolls sideways. Check it: `document.documentElement.scrollWidth === clientWidth` at 360px.
- Grid and flex children that contain long text need `min-w-0` (or `grid-cols-[minmax(0,1fr)_…]`), or they refuse to shrink and blow out the page.
- Long chip rows: `-mx-4 overflow-x-auto px-4` on mobile, `lg:flex-wrap lg:overflow-visible` above.
- Tap targets ≥ 44px. `Item size="default"` and `Button size="default"/"lg"` clear this; `size="xs"` does not — don't use it for anything a thumb must hit.
- A primary action that matters on a long page gets a sticky bottom bar on mobile (`fixed inset-x-0 bottom-0 z-40 … md:hidden`) plus `pb-28` on the page so nothing hides under it. See `EventDetails.jsx`.
- Tables, code and diagrams get their own `overflow-x-auto`. Nothing else may be wider than the screen.

---

## 12. Writing the labels

- Sentence case for buttons and titles: "Register your team", not "Register Your Team".
- Buttons are verbs. "View event details", not "Details" (unless space forces it).
- Descriptions are one sentence and say something the title doesn't.
- Empty states name the thing that was searched.
- Use `·` to join metadata, `–` for ranges.

---

## 13. Recipes

### A new section on an existing page

```jsx
<section className="mt-16 md:mt-24">
  <SectionHeading eyebrow="What we do" title="Three ways in" description="…" />
  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <Card key={item.title} className="transition-shadow hover:shadow-md">
        <CardHeader>
          <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50">
            <Icon name={item.icon} className="size-5" />
          </span>
          <CardTitle className="mt-3 font-heading text-base">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
```

### A new filterable list

1. Data goes in `src/lib/site-data.js` (or a new `lib/` module if it needs normalising).
2. Toolbar per §5.
3. `useMemo` for filter + sort.
4. Render `Empty` → grid/list.
5. Row click opens a `ResponsiveModal`.
6. If the filter is shareable, keep it in the URL with `useSearchParams` (see `Members.jsx`) so the command palette and other pages can link into it.

### A new page

1. Add the route to `routes` in `site-data.js`.
2. Add it to `navigation` there too — the header, mobile sheet, footer and ⌘K palette all read from that one array, so you get all four for free.
3. Create the component, `React.lazy` it in `App.jsx`.
4. Follow §10 for structure.

### A new nav entry

Only touch `navigation` in `src/lib/site-data.js`:

```js
{ title: "Projects", to: routes.projects, icon: "RobotIcon", description: "What we've built.",
  children: [ /* optional — renders a dropdown on desktop, a Collapsible on mobile */ ] }
```

If you use a new icon name, add it to the registry in `src/lib/icons.jsx` — it is deliberately explicit so the bundle stays small.

---

## 14. Before you call it done

- [ ] `npm run build` passes.
- [ ] `npm run lint` shows no new errors.
- [ ] Console is clean. Base UI warnings almost always mean a missed `render`/`nativeButton`.
- [ ] Checked at **360px** and at desktop. No horizontal scroll.
- [ ] Every icon-only control has `aria-label` + `Tooltip`.
- [ ] Every list has loading, empty and populated states.
- [ ] Every image is `SmartImage` with real `alt`.
- [ ] No hex colours, no custom CSS classes, no `font-[…]`.
- [ ] Nav/event/FAQ content came from `site-data.js`, not hardcoded in the component.

---

## 15. Anti-patterns seen in this repo before

| Don't | Do |
|---|---|
| `<Button asChild><Link/></Button>` | `<Button render={<Link/>} />` |
| `font-[Zen Dots]` | `font-heading` |
| `style={{ color: '#c1121f' }}` | `text-primary` / `bg-primary` |
| `<Accordion type="single" collapsible>` | `<Accordion>` (single is the default) |
| `<Card>` for every row of a list | `<Item>` |
| A `Dialog` for a mobile detail view | `ResponsiveModal` |
| `<img>` with `onLoad`-only skeleton | `SmartImage` |
| Hardcoding nav links in the header | `navigation` in `site-data.js` |
| `import * as Phosphor` | named imports, or `lib/icons.jsx` |
| Ten `Tabs` triggers | `ToggleGroup` that scrolls |
