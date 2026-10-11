// InternNova Official Redesign - Curated Data Source
// Realistic and authentic curriculum, testimonials, workshops, and verified certificates

export const PROGRAMS_DATA = [
  {
    id: "web-dev",
    category: "web",
    badge: "Most Popular",
    badgeType: "hot",
    title: "Full Stack Web Development",
    subtitle: "MERN Stack, Next.js 15, REST & GraphQL APIs, Cloud Deployment",
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    commitment: "8-10 hrs / week",
    stipend: "Performance-Based",
    rating: 4.95,
    reviewsCount: 142,
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Next.js", "TailwindCSS", "Git"],
    highlights: [
      "Build & deploy 3 production-grade full stack applications",
      "Official Offer Letter & Verified Certificate with QR",
      "1-on-1 GitHub PR code reviews from Senior Engineers",
      "Letter of Recommendation (LOR) for top performers"
    ],
    projects: [
      "E-Commerce Microservice with Payment Gateway (Razorpay/Stripe)",
      "Real-time Collaborative Task & Kanban Board (WebSockets)",
      "AI-Powered Developer Portfolio & CMS Platform"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Modern Frontend Mastery & Component Architecture",
        topics: [
          "HTML5 Semantic Structure & Modern CSS3 Flexbox/Grid",
          "Advanced JavaScript (ES6+, Async/Await, Closures, DOM)",
          "React 18/19 Core, Hooks (useState, useEffect, useMemo), Custom Hooks",
          "Responsive Design Patterns & TailwindCSS utility mastery"
        ]
      },
      {
        week: "Week 2-3",
        title: "Backend Engineering, REST APIs & Database Design",
        topics: [
          "Node.js runtime, Event loop, Express.js architecture",
          "MongoDB schema modeling with Mongoose & PostgreSQL basics",
          "Authentication & Security: JWT, OAuth2, Bcrypt, CORS, Helmet",
          "RESTful API design best practices & Postman collection testing"
        ]
      },
      {
        week: "Week 4-5",
        title: "Full Stack Integration & Production Capstone",
        topics: [
          "Connecting React frontend to Express backend with Axios/TanStack Query",
          "State management with Redux Toolkit / Zustand",
          "Payment gateway integration (Razorpay/Stripe Webhooks)",
          "Real-time bidirectional communication using Socket.io"
        ]
      },
      {
        week: "Week 6",
        title: "Testing, CI/CD Pipeline & Cloud Deployment",
        topics: [
          "Frontend & Backend testing with Vitest / Jest & Postman",
          "Docker containerization fundamentals",
          "Deploying full stack apps on Vercel, Render & AWS EC2",
          "Final code review, Portfolio defense & Certificate issuance"
        ]
      }
    ]
  },
  {
    id: "ai-ml",
    category: "ai-data",
    badge: "Trending 2026",
    badgeType: "ai",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Python, Scikit-Learn, PyTorch, Deep Learning & LLM Agent Engineering",
    duration: "6 Weeks",
    level: "Intermediate",
    commitment: "10-12 hrs / week",
    stipend: "Performance-Based",
    rating: 4.92,
    reviewsCount: 98,
    techStack: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "LangChain", "Hugging Face"],
    highlights: [
      "Train ML models and build modern GenAI & RAG applications",
      "Dataset curation, preprocessing, feature engineering on Kaggle",
      "Mentorship from Data Scientists and AI Engineers",
      "Verifiable Certificate with GitHub project defense"
    ],
    projects: [
      "Customer Churn Prediction Engine with XGBoost & Streamlit",
      "Computer Vision Medical X-Ray Disease Classifier with PyTorch CNN",
      "Autonomous RAG Agent for Document Q&A using LangChain & Pinecone"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Python for Data Science & Mathematical Foundations",
        topics: [
          "NumPy vectorized operations & Pandas data wrangling",
          "Exploratory Data Analysis (EDA) with Matplotlib & Seaborn",
          "Linear Algebra, Calculus & Probability distributions in ML",
          "Handling missing data, outliers & feature scaling techniques"
        ]
      },
      {
        week: "Week 2-3",
        title: "Supervised & Unsupervised Machine Learning Algorithms",
        topics: [
          "Regression models (Linear, Polynomial, Ridge/Lasso)",
          "Classification models (Logistic, SVM, Decision Trees, Random Forests)",
          "Ensemble methods: Gradient Boosting, XGBoost, LightGBM",
          "Clustering (K-Means, DBSCAN) & Dimensionality Reduction (PCA)"
        ]
      },
      {
        week: "Week 4-5",
        title: "Deep Learning Foundations & Computer Vision",
        topics: [
          "Neural Network mechanics, Backpropagation, Activation functions",
          "PyTorch / TensorFlow framework deep dive",
          "Convolutional Neural Networks (CNN) & Transfer Learning (ResNet)",
          "Image preprocessing, data augmentation & model evaluation metrics"
        ]
      },
      {
        week: "Week 6",
        title: "Generative AI, LLMs & Real-World Deployment",
        topics: [
          "Transformers architecture, Attention mechanisms & Hugging Face",
          "Building Retrieval-Augmented Generation (RAG) pipelines",
          "Packaging models into REST APIs with FastAPI & Docker",
          "Model hosting on Hugging Face Spaces & final capstone evaluation"
        ]
      }
    ]
  },
  {
    id: "data-analytics",
    category: "ai-data",
    badge: "High Hiring Demand",
    badgeType: "demand",
    title: "Data Analytics & Business Intelligence",
    subtitle: "Advanced SQL, Power BI, Python Pandas, Tableau & Statistical Modeling",
    duration: "4 Weeks",
    level: "Beginner Friendly",
    commitment: "8 hrs / week",
    stipend: "Performance-Based",
    rating: 4.89,
    reviewsCount: 114,
    techStack: ["SQL", "Power BI", "Tableau", "Python", "Excel / Sheets", "Pandas", "Stats"],
    highlights: [
      "Transform messy raw datasets into executive dashboards",
      "Write complex SQL queries (Window functions, CTEs, Joins)",
      "Live business case studies from retail, fintech & healthcare",
      "Official InternNova Credential & portfolio showcase"
    ],
    projects: [
      "Global E-Commerce Sales Performance Dashboard (Power BI)",
      "Financial Fraud Detection & Risk Scoring Analysis (SQL & Python)",
      "Healthcare Patient Influx & Resource Optimization Dashboard"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Advanced Excel, Data Hygiene & Business Metrics",
        topics: [
          "Advanced formulas: INDEX/MATCH, XLOOKUP, Nested IFs",
          "Pivot Tables, Slicers, Dynamic charts & KPI tracking",
          "Data cleansing, normalization, validation rules",
          "Key business metrics: CAC, LTV, Churn, ROI, Net Margins"
        ]
      },
      {
        week: "Week 2",
        title: "SQL for Data Analysts & Relational Databases",
        topics: [
          "PostgreSQL/MySQL queries: Filtering, Aggregations, Group By",
          "Multi-table Joins (Inner, Left, Right, Full Outer)",
          "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD)",
          "Common Table Expressions (CTEs), Subqueries & Stored Procedures"
        ]
      },
      {
        week: "Week 3",
        title: "Data Storytelling with Power BI & Tableau",
        topics: [
          "Power Query for ETL (Extract, Transform, Load)",
          "Data Modeling, Star Schema & Snowflake Schema",
          "DAX measures, calculated columns & time intelligence functions",
          "Building interactive executive dashboards with drill-through filters"
        ]
      },
      {
        week: "Week 4",
        title: "Python Data Analysis & Capstone Presentation",
        topics: [
          "Python Pandas & Seaborn for hypothesis testing & statistical EDA",
          "Automated PDF and Excel report generation",
          "Crafting executive presentations with actionable insights",
          "Portfolio review, mock technical interview & certificate delivery"
        ]
      }
    ]
  },
  {
    id: "cyber-security",
    category: "cyber",
    badge: "Industry Certified",
    badgeType: "security",
    title: "Cyber Security & Ethical Hacking",
    subtitle: "Network Defense, Penetration Testing, OWASP Top 10, Kali Linux, SIEM",
    duration: "6 Weeks",
    level: "Intermediate",
    commitment: "10 hrs / week",
    stipend: "Performance-Based",
    rating: 4.94,
    reviewsCount: 86,
    techStack: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Python", "Snort"],
    highlights: [
      "Hands-on vulnerability assessments in isolated virtual labs",
      "OWASP Web Security testing & secure coding methodologies",
      "Incident response protocols and SIEM log analysis",
      "InternNova Certificate recognized by cybersecurity firms"
    ],
    projects: [
      "Web Application Penetration Test Report (OWASP Top 10)",
      "Automated Vulnerability Scanner Script using Python & Nmap",
      "Network Intrusion Detection System Setup with Snort & Wireshark"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Foundations of Cybersecurity & Linux Architecture",
        topics: [
          "TCP/IP, OSI model, DNS, DHCP, Subnetting & Network Protocols",
          "Kali Linux command line, bash scripting & file permissions",
          "Information gathering, OSINT & reconnaissance techniques",
          "Network scanning, banner grabbing & service fingerprinting with Nmap"
        ]
      },
      {
        week: "Week 2-3",
        title: "Web Application Security & OWASP Top 10",
        topics: [
          "SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF attacks",
          "Broken Object Level Authorization (BOLA) & Authentication flaws",
          "Hands-on testing with Burp Suite (Proxy, Repeater, Intruder)",
          "Remediation guidelines, defensive coding & mitigation techniques"
        ]
      },
      {
        week: "Week 4-5",
        title: "System Hacking, Privilege Escalation & Cryptography",
        topics: [
          "Vulnerability exploitation using Metasploit framework",
          "Windows & Linux privilege escalation methodologies",
          "Symmetric/Asymmetric encryption, Hashing, SSL/TLS certificates",
          "Malware analysis basics & reverse engineering introductory concepts"
        ]
      },
      {
        week: "Week 6",
        title: "Defensive Security, SIEM & Professional Audit Report",
        topics: [
          "Security Information & Event Management (SIEM) with Splunk/Wazuh",
          "Log analysis, intrusion detection & forensic basics",
          "Authoring executive-grade penetration testing reports",
          "Vulnerability disclosure ethics, portfolio defense & certification"
        ]
      }
    ]
  },
  {
    id: "cloud-devops",
    category: "cloud",
    badge: "High Growth",
    badgeType: "cloud",
    title: "Cloud Computing & DevOps Engineering",
    subtitle: "AWS Cloud Architecting, Docker, Kubernetes, Terraform & GitHub Actions CI/CD",
    duration: "6 Weeks",
    level: "Intermediate",
    commitment: "10 hrs / week",
    stipend: "Performance-Based",
    rating: 4.91,
    reviewsCount: 77,
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux", "Nginx"],
    highlights: [
      "Deploy scalable microservices on real AWS infrastructure",
      "Automate testing and deployment with CI/CD pipelines",
      "Infrastructure as Code (IaC) with Terraform",
      "1:1 architecture reviews and verified internship credential"
    ],
    projects: [
      "Zero-Downtime Microservices Deployment on AWS ECS / EKS",
      "Automated CI/CD Pipeline with GitHub Actions & Docker Hub",
      "Multi-Tier High Availability VPC Architecture with Terraform"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Linux System Administration & Networking for DevOps",
        topics: [
          "Linux internals, process management, systemd & bash automation",
          "Networking: DNS, Load Balancers, Reverse Proxies (Nginx), SSL/TLS",
          "Git branch workflows, PR strategies & semantic versioning",
          "Virtualization vs Containerization architecture"
        ]
      },
      {
        week: "Week 2-3",
        title: "Docker Containerization & Kubernetes Orchestration",
        topics: [
          "Dockerfile multi-stage builds, layer caching & image security",
          "Docker Compose for multi-container local microservices",
          "Kubernetes architecture: Pods, Deployments, Services, Ingress",
          "ConfigMaps, Secrets, Persistent Volumes & Helm charts"
        ]
      },
      {
        week: "Week 4-5",
        title: "AWS Cloud Infrastructure & Terraform (IaC)",
        topics: [
          "AWS Core: IAM policies, EC2, S3, VPC, Subnets, Security Groups",
          "Relational Database Service (RDS) & DynamoDB setups",
          "Infrastructure as Code (IaC) syntax with Terraform",
          "Managing Terraform state, variables, modules & AWS provisioners"
        ]
      },
      {
        week: "Week 6",
        title: "CI/CD Automation, Monitoring & Production Release",
        topics: [
          "Continuous Integration & Delivery with GitHub Actions",
          "Automated linting, testing, security scanning (Trivy/SonarQube)",
          "CloudWatch, Prometheus & Grafana monitoring dashboards",
          "Capstone deployment, production defense & credential issuance"
        ]
      }
    ]
  },
  {
    id: "mobile-dev",
    category: "web",
    badge: "Cross-Platform",
    badgeType: "mobile",
    title: "Mobile App Development (Flutter & React Native)",
    subtitle: "Cross-Platform iOS & Android Apps, Firebase, REST APIs, State Management",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    commitment: "8-10 hrs / week",
    stipend: "Performance-Based",
    rating: 4.88,
    reviewsCount: 65,
    techStack: ["Flutter", "Dart", "React Native", "Firebase", "Redux", "REST APIs", "Play Store"],
    highlights: [
      "Build native-performing apps for both iOS and Android",
      "Integrate camera, geolocation, push notifications, and biometric auth",
      "Backend sync with Firebase Firestore and custom REST backends",
      "Verified Certificate & APK release for your portfolio"
    ],
    projects: [
      "On-Demand Delivery & Order Tracking App with Live Maps",
      "Social Networking & Messaging App with Firebase Realtime Sync",
      "Personal Finance & Crypto Tracker with Offline Persistence"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Mobile UI Architecture & State Management",
        topics: [
          "Flutter/Dart or React Native fundamentals and component lifecycle",
          "Declarative UI layout: Flexbox, Rows, Columns, Stacks",
          "Local state management (Provider, Riverpod or Zustand)",
          "Responsive multi-screen design for phones and tablets"
        ]
      },
      {
        week: "Week 2-3",
        title: "Hardware Features & Device APIs",
        topics: [
          "Camera integration, image picker & file uploads",
          "Geolocation, GPS tracking & Google Maps API integration",
          "Push notifications via Firebase Cloud Messaging (FCM)",
          "Biometric authentication (FaceID / Fingerprint) & Secure Storage"
        ]
      },
      {
        week: "Week 4-5",
        title: "Cloud Backend, Offline Mode & Database Sync",
        topics: [
          "Firebase Auth, Cloud Firestore & Realtime Database rules",
          "Connecting to custom Node.js / Python REST API backends",
          "Offline data persistence with SQLite / Hive / Async Storage",
          "Animation controllers, fluid micro-interactions and transitions"
        ]
      },
      {
        week: "Week 6",
        title: "Testing, App Store Prep & Capstone Submission",
        topics: [
          "Widget testing and end-to-end user flow tests",
          "Generating signed APK / AAB bundles for Google Play Store",
          "App Store Guidelines, asset generation & submission checklist",
          "Final capstone demo, code evaluation & verified certificate"
        ]
      }
    ]
  },
  {
    id: "java-dsa",
    category: "pro-track",
    badge: "Interview Ready",
    badgeType: "interview",
    title: "Java Mastery & Data Structures Algorithms (DSA)",
    subtitle: "Core to Advanced Java, OOPs, Collections, LeetCode 150+ Patterns, System Design",
    duration: "6 Weeks",
    level: "All Levels",
    commitment: "10 hrs / week",
    stipend: "Performance-Based",
    rating: 4.96,
    reviewsCount: 160,
    techStack: ["Java 21", "DSA", "LeetCode", "OOPs", "Multithreading", "Spring Boot", "Git"],
    highlights: [
      "Master high-frequency FAANG/MAANG coding interview patterns",
      "Solve 150+ curated DSA problems with time/space complexity analysis",
      "Build a backend banking microservice with Spring Boot",
      "Mock technical coding interviews with senior industry engineers"
    ],
    projects: [
      "High-Throughput Concurrent Banking Transaction Engine (Java Concurrency)",
      "Custom Cache & Graph Routing Algorithm Implementation",
      "Spring Boot RESTful Microservice with Spring Security & JPA"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Core Java Deep Dive & Object-Oriented Design",
        topics: [
          "JVM memory architecture, Garbage Collection, Heap vs Stack",
          "OOPs principles in depth: Polymorphism, Abstraction, Encapsulation",
          "Java Collections Framework: Lists, Sets, Maps, Queues, Iterators",
          "Exception handling, Java 8 Streams, Lambdas & Functional Interfaces"
        ]
      },
      {
        week: "Week 2-3",
        title: "Linear Data Structures & Two-Pointer / Sliding Window",
        topics: [
          "Arrays, Dynamic Arrays, Bit Manipulation tricks",
          "Singly & Doubly Linked Lists, Fast & Slow Pointers",
          "Stacks, Queues, Monotonic Stack patterns for interview problems",
          "Two-Pointers, Sliding Window technique & Binary Search variations"
        ]
      },
      {
        week: "Week 4-5",
        title: "Non-Linear Structures: Trees, Graphs & Dynamic Programming",
        topics: [
          "Binary Trees, Binary Search Trees, BFS & DFS Traversals",
          "Graphs: Adjacency Lists, Dijkstra's, Topological Sort, Union-Find",
          "Heaps / Priority Queues for Top K problems",
          "Dynamic Programming: 1D DP, 2D Grid DP, Knapsack & Subsequences"
        ]
      },
      {
        week: "Week 6",
        title: "Spring Boot Microservices & Mock Technical Interviews",
        topics: [
          "Spring Boot fundamentals: Dependency Injection, Controllers, Services",
          "Spring Data JPA, Hibernate ORM & PostgreSQL integration",
          "Live 1-on-1 mock coding interviews & behavioral question prep",
          "Resume review, GitHub profile optimization & certificate delivery"
        ]
      }
    ]
  },
  {
    id: "genai-agents",
    category: "pro-track",
    badge: "Next-Gen 2026",
    badgeType: "ai",
    title: "AI Agent Engineering & LLM Systems",
    subtitle: "LangChain, AutoGen, CrewAI, Function Calling, Vector DBs, Fine-Tuning",
    duration: "4 Weeks",
    level: "Advanced",
    commitment: "10-12 hrs / week",
    stipend: "Performance-Based",
    rating: 4.97,
    reviewsCount: 52,
    techStack: ["Python", "OpenAI / Claude API", "LangChain", "CrewAI", "ChromaDB", "Pinecone", "FastAPI"],
    highlights: [
      "Build autonomous multi-agent systems that research, code, and execute tasks",
      "Production-ready RAG architectures with hybrid search and reranking",
      "Function calling, tool integration, and guardrails",
      "Portfolio project ready to showcase to top AI startups"
    ],
    projects: [
      "Autonomous Multi-Agent Market Research & Report Generator (CrewAI)",
      "Production Enterprise Search Engine with Hybrid Vector Retrieval & Reranker",
      "Interactive Code Review & Security Audit Agent Bot"
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "LLM Fundamentals, Prompt Engineering & Tool Calling",
        topics: [
          "Prompt engineering patterns (Few-shot, Chain-of-Thought, ReAct)",
          "OpenAI, Anthropic & open-source models via Ollama / vLLM",
          "Structured outputs using Pydantic & JSON Schema validation",
          "Function calling and tool invocation patterns"
        ]
      },
      {
        week: "Week 2",
        title: "Advanced Retrieval-Augmented Generation (RAG)",
        topics: [
          "Document chunking strategies, semantic vs recursive splitting",
          "Embedding models comparison & Vector Databases (Chroma, Pinecone)",
          "Hybrid search (BM25 + Dense Vectors) & Cross-Encoder Rerankers",
          "Evaluation of RAG pipelines using RAGAS metrics"
        ]
      },
      {
        week: "Week 3",
        title: "Multi-Agent Architectures & Workflow Automation",
        topics: [
          "Agent concepts: Memory, Planning, Tools, Reflection",
          "LangGraph for stateful cyclical agent workflows",
          "CrewAI & AutoGen for collaborative multi-agent swarms",
          "Human-in-the-loop approvals and safe execution sandboxes"
        ]
      },
      {
        week: "Week 4",
        title: "Production Deployment, Observability & Capstone",
        topics: [
          "Observability and tracing with LangSmith / Phoenix",
          "Packaging agent services into scalable FastAPI endpoints",
          "Latency optimization, caching & cost management techniques",
          "Capstone project demo, live presentation & verified certificate"
        ]
      }
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Arjun Verma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    college: "SLIIT University",
    role: "Full Stack Intern → Software Engineer at TechCorp",
    domain: "Web Development",
    rating: 5,
    verified: true,
    credentialId: "IN-2026-WEB-8842",
    date: "Cohort 2026",
    quote: "InternNova was the turning point in my college journey. Unlike random tutorial courses, here I had real GitHub pull requests, real merge conflicts, and actual code reviews from a senior mentor. The verified certificate and offer letter helped me land my first on-campus placement directly!"
  },
  {
    id: 2,
    name: "Pooja Sharma",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    college: "Anna University",
    role: "AI & ML Intern → Junior Data Scientist at NexGen",
    domain: "AI & Data Science",
    rating: 5,
    verified: true,
    credentialId: "IN-2026-AIML-4419",
    date: "Cohort 2026",
    quote: "Building an end-to-end RAG application with PyTorch and LangChain gave me hands-on confidence that textbook college syllabus never covered. The weekly mentorship sessions were gold. The QR-code verification on the certificate was checked during my interview!"
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    college: "Tribhuvan University",
    role: "Cybersecurity Intern → Security Analyst Trainee",
    domain: "Cybersecurity",
    rating: 5,
    verified: true,
    credentialId: "IN-2026-CYBER-9021",
    date: "Cohort 2026",
    quote: "The virtual lab setup and hands-on OWASP Top 10 penetration testing scenarios were remarkably close to what real SOC and penetration testing teams do. Submitting vulnerability audit reports taught me actual professional documentation standards."
  },
  {
    id: 4,
    name: "Sneha Nair",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    college: "VTU Karnataka",
    role: "Data Analytics Intern → Business Analyst at FinEdge",
    domain: "Data Analytics",
    rating: 5,
    verified: true,
    credentialId: "IN-2026-DATA-3158",
    date: "Cohort 2026",
    quote: "Power BI and SQL can be intimidating at first, but InternNova's structured 4-week roadmap broke everything down into manageable daily milestones. The certificate verification portal makes it so easy to showcase on my LinkedIn profile."
  },
  {
    id: 5,
    name: "Devendra Patel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    college: "UTM (Universiti Teknologi Malaysia)",
    role: "Cloud & DevOps Intern → Cloud Engineer Intern",
    domain: "Cloud Computing",
    rating: 5,
    verified: true,
    credentialId: "IN-2026-CLD-7120",
    date: "Cohort 2026",
    quote: "Setting up real Docker containers, writing Terraform IaC files and getting automated CI/CD pipeline triggers on GitHub Actions was thrilling. The mentor was always available on Discord to troubleshoot tricky AWS IAM permission issues!"
  },
  {
    id: 6,
    name: "Ayesha Siddiqui",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    college: "Delhi Technological University (DTU)",
    role: "Java & DSA Intern → SDE Intern at FinTech Startup",
    domain: "Java & DSA",
    rating: 5,
    verified: true,
    credentialId: "IN-2026-JAVA-5582",
    date: "Cohort 2026",
    quote: "The mock technical interview at the end of the 6-week Java & DSA track gave me exactly the feedback I needed on my communication and time-complexity optimization. A must-do for any 2nd or 3rd year engineering student."
  }
];

