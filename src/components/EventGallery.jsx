import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight, History, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from './ui/dialog';
import { Skeleton } from './ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from './ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default function EventGallery() {
  return (
    <section className="min-h-screen py-20 bg-background text-foreground font-sans">
      <div className="container mx-auto px-4">

        {/* =========================
            PAGE HEADER
        ========================== */}
        <div className="mb-16 max-w-[800px]">
          <p className="font-[Zen Dots] text-muted-foreground text-sm tracking-widest mb-4">
            ROBOTICS CLUB · GRIET
          </p>

          <h1 className="font-[Zen Dots] text-[clamp(2.5rem,6vw,5rem)] mb-4 leading-tight text-foreground font-bold">
            EVENTS
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-[700px]">
            Discover our upcoming activities and explore the
            events that have shaped the Robotics Club of GRIET.
          </p>
        </div>


        {/* =========================
            UPCOMING EVENTS
        ========================== */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <CalendarDays size={28} className="text-muted-foreground" />
            <h2 className="font-[Zen Dots] m-0 text-2xl text-foreground font-semibold">
              Upcoming Event
            </h2>
          </div>

          {/* Upcoming Event Card */}
          <Card className="shadow-lg max-w-4xl mx-auto overflow-hidden">
            <div className="p-8 md:p-10 flex flex-col justify-center text-center items-center">
              <Badge variant="default" className="w-fit mb-4 font-[Zen Dots] text-[0.65rem] tracking-wider">
                UPCOMING
              </Badge>
              <CardTitle className="font-[Zen Dots] text-[clamp(1.7rem,4vw,3rem)] leading-tight text-foreground mb-4">
                Next-Gen Robotics
              </CardTitle>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-2xl">
                Join us for an exciting robotics workshop focused on
                learning, innovation, technology and hands-on exploration.
                Discover what the next generation of robotics has to offer.
              </p>
              <Button asChild size="lg" className="w-fit">
                <Link to="/events/next-gen-robotics" className="flex items-center gap-2">
                  View Event Details
                  <ArrowRight size={17} />
                </Link>
              </Button>
            </div>
          </Card>
        </div>


        {/* =========================
            PAST EVENTS
        ========================== */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <History size={28} className="text-muted-foreground" />
              <h2 className="font-[Zen Dots] m-0 text-2xl text-foreground font-semibold">
                Past Events
              </h2>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 bg-muted/50 w-full sm:w-fit flex flex-wrap h-auto p-1">
              <TabsTrigger value="all" className="font-[Zen Dots] text-xs">All Events</TabsTrigger>
              <TabsTrigger value="workshops" className="font-[Zen Dots] text-xs">Workshops</TabsTrigger>
              <TabsTrigger value="hackathons" className="font-[Zen Dots] text-xs">Hackathons</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6 focus-visible:outline-none">
               <PastEventCard 
                  title="Transforming IoT Ideas to Robotics Reality"
                  description="Our first-ever Robotics Club event was a blend of ideas, technology and teamwork — our very first step into the future. A two-day experience of innovation, hands-on learning and creativity with brilliant minds."
                  images={[
                    "/images/gallery1.jpg",
                    "/images/gallery2.jpg",
                    "/images/gallery3.jpg"
                  ]}
                  category="Workshop"
                />
            </TabsContent>
            
            <TabsContent value="workshops" className="space-y-6 focus-visible:outline-none">
               <PastEventCard 
                  title="Transforming IoT Ideas to Robotics Reality"
                  description="Our first-ever Robotics Club event was a blend of ideas, technology and teamwork — our very first step into the future. A two-day experience of innovation, hands-on learning and creativity with brilliant minds."
                  images={[
                    "/images/gallery1.jpg",
                    "/images/gallery2.jpg",
                    "/images/gallery3.jpg"
                  ]}
                  category="Workshop"
                />
            </TabsContent>
            
            <TabsContent value="hackathons" className="space-y-6 focus-visible:outline-none">
              <div className="text-center py-12 border rounded-xl border-dashed">
                <p className="text-muted-foreground font-[Zen Dots]">No hackathons found yet. Stay tuned!</p>
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  );
}

function PastEventCard({ title, description, images }) {
  const featuredImage = images[0];
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-5xl mx-auto">
      {/* Featured Image */}
      <div className="relative w-full md:w-1/3 min-h-[200px] shrink-0">
        {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
        <img
          src={featuredImage}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex-1">
          <Badge variant="secondary" className="w-fit font-[Zen Dots] text-[0.6rem] tracking-wider text-muted-foreground mb-3">
            COMPLETED EVENT
          </Badge>
          <CardTitle className="font-[Zen Dots] text-xl md:text-2xl leading-tight mb-4">
            {title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none mb-6">
            {description}
          </CardDescription>
        </div>

        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="flex items-center gap-2 w-fit">
                View Highlights <ArrowRight size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] md:max-w-[800px] p-0 overflow-hidden gap-0">
              <DialogHeader className="p-6 pb-2">
                <Badge variant="secondary" className="w-fit font-[Zen Dots] text-[0.6rem] tracking-wider text-muted-foreground mb-2">
                  EVENT HIGHLIGHTS
                </Badge>
                <DialogTitle className="font-[Zen Dots] text-2xl text-foreground mb-2">
                  {title}
                </DialogTitle>
                <ScrollArea className="max-h-[150px] overflow-auto">
                  <DialogDescription className="text-muted-foreground text-sm md:text-base leading-relaxed pr-4">
                    {description}
                  </DialogDescription>
                </ScrollArea>
              </DialogHeader>

              <div className="bg-muted/50 w-full p-4 md:p-8 mt-4 flex items-center justify-center">
                <Carousel className="w-full max-w-2xl">
                  <CarouselContent>
                    {images.map((img, index) => (
                      <CarouselItem key={index} className="flex items-center justify-center">
                         <img 
                            src={img} 
                            alt={`Highlight ${index + 1}`} 
                            className="max-h-[50vh] w-auto object-contain rounded-md"
                          />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
}