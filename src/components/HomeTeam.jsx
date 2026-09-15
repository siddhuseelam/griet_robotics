import * as React from "react"
import { Link } from "react-router-dom"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRightIcon } from "@phosphor-icons/react"

import { Button } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { routes } from "@/lib/site-data"
import { leads } from "@/lib/team"
import { SectionHeading } from "./section-heading"
import TeamMemberCard from "./TeamMemberCard"

export default function HomeTeam() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  if (leads.length === 0) return null

  return (
    <section className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our team"
              title="Club leads"
              description="The students running the Robotics Club of GRIET."
            />

            {/* Arrows sit inline on desktop; on a phone people just swipe. */}
            <div className="hidden gap-2 sm:flex">
              <CarouselPrevious className="static size-9 translate-y-0" />
              <CarouselNext className="static size-9 translate-y-0" />
            </div>
          </div>

          <CarouselContent className="-ml-4 py-1">
            {leads.map((lead) => (
              <CarouselItem
                key={lead.id}
                className="basis-[62%] pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <TeamMemberCard member={lead} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" render={<Link to={routes.team} />}>
              See all members
              <ArrowRightIcon data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
