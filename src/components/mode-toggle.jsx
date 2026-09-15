import { DesktopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useTheme } from "./theme-provider"

const themes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: DesktopIcon },
]

/** Compact icon trigger — used in the desktop header. */
export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger
          render={
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Change theme" />
              }
            />
          }
        >
          <SunIcon className="size-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute size-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
        </TooltipTrigger>
        <TooltipContent>Change theme</TooltipContent>
      </Tooltip>

      <DropdownMenuContent align="end" className="w-36">
        {themes.map(({ value, label, icon: ThemeIcon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className="gap-2"
            data-active={theme === value}
          >
            <ThemeIcon className="size-4" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * Full segmented control. On a phone a 3-option dropdown inside a drawer is
 * fiddly, so the mobile sheet shows every option at once instead.
 */
export function ModeToggleGroup({ className }) {
  const { theme, setTheme } = useTheme()

  return (
    <ToggleGroup
      variant="outline"
      spacing={0}
      value={[theme]}
      onValueChange={(next) => next[0] && setTheme(next[0])}
      className={className}
    >
      {themes.map(({ value, label, icon: ThemeIcon }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={label}
          className="flex-1 gap-1.5 text-xs"
        >
          <ThemeIcon className="size-4" />
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
