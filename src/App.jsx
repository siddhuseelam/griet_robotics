import * as React from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import Hero from "./components/Hero"
import { SiteFooter } from "./components/site-footer"
import { SiteHeader } from "./components/site-header"
import { ThemeProvider } from "./components/theme-provider"
import { Spinner } from "./components/ui/spinner"
import { Toaster } from "./components/ui/sonner"
import { TooltipProvider } from "./components/ui/tooltip"
import { routes } from "./lib/site-data"

// The home page ships in the main bundle; every other route is fetched on
// demand so the first paint stays small.
const EventGallery = React.lazy(() => import("./components/EventGallery"))
const EventDetails = React.lazy(() => import("./components/EventDetails"))
const About = React.lazy(() => import("./components/About"))
const Members = React.lazy(() => import("./components/Members"))
const Contact = React.lazy(() => import("./components/Contact"))

/** Router keeps the old scroll offset between pages — reset it on navigation. */
function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

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