export const VERIFIED_CERTIFICATES_SAMPLE = {
  "IN-2026-WEB-8842": {
    studentName: "Naveen Aitha",
    domain: "Full Stack Web Development",
    trackType: "Virtual Pro Internship",
    issueDate: "October 11, 2026",
    completionDuration: "6 Weeks (120 Hours)",
    grade: "Grade A+ (Distinction)",
    status: "Verified & Active",
    verificationId: "IN-2026-WEB-8842",
    credentialUrl: "https://internnova.co.in/verify/IN-2026-WEB-8842",
    mentorName: "Priya Sharma, Senior Tech Lead",
    organization: "InternNova EdTech Pvt. Ltd. (MSME UDYAM-BR-24-0054689)",
    projectsCompleted: [
      "E-Commerce Microservice with Payment Gateway",
      "Real-Time Collaborative Kanban Dashboard",
      "Responsive Production Portfolio Website"
    ]
  },
  "IN-2026-AIML-4419": {
    studentName: "Pooja Sharma",
    domain: "Artificial Intelligence & Machine Learning",
    trackType: "Virtual Pro Internship",
    issueDate: "September 28, 2026",
    completionDuration: "6 Weeks (140 Hours)",
    grade: "Grade A+ (Distinction)",
    status: "Verified & Active",
    verificationId: "IN-2026-AIML-4419",
    credentialUrl: "https://internnova.co.in/verify/IN-2026-AIML-4419",
    mentorName: "Dr. K. Ramanathan, AI Research Mentor",
    organization: "InternNova EdTech Pvt. Ltd. (MSME UDYAM-BR-24-0054689)",
    projectsCompleted: [
      "Customer Churn Prediction Engine with XGBoost",
      "Autonomous RAG Agent for Document Q&A using LangChain"
    ]
  },
  "IN-2026-CYBER-9021": {
    studentName: "Rohan Kulkarni",
    domain: "Cyber Security & Ethical Hacking",
    trackType: "Virtual Pro Internship",
    issueDate: "October 02, 2026",
    completionDuration: "6 Weeks (120 Hours)",
    grade: "Grade A (Excellence)",
    status: "Verified & Active",
    verificationId: "IN-2026-CYBER-9021",
    credentialUrl: "https://internnova.co.in/verify/IN-2026-CYBER-9021",
    mentorName: "Vikram Singhania, InfoSec Lead",
    organization: "InternNova EdTech Pvt. Ltd. (MSME UDYAM-BR-24-0054689)",
    projectsCompleted: [
      "Web Application Penetration Test Report (OWASP Top 10)",
      "Automated Vulnerability Scanner Script using Python & Nmap"
    ]
  }
};

