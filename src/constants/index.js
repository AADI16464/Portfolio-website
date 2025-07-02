import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  DSA,
  Cpp,
  Java,
  MySQL,
  meta,
  TagNPin,
  Celebal,
  Hacktech,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "DSA",
    icon: DSA,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const experiences = [
  {
    title: "Web Development Intern",
    company_name: "TagPin Web Solutions LLP",
    icon: TagNPin,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Displayed statistical data on a dynamic dashboard using PHP, HTML, CSS, and JavaScript.",
      "Designed UI components and implemented backend logic to support data visualization.",
      "Contributed to responsive design and performance enhancements for client applications.",
      "Collaborated in Agile workflow and participated in regular code reviews.",
    ],
  },
  {
    title: "SQL Intern",
    company_name: "Celebal Technologies",
    icon: Celebal,
    iconBg: "#E6DEDD",
    date: "April 2025 - June 2025",
    points: [
      "Worked on SQL-based data extraction, filtering, and visualization tasks.",
      "Assisted in managing large datasets and reporting solutions.",
      "Improved query performance and optimized database operations.",
    ],
  },
  {
    title: "Co-President",
    company_name: "HackTech Club, Chandigarh University",
    icon: Hacktech,
    iconBg: "#383E56",
    date: "Jan 2024 – Present",
    points: [
      "Organized and led technical workshops, coding competitions, and hackathons.",
      "Mentored junior developers and supported open-source initiatives.",
      "Represented the university in inter-college tech events.",
    ],
  },
];
import { FaCertificate } from "react-icons/fa";

export const certifications = [
  {
    name: "React Native by Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/8PJIOLBDUKS6",
  },
  {
    name: "Internet of Things – Univ. of Colorado Boulder",
    link: "https://drive.google.com/file/d/10Uz5872WnNNQxrR6NBCM0WTyAXS0zz4s/view?usp=sharing",
  },
  {
    name: "Cloud Computing – NPTEL (IIT Kharagpur)",
    link: "https://drive.google.com/file/d/10OpiZH7OzYL9sDTBujOuzkAxlZVWKxef/view?usp=sharing",
  },
  {
    name: "Intro to Databases – Meta",
    link: "https://drive.google.com/file/d/11_jzIQa8gHiqlZr8Dlogh9xaSNVZJmkV/view?usp=sharing",
  },
  {
    name: "Database & SQL for Data Science – IBM",
    link: "https://drive.google.com/file/d/1pfiWufjngFVFzHzsHWquKp1nsVZbCqLZ/view?usp=sharing",
  },
  {
    name: "Multi-Core Computer Architecture – IIT Guwahati",
    link: "https://drive.google.com/file/d/10Ws6gg6wL-Wy_mHLZeLuiL4gIG3vTKZN/view?usp=sharing",
  },
  {
    name: "Computer Networks and 5G Fundamentals",
    link: "https://drive.google.com/file/d/1cbSmg2u3MHEqCjDlxy8lKPogzzFvFguT/view?usp=drive_link",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
