import andamanPreview from "../assets/projects/andaman.webp";
import tekkaPreview from "../assets/projects/tekka.webp";
import srihariPreview from "../assets/projects/srihari.webp";
import satyaPreview from "../assets/projects/satya.webp";
import medisysPreview from "../assets/projects/medisys.webp";

// Single source of truth for portfolio content - mirrors the resume.
// Text wrapped in **double asterisks** is rendered as highlighted emphasis.

const ICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const devicon = (path) => `${ICON_CDN}/${path}.svg`;

export const profile = {
  name: "Rashmi Umesh",
  shortName: "Rashmi",
  title: "Software Engineer",
  roles: [
    "React.js Developer",
    "Front-End Developer",
    "UI Developer",
    "Product Developer",
  ],
  location: "Bangalore, India",
  email: "rashmiumrh2001@gmail.com",
  phone: "+91 8747035258",
  phoneHref: "tel:+918747035258",
  linkedin: "https://www.linkedin.com/in/rashmi-u-6ab07a213/",
  resume:
    "https://drive.google.com/file/d/13-lOrQhSzmvDqk9l_2UDS4XddjgGb8hF/view",
  intro:
    "building responsive, production-grade web applications with React.js, TypeScript, Redux and Tailwind CSS - from reusable component architecture and REST API integration through to deployment on AWS.",
  heroStack: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "AWS"],
};

