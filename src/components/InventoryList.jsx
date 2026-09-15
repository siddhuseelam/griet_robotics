import React from 'react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  Lightbulb,
  Wrench,
  Rocket
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
export default function InventoryList() {
  return (
    <section className="py-20 bg-background text-foreground font-sans min-h-screen" id="about">
      <div className="container mx-auto px-4 max-w-6xl">

        <h2 className="font-[Zen Dots] text-[clamp(2rem,5vw,3.5rem)] text-foreground mb-8">
          About Robotics Club
        </h2>

        <div className="max-w-[850px] mb-16 space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Robotics Club at GRIET is a community of students
            passionate about robotics, artificial intelligence,
            electronics, automation and innovation.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Through workshops, projects, competitions and
            collaborative learning, the club provides students
            with opportunities to transform ideas into real-world
            robotic systems.
          </p>
        </div>

        <h3 className="font-[Zen Dots] text-2xl mb-8 text-foreground">
          What to Expect
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon={<BrainCircuit size={32} />}
            title="Robotics + AI"
            text="Explore how artificial intelligence can make robots smarter and more capable."
          />

          <Feature
            icon={<Cpu size={32} />}
            title="Hands-on Learning"
            text="Learn by building, experimenting and working with real robotics concepts."
          />

          <Feature
            icon={<Wrench size={32} />}
            title="Build & Experiment"
            text="Turn your ideas into practical projects through experimentation and teamwork."
          />

          <Feature
            icon={<Lightbulb size={32} />}
            title="Innovation"
            text="Think creatively and develop innovative solutions to real-world problems."
          />

          <Feature
            icon={<Rocket size={32} />}
            title="Future Skills"
            text="Develop technical and problem-solving skills for next-generation technologies."
          />

          <Feature
            icon={<Bot size={32} />}
            title="Robotics Community"
            text="Connect with students who share your interest in robotics and AI."
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="font-[Zen Dots] text-2xl mb-8 text-foreground text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-sans font-medium text-lg">Who can join the Robotics Club?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Any student currently enrolled at GRIET with an interest in robotics, electronics, or programming is welcome to join, regardless of their major or prior experience!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-sans font-medium text-lg">Do I need prior experience to join?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Not at all! We host beginner-friendly workshops and mentorship sessions to get everyone up to speed. Passion and willingness to learn are all you need.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-sans font-medium text-lg">What kind of projects do you build?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We build everything from autonomous line-following bots and drone systems to AI-powered computer vision models and IoT home automation setups.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="text-primary mb-3">
          {icon}
        </div>
        <CardTitle className="font-[Zen Dots] text-lg leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm m-0">
          {text}
        </p>
      </CardContent>
    </Card>
  );
}