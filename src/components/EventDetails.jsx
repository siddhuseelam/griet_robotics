import * as React from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpRightIcon,
  CalendarDotsIcon,
  CertificateIcon,
  ClipboardTextIcon,
  ClockIcon,
  CopyIcon,
  CurrencyInrIcon,
  EnvelopeSimpleIcon,
  InfoIcon,
  MapPinIcon,
  PhoneIcon,
  QuestionIcon,
  ShareNetworkIcon,
  UsersIcon,
} from "@phosphor-icons/react"
import { toast } from "sonner"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import { Progress, ProgressLabel } from "./ui/progress"
import { Separator } from "./ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { SmartImage } from "./smart-image"
import { contactEmail, contacts, routes, upcomingEvent } from "@/lib/site-data"
import { initialsOf } from "@/lib/team"
import { cn } from "cn"

const facts = [
  { icon: CalendarDotsIcon, label: "Date", value: upcomingEvent.date },
  { icon: ClockIcon, label: "Time", value: upcomingEvent.time },
  { icon: MapPinIcon, label: "Venue", value: upcomingEvent.venue },
  { icon: UsersIcon, label: "Team size", value: upcomingEvent.teamSize },
  { icon: CurrencyInrIcon, label: "Registration fee", value: upcomingEvent.fee },
  { icon: CertificateIcon, label: "Certificates", value: upcomingEvent.certificates },
]

function FactCard({ icon: FactIcon, label, value }) {
  return (
    <Card size="sm">
      <CardContent className="gap-1.5">
        <FactIcon className="size-5 text-muted-foreground" />
        <p className="font-heading text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="text-sm leading-snug font-medium">{value}</p>
      </CardContent>
    </Card>
  )
}

function copy(value, label) {
  navigator.clipboard.writeText(value)
  toast.success(`${label} copied`, { description: value })
}

async function shareEvent() {
  const url = window.location.href
  if (navigator.share) {
    try {
      await navigator.share({ title: upcomingEvent.title, url })
      return
    } catch {
      // User dismissed the share sheet — fall through to copying instead.
    }
  }
  copy(url, "Link")
}

