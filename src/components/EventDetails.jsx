import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  Award,
  ClipboardList,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { toast } from "sonner";

export default function EventDetails() {
  return (
    <section className="min-h-screen py-20 bg-background text-foreground font-sans">
      <div className="container max-w-4xl mx-auto px-4">

        {/* BREADCRUMBS */}
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="font-[Zen Dots] text-xs">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/events" className="font-[Zen Dots] text-xs">Events</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-[Zen Dots] text-xs text-primary">Next-Gen Robotics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        {/* EVENT HEADER */}
        <div className="mb-12">
          <Badge className="mb-6 font-[Zen Dots] text-[0.65rem] tracking-wider">
            UPCOMING EVENT
          </Badge>

          <h1 className="font-[Zen Dots] text-[clamp(2.3rem,6vw,5rem)] leading-tight mb-6 text-foreground">
            Next-Gen Robotics
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-[850px] m-0">
            A 2-day robotics workshop designed to bring students
            together for hands-on learning, innovation, creativity
            and practical exploration of next-generation robotics.
          </p>
        </div>


        {/* =========================
            EVENT INFORMATION
        ========================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <InfoCard
            icon={<CalendarDays size={22} />}
            title="DATE"
            value="18th – 19th September 2026"
          />
          <InfoCard
            icon={<Clock size={22} />}
            title="TIME"
            value="9:00 AM – 3:30 PM"
          />
          <InfoCard
            icon={<MapPin size={22} />}
            title="VENUE"
            value="Hall 1, GRIET Campus"
          />
          <InfoCard
            icon={<Users size={22} />}
            title="TEAM SIZE"
            value="4 – 6 Members"
          />
          <InfoCard
            icon={<IndianRupee size={22} />}
            title="REGISTRATION FEE"
            value="₹1200 per team"
          />
          <InfoCard
            icon={<Award size={22} />}
            title="CERTIFICATES"
            value="For all participants"
          />
        </div>


        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="font-[Zen Dots] text-2xl text-foreground">
                  About the Event
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Next-Gen Robotics is a 2-day workshop organized by the
                  Robotics Club, GRIET in association with the AI/ML
                  Department.
                </p>
                <p>
                  The workshop focuses on robotics, technology,
                  hands-on learning and innovation. Participants will
                  get an opportunity to learn, experiment and work
                  together while exploring the possibilities of
                  next-generation robotics.
                </p>
                <p>
                  Gather your squad, bring your ideas and get ready to
                  experience an exciting journey into robotics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <Clock size={24} className="text-primary" />
                <CardTitle className="font-[Zen Dots] text-2xl m-0">Event Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md overflow-hidden">
                  <Table>
                    <TableHeader className="bg-secondary/20">
                      <TableRow>
                        <TableHead className="font-[Zen Dots] text-xs">DAY</TableHead>
                        <TableHead className="font-[Zen Dots] text-xs">DATE</TableHead>
                        <TableHead className="font-[Zen Dots] text-xs">TIME</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-primary">DAY 01</TableCell>
                        <TableCell>18th September 2026</TableCell>
                        <TableCell>9:00 AM – 3:30 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-primary">DAY 02</TableCell>
                        <TableCell>19th September 2026</TableCell>
                        <TableCell>9:00 AM – 3:30 PM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registration">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <ClipboardList size={24} className="text-primary" />
                <CardTitle className="font-[Zen Dots] text-2xl m-0">Registration Details</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-muted-foreground leading-relaxed">
                <p className="m-0"><strong className="text-foreground">Team Size:</strong> 4 – 6 members</p>
                <p className="m-0"><strong className="text-foreground">Registration Fee:</strong> ₹1200 per team</p>
                <p className="m-0"><strong className="text-foreground">Certificates:</strong> Certificates will be provided to all participants.</p>
                
                <Button asChild size="lg" className="mt-8 w-fit font-[Zen Dots]">
                  <a href="https://forms.gle/oZ1LaBSqneapcQAf6" target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <MapPin size={24} className="text-primary" />
                  <CardTitle className="font-[Zen Dots] text-2xl m-0">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed m-0">
                    Hall 1, Gokaraju Rangaraju Institute of Engineering
                    and Technology (GRIET) Campus.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-[Zen Dots] text-2xl m-0">For Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <ContactPerson name="Pranav" phone="+91 79899 07555" />
                    <ContactPerson name="Chanakya" phone="+91 77801 29208" />
                  </div>
                  <div className="mt-6 pt-6 border-t flex items-center gap-3 cursor-pointer group" onClick={() => {
                    navigator.clipboard.writeText("grietrobotics@gmail.com");
                    toast("Email copied to clipboard!", { description: "grietrobotics@gmail.com" });
                  }}>
                    <Mail size={19} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground font-[Zen Dots] text-xs transition-colors">
                      grietrobotics@gmail.com
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}

/* =========================
   INFO CARD
========================= */
function InfoCard({ icon, title, value }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="text-primary mb-1">
          {icon}
        </div>
        <CardTitle className="font-[Zen Dots] text-[0.62rem] text-muted-foreground tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-[Zen Dots] text-sm leading-relaxed m-0 text-foreground">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

/* =========================
   SCHEDULE ITEM
========================= */
function ScheduleItem({ day, date, time }) {
  return (
    <div className="flex justify-between items-center gap-4 flex-wrap p-5 rounded-xl bg-secondary/20 border">
      <div>
        <Badge variant="outline" className="mb-2 text-primary border-primary/20 font-[Zen Dots] text-[0.65rem] bg-primary/5">
          {day}
        </Badge>
        <p className="m-0 text-foreground font-[Zen Dots] text-sm">
          {date}
        </p>
      </div>
      <p className="m-0 text-muted-foreground font-[Zen Dots] text-sm">
        {time}
      </p>
    </div>
  );
}

/* =========================
   CONTACT PERSON
========================= */
function ContactPerson({ name, phone }) {
  return (
    <div 
      className="flex items-center justify-between p-3 rounded-md border bg-muted/30 cursor-pointer hover:bg-muted/60 transition-colors"
      onClick={() => {
        navigator.clipboard.writeText(phone);
        toast(`Phone number for ${name} copied!`, { description: phone });
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
          <Phone size={18} />
        </div>
        <div>
          <p className="font-[Zen Dots] text-foreground text-sm m-0 leading-none mb-1">{name}</p>
          <p className="text-xs text-muted-foreground m-0">{phone}</p>
        </div>
      </div>
    </div>
  );
}