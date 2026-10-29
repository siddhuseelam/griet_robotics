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

export const nextGenRoboticsEvent = {
  slug: "next-gen-robotics",
  to: routes.nextGenRobotics,
  title: "Next-Gen Robotics",
  status: "completed",
  category: "Workshop",
  tagline: "2-day hands-on robotics workshop",
  date: "18 – 19 September 2026",
  shortDate: "18 Sep 2026",
  time: "9:00 AM – 3:30 PM",
  venue: "GRIET Campus",
  teamSize: "4 – 6 members",
  fee: "₹1200 per team",
  certificates: "For all participants",
  seatsTotal: 40,
  seatsFilled: 40,
  cover: "/images/next-gen-robotics-banner.jpeg",
  description:
    "A 2-day hands-on robotics workshop organized by the Robotics Club, GRIET in association with the AI/ML Department focusing on learning, innovation, and practical exploration.",
  about: [
    "Next-Gen Robotics was a 2-day workshop organized by the Robotics Club, GRIET in association with the AI/ML Department.",
    "The workshop focused on robotics, technology, hands-on learning and innovation. Participants had the opportunity to learn, experiment and work together exploring next-generation robotics.",
    "Teams designed, built, and programmed practical hardware projects with mentorship from domain leads.",
  ],
  schedule: [
    { day: "DAY 01", date: "18 September 2026", time: "9:00 AM – 3:30 PM", focus: "Fundamentals & build" },
    { day: "DAY 02", date: "19 September 2026", time: "9:00 AM – 3:30 PM", focus: "Automation & showcase" },
  ],
  faqs: [
    {
      q: "Do we need to bring our own hardware?",
      a: "No. All the kits, boards and tools needed for the two days were provided by the club.",
    },
    {
      q: "Was this open to all branches?",
      a: "Yes, students across all years and departments participated.",
    },
    {
      q: "Were certificates provided?",
      a: "Yes — every participant who completed the two-day workshop received a certificate of participation.",
    },
  ],
}

export const upcomingEvent = null

export const pastEvents = [
  {
    slug: "next-gen-robotics",
    to: routes.nextGenRobotics,
    title: "Next-Gen Robotics",
    status: "completed",
    category: "Workshop",
    date: "18 – 19 September 2026",
    year: 2026,
    venue: "GRIET Campus",
    attendees: 150,
    cover: "/images/next-gen-robotics-banner.jpeg",
    description:
      "A 2-day flagship robotics workshop focused on learning, innovation, technology and hands-on exploration in association with the AI/ML Department.",
    highlights: [
      "Hardware kits, boards and tools provided by the club",
      "Hands-on sessions on fundamentals, automation and build",
      "Showcase demo and participation certificates for all teams",
    ],
    images: ["/images/next-gen-robotics-banner.jpeg", "/images/gallery1.jpg", "/images/gallery2.jpg"],
  },
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
  { year: "2026", title: "Next-Gen Robotics", text: "Flagship 2-day hands-on workshop hosted in association with the AI/ML Department." },
]
