// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

import profilePhoto from "../assets/images/profile_photo_2.jpeg";
import qssLogo from "../assets/images/Qss_logo.jpeg";
import zeroneLogo from "../assets/images/Zerone_logo.jpeg";
import sysboonLogo from "../assets/images/Sysboon_logo.jpeg";
import srmLogo from "../assets/images/SRM_Logo.png";
import hseLogo from "../assets/images/hse_logo.jpeg";

export const personal = {
  name: "Arshaq CK",
  firstName: "Arshaq",
  role: "Senior Software Engineer",
  headline: "I build cross-platform mobile apps with React Native & Expo.",
  subHeadline:
    "Senior Software Engineer with 6+ years of experience shipping production apps to the App Store and Google Play — backed by solid React, Node.js and PostgreSQL skills for the full stack.",
  photo: profilePhoto,
  email: "arshaqueck@gmail.com",
  location: "Noida, India",
  resume:
    "https://drive.google.com/file/d/1F8trTwYuH3kRoZFIRTxqsk_wg4NWKXyn/view?usp=sharing",
};

export const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "17+", label: "Projects delivered" },
  { value: "10+", label: "Apps live on both stores" },
  { value: "2", label: "Platforms — iOS & Android" },
];

export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/arshaqckcode95/" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/arshaq-ck-187150160/",
  },
  { name: "Email", icon: "mail", url: "mailto:arshaqueck@gmail.com" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com/arsh1087/" },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/arshaq__ck/",
  },
];