export const WORKSHOPS_DATA = [
  {
    id: "ws-1",
    title: "Cracking System Design & DSA for Product Companies",
    speaker: "Harsh Vardhan",
    speakerRole: "Staff Software Engineer, Ex-Amazon",
    date: "Saturday, Oct 18, 2026",
    time: "6:00 PM - 8:30 PM IST",
    status: "Open for RSVP",
    seatsLeft: 34,
    badge: "Free Masterclass",
    topics: ["HLD & LLD Fundamentals", "Scaling to 1M Users", "Top 10 DSA Interview Patterns"]
  },
  {
    id: "ws-2",
    title: "Building Production LLM Apps with LangChain & RAG",
    speaker: "Ananya Roy",
    speakerRole: "AI Architect at CognitiveScale",
    date: "Sunday, Oct 25, 2026",
    time: "5:00 PM - 7:30 PM IST",
    status: "Fast Filling",
    seatsLeft: 18,
    badge: "Hands-on Workshop",
    topics: ["Vector Embeddings & Hybrid Search", "ChromaDB & Pinecone", "Deploying on Cloud"]
  },
  {
    id: "ws-3",
    title: "From Git Zero to DevOps Hero: CI/CD & Docker Hands-on",
    speaker: "Karthik Raja",
    speakerRole: "DevOps Consultant & AWS Community Builder",
    date: "Saturday, Nov 01, 2026",
    time: "7:00 PM - 9:00 PM IST",
    status: "Registration Opening",
    seatsLeft: 50,
    badge: "Live Coding",
    topics: ["Multi-stage Docker Builds", "GitHub Actions Automation", "AWS Deployment Secrets"]
  }
];

