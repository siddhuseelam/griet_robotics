import * as React from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react"
import { toast } from "sonner"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Icon } from "@/lib/icons"
import { contactEmail, navigation, routes, socials } from "@/lib/site-data"
import { memberCount } from "@/lib/team"

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-heading text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
        {title}
      </p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  )
}

export function SiteFooter() {
  const [email, setEmail] = React.useState("")

  const subscribe = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      toast.error("Add an email address first.")
      return
    }
    toast.success("You're on the list", {
      description: `We'll send event updates to ${email.trim()}.`,
    })
    setEmail("")
  }

  return (
    <footer className="mt-auto border-t bg-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* ---------- Brand ---------- */}
          <div className="flex flex-col gap-4 lg:pr-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/griet-robotics-logo.jpeg"
                alt=""
                className="size-9 rounded-full bg-foreground object-contain"
              />
              <div>
                <p className="font-heading text-sm font-semibold">Robotics Club</p>
                <p className="text-xs text-muted-foreground">GRIET, Hyderabad</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Imagine · Engineer · Innovate. A student community building robots,
              AI systems and the skills that come with them.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="gap-1.5">
                <Icon name="UsersThreeIcon" className="size-3" />
                {memberCount} members
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <MapPinIcon className="size-3" />
                GRIET Campus
              </Badge>
            </div>

            <div className="flex gap-1">
              {socials.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label={social.name}
                        render={
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      />
                    }
                  >
                    <Icon name={social.icon} className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent>{social.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* ---------- Sitemap ---------- */}
          <FooterColumn title="Explore">
            <FooterLink to={routes.home}>Home</FooterLink>
            <FooterLink to={routes.about}>About the club</FooterLink>
            <FooterLink to={routes.team}>Team</FooterLink>
            <FooterLink to={routes.contact}>Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Events">
            {navigation
              .find((item) => item.title === "Events")
              ?.children.map((child) => (
                <FooterLink key={child.to + child.title} to={child.to}>
                  {child.title}
                </FooterLink>
              ))}
            <a
              href={`mailto:${contactEmail}`}
              className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <EnvelopeSimpleIcon className="size-3.5" />
              {contactEmail}
            </a>
          </FooterColumn>

          {/* ---------- Newsletter ---------- */}
          <FooterColumn title="Stay updated">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Event announcements and workshop invites. No spam.
            </p>
            <form onSubmit={subscribe}>
              <InputGroup>
                <InputGroupAddon>
                  <EnvelopeSimpleIcon />
                </InputGroupAddon>
                <InputGroupInput
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@griet.ac.in"
                  aria-label="Email address"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    type="submit"
                    variant="default"
                    size="icon-xs"
                    aria-label="Subscribe"
                  >
                    <PaperPlaneTiltIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </FooterColumn>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Robotics Club, GRIET. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-muted-foreground"
          >
            Back to top
            <ArrowUpIcon data-icon="inline-end" className="size-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
