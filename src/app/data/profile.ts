/**
 * Portfolio content sourced from Nishant_kohale_pure_ai.pdf.
 * Placeholders are marked where the resume does not provide a URL or detail.
 */

export interface Profile {
  name: string;
  role: string;
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  linkedin: { label: string; url: string };
  github: { label: string; url: string };
  resumeFile: string;
  summary: string;
  headline: string;
  tagline: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Job {
  company: string;
  companyUrl: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  url: string | null;
  urlNote?: string;
  tech: string[];
  description: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  cgpa: string;
  location: string;
  period: string;
}

export interface Certification {
  title: string;
  url: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export const profile: Profile = {
  name: 'Nishant Kohale',
  role: 'Generative AI Engineer',
  location: 'Besa, Nagpur, Maharashtra — 440037',
  phone: '+91-9834988102',
  phoneHref: 'tel:+919834988102',
  email: 'nishantkohale4@gmail.com',
  emailHref: 'mailto:nishantkohale4@gmail.com',
  linkedin: {
    label: 'nishantkohale',
    url: 'https://www.linkedin.com/in/nishantk31/',
  },
  github: {
    label: 'Nishant31',
    url: 'https://github.com/nishantk31',
  },
  resumeFile: 'Nishant_Kohale_Resume.pdf',
  summary:
    'Generative AI Engineer with 4 years of experience building AI-powered applications, AI agents, and intelligent automation solutions. Hands-on with LLMs (OpenAI), RAG, LangChain, FastAPI, Python, vector databases, prompt engineering, and AI orchestration frameworks to ship production-ready systems. Focused on designing scalable, secure, and high-performance AI solutions for real-world business problems.',
  headline: 'Building production AI systems that think, retrieve, and act.',
  tagline:
    'LLMs, RAG pipelines, and agent workflows — engineered for clarity, speed, and scale.',
};

export const skills: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript'],
  },
  {
    category: 'Backend Technologies',
    items: ['Flask', 'FastAPI'],
  },
  {
    category: 'Database Management',
    items: ['Vector Database', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'AI Tools',
    items: [
      'Generative AI',
      'LangChain',
      'LangGraph',
      'AutoGen',
      'AI agent frameworks',
      'LLM Integration',
      'Prompt Engineering',
      'RAG',
    ],
  },
  {
    category: 'Containerization',
    items: ['Docker'],
  },
];

export const experience: Job[] = [
  {
    company: 'KPMG',
    companyUrl: 'https://kpmg.com/in/en.html',
    role: 'Associate Consultant',
    location: 'Ahmedabad, India',
    period: '07 / 2026 — Present',
    bullets: [
      'Working on AI and Generative AI initiatives for Gujarat Government departments to identify opportunities for intelligent automation and digital transformation.',
      'Engage with government stakeholders to gather, analyze, and document business and functional requirements.',
      'Identify and prioritize use cases where AI, Generative AI, and Agentic AI can improve operational efficiency and service delivery.',
      'Design, develop, and implement AI agents based on business requirements and government workflows.',
      'Build Proof of Concepts (PoCs) and AI-driven solutions using Large Language Models (LLMs), RAG, and Agentic AI frameworks.',
      'Evaluate existing processes and recommend AI-based solutions to automate repetitive tasks and enhance decision-making.',
      'Collaborate with cross-functional teams to integrate AI solutions with existing government applications and platforms.',
      'Present AI solution approaches, demonstrations, and implementation recommendations to stakeholders.',
      'Continuously optimize AI solutions based on user feedback, business needs, and project objectives.',
    ],
  },
  {
    company: 'Click2Cloud Inc.',
    companyUrl: 'https://www.click2cloud.com/',
    role: 'Software Development Engineer (SDE)',
    location: 'Nagpur, India',
    period: '09 / 2022 — 07 / 2026',
    bullets: [
      'Led the development of AI-powered features using Large Language Models (LLMs), improving cloud assessment workflows and increasing user engagement by 20%.',
      'Designed and implemented Retrieval-Augmented Generation (RAG) pipelines using LangChain and ChromaDB to enable accurate, context-aware responses from enterprise knowledge bases.',
      'Built AI agents with AutoGen to automate multi-step workflows, orchestrate LLM interactions, and deliver real-time intelligent responses.',
      'Integrated OpenAI models for document understanding, intelligent recommendations, summarization, and conversational AI capabilities.',
      'Developed scalable AI backend services using Python and FastAPI for model inference, prompt orchestration, and AI workflow automation.',
      'Engineered vector search solutions with ChromaDB to improve semantic search performance, retrieval accuracy, and response relevance.',
      'Optimized prompt engineering, context management, and retrieval strategies to enhance LLM response quality while reducing latency and token usage.',
      'Collaborated with cross-functional teams to design, deploy, and maintain production-ready Generative AI applications, while actively participating in code reviews and ensuring high-quality engineering standards.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Cloud Intel',
    url: 'https://cloudsintel.com/',
    tech: [
      'Python',
      'FastAPI',
      'OpenAI',
      'LangChain',
      'AutoGen',
      'ChromaDB',
      'FAISS',
      'RAG',
      'Vector Database',
    ],
    description:
      'Generative AI capabilities for a cloud assessment platform — automating migration analysis, asset assessment, and intelligent recommendations.',
    bullets: [
      'Developed and integrated Generative AI capabilities into a cloud assessment platform to automate cloud migration analysis, asset assessment, and intelligent recommendation generation.',
      'Built Retrieval-Augmented Generation (RAG) pipelines using LangChain and ChromaDB for accurate, context-aware responses from enterprise knowledge bases.',
      'Designed and implemented AI agents using AutoGen to automate multi-step workflows, orchestrate LLM interactions, and deliver intelligent task execution.',
      'Integrated OpenAI LLMs for document analysis, report generation, conversational AI, and cloud migration recommendations.',
      'Developed scalable AI services using Python and FastAPI for model inference, prompt orchestration, and AI workflow automation.',
      'Engineered semantic search using vector embeddings and ChromaDB to improve knowledge retrieval accuracy and reduce response latency.',
      'Optimized prompt engineering, retrieval strategies, and context management to improve LLM response quality and operational efficiency.',
      'Collaborated with cross-functional teams in an Agile environment to design, deploy, and enhance production-ready AI solutions.',
    ],
  },
  {
    title: 'HealthVision',
    url: null,
    urlNote: '[Link unavailable — not listed on resume]',
    tech: ['ChromaDB', 'AutoGen', 'Python', 'Streamlit'],
    description:
      'Multi-agent chatbot that stores knowledge as vectors and uses generative AI for intelligent, personalized answers.',
    bullets: [
      'Developed a chatbot using ChromaDB for vector database storage and the AutoGen library for agent-based workflows.',
      'Built a system that stores knowledge in vectors and leverages generative AI to provide intelligent answers to users.',
      'Created multiple AI agents with distinct purposes, working together to optimize chatbot responses based on user queries.',
      'Designed a flexible agent-based workflow so each agent handles specific tasks for smooth, personalized interactions.',
      'Integrated AutoGen and ChromaDB for efficient, accurate data retrieval and real-time responses across diverse queries.',
    ],
  },
  {
    title: 'User Authentication System',
    url: 'https://github.com/nishantk31/node_authentication',
    tech: ['Node.js', 'PostgreSQL', 'Express', 'JWT', 'bcrypt'],
    description:
      'Secure, scalable authentication with registration, login, JWT protection, and role-based access control.',
    bullets: [
      'Developed a secure and scalable user authentication system using Node.js, Express, and PostgreSQL with registration, login, and role-based access control for protected routes.',
      'Password security: used bcrypt for hashing passwords to protect user credentials.',
      'JWT authentication: integrated JSON Web Tokens with middleware for secure, token-based route protection.',
      'RESTful API: designed endpoints for user registration, login, and access to protected routes.',
    ],
  },
];

export const education: Education = {
  school: 'G.H. Raisoni College of Engineering',
  degree: 'Bachelor of Engineering (ETC)',
  cgpa: '8.64',
  location: 'Nagpur, Maharashtra',
  period: '06 / 2018 — 06 / 2022',
};

export const certifications: Certification[] = [
  {
    title: 'Cambridge Business English Certificate Preliminary',
    url: 'https://drive.google.com/file/d/1MSZmDjNgFXbeNacxo-2bcsoBeR1180ms/view?usp=drive_link',
  },
  {
    title: 'Claude with the Anthropic API',
    url: 'https://verify.skilljar.com/c/ferciyk2dv6q',
  },
  {
    title: 'JavaScript — Basics to Advanced (Udemy)',
    url: 'https://www.udemy.com/certificate/UC-db5c2462-14c8-45ee-82b1-1140f9d5b8f2/?utm_medium=email&utm_campaign=email&utm_source=sendgrid.com',
  },
  {
    title: 'Introduction to Python Programming (Udemy)',
    url: 'https://www.udemy.com/certificate/UC-SK11MEB6/',
  },
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
