// ============================================================
//  DATA FILE — Uday Kumar Portfolio Data
// ============================================================

export const personalData = {
  name: "N UdayaKumar",
  role: "Full Stack Developer",
  tagline: "Engineering premium, high-performance web applications with Java and the MERN Stack.",
  bio1: "I am a graduate in Information Science & Engineering with a passion for constructing scalable, developer-first systems. Combining full-stack MERN expertise with robust backend Java Spring Boot principles, I focus on engineering clean architectures, optimizing database queries, and designing responsive, immersive frontends.",
  bio2: "With hands-on experience building real-time systems like emergency location-trackers and collaborative video environments, I focus on code performance, real-world utility, and clean API design. I look to build features that matter and scale effectively.",
  email: "uday.ise.rymec@gmail.com",
  phone: "+91 8431683119",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/NUDAYAKUMAR",
  linkedin: "https://www.linkedin.com/in/n-udayakumar-b7b434369/",
  resumeUrl: "/N_Udayakumar_ATS_Resume.pdf", // Place ATS resume in public folder
  availableForWork: true,
};

export const statsData = [
  { num: "2", label: "Internships Completed" },
  { num: "8.74", label: "B.E. Graduation CGPA" },
  { num: "10K+", label: "Lines of Code Written" },
  { num: "5+", label: "Production-Grade Projects" },
];

export const coreSkillTags = [
"Java Spring Boot","MERN Stack", "Data Structures", "Algorithms",
"OOP", "DBMS", "Operating Systems", "Computer Networks", "Problem Solving",
"Socket.io", "REST APIs", "MySql", "WebRTC", 
  "System Architecture", "Git Version Control"
];

export const skillsData = [
  { name: "Java",         icon: "☕", level: 90, color: "#f89820", category: "Languages" },
  { name: "Python",       icon: "🐍", level: 75, color: "#3776ab", category: "Languages" },
  { name: "MySQL",  icon: "🐬", level: 82, color: "#00758f", category: "Backend" },
  { name: "HTML & CSS",   icon: "🌐", level: 90, color: "#264de4", category: "Frontend" },
  { name: "React.js",     icon: "⚛",  level: 90, color: "#61dafb", category: "Frontend" },
  { name: "JavaScript",   icon: "⚡", level: 88, color: "#f7df1e", category: "Languages" },
  { name: "Socket.io",    icon: "🔌", level: 84, color: "#010101", category: "Tools" },
  { name: "Node.js",      icon: "🟢", level: 85, color: "#68a063", category: "Backend" },
  { name: "Express.js",   icon: "🚀", level: 82, color: "#888888", category: "Backend" },
  { name: "JWT Auth",     icon: "🔑", level: 86, color: "#e34c26", category: "Tools" },
  { name: "Git & GitHub", icon: "🔧", level: 85, color: "#f05032", category: "Tools" },
];

