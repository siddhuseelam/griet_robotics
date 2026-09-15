import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  Briefcase,
  Video
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export default function TeamSection() {
  return (
    <TooltipProvider>
      <section className="py-20 bg-background text-foreground min-h-[70vh] flex items-center" id="contact">
        <div className="container mx-auto px-4 max-w-5xl">

          <p className="font-[Zen Dots] text-muted-foreground text-xs tracking-[2px] mb-4">
            ROBOTICS CLUB, GRIET
          </p>

          <h1 className="font-[Zen Dots] text-[clamp(2.5rem,6vw,4.5rem)] mb-6 leading-tight text-foreground">
            Contact Us
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-[650px] mb-12">
            Have a question, collaboration idea, or want to know more
            about the Robotics Club? Get in touch with us.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="font-[Zen Dots] text-2xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="grid gap-6 flex-1">
                  <ContactItem
                    icon={<Phone size={22} />}
                    title="Pranav"
                    value="+91 79899 07555"
                    href="tel:+917989907555"
                  />
                  <ContactItem
                    icon={<Phone size={22} />}
                    title="Chanakya"
                    value="+91 7780129208"
                    href="tel:+917780129208"
                  />
                  <ContactItem
                    icon={<MapPin size={22} />}
                    title="Location"
                    value="GRIET Campus, Hyderabad"
                  />
                </div>

                <Separator className="my-6" />
                
                <ContactItem
                  icon={<Mail size={22} />}
                  title="Email"
                  value="grietrobotics@gmail.com"
                  href="mailto:grietrobotics@gmail.com"
                />
              </CardContent>
            </Card>

            {/* Connect Online */}
            <Card className="shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="font-[Zen Dots] text-2xl text-foreground">Connect Online</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full items-center justify-center space-y-8">
                
                <p className="text-muted-foreground text-center mb-4">
                  Follow us on our social platforms to stay updated with our latest events and innovations!
                </p>

                <div className="flex gap-6 items-center justify-center">
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Camera size={28} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Briefcase size={28} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Video size={28} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Subscribe to our YouTube</p>
                    </TooltipContent>
                  </Tooltip>

                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}

/* =========================
   CONTACT ITEM
========================= */
function ContactItem({ icon, title, value, href }) {
  const content = (
    <>
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
          {icon}
        </div>
      )}

      <div>
        <h3 className="m-0 mb-1 text-sm text-foreground font-[Zen Dots]">
          {title}
        </h3>
        <p className="m-0 text-muted-foreground text-sm">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-5 rounded-xl border-transparent hover:opacity-80 transition-all duration-300 no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-5 rounded-xl border-transparent">
      {content}
    </div>
  );
}