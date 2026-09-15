import * as React from "react"
import { Link } from "react-router-dom"
import Autoplay from "embla-carousel-autoplay"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  CpuIcon,
  LightningIcon,
  TrophyIcon,
} from "@phosphor-icons/react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Item, ItemContent, ItemMedia, ItemTitle } from "./ui/item"
import { Progress, ProgressLabel } from "./ui/progress"
import { Separator } from "./ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Icon } from "@/lib/icons"
import { routes, upcomingEvent } from "@/lib/site-data"
import { domainStats, memberCount } from "@/lib/team"
import { SectionHeading } from "./section-heading"
import { SmartImage } from "./smart-image"

/* =========================================================
   TECH STRIP — an always-moving band of what the club works with
   ========================================================= */

const stack = [
  "Arduino", "Raspberry Pi", "ROS 2", "Python", "OpenCV", "ESP32",
  "3D Printing", "PyTorch", "IoT", "PCB Design", "Embedded C", "SLAM",
]

export function TechStrip() {
  const autoplay = React.useRef(
    Autoplay({ delay: 1800, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="border-b bg-muted/20 py-5">
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:gap-6">
        <p className="shrink-0 font-heading text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
          We work with
        </p>
        <Separator orientation="vertical" className="hidden h-5 sm:block" />
        <Carousel
          plugins={[autoplay.current]}
          opts={{ loop: true, align: "start", dragFree: true }}
          className="min-w-0 flex-1"
        >
          <CarouselContent className="-ml-2">
            {stack.map((tool) => (
              <CarouselItem key={tool} className="basis-auto pl-2">
                <Badge variant="secondary" className="gap-1.5 py-1 font-mono">
                  <LightningIcon className="size-3" weight="fill" />
                  {tool}
                </Badge>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

/* =========================================================
   HIGHLIGHTS — tabbed "what you actually do here"
   ========================================================= */

const highlights = [
  {
    value: "build",
    label: "Build",
    icon: CpuIcon,
    title: "Turn an idea into a working machine",
    text: "Line-following bots, drones, robotic arms and IoT rigs — built in teams, from breadboard to demo day.",
    image: "/images/gallery1.jpg",
    points: [
      "Kits, boards and tools provided by the club",
      "Weekly build sessions with senior members",
      "Ship a demo at the end of every cycle",
    ],
  },
  {
    value: "learn",
    label: "Learn",
    icon: LightningIcon,
    title: "Workshops that start from zero",
    text: "No prior experience needed. Sessions run from soldering basics up to computer vision and autonomous navigation.",
    image: "/images/gallery2.jpg",
    points: [
      "Beginner-friendly tracks every semester",
      "Mentorship from domain leads",
      "AI, embedded systems and design covered",
    ],
  },
  {
    value: "compete",
    label: "Compete",
    icon: TrophyIcon,
    title: "Put it up against the clock",
    text: "Hackathons, inter-college competitions and internal showcases where teams present what they have built.",
    image: "/images/gallery3.jpg",
    points: [
      "Team-based events across two days",
      "Certificates for every participant",
      "Showcase your project to the department",
    ],
  },
]

export function HomeHighlights() {
  return (
    <section className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways in"
          description="Whichever door you come through, you end up building something."
        />

        <Tabs defaultValue="build" className="mt-8 gap-6">
          <TabsList className="h-auto w-full max-w-md p-1 sm:w-fit">
            {highlights.map(({ value, label, icon: TabIcon }) => (
              <TabsTrigger key={value} value={value} className="gap-1.5 py-1.5">
                <TabIcon className="size-4" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {highlights.map((highlight) => (
            <TabsContent key={highlight.value} value={highlight.value}>
              <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                <SmartImage
                  src={highlight.image}
                  alt={highlight.title}
                  className="rounded-lg border"
                />

                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-xl font-semibold text-balance sm:text-2xl">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {highlight.text}
                  </p>

                  <ul className="flex flex-col gap-1">
                    {highlight.points.map((point) => (
                      <li key={point}>
                        <Item size="sm" className="gap-2.5 px-0">
                          <ItemMedia variant="icon" className="text-primary">
                            <CheckCircleIcon className="size-4" weight="fill" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle className="text-sm font-normal text-muted-foreground">
                              {point}
                            </ItemTitle>
                          </ItemContent>
                        </Item>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-fit"
                    render={<Link to={routes.about} />}
                  >
                    More about the club
                    <ArrowRightIcon data-icon="inline-end" className="size-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

/* =========================================================
   DOMAINS — how the club is actually organised
   ========================================================= */

export function HomeDomains() {
  const largest = Math.max(...domainStats.map((domain) => domain.count))

  return (
    <section className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="How we're organised"
            title="Seven domains, one club"
            description={`Every one of our ${memberCount} members sits in a domain. Pick the one that matches what you want to get better at — or move between them.`}
          >
            <Button
              className="mt-2 w-fit"
              variant="outline"
              render={<Link to={routes.team} />}
            >
              Browse the full roster
              <ArrowRightIcon data-icon="inline-end" className="size-4" />
            </Button>
          </SectionHeading>

          <div className="flex flex-col gap-5">
            {domainStats.map((domain) => (
              <HoverCard key={domain.id}>
                <HoverCardTrigger
                  render={
                    <Link
                      to={`${routes.team}?domain=${domain.id}`}
                      className="group block rounded-md transition-opacity hover:opacity-90"
                    />
                  }
                >
                  <Progress
                    value={(domain.count / largest) * 100}
                    className="gap-2"
                  >
                    <ProgressLabel className="flex items-center gap-2 text-sm font-medium">
                      <Icon name={domain.icon} className="size-4 text-muted-foreground" />
                      {domain.label}
                    </ProgressLabel>
                    <span className="ml-auto text-sm tabular-nums text-muted-foreground">
                      {domain.count}
                    </span>
                  </Progress>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <p className="font-heading text-sm font-medium">{domain.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {domain.count} {domain.count === 1 ? "member" : "members"} currently
                    in this domain.
                  </p>
                  <span className="mt-3 flex items-center gap-1 text-xs font-medium">
                    View members <ArrowRightIcon className="size-3" />
                  </span>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CTA
   ========================================================= */

export function HomeCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_80%_0%,var(--color-primary)/15%,transparent)]"
          />
          <CardHeader className="relative items-center text-center">
            <Badge variant="secondary" className="mx-auto mb-2 gap-1.5">
              <Icon name="TicketIcon" className="size-3" />
              Registrations open
            </Badge>
            <CardTitle className="font-heading text-[clamp(1.5rem,4vw,2.25rem)] leading-tight font-semibold text-balance">
              {upcomingEvent.title}
            </CardTitle>
            <CardDescription className="mx-auto max-w-xl text-balance">
              {upcomingEvent.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span>{upcomingEvent.date}</span>
              <Separator orientation="vertical" className="hidden h-3 sm:block" />
              <span>{upcomingEvent.venue}</span>
              <Separator orientation="vertical" className="hidden h-3 sm:block" />
              <span>{upcomingEvent.fee}</span>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                render={
                  <a
                    href={upcomingEvent.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Register your team
                <ArrowUpRightIcon data-icon="inline-end" className="size-4" />
              </Button>
              <Button size="lg" variant="outline" render={<Link to={upcomingEvent.to} />}>
                Read the details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
