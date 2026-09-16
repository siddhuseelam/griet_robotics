import * as React from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import Hero from "./components/Hero"
import EventGallery from "./components/EventGallery"
import EventDetails from "./components/EventDetails"
import About from "./components/About"
import Members from "./components/Members"
import Contact from "./components/Contact"
import { SiteFooter } from "./components/site-footer"
import { SiteHeader } from "./components/site-header"
import { ThemeProvider } from "./components/theme-provider"
import { Spinner } from "./components/ui/spinner"
import { Toaster } from "./components/ui/sonner"
import { TooltipProvider } from "./components/ui/tooltip"
import { routes } from "./lib/site-data"

/** Router keeps the old scroll offset between pages — reset it on navigation and reloads. */
function ScrollToTop() {
  const { pathname } = useLocation()

  React.useLayoutEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const reset = () => {
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }

    reset()
    const rafId = requestAnimationFrame(reset)
    const t1 = setTimeout(reset, 50)
    const t2 = setTimeout(reset, 150)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])

  React.useEffect(() => {
    const reset = () => {
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }
    window.addEventListener("beforeunload", reset)
    window.addEventListener("pagehide", reset)
    window.addEventListener("load", reset)
    return () => {
      window.removeEventListener("beforeunload", reset)
      window.removeEventListener("pagehide", reset)
      window.removeEventListener("load", reset)
    }
  }, [])

  return null
}

function RouteFallback() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <Spinner className="size-6 text-muted-foreground" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delay={200}>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex min-h-svh flex-col bg-background font-sans text-foreground">
            <SiteHeader />

            <main className="flex-1">
              <React.Suspense fallback={<RouteFallback />}>
                <Routes>
                  <Route path={routes.home} element={<Hero />} />
                  <Route path={routes.events} element={<EventGallery />} />
                  <Route path={routes.nextGenRobotics} element={<EventDetails />} />
                  <Route path={routes.about} element={<About />} />
                  <Route path={routes.team} element={<Members />} />
                  <Route path={routes.contact} element={<Contact />} />
                </Routes>
              </React.Suspense>
            </main>

            <SiteFooter />
          </div>
          <Toaster />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
