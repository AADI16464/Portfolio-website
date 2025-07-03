import {
  mobile,
  backend,
  creator,
  web,
  satyam,
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
  cloud,
  COA,
  Intern1,
  Intern2,
  database,
  blockchain,
  IoT,
  webdev,
  network,
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

export const certifications = 
[
  {
    name: "Cloud Computing",
    description:
      "Completed 12-week NPTEL Elite Certification in Cloud Computing (IIT Kharagpur), achieving a 76% score, and securing top marks in a nationally recognized course taken by over 23,000 candidates",
    tags: 
    [
      {
        name: "IIT Kharagpur",
        color: "blue-text-gradient",
      },
      {
        name: "NPTEL",
        color: "pink-text-gradient",
      },
    ],
    image: cloud,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
  {
    name: "Computer Architecture",
    description:
      "Successfully completed the NPTEL course on Multi-Core Computer Architecture (IIT Guwahati), a 12-week program recommended for 3 or 4 academic credits, certified among 2,583 participants.",
    tags: 
    [
      {
        name: "IIT Guwahati",
        color: "blue-text-gradient",
      },
      {
        name: "NPTEL",
        color: "pink-text-gradient",
      },
    ],
    image: COA,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
  {
    name: "TagNPin Web Solutions LLP",
    description:
      "Web Development Intern at TagNpin Web Solutions LLP (May–July 2024), worked on building a dashboard for displaying statistical data using PHP, JavaScript, HTML, and CSS.",
    tags: 
    [
      {
        name: "Internship",
        color: "blue-text-gradient",
      },
      {
        name: "NotifyVisitor",
        color: "pink-text-gradient",
      },
      {
        name: "Dashboard Developer",
        color: "green-text-gradient",
      },
    ],
    image: Intern1,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
 {
    name: "Celebal Technologies",
    description:
      "Selected as a Summer Intern at Celebal Technologies (May–July 2025) in the SQL department; engaged in remote, hands-on training emphasizing practical SQL skills and real-world project exposure.",
    tags: 
    [
      {
        name: "Internship",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Database Engineer",
        color: "green-text-gradient",
      },
    ],
    image: Intern2,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
  {
    name: "Database Engineer",
    description:
      "Completed certified courses on Introduction to Databases (Meta), Introduction to Relational Databases (IBM), and Databases & SQL for Data Science with Python (IBM) via Coursera in March 2024, gaining hands-on skills in SQL, RDBMS, and database-driven application development",
    tags: 
    [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "RDBMS",
        color: "pink-text-gradient",
      },
      {
        name: "Database",
        color: "green-text-gradient",
      },
    ],
    image: database,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
  {
    name: "Blockchain",
    description:
      "Completed multiple blockchain-focused certifications and training programs including “Blockchain Technology using Ethereum and Polygon” (Metacrafters), and “Introduction to Blockchain and Ethereum” (Infosys), gaining hands-on exposure to Ethereum, EVM, JS Proof, and decentralized application development.",
    tags: 
    [
      {
        name: "Ethereum",
        color: "blue-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
  
  {
    name: "Internet of Things",
    description:
      "Successfully completed the ‘Developing Industrial Internet of Things’ specialization from the University of Colorado Boulder, demonstrating strong expertise in embedded systems, machine learning integration, and secure industrial IoT deployment.",
    tags: 
    [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino IDE",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Tinkercad",
        color: "yellow-text-gradient",
      },
    ],
    image: IoT,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
  {
    name: "5G Technology",
    description:
      "Completed the ‘5G Network Fundamentals’ course authorized by Institut Mines-Télécom, gaining in-depth knowledge of next-generation wireless communication technologies and their real-world applications.",
    tags: 
    [
      {
        name: "Computer Networks",
        color: "blue-text-gradient",
      },
      {
        name: "Cisco Packet Tracer",
        color: "pink-text-gradient",
      },
      {
        name: "Telecommunications",
        color: "green-text-gradient",
      },
      {
        name: "Wireless Networks",
        color: "yellow-text-gradient",
      },
    ],
    image: network,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
    {
    name: "Web Developer",
    description:
      "Successfully completed multi-platform bootcamps and courses from AWS, Google DSC, Microsoft Learn, and Meta on modern web and app development using HTML, CSS, JavaScript, and React Native.",
    tags: 
    [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "yellow-text-gradient",
      },
    ],
    image: webdev,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1-daNJfuJ6cuiiG4IQY4KKXGdNqoZOazG",
  },
];

const testimonials = [
  {
    testimonial:
      "As his DSA teacher, I witnessed Aditya's dedication and passion for coding firsthand.",
    name: "Rohini Sharma",
    designation: "Academic Coordinator",
    company: "Chandigarh University",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aditya does.",
    name: "Satyam Singh",
    designation: "Project Manager",
    company: "NotifyVisitor",
    image: satyam,
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