export const FAQ_DATA = [
  {
    id: "faq-1",
    category: "general",
    question: "Who can apply for InternNova virtual internships? Are beginners eligible?",
    answer: "Yes, absolutely! InternNova programs are specifically crafted for college students (1st to 4th year across B.Tech, BCA, MCA, B.Sc, and related disciplines) as well as recent graduates and self-taught developers. We provide prerequisite onboarding materials, starter code repositories, and beginner-to-advanced learning tracks with step-by-step guidance."
  },
  {
    id: "faq-2",
    category: "verification",
    question: "Are the certificates verified, recognized, and accepted by colleges for academic credits?",
    answer: "Yes! Every InternNova certificate carries a unique cryptographic Credential ID and a dynamic QR code that links directly to our official online verification registry (e.g. internnova.co.in/verify/ID). InternNova is a legally registered MSME organization (UDYAM-BR-24-0054689), and our certificates and official offer letters are accepted for academic semester internship credits by over 100+ partner universities across India and internationally."
  },
  {
    id: "faq-3",
    category: "curriculum",
    question: "What makes InternNova different from watching random YouTube tutorials?",
    answer: "YouTube provides passive viewing, whereas InternNova simulates an actual corporate software engineering environment. You receive an official stamped Offer Letter on Day 1, collaborate via structured GitHub repositories, submit Pull Requests that undergo rigorous code reviews by senior mentors, and build complete production-grade capstone projects rather than toy examples."
  },
  {
    id: "faq-4",
    category: "general",
    question: "What is the duration and weekly time commitment required?",
    answer: "Programs typically run for 4 to 6 weeks. The schedule is designed to be highly student-friendly and self-paced alongside your college classes or exams. You only need to dedicate approximately 8 to 12 hours per week to complete the weekly milestones and attend optional weekend doubt-clearing mentorship calls."
  },
  {
    id: "faq-5",
    category: "curriculum",
    question: "How do mentorship and doubt resolution work during the internship?",
    answer: "You get access to our dedicated intern portal and community channels (Discord & Telegram) staffed by technical mentors. Whenever you encounter a bug, build error, or architectural question, you can submit your query and receive guidance within a few hours. We also conduct live weekend doubt-clearing sessions."
  },
  {
    id: "faq-6",
    category: "verification",
    question: "How do I receive my Offer Letter and Letter of Recommendation (LOR)?",
    answer: "Upon completing your application and domain enrollment, your official InternNova Offer Letter with your unique intern ID and start date is instantly generated and emailed to you. Upon successful completion and code submission with Grade A or above, you receive the Verified Certificate along with an official Letter of Recommendation (LOR) signed by the program director."
  },
  {
    id: "faq-7",
    category: "fees",
    question: "Are there any stipends or placement opportunities provided?",
    answer: "Top performers in each cohort who demonstrate outstanding code quality, GitHub discipline, and capstone presentation are eligible for merit-based performance rewards, sponsored hackathon entries, and referrals to InternNova's network of partner startups and tech recruiters."
  },
  {
    id: "faq-8",
    category: "general",
    question: "What tools and software do I need to participate?",
    answer: "All you need is a basic laptop or computer with an internet connection, a free GitHub account, and standard development tools such as VS Code, Git, and web browsers. All virtual labs, cloud sandboxes, and documentation are provided free of cost."
  }
];

export const STATS_DATA = [
  { value: "10,000+", label: "Students Trained", sublabel: "Across 100+ universities", icon: "users" },
  { value: "100%", label: "Verified Credentials", sublabel: "With unique QR codes & IDs", icon: "shield-check" },
  { value: "4.9 / 5", label: "Student Satisfaction", sublabel: "From 300+ public reviews", icon: "star" },
  { value: "95%", label: "Completion Rate", sublabel: "Industry-leading mentorship", icon: "trending-up" },
  { value: "6+", label: "Core Tech Domains", sublabel: "Full stack, AI, Cyber, Cloud", icon: "code" }
];
