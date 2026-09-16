// Pre-built responses based on Huzaifa's resume
// The chat matches keywords and returns contextual responses
//
// Rules for these answers:
// - Never name clients. If asked who the clients are, say identities are confidential.
// - Never use em dashes or en dashes. Use a colon, comma, full stop or parentheses.
// - Do not claim tools or experience that are not in this knowledge base.

interface QAEntry {
  keywords: string[];
  response: string;
}

const qaDatabase: QAEntry[] = [
  {
    keywords: ["who are you", "about you", "about yourself", "yourself", "introduce", "who is huzaifa", "what do you do", "what do you"],
    response:
      "I'm Huzaifa Athar, an AI / Machine Learning Engineer with 5+ years of software engineering experience, including hands-on work designing, building and deploying production AI systems.\n\nI specialise in LLM applications, multi-agent architectures, RAG and document intelligence, and I own the full pipeline from data preparation and evaluation through containerised cloud deployment and monitoring.\n\nI work directly with enterprise clients in regulated industries and can explain model behaviour and progress to non-technical stakeholders.",
  },
  {
    keywords: ["current role", "currently", "salestech", "now", "present", "latest job"],
    response:
      "I'm currently a **Senior Software Engineer (AI)** at **Salestech Data & AI** (Dec 2025 - Present), working as a forward-deployed AI engineer embedded with enterprise clients.\n\nI built an agentic compliance pipeline using a supervisor-worker multi-agent architecture (GPT-4o, Claude) that cuts certification cross-referencing from weeks to minutes, with every conclusion traced back to its source documents and an engineer approval step.\n\nI also built a data quality platform monitoring 15 European markets, with automated alerting.",
  },
  {
    keywords: ["experience", "work", "job", "career", "history", "company"],
    response:
      "I have 5+ years of professional experience:\n\n**Salestech Data & AI** (Dec 2025 - Present) | Senior Software Engineer (AI)\nForward-deployed AI engineer building agentic and data platforms for enterprise clients, including an agentic compliance pipeline and a data quality platform monitoring 15 European markets.\n\n**DigitLabs** (Sep 2024 - Dec 2025) | Full Stack Engineer (AI Products)\nBuilt the Django backend and API layer for an LLM-powered chatbot platform, integrated ML-driven insights with data scientists, built analytics dashboards, and delivered a battery-testing platform connecting OEMs and testing labs.\n\n**MTP** (Feb 2022 - Aug 2024) | Software Engineer\nDeveloped backend services in Django and FastAPI, built frontends with React and Next.js, and managed AWS deployments across multiple products.\n\n**Codegic** (Aug 2020 - Feb 2022) | Associate Software Engineer\nLed frontend development with React, built reusable components, and collaborated in Agile workflows.",
  },
  {
    keywords: ["skill", "tech", "stack", "technology", "language", "framework", "tool"],
    response:
      "Here's my tech stack, AI first:\n\n**AI / ML:** LLMs (GPT-4o, Claude), LangChain, LangGraph, CrewAI, RAG, NLP, Multi-Agent Systems, AWS Bedrock, ElevenLabs, Pandas, NumPy\n\n**Data & Vector:** PostgreSQL, MySQL, MongoDB, FAISS, pgvector, Redis\n\n**Backend & Frontend:** Python, FastAPI, Django, Celery, TypeScript, JavaScript, React, Next.js, Tailwind\n\n**Cloud & MLOps:** Docker, Git, CI/CD, AWS, Azure, GCP, OCI",
  },
  {
    keywords: ["agentic", "compliance", "rail", "multi-agent", "multi agent", "supervisor", "certification", "traceability", "agent architecture"],
    response:
      "**Agentic Compliance Engine** is a supervisor-worker multi-agent system I built for a safety-critical rail systems manufacturer.\n\n**The problem:** Senior engineers cross-referenced product specifications against regulation and past certifications by hand, taking weeks to months per pass.\n\n**What shipped:**\n- An agentic pipeline reading specification, regulation and certification history together\n- A supervisor-worker agent architecture with each agent scoped to one job\n- Every conclusion tied to its source documents\n- Engineer review and approval on every output\n\n**Outcomes:** compliance cross-referencing dropped from weeks to minutes, with full evidence traceability per conclusion and senior engineering hours returned. Built with Python, LangGraph, GPT-4o and Claude.",
  },
  {
    keywords: ["fraud", "fintech", "payments", "risk scoring", "risk", "transactions", "scoring"],
    response:
      "**FinTech: real-time risk scoring and fraud detection.** For a payments platform handling 40M+ transactions per month across the US and EU.\n\n**The problem:** Fraud losses grew faster than volume, models refreshed only quarterly, and manual review took six hours per case.\n\n**What shipped:**\n- A real-time scoring service (sub-50ms at p99)\n- A graph-based fraud feature store across accounts, devices and merchants\n- An eval harness with golden fraud sets gating every release\n- An analyst case console where the model abstains and humans decide\n\n**Outcomes:** false positives down 42%, case review from 6 hours to 11 minutes, and model refresh moved from quarterly to daily.",
  },
  {
    keywords: ["insurance", "documents", "document intelligence", "claims", "extraction", "workflow agents", "straight-through"],
    response:
      "**Insurance: AI document intelligence and workflow agents.** For an insurance operations client processing 60,000 documents per month across 4 systems of record.\n\n**The problem:** Claims and correspondence were keyed in by hand, with 14-day backlogs and errors caught weeks later.\n\n**What shipped:**\n- An LLM extraction pipeline with confidence-gated outputs\n- Workflow agents filing into four systems of record\n- An exception review console\n- Continuous evaluation against human corrections\n\n**Outcomes:** processing from 14 days to 4 hours, straight-through rate from 12% to 78%, and 1,200 analyst hours per month reclaimed.",
  },
  {
    keywords: ["healthcare", "hipaa", "readmission", "patient", "clinical", "lakehouse", "phi", "population health"],
    response:
      "**Healthcare: HIPAA-compliant patient analytics and AI pipelines.** For a provider network with 12 sites in the United States.\n\n**The problem:** Leadership needed population-health insight, but patient data could not leave the compliance boundary and analyses waited weeks.\n\n**What shipped:**\n- A governed lakehouse inside the client's own cloud tenancy\n- De-identification at ingestion\n- Readmission-risk models with clinician-readable audit trails\n- Role-based, row-level access\n\n**Outcomes:** time to insight from 3 weeks to same day, readmission AUC from 0.68 to 0.84, and zero PHI incidents in 24 months.",
  },
  {
    keywords: ["logistics", "supply chain", "forecasting", "route", "routing", "demand", "3pl", "stockout", "optimisation", "optimization"],
    response:
      "**Supply Chain: real-time route optimisation and demand forecasting.** For a regional 3PL with 400+ vehicles across 6 distribution centres.\n\n**The problem:** Routes were planned overnight on stale demand data, causing half-empty return trips and stockouts.\n\n**What shipped:**\n- A live demand model on streaming telemetry\n- Event-triggered route re-optimisation\n- SKU-level forecasts wired into replenishment\n- A planner console with auditable overrides\n\n**Outcomes:** cost per route down 18%, forecast accuracy from 71% to 93%, and stockout events down 37% year on year.",
  },
  {
    keywords: ["case study", "case studies", "outcomes", "results", "industries", "industry"],
    response:
      "I present my work as case studies, from problem to production:\n\n- **Rail & Manufacturing:** an agentic compliance engine that took compliance cross-referencing from weeks to minutes\n- **FinTech:** real-time risk scoring and fraud detection\n- **Insurance:** AI document intelligence and workflow agents\n- **Healthcare:** HIPAA-compliant patient analytics and AI pipelines\n- **Supply Chain:** real-time route optimisation and demand forecasting\n\nAsk me about any one of them (for example fraud, insurance documents, HIPAA, or logistics) and I'll give you the problem, what shipped, and the outcomes.",
  },
  {
    keywords: ["client", "clients", "client name", "client names", "who are your clients", "which companies", "who do you work for"],
    response:
      "I work directly with enterprise clients in regulated industries such as rail and manufacturing, financial services, insurance, healthcare and logistics.\n\nClient identities are confidential, so I describe the work by industry and outcome rather than by name. For example, one project was for a German manufacturer of safety-critical rail systems, and another was a data quality platform for a pharmaceutical client monitoring 15 European markets.",
  },
  {
    keywords: ["django", "python", "backend", "api"],
    response:
      "Python is at the core of my work, across both AI systems and backend services. I build LLM applications, multi-agent pipelines and RAG systems in Python, and I use FastAPI and Django for the API and service layer. At DigitLabs I built the entire Django backend for an LLM-powered chatbot platform, with async processing on Celery and Redis and PostgreSQL for storage.",
  },
  {
    keywords: ["react", "next", "frontend", "ui", "javascript", "typescript"],
    response:
      "Alongside my AI work I have solid frontend experience with React and Next.js. I've built responsive interfaces, reusable component libraries, and worked with TypeScript across multiple products. This portfolio itself is built with Next.js and Tailwind CSS.",
  },
  {
    keywords: ["ai", "chatbot", "machine learning", "ml", "llm", "rag", "agent", "agents"],
    response:
      "I design, build and deploy production AI systems end to end:\n\n**Agentic systems:** A supervisor-worker multi-agent compliance engine (GPT-4o, Claude, LangGraph) that cuts certification cross-referencing from weeks to minutes, with full source traceability and engineer approval.\n\n**RAG & document intelligence:** Custom RAG pipelines over enterprise data lakes, plus LLM extraction pipelines with confidence-gated outputs.\n\n**Voice agents:** A Dental Receptionist AI and an Appointment Booking Agent built with ElevenLabs.\n\nI own the full pipeline from data preparation and evaluation through containerised cloud deployment and monitoring.",
  },
  {
    keywords: ["voice agent", "voice agents", "ai voice", "voice", "dental", "receptionist", "appointment", "booking", "call"],
    response:
      "I've built AI-powered voice agents that handle real phone conversations:\n\n**Dental Receptionist AI:** Handles incoming calls for dental clinics in Dutch and English, greeting patients, answering FAQs about services, hours, and insurance, and routing calls. Built with ElevenLabs and available 24/7.\n\n**Appointment Booking Agent:** A conversational AI that schedules, reschedules, and cancels appointments via voice. It integrates with calendar systems, handles time zone logic, and sends automated confirmations.",
  },
  {
    keywords: ["education", "degree", "university", "college", "study"],
    response:
      "I hold a **Bachelor's Degree in Computer Science** from the University of Central Punjab, Lahore, Pakistan. My final year project focused on Machine Learning and Image Processing. Prior to that, I completed my F.Sc Pre-Engineering from Punjab Group of Colleges, Lahore.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "connect"],
    response:
      "I'd love to connect! Here's how you can reach me:\n\n**Email:** huzaifaathar1@gmail.com\n**LinkedIn:** linkedin.com/in/huzaifa-athar-b048a2120\n**Phone:** +92-323-4125331\n\nFeel free to reach out for collaborations, opportunities, or just a tech chat!",
  },
  {
    keywords: ["project", "portfolio", "built", "created", "developed"],
    response:
      "A selection of what I've built:\n\n- **Agentic Compliance Engine:** A supervisor-worker multi-agent system with full source traceability and engineer review\n- **Data Intelligence Chatbot:** A custom RAG pipeline over a data lake powering an LLM chatbot\n- **AI Voice Agents:** Dental Receptionist AI and Appointment Booking Agent\n- **Data Quality Guardian:** Automated monitoring across 15 markets with severity-based alerting\n- **Battery Testing Platform:** Connecting OEMs and testing labs from prototype to production\n\nI also present deeper case studies across FinTech, Insurance, Healthcare and Supply Chain. Ask me about any of them.",
  },
  {
    keywords: ["aws", "deploy", "cloud", "devops", "docker", "gcp", "bedrock", "azure", "oci", "mlops"],
    response:
      "I own deployment and operations for the systems I build:\n\n- **Cloud:** AWS, Azure, GCP and OCI\n- **AI infrastructure:** AWS Bedrock for managed model access\n- **Containers & MLOps:** Docker for containerised deployment, with monitoring and CI/CD\n- **Version control:** Git\n\nI take AI systems from data preparation and evaluation through containerised cloud deployment and monitoring.",
  },
  {
    keywords: ["digitlabs"],
    response:
      "At **DigitLabs** (Sep 2024 - Dec 2025), I worked as a Full Stack Engineer (AI Products), where I:\n\n- Built the Django backend and API layer for an LLM-powered chatbot platform\n- Integrated ML-driven insights together with data scientists\n- Built analytics dashboards for chatbot metrics and session insights\n- Delivered a battery-testing platform connecting OEMs and testing labs\n- Implemented async processing with Celery and Redis on PostgreSQL",
  },
  {
    keywords: ["mtp"],
    response:
      "At **MTP** (Feb 2022 - Aug 2024), I worked as a Software Engineer across multiple applications:\n\n- Developed backend services in Django and FastAPI\n- Built and maintained RESTful APIs for seamless data exchange\n- Created FastAPI microservices improving response times\n- Built frontend interfaces with React and Next.js\n- Managed AWS deployments (EC2, S3, CloudWatch)",
  },
  {
    keywords: ["codegic"],
    response:
      "At **Codegic** (Aug 2020 - Feb 2022), I started as an Associate Software Engineer:\n\n- Led frontend development of new modules using React\n- Built reusable frontend components improving team efficiency\n- Implemented service layers and structured query logic on the backend\n- Collaborated with cross-functional teams on responsive UIs\n- Actively participated in Agile processes (sprint planning, stand-ups, retrospectives)",
  },
  {
    keywords: ["fastapi", "microservice"],
    response:
      "I have strong experience with FastAPI, which I use for performance-critical services and for serving AI systems. Its async capabilities and Python type hints let me build high-performance APIs with automatic documentation, which pairs well with LLM and RAG backends.",
  },
  {
    keywords: ["database", "sql", "postgres", "mysql", "mongo", "nosql", "vector", "faiss", "pgvector"],
    response:
      "I work across relational, document and vector stores:\n\n- **PostgreSQL:** My primary database for complex queries and optimised performance\n- **pgvector & FAISS:** Vector search for RAG and semantic retrieval\n- **MongoDB:** Flexible, schema-less document data\n- **MySQL:** Additional relational experience\n- **Redis:** Caching and real-time operations\n- **Data handling:** Pandas and NumPy for preparation and analysis",
  },
  {
    keywords: ["lead", "leader", "leadership", "manage", "manager", "team", "project management", "stakeholder", "planning"],
    response:
      "I work directly with enterprise clients and can explain model behaviour and progress to non-technical stakeholders.\n\nAcross my roles I've led cross-functional work, mentored developers, and owned delivery: scoping requirements, planning architecture, building alongside the team, and taking systems through to deployment and monitoring. As a forward-deployed engineer I sit close to the client, translating business needs into working AI systems.",
  },
  {
    keywords: ["hello", "hi", "hey", "greet", "good"],
    response:
      "Hey there! Welcome to my portfolio. I'm Huzaifa's assistant. Ask me anything about his experience as an AI / ML Engineer, his case studies, skills, or how to get in touch. You can also use the quick buttons below to explore specific topics!",
  },
  {
    keywords: ["help", "what can", "how to"],
    response:
      "I'm here to help you learn about Huzaifa, an AI / Machine Learning Engineer! You can ask me about:\n\n- **Current role:** His work at Salestech Data & AI\n- **Case studies:** Rail, FinTech, Insurance, Healthcare and Supply Chain\n- **Skills:** LLMs, agents, RAG, and his wider stack\n- **Projects:** What he's built\n- **Contact:** How to reach him\n\nJust type your question or use the quick action buttons below!",
  },
  {
    keywords: ["resume", "cv", "download"],
    response:
      "You can download my resume by clicking the **Resume** button in the navigation bar, or use this direct link. It includes detailed information about my 5+ years of experience, my AI / ML work, technical skills, and project highlights.",
  },
];

const fallbackResponses = [
  "That's a good question! I'm best at answering questions about Huzaifa, an AI / Machine Learning Engineer. Ask me about his current role, his case studies (Rail, FinTech, Insurance, Healthcare, Supply Chain), his skills, or how to get in touch.",
  "I don't have a specific answer for that, but I can tell you about Huzaifa's AI / ML work: agentic systems, RAG, voice agents, his case studies, or his experience. What would you like to know?",
  "I'm best at answering questions about Huzaifa's work as an AI / ML Engineer. Try asking about his multi-agent compliance engine, a case study, his skills, or his experience.",
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
