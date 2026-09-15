import * as React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarDotsIcon,
  RobotIcon,
} from "@phosphor-icons/react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "./ui/alert"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"
import { routes, upcomingEvent } from "@/lib/site-data"
import { leads, memberCount } from "@/lib/team"
import { HomeCta, HomeDomains, HomeHighlights, TechStrip } from "./home-sections"
import HomeTeam from "./HomeTeam"

const bootLines = [
  { prefix: ">", tone: "text-primary", text: "Initializing core modules..." },
  { prefix: "[OK]", tone: "text-emerald-500", text: "Hardware interface established." },
  { prefix: "[OK]", tone: "text-emerald-500", text: "AI vision models loaded." },
  { prefix: ">", tone: "text-primary", text: "Running system check..." },
  { prefix: "", tone: "", text: "Status: all systems nominal." },
]

/** Boot log that types itself out once, then parks on a blinking prompt. */
function BootTerminal({ className }) {
  const [visible, setVisible] = React.useState(0)

  React.useEffect(() => {
    if (visible >= bootLines.length) return
    const timer = setTimeout(() => setVisible((count) => count + 1), 520)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl border bg-card/80 shadow-sm backdrop-blur ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b bg-muted/40 p-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-amber-500/70" />
          <span className="size-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="truncate font-mono text-[0.7rem] text-muted-foreground">
          griet-robotics-sys ~ /boot
        </span>
      </div>

      <div className="flex flex-col justify-end gap-1.5 p-4 font-mono text-xs leading-relaxed text-muted-foreground sm:p-6 sm:text-sm md:min-h-[19rem]">
        {bootLines.slice(0, visible).map((line) => (
          <p key={line.text} className="animate-in fade-in slide-in-from-bottom-1">
            {line.prefix && <span className={line.tone}>{line.prefix} </span>}
            {line.text}
          </p>
        ))}
        {visible >= bootLines.length && (
          <p className="pt-3">
            <span className="text-primary">root@robotics:~$</span>{" "}
            <span className="animate-pulse">_</span>
          </p>
        )}
      </div>
    </div>
  )
}

/** Social proof — the first few leads plus a headcount. */
function MemberProof() {
  const faces = leads.slice(0, 4)

  return (
    <HoverCard>
      <HoverCardTrigger
        render={
          <Link
            to={routes.team}
            className="flex w-fit items-center gap-3 rounded-full py-1 pr-3 transition-opacity hover:opacity-80"
          />
        }
      >
        <AvatarGroup>
          {faces.map((lead) => (
            <Avatar key={lead.id}>
              <AvatarImage src={lead.photo ?? undefined} alt={lead.name} />
              <AvatarFallback className="text-[0.65rem]">{lead.initials}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount className="text-xs">+{memberCount - faces.length}</AvatarGroupCount>
        </AvatarGroup>
        <span className="text-left text-xs leading-tight text-muted-foreground">
          <span className="block font-medium text-foreground">{memberCount} members</span>
          across 7 domains
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <p className="font-heading text-sm font-medium">Built by students</p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          The club runs on {memberCount} members split across technical, creative,
          documentation, events, database and outreach teams.
        </p>
        <Separator className="my-3" />
        <span className="flex items-center gap-1 text-xs font-medium text-foreground">
          Meet the team <ArrowRightIcon className="size-3" />
        </span>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function Hero() {
  return (
    <div className="font-sans">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_70%_-10%,var(--color-primary)/12%,transparent)]"
        />

        <div className="container relative mx-auto grid items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
          {/* ---------- Copy ---------- */}
          <div className="flex flex-col items-start">
            <Badge variant="outline" className="mb-5 gap-1.5 tracking-widest uppercase">
              <RobotIcon className="size-3" weight="fill" />
              GRIET · Hyderabad
            </Badge>

            <h1 className="font-heading text-[clamp(2.5rem,11vw,5rem)] leading-[0.95] font-semibold tracking-tight text-balance">
              ROBOTICS
              <br />
              CLUB
            </h1>

            <p className="mt-4 font-heading text-xl text-primary sm:text-2xl">
              Imagine. Engineer. Innovate.
            </p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              A community where students explore robotics, artificial intelligence
              and emerging technologies through hands-on learning.
            </p>

            <Alert className="mt-7 w-full max-w-md">
              <CalendarDotsIcon className="size-4" />
              <AlertTitle className="font-heading text-sm">
                {upcomingEvent.title}
              </AlertTitle>
              <AlertDescription className="text-xs">
                {upcomingEvent.date} · registrations are open.
              </AlertDescription>
              <AlertAction>
                <Button
                  size="xs"
                  variant="outline"
                  render={<Link to={upcomingEvent.to} />}
                >
                  Details
                </Button>
              </AlertAction>
            </Alert>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" render={<Link to={routes.events} />}>
                Explore events
                <ArrowRightIcon data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={
                  <a
                    href={upcomingEvent.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Register now
                <ArrowUpRightIcon data-icon="inline-end" className="size-4" />
              </Button>
            </div>

            <Separator className="my-7 max-w-md" />

            <MemberProof />
          </div>

          {/* ---------- Terminal ---------- */}
          <BootTerminal className="w-full" />
        </div>
      </section>

      <TechStrip />
      <HomeHighlights />
      <HomeDomains />
      <HomeTeam />
      <HomeCta />
    </div>
  )
}