export default function EventDetails() {
  const filled = Math.round(
    (upcomingEvent.seatsFilled / upcomingEvent.seatsTotal) * 100
  )
  const seatsLeft = upcomingEvent.seatsTotal - upcomingEvent.seatsFilled

  return (
    <div className="pb-28 pt-8 md:pb-20 md:pt-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* ---------- Breadcrumb ---------- */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to={routes.home} />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to={routes.events} />}>Events</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{upcomingEvent.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* ---------- Banner Image ---------- */}
        <div className="mb-8 overflow-hidden rounded-xl border bg-card shadow-sm">
          <SmartImage
            src={upcomingEvent.cover}
            alt={upcomingEvent.title}
            ratio={16 / 9}
            className="w-full"
            imgClassName="object-cover"
          />
        </div>

        {/* ---------- Header ---------- */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Registrations open</Badge>
            <Badge variant="outline">{upcomingEvent.category}</Badge>
          </div>

          <h1 className="font-heading text-[clamp(2rem,7vw,3.5rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            {upcomingEvent.title}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            A 2-day robotics workshop designed to bring students together for
            hands-on learning, innovation, creativity and practical exploration
            of next-generation robotics.
          </p>

          {/* Desktop actions — the mobile equivalent is the sticky bar below. */}
          <div className="hidden flex-wrap items-center gap-2 md:flex">
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
            <ButtonGroup>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="outline" size="icon-lg" onClick={shareEvent} aria-label="Share event" />
                  }
                >
                  <ShareNetworkIcon className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Share this event</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon-lg"
                      aria-label="Copy email"
                      onClick={() => copy(contactEmail, "Email")}
                    />
                  }
                >
                  <EnvelopeSimpleIcon className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Copy club email</TooltipContent>
              </Tooltip>
            </ButtonGroup>
          </div>
        </div>

        {/* ---------- Seats ---------- */}
        <Alert className="mt-8">
          <InfoIcon className="size-4" />
          <AlertTitle className="font-heading text-sm">
            {seatsLeft} team {seatsLeft === 1 ? "slot" : "slots"} left
          </AlertTitle>
          <AlertDescription>
            <Progress value={filled} className="mt-2 gap-1.5">
              <ProgressLabel className="text-xs font-normal text-muted-foreground">
                {upcomingEvent.seatsFilled} of {upcomingEvent.seatsTotal} filled
              </ProgressLabel>
              <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                {filled}%
              </span>
            </Progress>
          </AlertDescription>
        </Alert>

        {/* ---------- Facts ---------- */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {facts.map((fact) => (
            <FactCard key={fact.label} {...fact} />
          ))}
        </div>

        {/* ---------- Tabs ---------- */}
        <Tabs defaultValue="about" className="mt-12 gap-6">
          <div className="-mx-4 overflow-x-auto px-4">
            <TabsList className="w-max min-w-full sm:w-full">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">About the event</CardTitle>
                <CardDescription>
                  Organised with the AI/ML Department at GRIET.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-4">
                {upcomingEvent.about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Event timing</CardTitle>
                <CardDescription>Both days run to the same hours.</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="pl-6">Day</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="pr-6">Focus</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingEvent.schedule.map((row) => (
                        <TableRow key={row.day}>
                          <TableCell className="pl-6 font-medium">{row.day}</TableCell>
                          <TableCell className="whitespace-nowrap">{row.date}</TableCell>
                          <TableCell className="whitespace-nowrap">{row.time}</TableCell>
                          <TableCell className="pr-6 text-muted-foreground">
                            {row.focus}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Before you register</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion className="w-full">
                  {upcomingEvent.faqs.map((faq, index) => (
                    <AccordionItem key={faq.q} value={`event-faq-${index}`}>
                      <AccordionTrigger className="text-left text-sm font-medium">
                        <span className="flex items-start gap-3">
                          <QuestionIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">For queries</CardTitle>
                  <CardDescription>Tap to call, or copy the number.</CardDescription>
                </CardHeader>
                <CardContent className="gap-2">
                  {contacts.map((person) => (
                    <Item key={person.name} variant="outline">
                      <ItemMedia>
                        <Avatar>
                          <AvatarFallback className="text-xs">
                            {initialsOf(person.name)}
                          </AvatarFallback>
                        </Avatar>
                      </ItemMedia>
                      <ItemContent className="gap-0.5">
                        <ItemTitle>{person.name}</ItemTitle>
                        <ItemDescription>{person.phone}</ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <ButtonGroup>
                          <Button
                            variant="outline"
                            size="icon-sm"
                            aria-label={`Call ${person.name}`}
                            render={<a href={`tel:${person.tel}`} />}
                          >
                            <PhoneIcon className="size-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon-sm"
                            aria-label={`Copy ${person.name}'s number`}
                            onClick={() => copy(person.phone, "Number")}
                          >
                            <CopyIcon className="size-4" />
                          </Button>
                        </ButtonGroup>
                      </ItemActions>
                    </Item>
                  ))}

                  <Separator className="my-1" />

                  <Item variant="outline">
                    <ItemMedia variant="icon" className="size-9 rounded-md border bg-muted/50">
                      <EnvelopeSimpleIcon className="size-4" />
                    </ItemMedia>
                    <ItemContent className="min-w-0 gap-0.5">
                      <ItemTitle>Email</ItemTitle>
                      <ItemDescription className="truncate">{contactEmail}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Copy email"
                        onClick={() => copy(contactEmail, "Email")}
                      >
                        <CopyIcon className="size-4" />
                      </Button>
                    </ItemActions>
                  </Item>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Location</CardTitle>
                  <CardDescription>Get there ten minutes early.</CardDescription>
                </CardHeader>
                <CardContent className="gap-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {upcomingEvent.venue} — Gokaraju Rangaraju Institute of
                    Engineering and Technology, Bachupally, Hyderabad.
                  </p>
                  <Button
                    variant="outline"
                    className="w-fit"
                    render={
                      <a
                        href="https://maps.google.com/?q=Gokaraju+Rangaraju+Institute+of+Engineering+and+Technology"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <MapPinIcon className="size-4" />
                    Open in Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* ---------- Registration summary ---------- */}
        <Card className="mt-10">
          <CardHeader>
            <ClipboardTextIcon className="size-5 text-muted-foreground" />
            <CardTitle className="mt-2 font-heading text-lg">
              Registration at a glance
            </CardTitle>
          </CardHeader>
          <CardContent className="gap-2">
            <Item variant="muted" size="sm">
              <ItemContent>
                <ItemTitle className="font-normal text-muted-foreground">
                  Team size
                </ItemTitle>
              </ItemContent>
              <ItemActions className="font-medium">{upcomingEvent.teamSize}</ItemActions>
            </Item>
            <Item variant="muted" size="sm">
              <ItemContent>
                <ItemTitle className="font-normal text-muted-foreground">Fee</ItemTitle>
              </ItemContent>
              <ItemActions className="font-medium">{upcomingEvent.fee}</ItemActions>
            </Item>
            <Item variant="muted" size="sm">
              <ItemContent>
                <ItemTitle className="font-normal text-muted-foreground">
                  Certificates
                </ItemTitle>
              </ItemContent>
              <ItemActions className="font-medium">
                {upcomingEvent.certificates}
              </ItemActions>
            </Item>
          </CardContent>
        </Card>
      </div>

      {/* ---------- Sticky mobile CTA ---------- */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 backdrop-blur md:hidden",
          "supports-[backdrop-filter]:bg-background/80"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-muted-foreground">
              {upcomingEvent.shortDate} · {upcomingEvent.fee}
            </p>
            <p className="truncate text-sm font-medium">{seatsLeft} slots left</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            aria-label="Share event"
            onClick={shareEvent}
          >
            <ShareNetworkIcon className="size-4" />
          </Button>
          <Button
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
        </div>
      </div>
    </div>
  )
}
