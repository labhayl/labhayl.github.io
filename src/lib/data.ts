import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Layout,
  Server,
  Braces,
  Terminal,
} from "lucide-react";

export const personalInfo = {
  name: "Abhay Pratap Singh",
  title: "Full-Stack AI Developer",
  tagline: "Building production-grade LLM systems and scalable backends that drive real business impact",
  email: "abhaypratapsingh722@gmail.com",
  phone: "+91 8660823189",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/labhayl",
  linkedin: "https://linkedin.com/in/abhay-pratap-singh",
  leetcode: "https://leetcode.com/labhayl",
  hackerrank: "https://hackerrank.com/abhaypratapsingh",
};

export const about = {
  summary: `AI Developer with 2+ years of experience building production LLM systems and enterprise-grade full-stack applications. 
  At Mahindra AI, I architect solutions that have delivered INR 9+ Cr in projected annual savings—from multi-tenant RAG platforms 
  to intelligent automation tools. I specialize in bridging cutting-edge AI research with scalable software engineering, 
  turning complex requirements into shipped products.`,
  highlights: [
    "Led development of 4 production AI applications at Mahindra Group",
    "Presented to C-suite executives including Group CTO and AI CEO",
    "Conducted 100+ technical interviews for Data Science & Full-Stack roles",
    "Published NLP research achieving 71.87% SOTA accuracy",
    "LeetCode Knight (Top 4.77% globally)",
  ],
};

export const techStack = {
  languages: {
    title: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Bash"],
  },
  aiml: {
    title: "AI/ML & LLMs",
    icon: Cpu,
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "PyTorch",
      "TensorFlow",
      "OpenAI API",
      "Hugging Face",
      "LlamaIndex",
      "vLLM",
      "Scikit-learn",
    ],
  },
  frontend: {
    title: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Material UI", "Zustand", "Streamlit", "Plotly", "Tailwind CSS"],
  },
  backend: {
    title: "Backend",
    icon: Server,
    items: ["FastAPI", "Flask", "Django", "REST APIs", "Celery", "Microservices", "Elasticsearch"],
  },
  databases: {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "Pinecone", "SQLite"],
  },
  devops: {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GCP", "Azure", "CI/CD"],
  },
};

