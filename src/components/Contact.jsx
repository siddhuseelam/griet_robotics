import * as React from "react"
import {
  CheckIcon,
  CopyIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  PhoneIcon,
} from "@phosphor-icons/react"
import { toast } from "sonner"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field"
import { Input } from "./ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"
import { Spinner } from "./ui/spinner"
import { Textarea } from "./ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Icon } from "@/lib/icons"
import { contactEmail, contacts, socials } from "@/lib/site-data"
import { SectionHeading } from "./section-heading"

const topics = [
  { value: "join", label: "Joining the club" },
  { value: "event", label: "An upcoming event" },
  { value: "collab", label: "Collaboration / sponsorship" },
  { value: "other", label: "Something else" },
]

/** Copy-to-clipboard control that confirms inline before the toast lands. */
function CopyButton({ value, label }) {
  const [copied, setCopied] = React.useState(false)

  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    toast.success(`${label} copied`, { description: value })
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={copy}
            aria-label={`Copy ${label.toLowerCase()}`}
          />
        }
      >
        {copied ? (
          <CheckIcon className="size-4 text-primary" />
        ) : (
          <CopyIcon className="size-4" />
        )}
      </TooltipTrigger>
      <TooltipContent>Copy {label.toLowerCase()}</TooltipContent>
    </Tooltip>
  )
}

function ContactForm() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    topic: "",
    message: "",
    consent: false,
  })
  const [errors, setErrors] = React.useState({})
  const [sending, setSending] = React.useState(false)

  const set = (key) => (value) =>
    setValues((current) => ({ ...current, [key]: value }))

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = "Tell us who you are."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address."
    if (!values.topic) next.topic = "Pick what this is about."
    if (values.message.trim().length < 10)
      next.message = "A little more detail helps — at least 10 characters."
    if (!values.consent) next.consent = "We need your okay to reply."
    return next
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Check the highlighted fields.")
      return
    }

    // No backend yet — hand the message to the user's mail client.
    setSending(true)
    setTimeout(() => {
      const topic = topics.find((item) => item.value === values.topic)?.label
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        `[${topic}] ${values.name}`
      )}&body=${encodeURIComponent(values.message)}`
      setSending(false)
      toast.success("Opening your mail app", {
        description: `Addressed to ${contactEmail}.`,
      })
    }, 500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-lg">Send us a message</CardTitle>
        <CardDescription>
          We usually reply within a couple of days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} noValidate>
          <FieldGroup>
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor="contact-name">Name</FieldLabel>
              <Input
                id="contact-name"
                value={values.name}
                onChange={(event) => set("name")(event.target.value)}
                aria-invalid={Boolean(errors.name)}
                placeholder="Your full name"
              />
              <FieldError>{errors.name}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor="contact-email">Email</FieldLabel>
              <Input
                id="contact-email"
                type="email"
                value={values.email}
                onChange={(event) => set("email")(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                placeholder="you@griet.ac.in"
              />
              <FieldDescription>We only use this to reply.</FieldDescription>
              <FieldError>{errors.email}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.topic)}>
              <FieldLabel htmlFor="contact-topic">What's this about?</FieldLabel>
              <Select items={topics} value={values.topic} onValueChange={set("topic")}>
                <SelectTrigger id="contact-topic" aria-invalid={Boolean(errors.topic)}>
                  <SelectValue placeholder="Pick a topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic.value} value={topic.value}>
                      {topic.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError>{errors.topic}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.message)}>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                id="contact-message"
                rows={5}
                value={values.message}
                onChange={(event) => set("message")(event.target.value)}
                aria-invalid={Boolean(errors.message)}
                placeholder="Tell us what you have in mind…"
                className="resize-y"
              />
              <FieldError>{errors.message}</FieldError>
            </Field>

            <Field orientation="horizontal" data-invalid={Boolean(errors.consent)}>
              <Checkbox
                id="contact-consent"
                checked={values.consent}
                onCheckedChange={set("consent")}
                aria-invalid={Boolean(errors.consent)}
              />
              <FieldLabel htmlFor="contact-consent" className="font-normal">
                It's fine to email me back about this.
              </FieldLabel>
            </Field>
            <FieldError>{errors.consent}</FieldError>

            <Button type="submit" size="lg" disabled={sending} className="w-full">
              {sending ? <Spinner /> : <PaperPlaneTiltIcon className="size-4" />}
              {sending ? "Opening mail app…" : "Send message"}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

export default function Contact() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Robotics Club, GRIET"
          title="Contact us"
          description="Have a question, a collaboration idea, or want to know more about the club? Get in touch."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* ---------- Details ---------- */}
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Reach a person</CardTitle>
                <CardDescription>
                  Tap a number to call, or copy it for later.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-2">
                {contacts.map((person) => (
                  <Item key={person.name} variant="outline" className="flex-nowrap">
                    <ItemMedia variant="icon" className="size-9 rounded-md border bg-muted/50">
                      <PhoneIcon className="size-4" />
                    </ItemMedia>
                    <ItemContent className="min-w-0 gap-0.5">
                      <ItemTitle className="block w-full truncate">
                        {person.name}
                      </ItemTitle>
                      <ItemDescription className="truncate">
                        {person.phone} · {person.role}
                      </ItemDescription>
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
                        <CopyButton value={person.phone} label="Number" />
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
                    <CopyButton value={contactEmail} label="Email" />
                  </ItemActions>
                </Item>

                <Item variant="outline">
                  <ItemMedia variant="icon" className="size-9 rounded-md border bg-muted/50">
                    <MapPinIcon className="size-4" />
                  </ItemMedia>
                  <ItemContent className="gap-0.5">
                    <ItemTitle>Campus</ItemTitle>
                    <ItemDescription>
                      GRIET, Bachupally, Hyderabad
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Connect online</CardTitle>
                <CardDescription>
                  Event announcements and build updates land here first.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-row flex-wrap gap-2">
                {socials.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    render={
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Icon name={social.icon} className="size-4" />
                    {social.name}
                  </Button>
                ))}
                <Badge variant="secondary" className="self-center">
                  Updated weekly
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* ---------- Form ---------- */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
