/* ============================================================================
 *  PORTFOLIO CONTENT
 *  ----------------------------------------------------------------------------
 *  This is the ONLY file you need to edit to update the site's content.
 *  There is no build step — save this file and refresh the page.
 *
 *  HOW TO ADD A NEW PROJECT:
 *    1. Copy one of the objects in the `projects` array below.
 *    2. Give it a unique `id` (lowercase, no spaces) — this is used in the
 *       detail-page link: projects/detail.html?id=<your-id>
 *    3. Fill in title, image, stack, description, and optional github/demo URLs.
 *    Done — the card and its detail popup are generated automatically.
 *
 *  The same pattern applies to experience, courses, education, etc. — just add
 *  or edit an object in the matching array.
 * ========================================================================== */

window.PORTFOLIO_DATA = {

  /* ---- Hero: the rotating "I'm ___" text under your name ---- */
  hero: {
    roles: ["Data Analyst", "Web Developer", "ML Enthusiast"]
  },

  /* ---- About → Interests grid (icon classes are Remix Icon names) ---- */
  interests: [
    { name: "Machine Learning",   icon: "ri-global-line",         color: "#ffbb2c" },
    { name: "Database Management", icon: "ri-database-2-line",     color: "#5578ff" },
    { name: "Cybersecurity",       icon: "ri-shield-keyhole-line", color: "#e80368" },
    { name: "Data Analysis",       icon: "ri-code-s-slash-fill",   color: "#28a745" },
    { name: "Web Development",     icon: "ri-layout-4-line",       color: "#f1081f" },
    { name: "Experiment Design",   icon: "ri-file-list-3-line",    color: "#47aeff" },
    { name: "Software Testing",    icon: "ri-bug-line",            color: "#6610f2" },
    { name: "Deep Learning",       icon: "ri-cloud-line",          color: "#00c4cc" }
  ],

  /* ---- Education cards ---- */
  education: [
    {
      image: "assets/img/education/UBC.jpg",
      degree: "B.A. Sc in Computer Engineering",
      school: "University of British Columbia",
      awards: [
        "Dean's List",
        "UBC Trek Excellence Scholarship",
        "Faculty of Applied Science International Student Scholarship"
      ]
    },
    {
      image: "assets/img/education/Stevens.png",
      degree: "M. Sc. in Machine Learning",
      school: "Stevens Institute of Technology",
      awards: [
        "Graduating December 2027",
        "Graduate Scholarship",
        "Graduate Career Accelerator Certificate"
      ]
    }
  ],

  /* ---- Courses grid ----
   * `icon`   : a Remix Icon class (browse names at https://remixicon.com/ — the
   *            full icon font is already loaded, so any ri-* class just works)
   * `title`  : course name
   * `detail` : course code (shown as a small line under the title)
   * `issuer` : school (shown as a small pill)
   * Ordered by ML/AI relevance, Stevens courses first.
   */
  courses: [
    { icon: "ri-functions",           title: "Mathematical Foundations of ML",     detail: "CS 556",   issuer: "Stevens" },
    { icon: "ri-robot-line",          title: "Applied Machine Learning",           detail: "AAI 595",  issuer: "Stevens" },
    { icon: "ri-search-eye-line",     title: "Knowledge Discovery & Data Mining",  detail: "CS 513",   issuer: "Stevens" },
    { icon: "ri-cpu-line",            title: "Introduction to Artificial Intelligence", detail: "CPSC 322", issuer: "UBC" },
    { icon: "ri-grid-line",           title: "Applied Linear Algebra",             detail: "MATH 307", issuer: "UBC" },
    { icon: "ri-bar-chart-box-line",  title: "Elementary Statistics",              detail: "STAT 251", issuer: "UBC" },
    { icon: "ri-git-branch-line",     title: "Algorithm Design & Analysis",        detail: "CPSC 320", issuer: "UBC" },
    { icon: "ri-database-2-line",     title: "Relational Databases",               detail: "CPSC 304", issuer: "UBC" },
    { icon: "ri-server-line",         title: "Distributed Software Applications",  detail: "CPEN 431", issuer: "UBC" },
    { icon: "ri-shield-keyhole-line", title: "Introduction to Cybersecurity",      detail: "CPEN 442", issuer: "UBC" },
    { icon: "ri-bug-line",            title: "Software Testing & Analysis",        detail: "CPEN 422", issuer: "UBC" },
    { icon: "ri-terminal-box-line",   title: "Operating Systems",                  detail: "CPEN 331", issuer: "UBC" }
  ],

  /* ---- Experience entries ---- */
  experience: [
    {
      company: "GONA Agro Ltd.",
      url: "https://gonaagrolimited.com/",
      period: "May 2025 – Dec 2025",
      role: "Full Stack Developer",
      location: "Madhya Pradesh, India",
      bullets: [
        "Maintained the company website and full-stack services with React, Node.js, and MySQL, plus automated CI/CD",
        "Partnered with the AI team to ship an on-site conversational assistant, designing prompts and contextual session memory",
        "Implemented role-based authentication with OAuth2 across services, improving security and user access control"
      ]
    },
    {
      company: "University of British Columbia",
      url: "https://www.ubc.ca",
      period: "Sep. 2023 – Apr. 2024",
      role: "Teaching Assistant",
      location: "Vancouver, BC",
      bullets: [
        "Supported over 150 students in mastering advanced calculus concepts through weekly tutorials, quizzes, and office hours",
        "Boosted calculus comprehension scores by 20% by providing tailored academic support and strategic exam review sessions",
        "Enhanced student performance by delivering thorough, actionable feedback on assignments and common error patterns"
      ]
    }
  ],

  /* ---- Projects ----
   * `id`     : unique slug, used by projects/detail.html?id=<id>
   * `date`   : timeline shown on the card and detail page
   * `stack`  : comma-separated tech list shown on the detail page
   * `tags`   : short list of key techs shown as badges on the card
   * `github` / `demo` : optional URLs (leave "" to hide the link)
   * `description` : array of bullet points shown on the detail page
   * Order here = display order. Reorder objects to change it.
   */
  projects: [
    {
      id: "autodataanalyst",
      title: "Auto Data Analyst Agent",
      image: "assets/img/project/autodataanalyst-card.jpg",
      date: "Mar 2026 – Present",
      tags: ["Python", "FastAPI", "OpenAI", "Docker"],
      stack: "Python, OpenAI API, FastAPI, React, Docker, Pandas",
      github: "https://github.com/Buland-Choudhary/AutoDataAnalyst",
      demo: "",
      description: [
        "Built a full-stack AI agent with React and FastAPI to autonomously generate Python data analysis scripts",
        "Engineered a self-correcting REPL engine using Python subprocess to autonomously debug and fix AI-generated scripts",
        "Secured the execution sandbox with an AST-based static analysis gate and Docker containerization under non-root privileges",
        "Deployed on Vercel and Render, integrating dynamic schema injection to prevent LLM hallucinations during data profiling"
      ]
    },
    {
      id: "quantum",
      title: "Quantum Autoencoder",
      image: "assets/img/project/quantum-card.jpg",
      date: "Jan 2025 – Apr 2025",
      tags: ["Python", "PennyLane", "Qiskit", "ML"],
      stack: "Python, NumPy, SciPy, Matplotlib, PennyLane, Qiskit",
      github: "https://github.com/Buland-Choudhary/CPEN400Qgroup2",
      demo: "",
      description: [
        "Built a quantum autoencoder as an unsupervised ML model to learn compact latent representations for anomaly detection",
        "Benchmarked quantum latent scoring and reconstruction-MSE against classical autoencoders to assess ML generalization",
        "Demonstrated Swap-Test–based scoring improved anomaly detection by ~20% compared to MSE on benchmark datasets",
        "Validated reported results with 92% anomaly detection accuracy on UCR test sets using tuned quantum encoders"
      ]
    },
    {
      id: "snapauction",
      title: "SnapAuction",
      image: "assets/img/project/snapauction-card.jpg",
      date: "May 2025 – Jul 2025",
      tags: ["Node.js", "React", "Socket.io", "PostgreSQL"],
      stack: "Node.js, Express, React, PostgreSQL, Socket.io, Supabase, Jest",
      github: "https://github.com/Buland-Choudhary/SnapAuction",
      demo: "",
      description: [
        "Built REST API with Node.js, Express, and Prisma on Supabase PostgreSQL to manage auctions, bids and users",
        "Integrated Socket.io to enable real-time bidding with sub-second synchronization of bids across all clients with reliability",
        "Implemented secure JWT authentication, bcrypt hashing, and role-based middleware for secure user authentication",
        "Configured signed-URL uploads to Cloudinary and established CI/CD pipelines on Render, Netlify, and Supabase"
      ]
    },
    {
      id: "capstone",
      title: "Capstone Project",
      image: "assets/img/project/capstone-card.jpg",
      date: "Sep 2024 – Apr 2025",
      tags: ["React Native", "Node.js", "TypeScript", "Copilot AI"],
      stack: "Node.js, React Native, TypeScript, TailwindCSS, PostgreSQL",
      github: "https://github.com/Buland-Choudhary/CapstoneProject",
      demo: "",
      description: [
        "Built cross-platform React Native + Node.js mobile app with ACS CallComposite to enable secure, low-latency video calls",
        "Boosted meeting efficiency by integrating Copilot AI to auto-generate summaries and insights for faster advisor follow-ups",
        "Ensured secure, fault-tolerant authentication using Microsoft Auth, JWT session management, and encrypted storage",
        "Enabled full app testing and demos by scripting SQL to generate relational tables, seed realistic data, and test pairing flow"
      ]
    },
    {
      id: "cpen431",
      title: "Distributed Key-Value Store",
      image: "assets/img/project/cpen431.jpg",
      date: "Jan 2025 – Apr 2025",
      tags: ["Java", "AWS EC2", "Distributed Systems"],
      stack: "Java, AWS EC2, Distributed Systems",
      github: "https://github.com/Buland-Choudhary/DistributedKeyValueStore",
      demo: "",
      description: [
        "Built a distributed key-value store in Java using consistent hashing to enable horizontal scalability",
        "Deployed and tested the system on AWS EC2 to measure performance and latency in real-world conditions",
        "Improved data durability by 75% by replicating key-value pairs across 4 nodes using a custom replication strategy",
        "Reduced recovery time by 60% by implementing an epidemic protocol to restore data after node failures"
      ]
    },
    {
      id: "trackit",
      title: "TrackIt",
      image: "assets/img/project/trackit-card.jpg",
      date: "Dec 2024 – Feb 2025",
      tags: ["React", "Node.js", "MySQL", "JWT"],
      stack: "Node.js, React.js, MySQL, DBeaver, Netlify, Render",
      github: "https://github.com/Buland-Choudhary/TrackIt-TaskManagerWebsite",
      demo: "",
      description: [
        "Developed full-featured backend using Node.js and MySQL to manage user tasks, deadlines, and priorities",
        "Enabled scalable deployment workflows by configuring Render for backend and Netlify for React frontend",
        "Designed modular REST APIs with clear route structures and used Postman for endpoint validation and testing",
        "Implemented secure JWT-based auth and Bcrypt password hashing for protected access to user-specific routes"
      ]
    },
    {
      id: "testing",
      title: "Automated Testing Analysis",
      image: "assets/img/project/testing-card.jpg",
      date: "Sep 2024 – Dec 2024",
      tags: ["Java", "JaCoCo", "EvoSuite", "AI"],
      stack: "Java, Maven, JaCoCo, EvoSuite, Randoop, AI",
      github: "https://github.com/Buland-Choudhary/testingAnalysisProject",
      demo: "",
      description: [
        "Improved test coverage of 3 core classes in the open-source Joda-Time library using automated tools and manual coding",
        "Boosted branch coverage from 85% to 100% by combining EvoSuite, Randoop, AI-based and manually written tests",
        "Compared human written vs. AI-generated tests using JaCoCo coverage reports, identifying coverage gaps and strengths",
        "Integrated LLM-based test generation into workflows and refined prompts to increase test accuracy and readability"
      ]
    },
    {
      id: "employeeportal",
      title: "Employee Self-Service Portal",
      image: "assets/img/project/employeeportal-card.jpg",
      date: "May 2025 – Jul 2025",
      tags: ["Power Apps", "Power Automate", "Dataverse"],
      stack: "Power Apps, Power Automate, Dataverse",
      github: "https://github.com/Buland-Choudhary/EmployeeSelfServicePortal",
      demo: "",
      description: [
        "Built end-to-end self-service portal in Power Apps with role-based dashboards for employees and managers",
        "Enabled employees to securely submit leave, asset, and reimbursement requests to Dataverse using Patch logic",
        "Designed manager workflows to approve/deny requests and trigger Power Automate email notifications",
        "Modeled and connected relational tables in Dataverse to simulate user roles and maintain full request lifecycles"
      ]
    }
  ],

  /* ---- Skills ----
   * Grouped logo rows. Each item points at a local SVG in assets/img/skill/.
   * `width` is optional (omit to let the SVG keep its natural aspect ratio).
   */
  skills: [
    {
      group: "Languages and Databases",
      items: [
        { src: "assets/img/skill/javascript.svg", alt: "JavaScript", height: 50, width: 120 },
        { src: "assets/img/skill/python.svg",     alt: "Python",     height: 50, width: 150 },
        { src: "assets/img/skill/java.svg",       alt: "Java",       height: 50, width: 120 },
        { src: "assets/img/skill/html5.svg",      alt: "HTML5",      height: 50 },
        { src: "assets/img/skill/css3.svg",       alt: "CSS3",       height: 60, width: 90 },
        { src: "assets/img/skill/postgresql.svg", alt: "PostgreSQL", height: 50, width: 190 },
        { src: "assets/img/skill/mysql.svg",      alt: "MySQL",      height: 70, width: 130 },
        { src: "assets/img/skill/typescript.svg", alt: "TypeScript", height: 50, width: 50 }
      ]
    },
    {
      group: "Frameworks & Technologies",
      items: [
        { src: "assets/img/skill/nodejs.svg",      alt: "Node.js",      height: 50, width: 120 },
        { src: "assets/img/skill/express.svg",     alt: "Express.js",   height: 50, width: 50 },
        { src: "assets/img/skill/react.svg",       alt: "React.js",     height: 50, width: 50 },
        { src: "assets/img/skill/tailwindcss.svg", alt: "Tailwind CSS", height: 50, width: 50 },
        { src: "assets/img/skill/aws.svg",         alt: "AWS",          height: 50 },
        { src: "assets/img/skill/azure.svg",       alt: "Azure",        height: 50, width: 50 }
      ]
    },
    {
      group: "Developer Tools",
      items: [
        { src: "assets/img/skill/github.svg",   alt: "GitHub",        height: 50, width: 50 },
        { src: "assets/img/skill/vscode.svg",   alt: "VS Code",       height: 50, width: 50 },
        { src: "assets/img/skill/postman.svg",  alt: "Postman",       height: 50, width: 50 },
        { src: "assets/img/skill/terminal.svg", alt: "Command Line",  height: 50, width: 50 },
        { src: "assets/img/skill/linear.svg",   alt: "Linear",        height: 50, width: 50 },
        { src: "assets/img/skill/intellij.svg", alt: "IntelliJ IDEA", height: 50, width: 50 },
        { src: "assets/img/skill/android.svg",  alt: "Android Studio", height: 50, width: 50 },
        { src: "assets/img/skill/figma.svg",    alt: "Figma",         height: 50, width: 50 }
      ]
    }
  ]
};
