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
  title: "Software Engineer • Backend & Platform • AI Infrastructure",
  tagline:
    "Building production backend systems, data pipelines, and AI platforms that power enterprise-scale retrieval, ingestion, and inference at scale",
  email: "abhaypratapsingh722@gmail.com",
  phone: "+91 8660823189",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/labhayl",
  linkedin: "https://linkedin.com/in/abhay-pratap-singh",
  leetcode: "https://leetcode.com/labhayl",
};

export const about = {
  summary: `Software Engineer focused on backend platforms, distributed systems, and AI infrastructure. I build production data pipelines, retrieval systems, and microservices that power enterprise AI applications.
  Currently at Cisco, working on document ingestion, vector search indexing, and Go backend services. Previously at Mahindra, I delivered multi-tenant LLM platforms, analytics tools, and copilots with measurable impact across 1,200+ users.`,
  highlights: [
    "Developing Go microservices and ingestion pipelines for enterprise AI platforms at Cisco",
    "Delivered multi-tenant RAG and LLM platforms with 35% latency and 28% cost improvements",
    "Built analytics and copilot tools serving 1,200+ enterprise users",
    "Developed OCR pipelines processing 10K+ documents/month at 94% accuracy",
    "Published NLP research achieving 71.87% SOTA accuracy",
    "LeetCode Global Rank 283 (Biweekly Contest 98)",
  ],
};

export const techStack = {
  languages: {
    title: "Languages",
    icon: Code2,
    items: ["Python", "Go", "JavaScript", "TypeScript", "Java", "SQL", "Bash"],
  },
  backend: {
    title: "Backend & APIs",
    icon: Server,
    items: ["FastAPI", "Flask", "gRPC", "REST APIs", "Microservices", "Celery"],
  },
  dataAi: {
    title: "Data & AI Platforms",
    icon: Cpu,
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Search",
      "OpenAI API",
      "Scrapy",
      "Playwright",
      "Temporal",
    ],
  },
  distributed: {
    title: "Distributed Systems",
    icon: Cloud,
    items: [
      "Kubernetes",
      "Redis",
      "Kafka",
      "Docker",
      "Caching",
      "Multi-Tenant Architectures",
    ],
  },
  frontend: {
    title: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Plotly", "Tailwind CSS", "Streamlit"],
  },
  databases: {
    title: "Cloud & Data Stores",
    icon: Database,
    items: ["PostgreSQL", "Redis", "Elasticsearch", "AWS S3", "GCP", "Azure"],
  },
};

