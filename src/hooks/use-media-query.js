import * as React from "react"

/**
 * Subscribes to a CSS media query.
 * Used to swap Dialog (desktop) for Drawer (mobile) and to tune carousels.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(query).matches
  })

  React.useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = (event) => setMatches(event.matches)

    setMatches(list.matches)
    list.addEventListener("change", onChange)
    return () => list.removeEventListener("change", onChange)
  }, [query])

  return matches
}

/** True on viewports narrower than the Tailwind `md` breakpoint. */
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)")
}
