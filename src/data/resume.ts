export const profile = {
  name: 'Liran Ramekar',
  initials: 'LR',
  role: 'Software Engineer',
  tagline: 'React & TypeScript Engineer',
  summary:
    "I'm a software engineer with 3+ years of experience turning product ideas into fast, accessible, and maintainable web applications — mostly in React, TypeScript, and Node.js. I care about clean component architecture, smooth UX, and shipping things that hold up in production.",
  location: 'India / Israel',
  email: ['liranramekar7@gmail.com', "lyranten@gmail.com"],
  phones: [
    { label: '🇮🇳 India', value: '+91 74481 15877' },
    { label: '🇮🇱 Israel', value: '+972 53-784-0375' },
  ],
  resumeUrl: '/liran_ind.pdf',
  social: {
    github: 'https://github.com/lyran10',
    linkedin: 'https://www.linkedin.com/in/liran-ramekar-398163217/',
    leetcode: 'https://leetcode.com/u/lyran10/',
    instagram: 'https://www.instagram.com/liranimmanuel/',
  },
  stats: [
    { label: 'Years of experience', value: '3+' },
    { label: 'Production apps shipped', value: '5+' },
    { label: 'Core technologies', value: '10+' },
  ],
}

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'Pinnacle',
    role: 'Software Engineer',
    period: '2026 - Present',
    points: [
      'Built reusable RBAC permission-guard components, hooks.',
      'Built reusable components (DataTable, pagination, filters).',
      'Implemented workflows with TanStack Query and React Hook Form + Zod.',
      'Built WhatsApp template preview with phone mockup rendering using React.',
      'Implemented Redis-backed rate limiting, caching with Grafana Loki logs.',
      'Implemented channel pricing configuration (markup, effective-date versioning) across frontend and backend.',
      'Built configurable Landing Page settings (branding, logo/favicon upload via Garage/S3) across frontend and backend.',
    ],
    stack: ['JavaScript', "TypeScript", 'React', "ShadCN", "Redis", "Grafana", "Loki", "Garage", 'Node.js', 'REST APIs', "Webhooks", "PostgreSQL", "Prisma", "Docker"],
  },
  {
    company: 'Big V Telecom',
    role: 'React.js Developer',
    period: '2023 — 2026',
    current: true,
    points: [
      'Built and maintained responsive single-page applications with React and TypeScript, including a reusable component library used across multiple internal products.',
      'Managed complex application state with Redux and Context API, keeping data flow predictable across large feature areas.',
      'Integrated REST APIs for dynamic data retrieval, and optimized rendering with memo, useMemo, useCallback, and route-based lazy loading.',
      'Implemented authentication and authorization flows using JWT tokens, cookies, and local/session storage, including protected routing.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'JWT', 'REST APIs'],
  },
  {
    company: 'Convosense',
    role: 'Full Stack Developer Intern',
    period: '2023',
    points: [
      'Designed and developed responsive user interfaces from scratch, translating designs into production-ready components.',
      'Diagnosed and resolved functional bugs and performance bottlenecks across the stack.',
      'Implemented client-side logic with JavaScript and jQuery for interactive product flows.',
      'Built server-side scripts to handle API requests, responses, and data processing.',
    ],
    stack: ['JavaScript', 'jQuery', 'PHP', "Webhooks", 'REST APIs'],
  }
]

export type EducationItem = {
  school: string
  degree: string
  location: string
  period: string
}

export const education: EducationItem[] = [
  {
    school: 'Manipal University',
    degree: 'Master of Computer Applications (MCA)',
    location: 'Jaipur, India',
    period: '2023 — 2025',
  },
  {
    school: 'Developers Institute',
    degree: 'Full Stack Web Development',
    location: 'Tel Aviv, Israel',
    period: '2022',
  },
  {
    school: 'Hislop College, RTMNU',
    degree: 'Bachelor of Business Administration (BBA)',
    location: 'Nagpur, India',
    period: '2010 — 2013',
  },
]

export type Skill = { name: string; level: number }
export type SkillGroup = { group: string; skills: Skill[] }

export const skills: SkillGroup[] = [
  {
    group: 'Frontend',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 75 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'Redux / Context API', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 & CSS3', level: 75 },
    ],
  },
  {
    group: 'Backend',
    skills: [
      { name: 'Node.js', level: 55 },
      { name: 'Express', level: 53 },
      { name: 'MongoDB', level: 50 },
      { name: 'GraphQL', level: 55 },
      { name: 'REST API design', level: 50 },
      { name: 'Postman', level: 60 },
    ],
  },
  {
    group: 'Tooling & Practices',
    skills: [
      { name: 'Git & GitHub', level: 65 },
      { name: 'Vite / Webpack', level: 78 },
      { name: 'Agile / Scrum', level: 80 },
      { name: 'Responsive & Accessible UI', level: 86 },
      { name: 'Docker', level: 60 },
      { name: 'AI Tools', level: 90 },
    ],
  },
]

