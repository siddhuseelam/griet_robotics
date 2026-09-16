import * as React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarDotsIcon,
  ClockCounterClockwiseIcon,
  ImagesIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UsersIcon,
  XIcon,
} from "@phosphor-icons/react"

import { AspectRatio } from "./ui/aspect-ratio"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group"
import { Item, ItemContent, ItemMedia, ItemTitle } from "./ui/item"
import { Progress, ProgressLabel } from "./ui/progress"
import { Separator } from "./ui/separator"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { eventCategories, pastEvents, upcomingEvent } from "@/lib/site-data"
import { ResponsiveModal } from "./responsive-modal"
import { SectionHeading } from "./section-heading"
import { SmartImage } from "./smart-image"

function UpcomingEventCard() {
  const filled = Math.round(
    (upcomingEvent.seatsFilled / upcomingEvent.seatsTotal) * 100
  )

  return (
    <Card className="overflow-hidden p-0 md:flex-row">
      <div className="md:w-2/5 md:shrink-0">
        <SmartImage
          src={upcomingEvent.cover}
          alt={upcomingEvent.title}
          ratio={16 / 9}
          className="h-full md:aspect-auto md:h-full"
        />
      </div>

      <CardContent className="gap-4 px-6 py-6 md:py-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Upcoming</Badge>
          <Badge variant="outline">{upcomingEvent.category}</Badge>
        </div>

        <CardTitle className="font-heading text-[clamp(1.35rem,4vw,2rem)] leading-tight">
          {upcomingEvent.title}
        </CardTitle>

        <CardDescription className="leading-relaxed">
          {upcomingEvent.description}
        </CardDescription>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDotsIcon className="size-3.5" />
            {upcomingEvent.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPinIcon className="size-3.5" />
            {upcomingEvent.venue}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon className="size-3.5" />
            {upcomingEvent.teamSize}
          </span>
        </div>

        <Progress value={filled} className="gap-1.5">
          <ProgressLabel className="text-xs font-normal text-muted-foreground">
            {upcomingEvent.seatsFilled} of {upcomingEvent.seatsTotal} team slots taken
          </ProgressLabel>
          <span className="ml-auto text-xs tabular-nums text-muted-foreground">
            {filled}%
          </span>
        </Progress>

        <div className="mt-1 flex flex-col gap-2 sm:flex-row">
          <Button render={<Link to={upcomingEvent.to} />}>
            View event details
            <ArrowRightIcon data-icon="inline-end" className="size-4" />
          </Button>
          <Button
            variant="outline"
            render={
              <a
                href={upcomingEvent.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Register
            <ArrowUpRightIcon data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function PastEventCard({ event, onOpenGallery }) {
  return (
    <Card className="overflow-hidden p-0 md:flex-row">
      <div className="md:w-1/3 md:shrink-0">
        <SmartImage
          src={event.images[0]}
          alt={event.title}
          ratio={16 / 9}
          className="h-full md:aspect-auto"
        />
      </div>

      <CardContent className="gap-3 px-6 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Completed</Badge>
          <Badge variant="outline">{event.category}</Badge>
        </div>

        <CardTitle className="font-heading text-lg leading-snug md:text-xl">
          {event.title}
        </CardTitle>

        <CardDescription className="line-clamp-3 leading-relaxed">
          {event.description}
        </CardDescription>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDotsIcon className="size-3.5" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon className="size-3.5" />
            {event.attendees} attendees
          </span>
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="mt-1 w-fit"
          onClick={() => onOpenGallery(event)}
        >
          <ImagesIcon className="size-4" />
          View {event.images.length} highlights
        </Button>
      </CardContent>
    </Card>
  )
}

function HighlightsModal({ event, onOpenChange }) {
  return (
    <ResponsiveModal
      open={Boolean(event)}
      onOpenChange={onOpenChange}
      title={event?.title ?? ""}
      description={event ? `${event.date} · ${event.venue}` : ""}
    >
      {event && (
        <div className="flex flex-col gap-5 px-4 pb-6 sm:px-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {event.description}
          </p>

          <div className="rounded-lg border bg-muted/30 p-3 sm:p-5">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {event.images.map((image, index) => (
                  <CarouselItem key={image}>
                    <AspectRatio
                      ratio={4 / 3}
                      className="overflow-hidden rounded-md bg-background"
                    >
                      <img
                        src={image}
                        alt={`${event.title} highlight ${index + 1}`}
                        className="size-full object-contain"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-2" />
              <CarouselNext className="right-1 sm:right-2" />
            </Carousel>
          </div>

          <Separator />

          <div className="flex flex-col gap-1">
            {event.highlights.map((highlight) => (
              <Item key={highlight} size="sm" className="gap-2.5 px-0">
                <ItemMedia variant="icon" className="text-primary">
                  <ArrowRightIcon className="size-3.5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-sm font-normal text-muted-foreground">
                    {highlight}
                  </ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </div>
      )}
    </ResponsiveModal>
  )
}

export default function EventGallery() {
  const [category, setCategory] = React.useState("All")
  const [query, setQuery] = React.useState("")
  const [galleryEvent, setGalleryEvent] = React.useState(null)

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }, [])

  const visible = React.useMemo(() => {
    const needle = query.trim().toLowerCase()
    return pastEvents.filter((event) => {
      const matchesCategory = category === "All" || event.category === category
      const matchesQuery =
        !needle ||
        event.title.toLowerCase().includes(needle) ||
        event.description.toLowerCase().includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const hasFilters = category !== "All" || query.trim().length > 0

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Robotics Club · GRIET"
          title="Events"
          description="Our upcoming activities and the events that have shaped the club so far."
        />

        {/* ---------- Upcoming ---------- */}
        <section className="mt-12">
          <div className="mb-5 flex items-center gap-2.5">
            <CalendarDotsIcon className="size-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-semibold">Upcoming</h2>
            <Badge variant="secondary" className="ml-1">
              1
            </Badge>
          </div>

          <UpcomingEventCard />
        </section>

        <Separator className="my-12" />

        {/* ---------- Past ---------- */}
        <section>
          <div className="mb-5 flex items-center gap-2.5">
            <ClockCounterClockwiseIcon className="size-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-semibold">Past events</h2>
            <Badge variant="secondary" className="ml-1">
              {pastEvents.length}
            </Badge>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:pb-0">
              <ToggleGroup
                variant="outline"
                value={[category]}
                onValueChange={(next) => setCategory(next[0] ?? "All")}
                className="w-max"
              >
                {eventCategories.map((item) => (
                  <ToggleGroupItem key={item} value={item} size="sm">
                    {item}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            <InputGroup className="sm:ml-auto sm:max-w-xs">
              <InputGroupAddon>
                <MagnifyingGlassIcon />
              </InputGroupAddon>
              <InputGroupInput
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search past events"
                aria-label="Search past events"
              />
              {query && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    aria-label="Clear search"
                    onClick={() => setQuery("")}
                  >
                    <XIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>
          </div>

          {visible.length === 0 ? (
            <Empty className="border">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <ClockCounterClockwiseIcon />
                </EmptyMedia>
                <EmptyTitle>Nothing here yet</EmptyTitle>
                <EmptyDescription>
                  {category === "All"
                    ? `No past events match “${query}”.`
                    : `We haven't run a ${category.toLowerCase()} yet. Check back after the next one.`}
                </EmptyDescription>
              </EmptyHeader>
              {hasFilters && (
                <EmptyContent>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCategory("All")
                      setQuery("")
                    }}
                  >
                    Reset filters
                  </Button>
                </EmptyContent>
              )}
            </Empty>
          ) : (
            <div className="flex flex-col gap-5">
              {visible.map((event) => (
                <PastEventCard
                  key={event.slug}
                  event={event}
                  onOpenGallery={setGalleryEvent}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <HighlightsModal
        event={galleryEvent}
        onOpenChange={(open) => !open && setGalleryEvent(null)}
      />
    </div>
  )
}