export const experiences = [
  {
    title: "Software Engineer",
    company: "Cisco",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    type: "Full-time",
    highlights: [
      "Develop Go backend microservices (gRPC, PostgreSQL, cloud object storage) with tenant-scoped APIs for enterprise AI assistant platforms",
      "Engineer large-scale documentation ingestion and vector indexing pipelines that power RAG-based product assistants",
      "Harden production ETL workflows against upstream schema drift, preventing single-source failures from blocking full ingestion runs",
      "Refactor data pipeline architecture across 70+ ingestion modules, removing redundant abstractions and standardizing error handling",
    ],
  },
  {
    title: "Software Engineer (AI & Data Platforms)",
    company: "Mahindra & Mahindra",
    location: "Bangalore, India",
    period: "Jul 2024 – Jun 2026",
    type: "Full-time",
    highlights: [
      "Designed and led development of a multi-tenant AI platform powering enterprise LLM applications, achieving 35% latency reduction and 28% cost savings",
      "Engineered scalable inference and retrieval systems with LangGraph orchestration, semantic search, vector indexing, and Redis-based caching",
      "Created SmartBudget AI copilot reducing manual budget effort by 80% and improving optimization by 15%",
      "Led MPlot analytics platform serving 1,200+ users with INR 6.23 Cr annual savings",
      "Established observability and developer tooling; deployed platform services on Kubernetes across GCP and Azure",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "Mahindra & Mahindra",
    location: "Bangalore, India",
    period: "Jul 2023 – Jun 2024",
    type: "Trainee",
    highlights: [
      "Developed an OCR-based document processing pipeline handling 10K+ documents/month with 94% extraction accuracy",
      "Designed LLM Engine with FastAPI and Redis, enabling 12,000+ monthly self-service queries across 4 business units",
      "Built MIDI bank statement ML pipeline for finance workflows—94% accuracy on text extraction, 20K+ applications monthly",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Bosch Global Software Technologies",
    location: "Bangalore, India",
    period: "May 2023 – Jul 2023",
    type: "Internship",
    highlights: [
      "Performed static analysis on safety-critical automotive software systems, improving compliance validation and debugging workflows",
      "Authored MISRA C/C++ deviation analysis achieving 10% reduction in compliance incidents",
    ],
  },
  {
    title: "AI/ML Research Intern",
    company: "Reva University (DST, Govt. of India)",
    location: "Bangalore, India",
    period: "Jan 2023 – Dec 2023",
    type: "Part-time Internship",
    highlights: [
      "Designed OCR + transliteration pipeline for Sharada Scripts—achieved 84% accuracy using deep learning and computer vision",
      "Published Sanskrit NLP research at International Sanskrit Conference 2023—71.87% SOTA accuracy using BiLSTM-CNN sequence labeling",
      "Presented to Department of Science & Technology, contributing to digital preservation of endangered languages",
    ],
  },
];

export const projects = [
  {
    title: "SmartBudget AI",
    subtitle: "Enterprise Budget Copilot",
    description:
      "RAG pipeline for historical budget retrieval with conversational forecasting. Enables project managers to query budgets naturally and generate accurate forecasts using LLMs.",
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
      "Multi-tenant RAG platform with FastAPI microservices, Elasticsearch indexing, Redis caching, and tenant-scoped retrieval orchestration across business verticals.",
    tech: ["FastAPI", "LangGraph", "Elasticsearch", "Redis", "OpenAI API", "Docker"],
    impact: "12,000+ monthly queries, 40–60% reduction in support resolution time",
    company: "Mahindra AI",
    github: null,
    demo: null,
  },
  {
    title: "MPlot",
    subtitle: "Vehicle Test Analytics Platform",
    description:
      "Data visualization and automated PTO report generation for highly compressed vehicle test datasets used in enterprise engineering workflows.",
    tech: ["Python", "Pandas", "Plotly", "FastAPI", "React"],
    impact: "1,200+ users, INR 6.23 Cr annual savings, 1,000+ reports automated monthly",
    company: "Mahindra AI",
    github: null,
    demo: null,
  },
  {
    title: "MIDI",
    subtitle: "Bank Statement ML Pipeline",
    description:
      "End-to-end ML pipeline for extracting and classifying transactional data from scanned bank statements. Supports 50+ formats with NLP-based extraction.",
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
      "Constraint-based scheduling and optimization for managing test bed allocations across engineering teams.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    impact: "INR 2.8 Cr savings on external testbed costs",
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
    period: "2020 – 2024",
    grade: "8.7 CGPA",
    type: "university",
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Secondary (Class VI - XII)",
    period: "2012 – 2020",
    grade: "XII - 90%",
    type: "school",
  },
  {
    institution: "The Air Force School, Subroto Park",
    degree: "Primary & Middle School",
    period: "2008 – 2012",
    grade: "",
    type: "school",
  },
];

export const certifications = [
  {
    name: "Microsoft Azure Data Scientist Associate",
    issuer: "Microsoft",
    credential: "DP-100",
  },
  {
    name: "LeetCode Biweekly Contest 98",
    issuer: "LeetCode",
    credential: "Global Rank 283",
  },
  {
    name: "Google Data Analytics Specialization",
    issuer: "Google",
    credential: "Verified",
  },
  {
    name: "Amazon ML Challenge",
    issuer: "Amazon",
    credential: "Global Rank 94 / 26,008",
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
