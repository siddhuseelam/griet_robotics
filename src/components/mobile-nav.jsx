import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  ArrowUpRightIcon,
  CaretDownIcon,
  ListIcon,
  TicketIcon,
  XIcon,
} from "@phosphor-icons/react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Icon } from "@/lib/icons"
import { cn } from "cn"
import { navigation, socials, upcomingEvent } from "@/lib/site-data"
import { memberCount } from "@/lib/team"
import { isActivePath } from "@/lib/nav"
import { ModeToggleGroup } from "./mode-toggle"

/** One tappable row. Rendered as a router link so the whole row is the target. */
function NavRow({ to, icon, title, description, badge, active, size = "default", onNavigate }) {
  return (
    <Item
      size={size}
      render={<Link to={to} onClick={onNavigate} />}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex-nowrap gap-3",
        active ? "bg-muted text-foreground" : "text-muted-foreground"
      )}
    >
      <ItemMedia
        variant="icon"
        className={cn(
          "size-9 rounded-md border transition-colors",
          active
            ? "border-transparent bg-primary text-primary-foreground"
            : "border-border bg-muted/50"
        )}
      >
        <Icon name={icon} weight={active ? "fill" : "regular"} />
      </ItemMedia>

      <ItemContent className="min-w-0 gap-0.5">
        <ItemTitle className={cn("block w-full truncate text-[0.95rem]", active && "font-medium")}>
          {title}
        </ItemTitle>
        {description && (
          <ItemDescription className="truncate text-xs">
            {description}
          </ItemDescription>
        )}
      </ItemContent>

      {/* Sub-rows are already indented — a badge here would squeeze the label. */}
      {badge && size === "default" && (
        <ItemActions className="shrink-0">
          <Badge variant={active ? "secondary" : "default"}>{badge}</Badge>
        </ItemActions>
      )}
    </Item>
  )
}

/** A nav entry that owns sub-pages — collapses so the list stays short. */
function NavGroup({ item, pathname, onNavigate }) {
  const childActive = item.children.some((child) => isActivePath(pathname, child.to))
  const [open, setOpen] = React.useState(childActive)

  // Re-open the branch that matches the page the user just landed on.
  React.useEffect(() => {
    if (childActive) setOpen(true)
  }, [childActive])

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      {/* Base UI can't see through Item's render, so it is told the trigger is
          not a native button — Item still renders a real <button> underneath. */}
      <CollapsibleTrigger
        nativeButton={false}
        render={
          <Item
            size="default"
            render={<button type="button" />}
            className={cn(
              "w-full flex-nowrap gap-3 text-left",
              childActive ? "bg-muted text-foreground" : "text-muted-foreground"
            )}
          />
        }
      >
        <ItemMedia
          variant="icon"
          className={cn(
            "size-9 rounded-md border transition-colors",
            childActive
              ? "border-transparent bg-primary text-primary-foreground"
              : "border-border bg-muted/50"
          )}
        >
          <Icon name={item.icon} weight={childActive ? "fill" : "regular"} />
        </ItemMedia>

        <ItemContent className="min-w-0 gap-0.5">
          <ItemTitle className={cn("block w-full truncate text-[0.95rem]", childActive && "font-medium")}>
            {item.title}
          </ItemTitle>
          <ItemDescription className="truncate text-xs">
            {item.description}
          </ItemDescription>
        </ItemContent>

        <ItemActions>
          <CaretDownIcon
            className={cn(
              "size-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </ItemActions>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden transition-[height] duration-200 ease-out h-[var(--collapsible-panel-height)] data-ending-style:h-0 data-starting-style:h-0">
        <div className="ml-4 flex flex-col gap-1 border-l py-1 pl-3">
          {item.children.map((child) => (
            <NavRow
              key={child.to + child.title}
              {...child}
              size="sm"
              active={isActivePath(pathname, child.to)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()

  // Close the sheet whenever the route changes.
  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <ListIcon className="size-4" />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="flex w-[min(21rem,88vw)] flex-col gap-0 p-0 sm:max-w-sm"
      >
        {/* ---------- Sheet header ---------- */}
        <SheetHeader className="flex-row items-center justify-between gap-3 space-y-0 border-b p-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src="/griet-robotics-logo.jpeg"
              alt=""
              className="size-9 shrink-0 rounded-full bg-foreground object-contain"
            />
            <div className="min-w-0">
              <SheetTitle className="truncate text-sm leading-tight">
                GRIET Robotics
              </SheetTitle>
              <SheetDescription className="truncate text-xs">
                {memberCount} members · Hyderabad
              </SheetDescription>
            </div>
          </div>

          <SheetClose
            render={<Button variant="ghost" size="icon-sm" aria-label="Close menu" />}
          >
            <XIcon className="size-4" />
          </SheetClose>
        </SheetHeader>

        {/* ---------- Scrollable nav ---------- */}
        <ScrollArea className="min-h-0 flex-1">
          <nav className="flex flex-col gap-1 p-3">
            {navigation.map((item) =>
              item.children ? (
                <NavGroup
                  key={item.title}
                  item={item}
                  pathname={pathname}
                  onNavigate={close}
                />
              ) : (
                <NavRow
                  key={item.title}
                  {...item}
                  active={isActivePath(pathname, item.to)}
                  onNavigate={close}
                />
              )
            )}
          </nav>

          <Separator />

          <div className="p-3">
            <p className="px-1 pb-2 font-heading text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
              Happening now
            </p>
            <Item
              variant="muted"
              size="sm"
              render={<Link to={upcomingEvent.to} onClick={close} />}
              className="flex-nowrap"
            >
              <ItemMedia variant="icon" className="size-9 rounded-md border bg-background">
                <TicketIcon className="size-4" />
              </ItemMedia>
              <ItemContent className="min-w-0 gap-0.5">
                <ItemTitle className="block w-full truncate text-[0.95rem]">
                  {upcomingEvent.title}
                </ItemTitle>
                <ItemDescription className="truncate text-xs">
                  {upcomingEvent.shortDate} · {upcomingEvent.venue}
                </ItemDescription>
              </ItemContent>
              <ItemActions className="shrink-0">
                <Badge>Open</Badge>
              </ItemActions>
            </Item>
          </div>
        </ScrollArea>

        {/* ---------- Sticky footer ---------- */}
        <SheetFooter className="gap-3 border-t p-4">
          <Button
            size="lg"
            className="w-full"
            render={
              <a
                href={upcomingEvent.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              />
            }
          >
            Register now
            <ArrowUpRightIcon data-icon="inline-end" className="size-4" />
          </Button>

          <ModeToggleGroup className="w-full *:flex-1" />

          <div className="flex items-center justify-center gap-1 pt-1">
            {socials.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={social.name}
                      render={
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    />
                  }
                >
                  <Icon name={social.icon} className="size-4" />
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