export const experiences = [
  {
    title: "AI Developer",
    company: "Mahindra & Mahindra",
    location: "Bangalore, India",
    period: "Jul 2024 – Present",
    type: "Full-time",
    highlights: [
      "Architected LLM-powered enterprise applications using LangChain & LangGraph with FastAPI microservices—driving INR 9+ Cr projected annual savings",
      "Built multi-tenant RAG platforms with hybrid semantic + Elasticsearch retrieval, containerized on Docker and deployed via Kubernetes with Jenkins CI/CD on GCP/Azure",
      "Conducted 100+ technical interviews for Data Science and Full-Stack roles; performed code reviews across production projects",
      "Presented AI projects to Mahindra Group CTO Mohit Kapoor and Mahindra AI CEO Bhuwan Lodha",
      "Led SAST/DAST security scans and cloud cost optimization; identified critical vulnerabilities in enterprise apps",
      "Mentored 9 interns (3 converted to full-time)",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "Mahindra & Mahindra",
    location: "Bangalore, India",
    period: "Jul 2023 – Jun 2024",
    type: "Trainee",
    highlights: [
      "Built MIDI bank statement OCR pipeline for Mahindra Finance: NLP extraction achieving 94% accuracy—processing 10K+ documents monthly",
      "Developed Sheet Metal Optimizer using 4 optimization models for 2D irregular polygon bin packing—minimizing material waste in manufacturing",
      "Designed LLM Engine with FastAPI and Redis, enabling 12,000+ monthly self-service queries across 4 business units",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Bosch Global Software Technologies",
    location: "Bangalore, India",
    period: "May 2023 – Jul 2023",
    type: "Internship",
    highlights: [
      "Authored MISRA C/C++ deviation analysis for safety-critical automotive code—achieved 10% reduction in compliance incidents",
      "Maintained PART & QAC 1.4 static analysis tools; shipped client-specific configuration updates",
    ],
  },
  {
    title: "AI/ML Research Intern",
    company: "Reva University (DST, Govt. of India)",
    location: "Bangalore, India",
    period: "Jan 2023 – Dec 2023",
    type: "Part-time Internship",
    highlights: [
      "Designed OCR + transliteration pipeline for Sharada Scripts (1200-year-old Kashmiri manuscript)—achieved 84% accuracy",
      "Published Sanskrit NLP research at International Sanskrit Conference 2023—record-breaking 71.87% SOTA accuracy",
      "Presented to Department of Science & Technology, contributing to digital preservation of endangered languages",
    ],
  },
];

export const projects = [
  {
    title: "SmartBudget AI",
    subtitle: "Enterprise Budget Copilot",
    description:
      "RAG pipeline for historical budget retrieval with conversational forecasting capabilities. Enables project managers to query budgets naturally and generate accurate forecasts.",
    tech: ["LangChain", "GPT-4", "Gemini", "FastAPI", "React", "PostgreSQL", "Redis"],
    impact: "Reduced PM effort by 80%, optimized project budgets by 15%",
    company: "Mahindra AI",
    github: null,
    demo: null,
  },
  {
    title: "LLM Engine",
    subtitle: "Multi-Tenant RAG Platform",
    description:
      "FastAPI microservices architecture with Elasticsearch indexing, Redis FAQ caching, and Azure AD SSO integration. Serves semantic search across multiple business verticals.",
    tech: ["FastAPI", "Elasticsearch", "Redis", "OpenAI API", "Azure AD", "Docker"],
    impact: "12,000+ monthly queries, 40-60% reduction in support resolution time",
    company: "Mahindra AI",
    github: null,
    demo: null,
  },
  {
    title: "MPlot",
    subtitle: "Vehicle Test Analytics Platform",
    description:
      "Data visualization and automated PTO report generation for highly compressed vehicle test data. Adopted by 10+ engineering teams across 5 R&D divisions.",
    tech: ["Python", "Pandas", "Plotly", "FastAPI", "React"],
    impact: "Estimated INR 5.93 Cr annual savings, 1000+ reports automated monthly",
    company: "Mahindra AI",
    github: null,
    demo: null,
  },
  {
    title: "TBMS",
    subtitle: "Test Bed Management System",
    description:
      "Intelligent scheduling algorithm with constraint-based optimization for managing test bed allocations across 8 teams efficiently.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    impact: "Realized INR 2.8 Cr savings on external testbed costs",
    company: "Mahindra AI",
    github: null,
    demo: null,
  },
  {
    title: "Kailasah",
    subtitle: "Sanskrit Sandhi Splitting Tool",
    description:
      "BiLSTM–CNN sequence labeling model for Sanskrit sandhi-viccheda (word segmentation). Open-source contribution to computational linguistics.",
    tech: ["TensorFlow", "Streamlit", "Python", "NLP", "Deep Learning"],
    impact: "71.87% SOTA accuracy, presented at International Sanskrit Conference 2023",
    company: "Research Project",
    github: "https://github.com/labhayl/kailasah",
    demo: null,
  },
  {
    title: "MIDI",
    subtitle: "Bank Statement OCR Pipeline",
    description:
      "NLP extraction engine for processing bank statements with support for 50+ formats. Handles both text and scanned documents.",
    tech: ["Python", "OCR", "NLP", "Machine Learning"],
    impact: "94% accuracy on text, 82% on scanned, 20K+ applications/month",
    company: "Mahindra Finance",
    github: null,
    demo: null,
  },
];

export const education = [
  {
    institution: "Reva University",
    degree: "B.Tech in Computer Science",
    period: "Dec 2020 – Jun 2024",
    grade: "8.7 CGPA",
  },
];

export const certifications = [
  {
    name: "Microsoft Azure Data Scientist Associate",
    issuer: "Microsoft",
    credential: "DP-100",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    credential: "AI-900",
  },
  {
    name: "Google Data Analytics Specialization",
    issuer: "Google",
    credential: "Verified",
  },
  {
    name: "IBM Data Science Specialization",
    issuer: "IBM",
    credential: "Verified",
  },
  {
    name: "LeetCode Knight",
    issuer: "LeetCode",
    credential: "Rating 1889, Top 4.77%",
  },
  {
    name: "MongoDB Python Developer Path",
    issuer: "MongoDB",
    credential: "Verified",
  },
];

export const achievements = [
  {
    title: "Guest Speaker at National Level FDP",
    description: "Conducted session on LLMs for 900+ attendees at DST-sponsored program",
    year: "2023",
  },
  {
    title: "Amazon ML Challenge - Rank 94",
    description: "Global rank 94 out of 26,008 participants",
    year: "2023",
  },
  {
    title: "AIR 4 National Quiz Competition",
    description: "Represented Eastern Air Command at Air Force Auditorium, New Delhi",
    year: "2016",
  },
];

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];