export type Project = {
  title: string
  description: string
  highlights: string[]
  stack: string[]
  link?: string
  repo?: string
  status: 'Live' | 'In Progress'
}

export const projects: Project[] = [
  {
    title: 'TeamUp — Connect, Team Up, Compete',
    description:
      'A real-time chat application for football enthusiasts to build teams, find opponents, and send match invites — all through live messaging.',
    highlights: [
      'Real-time messaging with Socket.io and JWT-secured private routes',
      'Team creation, matchmaking, and challenge/invite system',
    ],
    stack: ['React', "Typescript", 'Redux Toolkit', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    // repo: 'https://github.com/lyran10',
    status: 'In Progress',
  },
  {
    title: 'Rewards — Loyalty & Coupon Platform',
    description:
      'A merchant dashboard for managing offers and validating coupon redemptions, paired with a customer-facing rewards system where waste-disposal actions earn redeemable points.',
    highlights: [
      'Interactive analytics dashboard built with ApexCharts',
      'Role-based views for shop owners vs. end customers',
    ],
    stack: ['React', "Typescript", 'Redux Toolkit', 'ApexCharts', '.NET', 'Tailwind'],
    // link: 'https://rewards.ictsbm.com/',
    status: 'Live',
  },
  {
    title: 'DMA — Workforce Analytics',
    description:
      'A real-time data visualization system for tracking employee activity, with QR-code based check-ins feeding live analytics dashboards.',
    highlights: [
      'QR-code driven activity tracking pipeline',
      'Real-time charts and reporting for operations teams',
    ],
    stack: ['React', "Typescript", 'Redux Toolkit', 'ApexCharts', '.NET', 'Tailwind'],
    // link: 'https://dma.ictsbm.com/',
    status: 'Live',
  },
  {
    title: 'Crypto Tracker',
    description:
      'A full-stack cryptocurrency tracking app with a Node/Express API and a React front end for live price data and watchlists.',
    highlights: ['Custom REST API layer', 'Live price polling with a clean, responsive UI'],
    stack: ['React', "Typescript", 'Node.js', 'Express', 'MongoDB'],
    // link: 'https://crypto-app-inf1.onrender.com/',
    // repo: 'https://github.com/lyran10/frontend-crypto',
    status: 'Live',
  },
  {
    title: '1SPOC',
    description:
      'A full-stack, multi-tenant platform for a CPaaS-style communications and billing product, pairing a Node/Express/Prisma API with a React admin dashboard. Staff onboard client organizations, structure them into billing and consumer units, configure messaging channels like WhatsApp and SMS, and manage wallets, rate cards, and monetization across the whole hierarchy.',
    highlights: [
      'Financially rigorous wallet engine with idempotent funding/transfers and automated monthly batch invoicing',
      'Module-driven RBAC end-to-end — permission checks enforced in the API and mirrored in the UI down to individual actions',
      'Native WhatsApp Embedded Signup and SMS channel configuration, plus a CSV/XLSX-driven rate-matrix engine',
      'Consistent layered architecture on both ends (DTO → repository → service → controller on the API, feature-sliced modules on the front end), bilingual EN/AR UI',
    ],
    stack: ['React', "Typescript", 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ'],
    status: 'Live',
  },
  {
  title: 'PinBot RCS Console',
  description:
    'A multi-tenant operations console for RCS (Rich Communication Services) business messaging, giving staff and clients a single place to build bots and message templates, run campaigns, and manage billing across the org hierarchy. Pairs a React admin dashboard with domain-resolved white-labeling, so the same deployment serves multiple branded tenants.',
  highlights: [
    'Visual RCS template builder (rich cards, carousels, suggestion actions) and a React Flow-based conversation workflow editor, both backed by live message simulators',
    'Full campaign lifecycle — scheduling, execution, cancellation, and delivery/invalid-number reporting across RCS and SMS channels',
    'Hierarchical org, reseller, and rate-card administration with prepaid wallet/recharge controls and per-tenant customized pricing',
    'Rich MIS and analytics layer (billing, bot, campaign, API-usage dashboards) on Redux Toolkit state, with pluggable JWT/Auth0/Firebase/Cognito auth and EN/FR/DE/NL i18n',
  ],
  stack: ['React.js', 'Redux Toolkit', 'MUI', 'ApexCharts', "Node.js", 'Express', 'PostgreSQL', 'Prisma', 'Redis', "PostgresQL", 'Docker'],
  status: 'Live',
}
]
