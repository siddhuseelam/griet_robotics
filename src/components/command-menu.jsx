import * as React from "react"
import { useNavigate } from "react-router-dom"
import {
  ArrowSquareOutIcon,
  CopyIcon,
  MoonIcon,
  SunIcon,
  TicketIcon,
} from "@phosphor-icons/react"
import { toast } from "sonner"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command"
import { Icon } from "@/lib/icons"
import { allNavLinks, contactEmail, upcomingEvent } from "@/lib/site-data"
import { domainStats } from "@/lib/team"
import { routes } from "@/lib/site-data"
import { useTheme } from "./theme-provider"

/**
 * ⌘K / Ctrl+K palette. Open state is owned by the header so the trigger button
 * and the keyboard shortcut drive the same dialog.
 */
export function CommandMenu({ open, onOpenChange }) {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, onOpenChange])

  const run = React.useCallback(
    (action) => {
      onOpenChange(false)
      action()
    },
    [onOpenChange]
  )

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      {/* shadcn's CommandDialog only supplies the Dialog shell — the cmdk
          context still has to be provided here. */}
      <Command>
        <CommandInput placeholder="Search pages, events and teams…" />
        <CommandList>
          <CommandEmpty>Nothing matched that search.</CommandEmpty>

          <CommandGroup heading="Pages">
            {allNavLinks.map((link) => (
              <CommandItem
                key={link.to + link.title}
                value={`${link.title} ${link.description ?? ""}`}
                onSelect={() => run(() => navigate(link.to))}
              >
                <Icon name={link.icon} />
                {link.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Team domains">
            {domainStats.map((domain) => (
              <CommandItem
                key={domain.id}
                value={`team ${domain.label}`}
                onSelect={() =>
                  run(() => navigate(`${routes.team}?domain=${domain.id}`))
                }
              >
                <Icon name={domain.icon} />
                {domain.label}
                <CommandShortcut>{domain.count}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem
              value="register next-gen robotics"
              onSelect={() =>
                run(() => window.open(upcomingEvent.registerUrl, "_blank", "noopener"))
              }
            >
              <TicketIcon />
              Register for {upcomingEvent.title}
              <CommandShortcut>
                <ArrowSquareOutIcon className="size-3.5" />
              </CommandShortcut>
            </CommandItem>
            <CommandItem
              value="copy email address contact"
              onSelect={() =>
                run(() => {
                  navigator.clipboard.writeText(contactEmail)
                  toast.success("Email copied", { description: contactEmail })
                })
              }
            >
              <CopyIcon />
              Copy club email
            </CommandItem>
            <CommandItem
              value="toggle theme dark light"
              onSelect={() =>
                run(() => setTheme(theme === "dark" ? "light" : "dark"))
              }
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              Switch to {theme === "dark" ? "light" : "dark"} theme
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
