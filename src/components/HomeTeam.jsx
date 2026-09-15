import React, { useRef } from 'react';
import teamData from '../assets/teamData.json';
import TeamMemberCard from './TeamMemberCard';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default function HomeTeam() {
  // Filter leads based on domain keywords
  const leads = teamData.filter(member => {
    if (!member.Domain) return false;
    const domain = member.Domain.toLowerCase();
    return domain.includes('lead') || 
           domain.includes('head') || 
           domain.includes('president') || 
           domain.includes('secretary');
  });

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-20 bg-background text-foreground border-t border-border/50">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Section Heading with Nav Buttons */}
          <div className="mb-10 flex justify-between items-end flex-wrap gap-4">
            <div>
              <p className="mb-2 text-primary text-xs tracking-[2px] uppercase font-[Zen Dots]">
                OUR TEAM
              </p>

              <h2 className="text-[clamp(2rem,5vw,3.2rem)] m-0 text-foreground font-[Zen Dots]">
                Club Leads
              </h2>

              <p className="mt-3 text-muted-foreground text-sm font-[Zen Dots]">
                Meet the students leading the Robotics Club of GRIET.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 relative mr-12 mt-4 md:mt-0">
              <CarouselPrevious className="static transform-none bg-secondary/50 border-border hover:bg-primary hover:text-primary-foreground h-12 w-12" />
              <CarouselNext className="static transform-none bg-secondary/50 border-border hover:bg-primary hover:text-primary-foreground h-12 w-12" />
            </div>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="w-full">
            <CarouselContent className="-ml-4 py-4">
              {leads.map((lead, index) => (
                <CarouselItem key={index} className="pl-4 basis-auto">
                  <TeamMemberCard member={lead} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
