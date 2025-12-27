import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Layout,
  Server,
} from "lucide-react";

export const personalInfo = {
  name: "Abhay Pratap Singh",
  title: "Full-Stack AI Developer • Data Scientist • ML Engineer",
  tagline: "Building production-grade LLM systems, ML pipelines, and scalable full-stack applications that drive real business impact",
  email: "abhaypratapsingh722@gmail.com",
  phone: "+91 8660823189",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/labhayl",
  linkedin: "https://linkedin.com/in/abhay-pratap-singh",
  leetcode: "https://leetcode.com/labhayl",
  hackerrank: "https://hackerrank.com/abhaypratapsingh",
};

export const about = {
  summary: `AI/ML Engineer and Full-Stack Developer with 2+ years of experience building production LLM systems, ML pipelines, and enterprise-grade applications. 
  At Mahindra AI, I architect end-to-end solutions—from data extraction and model development to deployment and scaling—delivering INR 9+ Cr in projected annual savings. 
  I thrive at the intersection of Data Science, Machine Learning, and Software Engineering, turning complex data problems into shipped products that scale.`,
  highlights: [
    "Led development of 4 production AI/ML applications at Mahindra Group",
    "Built ML pipelines processing 20K+ documents monthly with 94% accuracy",
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
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Bash", "R"],
  },
  aiml: {
    title: "AI/ML & Data Science",
    icon: Cpu,
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenAI API",
      "Hugging Face",
      "LlamaIndex",
      "vLLM",
      "Pandas",
      "NumPy",
      "Keras",
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
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GCP", "Azure", "CI/CD", "MLOps"],
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
      "Built MIDI bank statement OCR pipeline for Mahindra Finance: ML-based extraction achieving 94% accuracy on text, 82% on scanned documents—processing 20K+ applications monthly",
      "Developed Sheet Metal Optimizer using 4 optimization algorithms (Bottom-Left, Heuristic Greedy, Minkowski NFP, Genetic Algorithm) for 2D irregular polygon bin packing",
      "Designed LLM Engine with FastAPI and Redis, enabling 12,000+ monthly self-service queries across 4 business units with 40-60% reduction in support resolution time",
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
      "Designed OCR + transliteration pipeline for Sharada Scripts (1200-year-old Kashmiri manuscript)—achieved 84% accuracy using deep learning and computer vision",
      "Published Sanskrit NLP research at International Sanskrit Conference 2023—record-breaking 71.87% SOTA accuracy using BiLSTM-CNN sequence labeling",
      "Presented to Department of Science & Technology, contributing to digital preservation of endangered languages",
    ],
  },
];

export const projects = [
  {
    title: "SmartBudget AI",
    subtitle: "Enterprise Budget Copilot",
    description:
      "RAG pipeline for historical budget retrieval with conversational forecasting capabilities. Enables project managers to query budgets naturally and generate accurate forecasts using LLMs.",
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
    title: "MIDI",
    subtitle: "Bank Statement ML Pipeline",
    description:
      "End-to-end ML pipeline for extracting and classifying transactional data from scanned bank statements. Supports 50+ formats with NLP-based extraction engine.",
    tech: ["Python", "OCR", "NLP", "Scikit-learn", "TensorFlow"],
    impact: "94% accuracy, 20K+ applications/month, 65% reduction in manual underwriting",
    company: "Mahindra Finance",
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
      "BiLSTM–CNN sequence labeling model for Sanskrit sandhi-viccheda (word segmentation). Open-source contribution to computational linguistics and NLP research.",
    tech: ["TensorFlow", "Keras", "Streamlit", "Python", "NLP", "Deep Learning"],
    impact: "71.87% SOTA accuracy, presented at International Sanskrit Conference 2023",
    company: "Research Project",
    github: "https://github.com/labhayl/kailasah",
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