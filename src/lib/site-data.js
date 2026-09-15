/**
 * Single source of truth for navigation, events and FAQs.
 * Components read from here so the header, footer, command palette and
 * page bodies can never drift out of sync.
 */

export const routes = {
  home: "/",
  events: "/events",
  about: "/about",
  team: "/team",
  contact: "/contact",
  nextGenRobotics: "/events/next-gen-robotics",
}

/** Primary nav. Items with `children` render as a dropdown on desktop. */
export const navigation = [
  {
    title: "Home",
    to: routes.home,
    icon: "HouseIcon",
    description: "Back to the start.",
  },
  {
    title: "Events",
    to: routes.events,
    icon: "CalendarDotsIcon",
    description: "Workshops and hackathons.",
    children: [
      {
        title: "Next-Gen Robotics",
        to: routes.nextGenRobotics,
        icon: "TicketIcon",
        description: "Registrations open.",
        badge: "Open",
      },
      {
        title: "All events",
        to: routes.events,
        icon: "CalendarBlankIcon",
        description: "Upcoming and past.",
      },
    ],
  },
  {
    title: "Club",
    to: routes.about,
    icon: "RobotIcon",
    description: "Who we are, what we build.",
    children: [
      {
        title: "About",
        to: routes.about,
        icon: "InfoIcon",
        description: "Mission, domains, FAQs.",
      },
      {
        title: "Team",
        to: routes.team,
        icon: "UsersThreeIcon",
        description: "Meet the students.",
      },
      {
        title: "Contact",
        to: routes.contact,
        icon: "EnvelopeSimpleIcon",
        description: "Reach out or just say hi.",
      },
    ],
  },
]

/** Flattened list — used by the ⌘K command palette and the footer sitemap. */
export const allNavLinks = navigation.flatMap((item) =>
  item.children ? item.children : [item]
)

export const socials = [
  { name: "Instagram", href: "https://instagram.com", icon: "InstagramLogoIcon" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "LinkedinLogoIcon" },
  { name: "YouTube", href: "https://youtube.com", icon: "YoutubeLogoIcon" },
]

export const contactEmail = "grietrobotics@gmail.com"

export const contacts = [
  { name: "Pranav", role: "Event Coordinator", phone: "+91 79899 07555", tel: "+917989907555" },
  { name: "Chanakya", role: "Technical Lead", phone: "+91 77801 29208", tel: "+917780129208" },
]

/* =========================================================
   EVENTS
   ========================================================= */

export const upcomingEvent = {
  slug: "next-gen-robotics",
  to: routes.nextGenRobotics,
  title: "Next-Gen Robotics",
  status: "upcoming",
  category: "Workshop",
  tagline: "2-day hands-on robotics workshop",
  date: "18 – 19 September 2026",
  shortDate: "18 Sep 2026",
  time: "9:00 AM – 3:30 PM",
  venue: "Hall 1, GRIET Campus",
  teamSize: "4 – 6 members",
  fee: "₹1200 per team",
  certificates: "For all participants",
  registerUrl: "https://forms.gle/oZ1LaBSqneapcQAf6",
  seatsTotal: 40,
  seatsFilled: 27,
  cover: "/images/gallery1.jpg",
  description:
    "Join us for an exciting robotics workshop focused on learning, innovation, technology and hands-on exploration. Discover what the next generation of robotics has to offer.",
  about: [
    "Next-Gen Robotics is a 2-day workshop organized by the Robotics Club, GRIET in association with the AI/ML Department.",
    "The workshop focuses on robotics, technology, hands-on learning and innovation. Participants will get an opportunity to learn, experiment and work together while exploring the possibilities of next-generation robotics.",
    "Gather your squad, bring your ideas and get ready to experience an exciting journey into robotics.",
  ],
  schedule: [
    { day: "DAY 01", date: "18 September 2026", time: "9:00 AM – 3:30 PM", focus: "Fundamentals & build" },
    { day: "DAY 02", date: "19 September 2026", time: "9:00 AM – 3:30 PM", focus: "Automation & showcase" },
  ],
  faqs: [
    {
      q: "Do we need to bring our own hardware?",
      a: "No. All the kits, boards and tools you need for the two days are provided by the club. Bring a laptop if you have one.",
    },
    {
      q: "Can we register as a team of 3?",
      a: "Teams must have between 4 and 6 members. If you are short, reach out to us and we will help you pair up with other participants.",
    },
    {
      q: "Is the fee per person or per team?",
      a: "₹1200 covers the entire team, not each member. It includes the kit, refreshments and certificates.",
    },
    {
      q: "Will certificates be provided?",
      a: "Yes — every participant who attends both days receives a certificate of participation.",
    },
  ],
}

export const pastEvents = [
  {
    slug: "iot-to-robotics",
    title: "Transforming IoT Ideas to Robotics Reality",
    status: "completed",
    category: "Workshop",
    date: "March 2026",
    year: 2026,
    venue: "GRIET Campus",
    attendees: 120,
    description:
      "Our first-ever Robotics Club event was a blend of ideas, technology and teamwork — our very first step into the future. A two-day experience of innovation, hands-on learning and creativity with brilliant minds.",
    highlights: [
      "Two days of hands-on IoT and robotics labs",
      "Live demos from senior club members",
      "Team showcase and closing awards",
    ],
    images: ["/images/gallery1.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg"],
  },
]

export const eventCategories = ["All", "Workshop", "Hackathon", "Seminar"]

/* =========================================================
   ABOUT
   ========================================================= */

export const clubPillars = [
  {
    icon: "BrainIcon",
    title: "Robotics + AI",
    text: "Explore how artificial intelligence can make robots smarter and more capable.",
  },
  {
    icon: "CpuIcon",
    title: "Hands-on Learning",
    text: "Learn by building, experimenting and working with real robotics concepts.",
  },
  {
    icon: "WrenchIcon",
    title: "Build & Experiment",
    text: "Turn your ideas into practical projects through experimentation and teamwork.",
  },
  {
    icon: "LightbulbIcon",
    title: "Innovation",
    text: "Think creatively and develop innovative solutions to real-world problems.",
  },
  {
    icon: "RocketLaunchIcon",
    title: "Future Skills",
    text: "Develop technical and problem-solving skills for next-generation technologies.",
  },
  {
    icon: "RobotIcon",
    title: "Robotics Community",
    text: "Connect with students who share your interest in robotics and AI.",
  },
]

export const clubFaqs = [
  {
    q: "Who can join the Robotics Club?",
    a: "Any student currently enrolled at GRIET with an interest in robotics, electronics, or programming is welcome to join, regardless of their major or prior experience.",
  },
  {
    q: "Do I need prior experience to join?",
    a: "Not at all. We host beginner-friendly workshops and mentorship sessions to get everyone up to speed. Passion and a willingness to learn are all you need.",
  },
  {
    q: "What kind of projects do you build?",
    a: "Everything from autonomous line-following bots and drone systems to AI-powered computer vision models and IoT home automation setups.",
  },
  {
    q: "How much time does it take each week?",
    a: "Most members spend three to five hours a week — more during event weeks. You choose the projects you take on.",
  },
]

export const clubTimeline = [
  { year: "2025", title: "Club founded", text: "The Robotics Club is formed at GRIET with a handful of students and a lot of ambition." },
  { year: "2026", title: "First event", text: "Transforming IoT Ideas to Robotics Reality brings 120 students together over two days." },
  { year: "2026", title: "Domains formed", text: "Seven specialised domains are set up, from Technical to Creative & Design." },
  { year: "Next", title: "Next-Gen Robotics", text: "Our flagship 2-day workshop, with registrations open right now." },
]
