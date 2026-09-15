import * as React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarDotsIcon,
  QuestionIcon,
} from "@phosphor-icons/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./ui/alert"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import { Separator } from "./ui/separator"
import { Icon } from "@/lib/icons"
import {
  clubFaqs,
  clubPillars,
  clubTimeline,
  routes,
  upcomingEvent,
} from "@/lib/site-data"
import { domainStats, memberCount } from "@/lib/team"
import { SectionHeading } from "./section-heading"

const stats = [
  { icon: "UsersThreeIcon", value: memberCount, label: "Active members" },
  { icon: "CalendarDotsIcon", value: domainStats.length, label: "Domains" },
  { icon: "TrophyIcon", value: 120, label: "Workshop attendees" },
  { icon: "StudentIcon", value: "All", label: "Branches welcome" },
]

export default function About() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* ---------- Intro ---------- */}
        <SectionHeading
          eyebrow="About us"
          title="The Robotics Club at GRIET"
          description="A community of students passionate about robotics, artificial intelligence, electronics, automation and innovation. Through workshops, projects and competitions we turn ideas into real robotic systems."
        />

        {/* ---------- Stats ---------- */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} size="sm" className="gap-2">
              <CardContent className="gap-1">
                <Icon name={stat.icon} className="size-5 text-muted-foreground" />
                <p className="font-heading text-2xl leading-none font-semibold">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ---------- Pillars ---------- */}
        <section className="mt-16 md:mt-24">
          <SectionHeading
            eyebrow="What to expect"
            title="Six things you'll take away"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clubPillars.map((pillar) => (
              <Card key={pillar.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 text-foreground">
                    <Icon name={pillar.icon} className="size-5" />
                  </span>
                  <CardTitle className="mt-3 font-heading text-base">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ---------- Timeline ---------- */}
        <section className="mt-16 md:mt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <SectionHeading
              eyebrow="Our story"
              title="Where we are so far"
              description="A young club moving quickly — here's how it has gone."
            />

            <ol className="relative flex flex-col gap-6 border-l pl-6">
              {clubTimeline.map((entry) => (
                <li key={entry.title} className="relative">
                  <span className="absolute top-1.5 -left-[1.6875rem] size-3 rounded-full border-2 border-background bg-primary" />
                  <Badge variant="secondary" className="mb-2">
                    {entry.year}
                  </Badge>
                  <p className="font-heading text-base font-medium">{entry.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {entry.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Domains ---------- */}
        <section className="mt-16 md:mt-24">
          <SectionHeading
            eyebrow="Teams"
            title="Find your domain"
            description="Every member belongs to a domain. Each one owns a different part of how the club runs."
          />

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {domainStats.map((domain) => (
              <Item
                key={domain.id}
                variant="outline"
                render={<Link to={`${routes.team}?domain=${domain.id}`} />}
              >
                <ItemMedia variant="icon" className="size-9 rounded-md border bg-muted/50">
                  <Icon name={domain.icon} className="size-4" />
                </ItemMedia>
                <ItemContent className="gap-0.5">
                  <ItemTitle>{domain.label}</ItemTitle>
                  <ItemDescription>
                    {domain.count} {domain.count === 1 ? "member" : "members"}
                  </ItemDescription>
                </ItemContent>
                <ArrowRightIcon className="size-4 text-muted-foreground" />
              </Item>
            ))}
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="mt-16 md:mt-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions we get a lot"
              align="center"
            />

            <Accordion className="mt-8 w-full">
              {clubFaqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
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
          </div>
        </section>

        <Separator className="my-16" />

        {/* ---------- Join CTA ---------- */}
        <Alert className="items-center">
          <CalendarDotsIcon className="size-4" />
          <AlertTitle className="font-heading">Ready to join in?</AlertTitle>
          <AlertDescription>
            {upcomingEvent.title} runs on {upcomingEvent.date}. Registrations are open now.
          </AlertDescription>
          <AlertAction>
            <Button
              size="sm"
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
          </AlertAction>
        </Alert>
      </div>
    </div>
  )
}