export const projectsData = [
  {
     id: 1,
  title: "VHelp – Vehicle Support System",
  desc: "A full-stack vehicle support platform built using Java Spring Boot and React.js to provide emergency roadside assistance. The system enables users to request vehicle support, locate nearby service providers, communicate in real time, and securely manage services through role-based access control.",

  bullets: [
    "Developed RESTful APIs using Java Spring Boot for user authentication, service requests, and vehicle management.",
    "Implemented JWT-based authentication and role-based access control for Users, Service Providers, and Administrators.",
    "Integrated Socket.io and WebRTC to enable real-time chat and video communication between users and service providers.",
    "Designed and managed the MySQL database using Hibernate/JPA and connected a responsive React.js frontend with backend services."
  ],

  tech: [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "Hibernate",
    "JPA",
    "JWT",
    "REST APIs",
    "Socket.io",
    "WebRTC",
    "Git",
    "Postman"
  ],

  gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  icon: "🚗",

  demo: "https://github.com/NUDAYAKUMAR",
  github: "https://github.com/NUDAYAKUMAR",

  metrics: [
    { label: "Architecture", value: "Full Stack" },
    { label: "Authentication", value: "JWT + RBAC" },
    { label: "Communication", value: "Real World" }
  ]
  },
  {
    id: 2,
    title: "HireTrack – Online Interview & Collaboration Platform",
    desc: "A collaborative technical screening platform that replicates physical interviews online. Provides developers with code editors, whiteboard sync, and integrated peer-to-peer audio-video calls.",
    bullets: [
      "Integrated WebRTC and Socket.io for low-latency peer-to-peer video streaming and instant whiteboarding sync.",
      "Created a robust in-browser code editor supporting syntax highlighting and real-time multiplayer code sharing.",
      "Built automated session scheduling, candidate logs, and visual activity monitors to track candidate progress.",
      "Designed secure JWT-based workspace authentication preventing unauthorized session breaches."
    ],
    tech: ["React.js", "Node.js", "Socket.io", "WebRTC", "Express.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    icon: "🎯",
    demo: "https://hire-track-two.vercel.app/",
    github: "https://github.com/NUDAYAKUMAR/HireTrack",
    metrics: [
      { label: "Video Stream Latency", value: "<150ms" },
      { label: "Code Synchronization", value: "Real-time" },
      { label: "Candidate Uptime", value: "99.9%" }
    ]
  },
  {
    id: 3,
    title: "KCET College Predictor – AI-Powered Admission System",
    desc: "An admission analysis platform predicting college allocation chances using past trends and machine learning algorithms. Helps high-school students evaluate their engineering seat eligibility.",
    bullets: [
      "Trained a Linear Regression machine learning model yielding over 90%+ prediction accuracy on college cutoffs.",
      "Processed over 5 year's historical seat matrices, sorting college listings by engineering streams, categories, and rankings.",
      "Constructed a responsive filterable frontend allowing users to query, download, and bookmark prediction reports.",
      "Optimized query runtimes down to under 50ms through index caching and payload minification."
    ],
    tech: ["React.js", "Python", "Linear Regression", "Scikit-Learn", "Flask", "SQL"],
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    icon: "🤖",
    demo: "https://kcet-college-predictor-ten.vercel.app/",
    github: "https://github.com/NUDAYAKUMAR",
    metrics: [
      { label: "ML Model Accuracy", value: "90%+" },
      { label: "Data Records Parsed", value: "10K+" },
      { label: "Response Latency", value: "<50ms" }
    ]
  },
  {
  id: 4,
  title: "Electrician Contractor Management System",
  desc: "Developed these projects using AI tools and prompt engineering. Despite having only basic Python knowledge, My goal was to learn Git, GitHub, deployment, debugging, and the end-to-end development",
  bullets: [
    "A Python-based contractor management platform designed to streamline electrician operations by managing jobs, task assignments, materials, and workforce through a centralized dashboard.",
    "Developed a Flask-based web application with complete CRUD functionality for managing electricians, jobs, materials, and task assignments.",
    "Implemented job scheduling with location, deadlines, priority levels, and status tracking to improve project coordination.",
    "Built modules for material inventory management, enabling tracking, updates, and allocation of resources for ongoing projects.",
    "Designed an intuitive dashboard with dynamic frontend-backend synchronization, allowing administrators to efficiently monitor workforce productivity and project progress."
  ],
  tech: [
    "Antigravity",
    "Render",
    "Netlify",
    "Python",
    "Flask",
    "SQLite",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Jinja2"
  ],
  gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
  icon: "⚡",
  demo: "https://electrician-contractor-management.netlify.app/",
  github: "https://github.com/NUDAYAKUMAR/Electrician_Monitoring",
  metrics: [
    { label: "Management Modules", value: "4" },
    { label: "CRUD Operations", value: "100%" },
    { label: "Database", value: "SQLite" }
  ]
},

{
  id: 5,
  title: "Food Rescue – Flood Relief Distribution System",
  desc: "Developed these projects using AI tools and prompt engineering. Despite having only basic Python knowledge, My goal was to learn Git, GitHub, deployment, debugging, and the end-to-end development",
  bullets: [
    "A Python-powered emergency response platform that connects volunteers, NGOs, donors, and affected families to coordinate food distribution efficiently during floods and natural disasters.",
    "Developed a centralized relief management system allowing affected people to submit food requests while volunteers and NGOs coordinate emergency deliveries.",
    "Implemented request prioritization, relief center management, and volunteer assignment to ensure timely distribution of essential supplies.",
    "Built an administrative dashboard to monitor donations, inventory, request status, volunteer activities, and relief operations in real time.",
    "Designed a responsive user interface with secure authentication and efficient backend processing to support multiple concurrent emergency requests."
  ],
  tech: [
    "Antigravity",
    "Render",
    "Netlify",
    "Python",
    "Flask",
    "SQLite",
    "HTML5",
    "CSS3",
    "JavaScript"
  ],
  gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
  icon: "🌊",
  demo: "YOUR_DEPLOYMENT_LINK",
  github: "https://github.com/NUDAYAKUMAR",
  metrics: [
    { label: "User Roles", value: "4" },
    { label: "Core Modules", value: "8+" },
    { label: "Emergency Support", value: "24/7" }
  ]
}
];

export const experienceData = [
  {
    title: "Java Full Stack Developer Intern",
    company: "Tap Academy",
    period: "Jan 2026 – Present · Bangalore, India",
    type: "Full Stack (Java & React)",
    achievements: [
      "<strong>Developed the VHelp Vehicle Support System using Java Spring Boot, React.js, and MySQL.",
      "Built and integrated RESTful APIs for user authentication, vehicle management, and service request modules.",
      "Implemented JWT-based authentication and role-based access control for secure application access.",
      "Integrated Socket.io and WebRTC to provide real-time chat and video calling between users and service providers.",
      "Designed and managed MySQL databases using Hibernate/JPA and tested APIs using Postman.",
      "Used Git and GitHub for version control throughout the development lifecycle."  ],
  },
  {
    title: "MERN Stack Developer Intern",
    company: "SuprMentr · Remote",
    period: "Jan 2026 – May 2026 · Internship",
    type: "MERN Stack Developer",
    achievements: [
      "Developed HireTrack using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      "Built responsive React.js interfaces and integrated RESTful APIs for seamless frontend-backend communication.",
      "Implemented secure JWT-based authentication and role-based access control for recruiters and job seekers.",
      "Designed MongoDB schemas and developed Express.js APIs for job postings, applications, and user management.",
      "Integrated file upload functionality for resumes and profile management.",
      "Used Git and GitHub for version control and Postman for API testing and debugging." ],
  }
];

export const targetRoles = [
  "Software Engineer (Java Full Stack)",
  // "Full Stack Developer (MERN Stack)",
  "Java Backend Developer",
  "Associate Software Engineer",
];

export const targetLocations = ["Bangalore", "Hyderabad", "Remote"];

export const educationData = [
  {
    degree: "B.E. in Information Science & Engineering",
    school: "RYMEC, VTU University",
    year: "2022 – 2026",
    grade: "CGPA: 8.74 / 10",
    Percent : "83.92",
    icon: "🎓",
    desc: "Specialized in Software Engineering, Database Systems, Web Tech, and Data Structures. Elected Tech Coordinator for departmental symposium.",
  },
  {
    degree: "Pre-University College (PCMB)",
    school: "Prabhavitum P U College, Raichur, Karnataka",
    year: "2020 – 2022",
    grade: "Percentage: 79.89%",
    icon: "📘",
    desc: "Focus on Physics, Chemistry, Mathematics, and Biology",
  }
];

export const achievementsData = [
  {
    icon: "🏆",
    title: "VHelp Project Distinction",
    desc: "Selected among the Top 126 State-Level Projects from 10,000+ submissions and shortlisted for the State-Level Project Exhibition, recognized for its real-time vehicle tracking and roadside assistance solution.", 
    accentColor: "rgba(59, 130, 246, 0.08)",
    borderColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: "🥇",
    title: "Team Lead",
    desc: "Led the development team in designing, developing, and integrating full-stack features for the HireTrack (MERN) and VHelp (Java Spring Boot) projects. Coordinated task distribution, code integration, and project delivery while ensuring collaboration across frontend and backend modules.",
    accentColor: "rgba(16, 185, 129, 0.08)",
    borderColor: "rgba(16, 185, 129, 0.25)",
  }
];

export const navLinks = [
  { label: "Home",        href: "#hero" },
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Projects",    href: "#projects" },
  { label: "Journey",     href: "#journey" },
  { label: "Contact",     href: "#contact" },
];
