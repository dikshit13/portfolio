import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/dikshit13",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/dikshit1",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "REST APIs",
    image: "rest-api.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const DATABASES_SKILL = [
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
] as const;

export const TOOLS_SKILL = [
  {
    skill_name: "Git & GitHub",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "REST APIs",
    image: "next.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Pika Cart - E-commerce Platform",
    description:
      "A full-stack MERN e-commerce application featuring product browsing, shopping cart, wishlist, and order management. Built with MongoDB, Express.js, React.js, and Node.js to deliver a seamless shopping experience.",
    image: "/projects/shopkart.png",
    sourceCode: "https://github.com/dikshit13/pika-cart",
    liveDemo: "https://pika-cart.vercel.app/",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Supplier Relationship Management (SRM)",
    description:
      "A comprehensive system for managing suppliers, inventory, orders, and financial records. Developed with HTML, CSS, JavaScript, and PHP to streamline supplier interactions and business operations.",
    image: "/projects/srm.png",
    sourceCode: "https://github.com/dikshit13/Supplier-Relationship-Management-SRM-",
    liveDemo: undefined,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Kalakartiwear – Ethnic Fashion E-commerce Platform",
    description:
      "A full-stack MERN e-commerce application featuring ethnic wear browsing, shopping cart, and order management. Includes Google Maps integration for store location and a contact system for customer support.",
    image: "/projects/kalakartiwear.png",
    sourceCode: "https://github.com/dikshit13/kalakartiwear",
    liveDemo: "https://kalakartiwear.lovable.app/",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/dikshit13",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/dikshit1",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:dixitkamboj7@gmail.com",
      },
      {
        name: "Resume",
        icon: null,
        link: "/resume.pdf",
      },
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "MAR 2026",
    description: "SQL fundamentals and advanced queries",
    logo: "hackerrank.png",
    certificateLink: "https://www.hackerrank.com/certificates/6a761c392fa2",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "JAN 2026",
    description: "Introduction to cloud computing concepts and services",
    logo: "nptel.png",
    certificateLink: "https://drive.google.com/file/d/1Q7hgwO4Husz-qwGtwUVqgT4pc6Zfn5JT/view?usp=sharing",
  },
  {
    title: "Git & GitHub",
    issuer: "CipherSchools",
    date: "JUN 2025",
    description: "Version control and collaborative development",
    logo: "cipherschools.png",
    certificateLink: "https://drive.google.com/file/d/18qFu0KRrBx_FDHZGBoQ1CvKNc2kaHT-F/view?usp=sharing",
  },
  {
    title: "IBM OS Course",
    issuer: "IBM",
    date: "MAY 2025",
    description: "Operating Systems fundamentals",
    logo: "ibm.png",
    certificateLink: "https://www.coursera.org/account/accomplishments/verify/03ULGKYYE95Q",
  },
  {
    title: "Google Networking",
    issuer: "Google",
    date: "JAN 2025",
    description: "Networking concepts and protocols",
    logo: "google.png",
    certificateLink: "https://www.coursera.org/account/accomplishments/verify/R5OFMRK5I1P2",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "JAN 2024",
    description: "HTML, CSS, and JavaScript, creating responsive websites",
    logo: "freecodecamp.png",
    certificateLink: "https://www.freecodecamp.org/certification/dikshit0005/responsive-web-design",
  },
] as const;

export const EXPERIENCE = [
  {
    title: "DSA Training",
    company: "CipherSchools",
    duration: "6 weeks",
    description: "• Learned core data structures including arrays, linked lists, stacks, queues, trees, and graphs, and applied them to solve algorithmic problems efficiently.\n• Practiced algorithms such as sorting, searching, recursion, and dynamic programming to improve problem-solving and optimization skills.\n• Solved 200+ coding problems across platforms, strengthening logical thinking and coding proficiency.",
    certificateLink: "https://drive.google.com/file/d/1lJJsvo1doZ3l9uX3lkeAMN2bsxo1th9N/view",
    tags: ["Data Structures", "Algorithms", "Dynamic Programming", "Problem Solving"],
    logo: "cipherschools.png",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "250+ DSA Problems Solved",
    description: "Solved across LeetCode, GeeksforGeeks, and HackerRank",
  },
  {
    title: "4⭐ HackerRank Rating",
    description: "C++ and Python programming languages",
  },
  {
    title: "Hackaverse Hackathon",
    description: "Ranked 5th out of 20 teams - LPU",
  },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    school: "Lovely Professional University",
    duration: "2023 - Present",
    cgpa: "7.11",
  },
  {
    degree: "Intermediate",
    school: "Dellmond International School, Uttar Pradesh",
    duration: "2022 - 2023",
    percentage: "81%",
  },
  {
    degree: "Matriculation",
    school: "Dellmond International School, Uttar Pradesh",
    duration: "2020 - 2021",
    percentage: "61%",
  },
] as const;

export const SOFT_SKILLS = [
  "Problem Solving",
  "Teamwork",
  "Leadership",
  "Communication",
  "Time Management",
  "Adaptability",
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certificates",
    link: "#certifications",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/dikshit13/space-portfolio",
  resume: "/resume.pdf",
  email: "dixitkamboj7@gmail.com",
  phone: "+91 9557832712",
};
