// Pre-built AI responses based on Huzaifa's resume
// The chat simulates AI by matching keywords and returning contextual responses

interface QAEntry {
  keywords: string[];
  response: string;
}

const qaDatabase: QAEntry[] = [
  {
    keywords: ["who are you", "about you", "about yourself", "yourself", "introduce", "who is huzaifa"],
    response:
      "I'm Huzaifa Athar — a Technical Leader, Full Stack Developer & AI Engineer with 5+ years of experience. I don't just build software — I lead teams, manage client relationships, and own the full lifecycle from project acquisition to deployment and maintenance.\n\nI've scaled products across 3 companies, led cross-functional teams, and shipped 10+ production products. I specialize in Django, React, Next.js, and AI-integrated systems including chatbot platforms and voice agents.\n\nWhether it's an individual project or coordinating multiple teams — I plan it, execute it, and deliver it at the highest standard.",
  },
  {
    keywords: ["experience", "work", "job", "career", "history", "company"],
    response:
      "I have 5+ years of professional experience across three companies:\n\n**DigitLabs** (Sept 2024 - Present) — Full Stack Engineer\nBuilding AI-powered chatbot platforms, analytics dashboards, and battery testing logistics backends using Django, Celery, Redis, and PostgreSQL.\n\n**MTP** (Feb 2022 - Aug 2024) — Software Engineer\nDeveloped backend services in Django & FastAPI, built frontends with React & Next.js, and managed AWS deployments across multiple products.\n\n**Codegic** (Aug 2020 - Feb 2022) — Associate Software Engineer\nLed frontend development with React, built reusable components, and collaborated in Agile workflows.",
  },
  {
    keywords: ["skill", "tech", "stack", "technology", "language", "framework", "tool"],
    response:
      "Here's my tech stack:\n\n**Languages & Frameworks:** Python, JavaScript, TypeScript, Django, FastAPI, React.js, Next.js, Redux, HTML, CSS\n\n**Databases:** PostgreSQL, MySQL, MongoDB, Redis\n\n**Cloud & AI:** AWS (EC2, S3, Bedrock, CloudWatch), GCP, Azure, Docker\n\n**Other:** Celery, WebSockets, Git, Material UI, Tailwind CSS\n\n**Soft Skills:** Effective communication, collaboration, problem-solving, and adaptability.",
  },
  {
    keywords: ["django", "python", "backend", "api"],
    response:
      "Django and Python are at the core of my backend expertise. I've built and maintained RESTful APIs, implemented async task processing with Celery & Redis, designed analytics dashboards, and optimized PostgreSQL query performance. At DigitLabs, I developed the entire backend for an AI-powered chatbot platform using Django. I also have strong experience with FastAPI for performance-critical microservices.",
  },
  {
    keywords: ["react", "next", "frontend", "ui", "javascript", "typescript"],
    response:
      "I have extensive frontend experience with React.js and Next.js. I've built responsive, user-friendly interfaces across multiple products, implemented reusable component libraries, and worked with Redux for state management. I'm proficient in TypeScript, ES6+, Material UI, and modern CSS. This portfolio itself is built with Next.js and Tailwind CSS!",
  },
  {
    keywords: ["ai", "chatbot", "machine learning", "ml"],
    response:
      "I've worked extensively on AI-integrated products:\n\n**At DigitLabs:** Built the backend for an AI-powered chatbot platform — APIs for LLM communication, document-based contextual input, and analytics dashboards.\n\n**AI Voice Agents:** I've also developed conversational AI voice agents including a **Dental Receptionist AI** that handles patient calls and FAQs, and an **Appointment Booking Agent** that schedules, reschedules, and cancels appointments via voice with calendar integration.\n\nMy final year project was in Machine Learning & Image Processing.",
  },
  {
    keywords: ["voice agent", "voice agents", "ai voice", "voice", "agent", "dental", "receptionist", "appointment", "booking", "call"],
    response:
      "I've built AI-powered voice agents that handle real phone conversations:\n\n**Dental Receptionist AI** — Handles incoming calls for dental clinics, greeting patients, answering FAQs about services, hours, and insurance, and intelligently routing calls to the right department. Available 24/7.\n\n**Appointment Booking Agent** — A conversational AI that schedules, reschedules, and cancels appointments via voice. It integrates with calendar systems, handles time zone logic, and sends automated confirmations.\n\nBoth agents feature natural conversation flow, context awareness, and seamless handoff to human staff when needed.",
  },
  {
    keywords: ["education", "degree", "university", "college", "study"],
    response:
      "I hold a **Bachelor's Degree in Computer Science** from the University of Central Punjab, Lahore, Pakistan. My final year project focused on Machine Learning & Image Processing. Prior to that, I completed my F.Sc Pre-Engineering from Punjab Group of Colleges, Lahore.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "connect"],
    response:
      "I'd love to connect! Here's how you can reach me:\n\n**Email:** huzaifaathar1@gmail.com\n**LinkedIn:** linkedin.com/in/huzaifa-athar-b048a2120\n**Phone:** +92-323-4125331\n\nFeel free to reach out for collaborations, opportunities, or just a tech chat!",
  },
  {
    keywords: ["project", "portfolio", "built", "created", "developed"],
    response:
      "Throughout my career, I've worked on diverse projects:\n\n- **AI Chatbot Platform** — Full backend with Django, document uploads, contextual AI responses, and analytics dashboards\n- **AI Voice Agents** — Dental Receptionist AI & Appointment Booking Agent with natural conversation flow\n- **Battery Testing Logistics Platform** — Django/PostgreSQL backend with multiple external API integrations\n- **Multiple SaaS Products at MTP** — Full-stack apps with Django/FastAPI backends and React/Next.js frontends\n- **Frontend Modules at Codegic** — Reusable React component libraries across multiple products\n\nEach project involved end-to-end development from design to AWS deployment.",
  },
  {
    keywords: ["aws", "deploy", "cloud", "devops", "docker", "gcp", "bedrock", "google cloud"],
    response:
      "I have hands-on experience with cloud platforms and DevOps:\n\n- **AWS:** EC2, S3, CloudWatch, and **Bedrock** for managed AI/ML model access\n- **GCP:** Google Cloud Platform for scalable cloud infrastructure\n- **Azure:** Additional cloud platform experience\n- **Docker:** Containerized applications for consistent deployments\n- **Git/GitHub:** Version control and collaborative development\n\nI've managed deployments across AWS and GCP, resolving issues promptly to maintain optimal performance and scalability.",
  },
  {
    keywords: ["digitlabs", "current"],
    response:
      "At **DigitLabs** (Sept 2024 - Present), I'm working as a Full Stack Engineer where I:\n\n- Built the backend for an AI-powered chatbot platform using Django\n- Created an attachment module for document-based contextual input\n- Designed analytics dashboards for chatbot metrics and session insights\n- Implemented async processing with Celery & Redis\n- Optimized Django/PostgreSQL workflows for a battery testing logistics platform\n- Collaborate with data scientists to integrate ML-driven insights",
  },
  {
    keywords: ["mtp"],
    response:
      "At **MTP** (Feb 2022 - Aug 2024), I worked as a Software Engineer across multiple applications:\n\n- Developed backend services in Django and FastAPI\n- Built and maintained RESTful APIs for seamless data exchange\n- Created FastAPI microservices improving response times\n- Built frontend interfaces with React and Next.js\n- Managed AWS deployments (EC2, S3, CloudWatch)\n- Maintained comprehensive technical documentation",
  },
  {
    keywords: ["codegic"],
    response:
      "At **Codegic** (Aug 2020 - Feb 2022), I started as an Associate Software Engineer:\n\n- Led frontend development of new modules using React\n- Built reusable frontend components improving team efficiency\n- Implemented service layers and structured query logic on the backend\n- Collaborated with cross-functional teams on responsive UIs\n- Actively participated in Agile processes (sprint planning, stand-ups, retrospectives)",
  },
  {
    keywords: ["fastapi", "microservice"],
    response:
      "I have strong experience with FastAPI, which I used at MTP for performance-critical microservices. FastAPI's async capabilities allowed me to build high-performance APIs with significantly improved response times compared to traditional frameworks. Combined with Python type hints, it provides excellent developer experience with automatic API documentation.",
  },
  {
    keywords: ["database", "sql", "postgres", "mysql", "mongo", "nosql"],
    response:
      "I have extensive experience with both SQL and NoSQL databases:\n\n- **PostgreSQL:** My primary database, used across DigitLabs and MTP projects for complex queries and optimized performance\n- **MongoDB:** NoSQL document database for flexible, schema-less data models\n- **MySQL:** Additional experience with MySQL-based systems\n- **Redis:** In-memory data store for caching and real-time operations\n- **Query Optimization:** Structured query logic, reduced data duplication, and enhanced real-time reporting\n- **Data Handling:** Proficient with JSON structured data, Pandas, and NumPy",
  },
  {
    keywords: ["lead", "leader", "leadership", "manage", "manager", "team", "client", "project management", "ceo", "planning", "execution"],
    response:
      "Leadership is at the core of what I do. Here's how I operate:\n\n**Client Acquisition & Dealing:** I engage directly with clients — understanding their vision, scoping requirements, and translating business needs into technical roadmaps.\n\n**Project Planning & Architecture:** From system design to sprint planning, I lay the groundwork before a single line of code is written.\n\n**Team Leadership:** I've led cross-functional teams, mentored junior developers, conducted code reviews, and driven Agile ceremonies.\n\n**Execution & Delivery:** I don't just delegate — I build alongside my team, ensuring quality at every stage.\n\n**Deployment & Maintenance:** I own the full lifecycle — CI/CD pipelines, cloud infrastructure, monitoring, and long-term support.\n\nWhether it's a solo project, a team effort, or coordinating across multiple teams — I deliver exceptional results at every scale.",
  },
  {
    keywords: ["hello", "hi", "hey", "greet", "good"],
    response:
      "Hey there! Welcome to my portfolio. I'm Huzaifa's AI assistant — ask me anything about his experience, skills, projects, or how to get in touch. You can also use the quick buttons below to explore specific topics!",
  },
  {
    keywords: ["help", "what can", "how to", "what do"],
    response:
      "I'm here to help you learn about Huzaifa! You can ask me about:\n\n- **Experience** — My work history and roles\n- **Skills** — Technologies and tools I use\n- **Projects** — What I've built\n- **Voice Agents** — AI voice products I've developed\n- **Education** — My academic background\n- **Contact** — How to reach me\n\nJust type your question or use the quick action buttons below!",
  },
  {
    keywords: ["resume", "cv", "download"],
    response:
      "You can download my resume by clicking the **Resume** button in the navigation bar, or use this direct link. My resume includes detailed information about my 5+ years of experience, technical skills, and project highlights.",
  },
];

const fallbackResponses = [
  "That's an interesting question! While I don't have a specific answer for that, I can tell you about Huzaifa's experience, skills, projects, education, or contact info. What would you like to know?",
  "I'm not sure about that specific topic, but I'd love to tell you about Huzaifa's work experience, technical skills, or projects. What interests you?",
  "Great question! I'm best at answering questions about Huzaifa's professional background. Try asking about his skills, experience, or projects!",
];

export function getAIResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  // Find best matching response
  let bestMatch: QAEntry | null = null;
  let bestScore = 0;

  for (const entry of qaDatabase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerQuery.includes(keyword)) {
        score += keyword.length; // Longer keyword matches = more specific
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  // Return random fallback
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}
