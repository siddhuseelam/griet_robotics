import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowUpRightIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Kbd, KbdGroup } from "./ui/kbd"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Progress } from "./ui/progress"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Icon } from "@/lib/icons"
import { cn } from "cn"
import { navigation, upcomingEvent } from "@/lib/site-data"
import { CommandMenu } from "./command-menu"
import { isActivePath } from "@/lib/nav"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"

/** Percentage of the document the reader has scrolled through. */
function useScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return progress
}

/** A row inside a desktop dropdown panel. */
function MenuLink({ child, active }) {
  return (
    <NavigationMenuLink
      active={active}
      closeOnClick
      render={<Link to={child.to} />}
      className="items-start gap-3 p-2.5"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-muted/50 text-foreground">
        <Icon name={child.icon} className="size-4" />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-2 text-sm font-medium">
          {child.title}
          {child.badge && <Badge className="h-4 px-1.5 text-[0.65rem]">{child.badge}</Badge>}
        </span>
        <span className="text-xs leading-snug text-muted-foreground">
          {child.description}
        </span>
      </span>
    </NavigationMenuLink>
  )
}

export function SiteHeader() {
  const { pathname } = useLocation()
  const [commandOpen, setCommandOpen] = React.useState(false)
  const progress = useScrollProgress()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <div className="container mx-auto flex h-14 items-center gap-2 px-4 md:h-16">
        {/* ---------- Logo ---------- */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <img
            src="/griet-robotics-logo.jpeg"
            alt="GRIET Robotics Club"
            className="size-8 shrink-0 rounded-full bg-foreground object-contain md:size-9"
          />
          <span className="truncate font-heading text-sm font-semibold tracking-tight md:text-base">
            <span className="hidden sm:inline">GRIET Robotics Club</span>
            <span className="sm:hidden">GRIET Robotics</span>
          </span>
        </Link>

        {/* ---------- Desktop navigation ---------- */}
        <NavigationMenu align="center" className="mx-auto hidden md:flex">
          <NavigationMenuList className="gap-0.5">
            {navigation.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-sm",
                      item.children.some((child) => isActivePath(pathname, child.to)) &&
                        "text-foreground"
                    )}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[22rem] gap-0.5">
                      {item.children.map((child) => (
                        <li key={child.to + child.title}>
                          <MenuLink
                            child={child}
                            active={isActivePath(pathname, child.to)}
                          />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    active={isActivePath(pathname, item.to)}
                    render={<Link to={item.to} />}
                    className={cn(navigationMenuTriggerStyle(), "text-sm")}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ---------- Actions ---------- */}
        <div className="ml-auto flex items-center gap-1.5 md:ml-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCommandOpen(true)}
            className="hidden h-8 w-48 justify-start gap-2 px-2 text-muted-foreground lg:inline-flex"
          >
            <MagnifyingGlassIcon className="size-4" />
            <span className="text-xs">Search the site…</span>
            <KbdGroup className="ml-auto">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </Button>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Search"
                  onClick={() => setCommandOpen(true)}
                  className="lg:hidden"
                />
              }
            >
              <MagnifyingGlassIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent>Search · ⌘K</TooltipContent>
          </Tooltip>

          <div className="hidden md:flex">
            <ModeToggle />
          </div>

          <Button
            size="sm"
            className="hidden lg:inline-flex"
            render={
              <a
                href={upcomingEvent.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Register
            <ArrowUpRightIcon data-icon="inline-end" className="size-3.5" />
          </Button>

          <MobileNav />
        </div>
      </div>

      {/* ---------- Reading progress ---------- */}
      <Progress
        value={progress}
        aria-label="Page scroll progress"
        className="pointer-events-none absolute inset-x-0 bottom-0 gap-0 *:data-[slot=progress-track]:h-0.5 *:data-[slot=progress-track]:rounded-none *:data-[slot=progress-track]:bg-transparent"
      />

      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </header>
  )
}