export const stats = [
  { value: "experience", suffix: "+", label: "Years of experience" },
  { value: 6, suffix: "+", label: "Production apps delivered" },
  { value: 150, suffix: "+", label: "Pull requests reviewed" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime on AWS hosting" },
];

export const about = {
  paragraphs: [
    "I'm a Software Engineer specialising in front-end development, with hands-on experience building responsive, production-grade web applications using **React.js**, **TypeScript**, **JavaScript (ES6+)**, **Redux** and **Tailwind CSS**.",
    "I've delivered **6+ live applications** across AI-driven platforms, e-commerce, healthcare and enterprise systems - including end-to-end deployment on AWS. Currently at **Novagito AI**, and previously at **ezAtlas**, I care about reusable component architecture, clean REST API integration and interfaces that feel fast on every device.",
  ],
  facts: [
    { icon: "mapPin", label: "Based in", value: "Bangalore, India" },
    {
      icon: "briefcase",
      label: "Currently",
      value: "Software Engineer at Novagito AI",
    },
    {
      icon: "graduationCap",
      label: "Education",
      value: "B.E. Computer Science, MVJ College of Engineering",
    },
    {
      icon: "code",
      label: "Focus",
      value: "React.js · TypeScript · Redux · Tailwind CSS",
    },
  ],
  strengths: [
    {
      icon: "layout",
      title: "Production-grade front-ends",
      text: "6+ live React.js applications across AI platforms, booking systems, e-commerce and healthcare.",
    },
    {
      icon: "zap",
      title: "Performance-minded",
      text: "~20% faster load times through code-splitting, memoization and Webpack/Babel bundle optimisation.",
    },
    {
      icon: "cloud",
      title: "End-to-end delivery",
      text: "AWS hosting with S3, CloudFront, Route 53 and ACM-managed SSL/TLS, sustaining 99.9% uptime.",
    },
    {
      icon: "users",
      title: "Collaborative engineering",
      text: "20+ Agile sprints, 150+ pull requests reviewed and shared ESLint standards across 5+ repositories.",
    },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Novagito AI Pvt Ltd",
    location: "Bangalore, India",
    period: "Oct 2024 - Present",
    current: true,
    summary:
      "Building AI-driven platforms, booking systems and e-commerce products end-to-end - from UI to production hosting.",
    highlights: [
      "Delivered **6+ production React.js apps** end-to-end across AI platforms, booking systems and e-commerce.",
      "Integrated RESTful APIs, cutting data retrieval and render time by **~30%** via optimised state management and lazy loading.",
      "Improved load performance by **~20%** through code-splitting, memoization and Webpack/Babel bundle optimisation.",
      "Standardised ESLint rules across **5+ repositories** and resolved cross-browser issues, cutting UI bug reports by an estimated **25%**.",
      "Deployed AWS hosting (S3/CloudFront, Route 53, SSL/TLS via ACM) for **6+ production apps** at **99.9% uptime**.",
      "Collaborated across **20+ two-week Agile sprints**, maintaining quality through peer reviews and technical documentation.",
    ],
    tech: [
      "React.js",
      "REST APIs",
      "Webpack",
      "Babel",
      "ESLint",
      "AWS S3",
      "CloudFront",
      "Route 53",
      "ACM",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "ezAtlas Pvt Ltd",
    location: "Bangalore, India",
    period: "Jun 2023 - Jul 2024",
    current: false,
    summary:
      "Built scalable enterprise dashboards and management systems for industry clients.",
    highlights: [
      "Developed scalable React.js and Redux applications for **5+ enterprise clients**, cutting feature-delivery time by an estimated **20%**.",
      "Participated in code reviews for **150+ pull requests** and collaborative design discussions to keep quality consistent across desktop and mobile.",
    ],
    tech: ["React.js", "Redux"],
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "novagito", label: "Novagito AI" },
  { id: "ezatlas", label: "ezAtlas" },
];

export const projects = [
  {
    id: "ng360",
    company: "novagito",
    companyName: "Novagito AI",
    featured: true,
    name: "NG360 CXaaS Platform",
    tagline: "AI Customer Experience Suite",
    domain: "AI Platform",
    icon: "layers",
    modules: ["N-Cogito", "N-Desk", "N-IQ", "N-Secure"],
    description:
      "Responsive front-end for an AI-powered customer experience suite spanning four core modules with real-time analytics dashboards.",
    contributions: [
      "Developed responsive interfaces for 4 core modules, enabling real-time analytics dashboards for 20+ enterprise customers.",
      "Designed and integrated an AI-powered chatbot interface with backend APIs, automating responses for an estimated 40% of support queries.",
    ],
    tech: ["React.js", "Tailwind CSS", "REST APIs"],
    link: null,
  },
  {
    id: "andaman",
    company: "novagito",
    companyName: "Novagito AI",
    name: "Andaman Isle",
    tagline: "Ferry Booking Platform",
    domain: "Travel & Booking",
    icon: "globe",
    description:
      "Customer-facing ferry ticket booking flow with an admin panel for bookings, schedules and destinations.",
    contributions: [
      "Built the booking flow and admin panel managing 15+ destinations.",
      "Integrated REST APIs for real-time ferry availability, with Context API managing global booking state.",
    ],
    tech: ["React.js", "Context API", "REST APIs"],
    link: "https://www.andamanisletravel.com/",
    preview: andamanPreview,
  },
  {
    id: "tekka",
    company: "novagito",
    companyName: "Novagito AI",
    name: "Tekka Centre",
    tagline: "Cultural Marketplace, Singapore",
    domain: "Marketplace",
    icon: "mapPin",
    description:
      "Responsive marketplace covering hawker stalls, wet market vendors and specialty shops, with vendor and category administration.",
    contributions: [
      "Developed the marketplace and admin panel for vendor and category management.",
      "Integrated location services with MRT connectivity across all vendor listings.",
    ],
    tech: ["React.js"],
    link: "https://tekka.sg/",
    preview: tekkaPreview,
  },
  {
    id: "srihari",
    company: "novagito",
    companyName: "Novagito AI",
    name: "Srihari Medicals",
    tagline: "Online Pharmacy E-Commerce",
    domain: "Healthcare",
    icon: "shield",
    description:
      "Secure e-commerce storefront with prescription uploads, inventory management and real-time stock tracking.",
    contributions: [
      "Built the storefront with prescription upload and real-time stock tracking.",
      "Delivered a comprehensive admin panel that streamlined order processing.",
    ],
    tech: ["React.js", "Redux"],
    link: "https://sriharimedicals.com/",
    preview: srihariPreview,
  },
  {
    id: "satya",
    company: "novagito",
    companyName: "Novagito AI",
    name: "Satya Foods",
    tagline: "E-Commerce Store",
    domain: "E-Commerce",
    icon: "layout",
    description:
      "Responsive storefront for browsing and ordering traditional food products, backed by an admin panel.",
    contributions: [
      "Developed the storefront for browsing and ordering products.",
      "Built admin tooling for product, inventory and order management.",
    ],
    tech: ["React.js"],
    link: "https://satyafoodproducts.com/",
    preview: satyaPreview,
  },
  {
    id: "medisys",
    company: "novagito",
    companyName: "Novagito AI",
    name: "Medisys Pharmacy",
    tagline: "Online Pharmacy E-Commerce",
    domain: "Healthcare",
    icon: "shield",
    description:
      "Secure storefront for online medicine ordering with prescription uploads and real-time inventory tracking.",
    contributions: [
      "Built the ordering storefront, reducing average checkout time by an estimated 20%.",
      "Developed an admin panel for product listings, stock levels and order fulfilment.",
    ],
    tech: ["React.js", "Redux"],
    link: "https://medisyspharmacy.com/",
    preview: medisysPreview,
  },
  {
    id: "pioneer",
    company: "ezatlas",
    companyName: "ezAtlas",
    name: "Asset Management System",
    tagline: "Pioneer Toyota",
    domain: "Enterprise",
    icon: "database",
    description:
      "Asset-tracking dashboard with lifecycle management, maintenance scheduling and performance analytics.",
    contributions: [
      "Implemented lifecycle management and maintenance scheduling workflows.",
      "Built a mobile-responsive interface for real-time tracking and analytics.",
    ],
    tech: ["React.js", "Redux"],
    link: null,
  },
  {
    id: "meltmelow",
    company: "ezatlas",
    companyName: "ezAtlas",
    name: "Distribution Management System",
    tagline: "Melt and Melow",
    domain: "Enterprise",
    icon: "users",
    description:
      "Distributor management system with real-time tracking, order workflows and performance dashboards.",
    contributions: [
      "Built real-time tracking and order management workflows.",
      "Developed analytics dashboards for distributor performance monitoring.",
    ],
    tech: ["React.js", "Redux"],
    link: null,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { name: "React.js", logo: devicon("react/react-original") },
      { name: "React Hooks", logo: devicon("react/react-original") },
      { name: "TypeScript", logo: devicon("typescript/typescript-original") },
      {
        name: "JavaScript (ES6+)",
        logo: devicon("javascript/javascript-original"),
      },
      { name: "HTML5", logo: devicon("html5/html5-original") },
      { name: "CSS3", logo: devicon("css3/css3-original") },
    ],
  },
  {
    title: "State Management",
    icon: "database",
    skills: [
      { name: "Redux", logo: devicon("redux/redux-original") },
      { name: "Context API", logo: devicon("react/react-original") },
    ],
  },
  {
    title: "Styling & UI",
    icon: "palette",
    skills: [
      { name: "Tailwind CSS", logo: devicon("tailwindcss/tailwindcss-original") },
      { name: "Material UI", logo: devicon("materialui/materialui-original") },
      { name: "Bootstrap", logo: devicon("bootstrap/bootstrap-original") },
      { name: "Responsive Design" },
      { name: "Cross-Browser Compatibility" },
    ],
  },
  {
    title: "Build & Tooling",
    icon: "wrench",
    skills: [
      { name: "Vite", logo: devicon("vitejs/vitejs-original") },
      { name: "Webpack", logo: devicon("webpack/webpack-original") },
      { name: "Babel", logo: devicon("babel/babel-original") },
      { name: "ESLint", logo: devicon("eslint/eslint-original") },
      { name: "npm / Yarn", logo: devicon("npm/npm-original-wordmark") },
    ],
  },
  {
    title: "APIs & Integration",
    icon: "plug",
    skills: [
      { name: "RESTful APIs" },
      { name: "Postman", logo: devicon("postman/postman-original") },
      { name: "Swagger", logo: devicon("swagger/swagger-original") },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "cloud",
    skills: [
      {
        name: "AWS",
        logo: devicon("amazonwebservices/amazonwebservices-plain-wordmark"),
      },
      { name: "S3" },
      { name: "CloudFront" },
      { name: "Route 53" },
      { name: "ACM" },
      { name: "Amplify" },
      { name: "DNS & Domain Configuration" },
      { name: "SSL/TLS Certificates" },
    ],
  },
  {
    title: "Workflow & Version Control",
    icon: "gitBranch",
    skills: [
      { name: "Git", logo: devicon("git/git-original") },
      { name: "GitLab", logo: devicon("gitlab/gitlab-original") },
      { name: "Azure DevOps", logo: devicon("azuredevops/azuredevops-original") },
      { name: "CI/CD" },
      { name: "VS Code", logo: devicon("vscode/vscode-original") },
    ],
  },
  {
    title: "Testing & Quality",
    icon: "flask",
    skills: [
      { name: "Jest", logo: devicon("jest/jest-plain") },
      { name: "Debugging" },
      { name: "Technical Documentation" },
    ],
  },
];

export const professionalSkills = [
  "Agile Development",
  "Team Collaboration",
  "Problem Solving",
  "Code Review",
  "Communication",
  "Adaptability",
];

// Logos shown in the scrolling tech strip below the hero.
export const techStrip = [
  { name: "React", logo: devicon("react/react-original") },
  { name: "TypeScript", logo: devicon("typescript/typescript-original") },
  { name: "JavaScript", logo: devicon("javascript/javascript-original") },
  { name: "Redux", logo: devicon("redux/redux-original") },
  { name: "Tailwind CSS", logo: devicon("tailwindcss/tailwindcss-original") },
  { name: "Material UI", logo: devicon("materialui/materialui-original") },
  { name: "Vite", logo: devicon("vitejs/vitejs-original") },
  { name: "Webpack", logo: devicon("webpack/webpack-original") },
  { name: "Jest", logo: devicon("jest/jest-plain") },
  { name: "Postman", logo: devicon("postman/postman-original") },
  { name: "Git", logo: devicon("git/git-original") },
  {
    name: "AWS",
    logo: devicon("amazonwebservices/amazonwebservices-plain-wordmark"),
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "MVJ College of Engineering",
  location: "Bangalore",
  period: "2018 - 2022",
};

export const certifications = [
  {
    title: "React",
    issuer: "HackerRank",
    year: "2024",
    link: "https://drive.google.com/file/d/1lphwHhqOqces5gXhszjFa4ksous-do89/view",
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    year: "2024",
    link: "https://drive.google.com/file/d/1BQfqU6k3ZJn3QxcwjAtRKHvl7bnZZ8un/view",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    year: "2024",
    link: "https://drive.google.com/file/d/1G2nkmBun3R6510Ngv2FNH61bxYPqopoS/view",
  },
  {
    title: "Front-End Developer (React)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://drive.google.com/file/d/1as-jFdDXoWXDoDo2r7DC1iE0ycPV7Ds9/view",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
