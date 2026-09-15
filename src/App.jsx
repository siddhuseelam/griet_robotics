import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import { Menu } from 'lucide-react';

import Hero from './components/Hero';
import EventGallery from './components/EventGallery';
import InventoryList from './components/InventoryList';
import TeamSection from './components/TeamSection';
import EventDetails from './components/EventDetails';
import Members from './components/Members';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { Input } from "./components/ui/input";
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">

        {/* =========================
            NAVIGATION BAR
        ========================== */}
        <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4 mx-auto">
            
            {/* =========================
                LOGO + CLUB NAME
            ========================== */}
            <NavLink to="/" className="flex items-center gap-3 no-underline transition-opacity hover:opacity-80">
              <img
                src="/griet-robotics-logo.jpeg"
                alt="GRIET Robotics Club Logo"
                className="w-10 h-10 object-contain rounded-full bg-foreground"
              />
              <span className="font-[Zen Dots] font-bold text-lg text-foreground">
                GRIET Robotics Club
              </span>
            </NavLink>

            {/* =========================
                NAVIGATION LINKS
            ========================== */}
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex gap-2">
                <NavigationMenuItem>
                  <NavLink to="/" className={navStyle}>
                    Home
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/events" className={navStyle}>
                    Events
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/about" className={navStyle}>
                    About
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/team" className={navStyle}>
                    Team
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/contact" className={navStyle}>
                    Contact
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
              <div className="flex items-center gap-2 ml-4">
                <ModeToggle />
                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                    <SheetHeader>
                      <SheetTitle className="font-[Zen Dots] text-left">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-6">
                      <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        Home
                      </NavLink>
                      <NavLink to="/events" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        Events
                      </NavLink>
                      <NavLink to="/about" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        About
                      </NavLink>
                      <NavLink to="/team" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        Team
                      </NavLink>
                      <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        Contact
                      </NavLink>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>


        {/* =========================
            PAGES
        ========================== */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/events" element={<EventGallery />} />
            <Route path="/events/next-gen-robotics" element={<EventDetails />} />
            <Route path="/about" element={<InventoryList />} />
            <Route path="/team" element={<Members />} />
            <Route path="/contact" element={<TeamSection />} />
          </Routes>
        </main>


        {/* =========================
            FOOTER
        ========================== */}
        <footer className="border-t border-border/50 bg-muted/30 py-16 mt-auto">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div>
                <h3 className="font-[Zen Dots] text-foreground mb-2 text-xl">
                  ROBOTICS CLUB
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gokaraju Rangaraju Institute of Engineering and Technology.
                </p>
                <p className="font-[Zen Dots] text-primary text-sm">
                  Imagine · Engineer · Innovate
                </p>
              </div>

              <div>
                <h4 className="font-[Zen Dots] text-foreground mb-4 text-sm">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Email address" className="bg-background" />
                  <Button variant="default">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Get notified about our latest events and workshops.
                </p>
              </div>

            </div>

            <div className="border-t border-border/50 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-[Zen Dots] text-xs text-muted-foreground">
                © {new Date().getFullYear()} Robotics Club, GRIET. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </div>
      <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}

/* =========================
   NAVIGATION LINK STYLE
========================== */
const navStyle = ({ isActive }) => 
  `${navigationMenuTriggerStyle()} font-[Zen Dots] text-xs bg-transparent ${
    isActive 
      ? 'text-primary' 
      : 'text-foreground/80'
  }`;

export default App;