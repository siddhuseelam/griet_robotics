import React from 'react';
import { Bot, BrainCircuit, Cpu, Wrench, ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Terminal, Code, Users } from "lucide-react";
import HomeTeam from './HomeTeam';

export default function Hero() {
  return (
    <div className="bg-background text-foreground font-sans">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="container relative z-10 py-12 mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div>
              {/* Club Label */}
              <Badge variant="outline" className="mb-6 gap-2 text-muted-foreground uppercase tracking-widest text-xs py-1.5 px-3">
                <Bot size={16} />
                Gokaraju Rangaraju Institute of Engineering and Technology
              </Badge>

              {/* Alert Banner */}
              <div className="mb-8 w-full max-w-sm">
                <Alert className="bg-primary/5 border-primary/20 backdrop-blur">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <AlertTitle className="text-primary font-semibold font-[Zen Dots] text-xs">Upcoming Event</AlertTitle>
                  <AlertDescription className="text-muted-foreground text-xs mt-1">
                    Registrations for Next-Gen Robotics are open!
                  </AlertDescription>
                </Alert>
              </div>

              {/* Main Heading */}
              <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] tracking-tight mb-6 font-bold font-[Zen Dots] text-foreground">
                ROBOTICS<br />CLUB
              </h1>

              {/* Tagline */}
              <p className="text-2xl leading-relaxed mb-4 text-primary font-[Zen Dots]">
                Imagine. Engineer. Innovate.
              </p>

              {/* Description */}
              <p className="text-base leading-relaxed mb-8 text-muted-foreground max-w-md">
                Welcome to a community where students explore robotics, artificial intelligence,
                and emerging technologies through hands-on learning.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/events" className="flex items-center gap-2">
                    Explore Events
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/about">
                        About Our Club
                      </Link>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold font-[Zen Dots]">Club Statistics</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          We are a growing community of innovators.
                        </p>
                        <div className="flex items-center gap-2 mb-2 text-sm text-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>50+ Active Members</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <Code className="w-4 h-4 text-primary" />
                          <span>10+ Core Projects</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            {/* Right Side: Interactive Mock Terminal */}
            <div className="hidden lg:block relative z-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20"></div>
              <div className="relative bg-background/95 backdrop-blur border border-border/50 shadow-2xl overflow-hidden rounded-xl flex flex-col">
                <div className="p-3 border-b border-border/50 bg-muted/30 flex flex-row items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-2">griet-robotics-sys ~ /boot</span>
                </div>
                <div className="p-6 font-mono text-sm leading-loose text-muted-foreground h-[400px] flex flex-col justify-end">
                  <div className="space-y-2 opacity-80">
                    <p><span className="text-primary">&gt;</span> Initializing core modules...</p>
                    <p><span className="text-green-400">[OK]</span> Hardware interface established.</p>
                    <p><span className="text-green-400">[OK]</span> AI vision models loaded.</p>
                    <p><span className="text-primary">&gt;</span> Running system check...</p>
                    <p>Status: All systems nominal.</p>
                    <p className="mt-4"><span className="text-primary">root@robotics:~$</span> <span className="animate-pulse">_</span></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          CLUB LEADS SECTION
      ========================== */}
      <HomeTeam />

    </div>
  );
}