// Grouped by expertise priority: mobile first, then web, then backend.
export const skillGroups = [
  {
    title: "Mobile — core expertise",
    description:
      "End-to-end mobile delivery: UI, native integrations, store releases and OTA updates with Expo EAS.",
    skills: [
      { name: "React Native", icon: "react", color: "#61DAFB" },
      { name: "Expo / EAS", icon: "expo", color: "#9ca3af" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "iOS", icon: "apple", color: "#9ca3af" },
      { name: "Android", icon: "android", color: "#3DDC84" },
      { name: "Redux", icon: "redux", color: "#764ABC" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "Web frontend",
    description:
      "Responsive, accessible web apps that share patterns (and often code) with their mobile counterparts.",
    skills: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "HTML5", icon: "html", color: "#E34F26" },
      { name: "CSS", icon: "css", color: "#38BDF8" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
    ],
  },
  {
    title: "Backend & data",
    description:
      "APIs and data layers that power the apps — from REST services to on-device storage.",
    skills: [
      { name: "Node.js", icon: "node", color: "#5FA04E" },
      { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
      { name: "SQLite", icon: "sqlite", color: "#0F80CC" },
      { name: "AWS", icon: "aws", color: "#FF9900" },
      { name: "Git", icon: "git", color: "#F05032" },
    ],
  },
];

export const highlights = [
  "Develop highly interactive user interfaces for mobile applications",
  "Build and release apps to both the App Store and Google Play",
  "Build apps with Expo and EAS services — builds, submissions and OTA updates",
  "Integrate third-party services: Firebase, AWS, social auth, SQLite, Redux, Google Maps",
  "Propose and implement technical solutions for complex problems",
  "Plan source-code structure and review code across teams",
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "QSS Technosoft",
    url: "https://www.qsstechnosoft.com/",
    logo: qssLogo,
    duration: "Jul 2022 — Present",
    location: "Noida, Uttar Pradesh, India",
    points: [
      "Build, deploy and maintain hybrid mobile applications for enterprise clients.",
      "Integrate third-party services and native modules across iOS and Android.",
      "Own release pipelines — store submissions, certificates and OTA updates.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Node.js"],
  },
  {
    role: "Senior Software Engineer",
    company: "Zerone Consulting Pvt Ltd",
    url: "https://www.zeroneconsulting.com/",
    logo: zeroneLogo,
    duration: "Oct 2020 — Jul 2022",
    location: "Cochin, Kerala, India",
    points: [
      "Developed and shipped hybrid mobile apps and web platforms for international clients.",
      "Led third-party library and payment-gateway integrations for enterprise products.",
      "Delivered the Litehouse suite — one mobile app and three React web apps.",
    ],
    tech: ["React Native", "React", "TypeScript"],
  },
  {
    role: "Junior Software Engineer",
    company: "Sysboon Technologies",
    url: "",
    logo: sysboonLogo,
    duration: "Oct 2019 — Oct 2020",
    location: "Kozhikode, Kerala, India",
    points: [
      "Developed hybrid mobile applications for healthcare and e-commerce clients.",
      "Built booking, ordering and delivery-tracking flows end to end.",
    ],
    tech: ["React Native", "JavaScript"],
  },
];

// `image`: drop a screenshot into public/screenshots/ and reference it as
// "screenshots/<file>.png". Cards render a branded placeholder until then.
export const projects = [
  {
    name: "Spendable",
    tagline: "Fintech · Accessibility",
    category: "Mobile",
    featured: true,
    description:
      "The world's first debit card designed for people with disability and the elderly — enabling financial independence with trusted support-worker connections and fully auditable money management.",
    tech: ["React Native", "TypeScript", "iOS", "Android"],
    image: "",
  },
  {
    name: "Litehouse Suite",
    tagline: "Healthcare workforce · 4 apps",
    category: "Web",
    featured: true,
    description:
      "Shift management platform for nurses: a React Native mobile app plus three React web apps (staff, admin and scheduler) covering shift creation, assignment, document management and onboarding.",
    tech: ["React Native", "React", "TypeScript"],
    image: "",
  },
  {
    name: "GoPath & GoPath Agent",
    tagline: "Healthcare logistics · 2 apps",
    category: "Mobile",
    featured: true,
    description:
      "Lab-test booking app paired with a phlebotomist agent app — slot booking, home sample collection, live status updates and an optimized end-to-end lab supply chain.",
    tech: ["React Native", "JavaScript", "iOS", "Android"],
    image: "",
  },
  {
    name: "Comet",
    tagline: "Social · Healthcare",
    category: "Mobile",
    featured: true,
    description:
      "Social network for doctors and healthcare professionals — medical news, rich posts with video/image/document uploads, and built-in Zoom video rooms for case discussions.",
    tech: ["React Native", "JavaScript", "Zoom SDK"],
    image: "",
  },
  {
    name: "Delibo & Delibo Delivery",
    tagline: "E-commerce · 2 apps",
    category: "Mobile",
    featured: true,
    description:
      "Online grocery platform: a customer app with browsing, cart and online payments, plus a dedicated delivery-agent app for order tracking and fleet-scale fulfilment.",
    tech: ["React Native", "JavaScript", "Payments"],
    image: "",
  },
  {
    name: "Health Fabric",
    tagline: "Health & wellness",
    category: "Mobile",
    featured: true,
    description:
      "Multilingual wellness platform where clinicians build care plans and patients follow them — with social circles, family invitations and premium virtual consultations.",
    tech: ["React Native", "JavaScript", "i18n"],
    image: "",
  },
  {
    name: "Skyline Tracking",
    tagline: "IoT · Asset management",
    category: "Mobile",
    description:
      "Remote asset management with real-time location, reporting and alerting so operations teams can act decisively.",
    tech: ["React Native", "Maps", "Real-time"],
    image: "",
  },
  {
    name: "Kimst Hospital",
    tagline: "Healthcare",
    category: "Mobile",
    description:
      "Patient appointment booking and medical-profile management tied to the hospital's doctors and departments.",
    tech: ["React Native", "JavaScript"],
    image: "",
  },
  {
    name: "OCR Scan Easyish",
    tagline: "Productivity · OCR",
    category: "Mobile",
    description:
      "OCR tool that extracts text from images, generates PDFs from the results and shares them to other apps.",
    tech: ["React Native", "OCR", "PDF"],
    image: "",
  },
  {
    name: "Lifetoken",
    tagline: "Creator economy",
    category: "Mobile",
    description:
      "Audience-engagement tool that helps creators connect with followers and activate their passive audience.",
    tech: ["React Native", "JavaScript"],
    image: "",
  },
  {
    name: "CaseTrack",
    tagline: "LegalTech",
    category: "Mobile",
    description:
      "End-to-end case recording and tracking for law firms and in-house legal departments.",
    tech: ["React Native", "JavaScript"],
    image: "",
  },
  {
    name: "Recruit Online",
    tagline: "HR Tech",
    category: "Mobile",
    description:
      "Full recruitment-lifecycle management with a single view of candidates and clients.",
    tech: ["React Native", "JavaScript"],
    image: "",
  },
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  institution: "PPG Institute of Science and Technology",
  university: "Anna University",
  duration: "2014 — 2018",
  logo: srmLogo,
  points: [
    "Core computer-science foundation: data structures, DBMS, networking and security.",
    "Built multiple academic projects applying core engineering coursework.",
  ],
};

export const certifications = [
  { title: "B.Tech Degree Certificate", issuer: "Anna University", logo: srmLogo },
  { title: "B.Tech Provisional Certificate", issuer: "Anna University", logo: srmLogo },
  { title: "HSE Certificate (12th)", issuer: "Govt. of Kerala", logo: hseLogo },
];
