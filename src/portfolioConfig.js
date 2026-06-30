export const portfolioConfig = {
  personalInfo: {
    name: "Hemant Rajput",
    title: "Full-Stack Java Developer",
    subtitle: "B.Tech CSE Student & Tech Enthusiast",
    intro: "Building scalable backend services in Java / Spring Boot and crafting immersive frontend interfaces in React. Designing modern, cloud-first web solutions.",
    email: "hemant.rajput@example.com",
    github: "https://github.com/hemantrajput",
    linkedin: "https://linkedin.com/in/hemantrajput",
    location: "India",
  },
  about: {
    description: "I am a B.Tech Computer Science and Engineering student with a strong passion for software engineering. As an aspiring Full-Stack Java Developer, I bridge the gap between robust, enterprise-grade backend systems and visually stunning, fluid user experiences. I love resolving complex algorithmic challenges, designing efficient database schemas, and building clean, testable codebases. My goal is to build software that makes a real-world impact.",
    stats: [
      { id: "stat-projects", label: "Projects Built", value: "12+" },
      { id: "stat-leetcode", label: "LeetCode Solved", value: "350+" },
      { id: "stat-commits", label: "Git Commits", value: "800+" },
      { id: "stat-coffee", label: "Cups of Coffee", value: "∞" }
    ]
  },
  skills: [
    {
      category: "Backend Development",
      items: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Spring MVC & Security", level: 75 },
        { name: "Hibernate / JPA", level: 80 }
      ]
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 80 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 }
      ]
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "E-Commerce Cloud Engine",
      description: "A microservices-based e-commerce backend built with Spring Boot, Spring Cloud, Hibernate, and MySQL. Features Eureka registry, API Gateway, JWT auth, and RabbitMQ message broker for order processing.",
      tech: ["Spring Boot", "Spring Cloud", "MySQL", "Docker", "RabbitMQ"],
      github: "https://github.com",
      live: "https://demo.example.com",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "project-2",
      title: "CollabTask - Kanban Board",
      description: "A real-time collaborative task management app with React, Node.js, Spring Boot, and WebSockets. Includes drag-and-drop workspace, activity logs, and real-time team notifications.",
      tech: ["React", "Spring Boot", "WebSockets", "MongoDB", "Framer Motion"],
      github: "https://github.com",
      live: "https://demo.example.com",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: "project-3",
      title: "Finance Tracker Dashboard",
      description: "Personal finance visualization platform with Spring Boot REST API, React UI, Chart.js, and MySQL. Offers bank transaction importing, category budget tracking, and financial forecast reporting.",
      tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.example.com",
      gradient: "from-emerald-600 to-teal-600"
    }
  ],
  timeline: [
    {
      id: "time-1",
      year: "2023 - Present",
      title: "B.Tech in Computer Science & Engineering",
      institution: "Technical University",
      description: "Maintaining a 9.1 CGPA. Core coursework includes Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
      type: "education"
    },
    {
      id: "time-2",
      year: "Summer 2025",
      title: "Full-Stack Developer Intern",
      institution: "TechSol Solutions",
      description: "Migrated legacy JSP codebase to a React + Spring Boot API architecture, increasing page rendering speed by 40%. Implemented secure role-based JWT authentication.",
      type: "experience"
    },
    {
      id: "time-3",
      year: "2024 - 2025",
      title: "Smart India Hackathon Finalist",
      institution: "Government of India Initiative",
      description: "Led a 6-member team to design and pitch an AI-driven drug inventory forecasting system. Developed the backend framework using Spring Boot.",
      type: "achievement"
    }
  ]
};
