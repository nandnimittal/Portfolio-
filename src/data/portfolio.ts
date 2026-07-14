import type {
  Achievement,
  Certification,
  CommunityItem,
  ContactInfo,
  EducationItem,
  NavLink,
  Project,
  SkillCategory,
  TimelineItem,
} from "@/types";

export const siteConfig = {
  name: "Nandni Mittal",
  title: "Nandni Mittal | Aspiring Data Scientist & Software Developer",
  description:
    "Computer Science Engineering graduate passionate about Data Science, Artificial Intelligence, Android Development, and Machine Learning. Building scalable applications and solving real-world problems.",
  url: "https://nandnimittal.vercel.app",
  ogImage: "/assets/images/og-image.svg",
  profileImage: "/assets/images/profile.png",
  githubUsername: "nandnimittal",
  resumePath: "/resume/CV_Data_Science.pdf",
};

export const contactInfo: ContactInfo = {
  email: "nandnimittal12d22@gmail.com",
  phone: "+91 8607765478",
  linkedin: "https://www.linkedin.com/in/nandnimittal05/",
  github: "https://github.com/nandnimittal",
  location: "Shahzadpur, Ambala, Haryana",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  greeting: "Hi, I'm",
  name: "Nandni Mittal",
  roles: [
    "Aspiring Data Scientist",
    "Software Developer",
    "Android Developer",
  ],
  subtitle:
    "Aspiring Data Scientist | Software Developer | Android Developer",
  description:
    "Computer Science Engineering graduate passionate about Data Science, Artificial Intelligence, Android Development, and Machine Learning. I enjoy building scalable applications and solving real-world problems using data and technology.",
};

export const aboutContent = {
  intro:
    "Computer Science Engineering graduate passionate about Data Science, Artificial Intelligence, and Software Development, with hands-on experience in building modern web and data-driven applications.",
  interestsLabel: "My interests include:",
  interests: [
    "Data Science",
    "Artificial Intelligence",
    "Python",
    "Android Development",
    "Machine Learning",
    "Data Analysis",
  ],
};

export const aboutTimeline: TimelineItem[] = [
  {
    year: "Now",
    title: "Next Chapter",
    description:
      "Preparing for MSc Data Science and a Data Science career.",
  },
  {
    year: "2026",
    title: "Completed Engineering",
    description: "Graduated with CGPA 8.56 in CSE.",
  },
  {
    year: "2022",
    title: "Started B.Tech",
    description: "Began Computer Science Engineering at CGC Landran.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "C++", "Java", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
      "Data Visualization",
      "EDA",
    ],
  },
  {
    title: "Android",
    skills: ["Java", "XML", "Firebase", "REST API"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Gradle"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "DSA", "System Design", "Microservices", "Agile"],
  },
];

export const projects: Project[] = [
  {
    title: "Digital Classes App",
    description:
      "Android application for educator-student interaction with attendance, assignments, profiles, live updates and learning management. Supports 100+ users across 6+ functional units including virtual sessions, submissions, presence logging, and curriculum control.",
    tech: ["Java", "Firebase", "XML", "REST API"],
    github: "https://github.com/nandnimittal",
    demo: "https://github.com/nandnimittal",
    demoLabel: "Live Demo",
    featured: true,
  },
  {
    title: "News API Application",
    description:
      "Android app that fetches real-time news using REST APIs with category filtering and Firebase integration. Delivers 100+ daily stories across 5+ sections with optimized request handling (~300ms).",
    tech: ["Java", "REST API", "Firebase"],
    github: "https://github.com/nandnimittal",
    demo: "https://github.com/nandnimittal",
    demoLabel: "Live Demo",
    featured: true,
  },
  {
    title: "Netflix Data Analysis",
    description:
      "Performed data cleaning, preprocessing, exploratory data analysis and visualization on Netflix dataset using Python. Analyzed movies and TV shows by title, director, cast, country, rating, and duration trends.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/nandnimittal",
    demo: "https://github.com/nandnimittal",
    demoLabel: "View Notebook",
    featured: true,
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "Chandigarh Group of Colleges, Landran",
    period: "2022 – 2026",
    details: ["Computer Science Engineering"],
    highlight: "CGPA 8.56",
  },
  {
    degree: "Senior Secondary & Matriculation",
    institution: "DAV Senior Secondary Public School (CBSE)",
    period: "2019 – 2022",
    details: ["10th: 76.8%", "12th: 82.4%"],
  },
];

export const certifications: Certification[] = [
  { title: "AWS Academy Cloud Security Foundations", issuer: "AWS Academy" , certificate: "/assets/certificate/AWS_Cloud_Security.png"},
  { title: "Python for Data Science", issuer: "Udemy" , certificate: "/assets/certificate/Python_for_Data_Science.png"},
  { title: "Data Science using Python", issuer: "Tech Live Solution" , certificate: "/assets/certificate/Data_Science_Python.png"},
  {
    title: "UI Path Automation Developer Associate",
    issuer: "UI Path · ICT Academy",
    certificate: "/assets/certificate/UI_Path.png",
  },
  { title: "NPTEL DBMS", issuer: "NPTEL" , certificate: "/assets/certificate/NPTEL.png"},
  { title: "Android Technology", issuer: "Think Next" , certificate: "/assets/certificate/Android.png"},
  { title: "Generative AI Mastermind", issuer: "Outskill" , certificate: "/assets/certificate/Outskill.png"},
  { title: "HTML Attributes & Tags", issuer: "Great Learning" , certificate: "/assets/certificate/HTML.png"},
];

export const learningJourney = [
  "Android Development",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
  "DSA Practice",
  "Python Projects",
];

export const achievements: Achievement[] = [
  {
    title: "Academic Excellence",
    description: "Strong academic record throughout engineering.",
    value: "8.56",
  },
  {
    title: "Certifications",
    description: "Industry-recognized credentials across cloud, data & Android.",
    value: "8+",
  },
  {
    title: "Android Projects",
    description: "Production-ready apps serving 100+ users.",
    value: "2+",
  },
  {
    title: "Community Impact",
    description: "Active volunteer in donation camps and foundations.",
    value: "3+",
  },
];

export const community: CommunityItem[] = [
  {
    title: "Blood Donation Camp",
    description: "Camp volunteer and donor, supporting life-saving initiatives.",
  },
  {
    title: "Food Donation Camp",
    description: "PGI Food Donation Camps volunteer contributing to community care.",
  },
  {
    title: "Foundation Volunteer",
    description: "Manya Sethi Foundation volunteer supporting meaningful causes.",
  },
];

export const floatingTechs = [
  "Python",
  "Java",
  "SQL",
  "Firebase",
  "Pandas",
  "Android",
  "ML",
  "Git",
];
