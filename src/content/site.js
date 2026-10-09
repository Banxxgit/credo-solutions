// Single source of truth for site copy.
//
// Everything here is drawn from the original Credo Solutions content
// (service offerings, FAQ answers, About copy) — restructured and tightened,
// not invented. Do not add clients, metrics, locations or other claims that
// the business has not confirmed.

export const contact = {
  email: 'info@credo-solutions.com',
  responseTime: 'Within 24 hours',
};

export const nav = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const positioning = {
  headline: 'We build the products and systems businesses run on',
  summary:
    'Credo Solutions is a technology and product engineering company. We design, build, integrate and support software for businesses — with experience across cloud, data and AI, enterprise platforms and blockchain.',
};

// What Credo builds — each item maps to offerings in `services` below.
export const builds = [
  {
    title: 'Web & mobile applications',
    body: 'Customer-facing products and internal tools, designed and engineered end to end.',
  },
  {
    title: 'Enterprise systems',
    body: 'ERP, CRM and HR systems, and implementation and customization of SAP, Salesforce and Workday.',
  },
  {
    title: 'Integrations & APIs',
    body: 'Connections that move data and workflows between modern and legacy systems.',
  },
  {
    title: 'Cloud & modernization',
    body: 'Migrations to AWS, Azure or GCP, and upgrades for platforms that no longer meet performance or security needs.',
  },
  {
    title: 'Data, AI & automation',
    body: 'Forecasting models, document intelligence, chatbots, computer vision, and automation of repetitive processes.',
  },
  {
    title: 'Blockchain products',
    body: 'Smart contracts, decentralized applications, tokenized assets and decentralized identity.',
  },
];

export const services = [
  {
    id: 'software',
    short: 'Software Engineering',
    title: 'Software Development & Engineering',
    summary: 'Web, mobile and enterprise software, cloud migration, integration and modernization.',
    description:
      'We design and build web, mobile and enterprise software — including ERP, CRM and HR systems — and modernize the platforms a business already depends on.',
    offerings: [
      {
        title: 'Custom Application Development',
        description: 'End-to-end design and engineering of scalable web, mobile and enterprise applications.',
      },
      {
        title: 'Cloud Migration (AWS, Azure, GCP)',
        description: 'Moving systems to secure, cost-optimized cloud environments.',
      },
      {
        title: 'API & Systems Integration',
        description: 'Connecting data, tools and workflows across modern and legacy systems.',
      },
      {
        title: 'Legacy Modernization',
        description: 'Upgrading outdated platforms to current performance and security standards.',
      },
      {
        title: 'Enterprise Platforms (SAP, Salesforce, Workday)',
        description: 'Implementation, customization and lifecycle management for critical enterprise systems.',
      },
    ],
  },
  {
    id: 'ai',
    short: 'AI & Automation',
    title: 'AI & Intelligent Automation',
    summary: 'Machine learning and automation applied to specific operational problems.',
    description:
      'Machine learning and automation applied to specific operational problems: forecasting demand, reading and summarizing documents, inspecting images, and removing repetitive work.',
    offerings: [
      {
        title: 'Predictive Analytics & Machine Learning Models',
        description: 'Models that forecast demand, anticipate trends and help optimize operations.',
      },
      {
        title: 'Natural Language Processing (Chatbots & Document Intelligence)',
        description: 'Automated conversations, document summaries, and information extracted from text.',
      },
      {
        title: 'Computer Vision & Image Recognition',
        description: 'Visual recognition for inspections, surveillance and automated checks.',
      },
      {
        title: 'Intelligent Process Automation (RPA + AI)',
        description: 'Robotic process automation combined with AI to take repetitive tasks off people’s hands.',
      },
      {
        title: 'Responsible AI & Model Auditing',
        description: 'Reviewing deployed models for fairness, transparency and compliance.',
      },
    ],
  },
  {
    id: 'blockchain',
    short: 'Blockchain & Web3',
    title: 'Blockchain & Web3',
    summary: 'Smart contracts, decentralized applications, tokenization and digital identity.',
    description:
      'Smart contracts, decentralized applications, tokenized assets and identity systems — with the architecture, governance and integration decisions designed for scalability, compliance and performance.',
    offerings: [
      {
        title: 'Smart Contract Development',
        description: 'Self-executing contracts that automate agreements and transactions securely.',
      },
      {
        title: 'Decentralized Applications (dApps) & Tokenization',
        description: 'Blockchain products and tokenized assets built around their users.',
      },
      {
        title: 'Blockchain Architecture & Consulting',
        description: 'Choosing the infrastructure, governance and integration approach for an enterprise blockchain project.',
      },
      {
        title: 'Digital Identity & Zero-Trust Security',
        description: 'Decentralized identity systems and zero-trust frameworks for stronger identity management.',
      },
    ],
  },
  {
    id: 'strategy',
    short: 'Product Strategy',
    title: 'Product & Go-to-Market Strategy',
    summary: 'Roadmaps, positioning, market research and launch planning.',
    description:
      'Technology is only as strong as the strategy behind it. We help define the market, validate the product, and plan the launch — so what gets built has somewhere to go.',
    offerings: [
      {
        title: 'Product Strategy & Roadmapping',
        description: 'Setting the vision, prioritizing features, and mapping the path from concept to launch.',
      },
      {
        title: 'Brand Positioning & Product Storytelling',
        description: 'A clear position and narrative that explains the product to the people it’s for.',
      },
      {
        title: 'Market Research & Competitive Intelligence',
        description: 'Research that validates opportunities and identifies where a product can stand out.',
      },
      {
        title: 'Launch & Growth Campaigns',
        description: 'Planning and running go-to-market campaigns for launch and growth.',
      },
    ],
  },
  {
    id: 'support',
    short: 'Support & Advisory',
    title: 'Support & Advisory',
    summary: 'Project management, training, managed services and security after launch.',
    description:
      'Our work doesn’t stop at launch. We manage delivery, prepare teams for new systems, and keep those systems maintained and secure as the business changes.',
    offerings: [
      {
        title: 'IT Project & Program Management',
        description: 'Running complex technology initiatives on time and within scope through agile execution.',
      },
      {
        title: 'Change Management & Training',
        description: 'Structured adoption plans and hands-on training so teams can use what’s been built.',
      },
      {
        title: 'Managed Services & Continuous Support',
        description: 'Proactive monitoring, maintenance and ongoing technical support for critical systems.',
      },
      {
        title: 'Cybersecurity & Compliance',
        description: 'Security controls and compliance practices that protect systems and data.',
      },
    ],
  },
];

// Technology index — every entry is named in the service offerings above.
export const technologies = [
  {
    group: 'Cloud & platforms',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'SAP', 'Salesforce', 'Workday'],
  },
  {
    group: 'Engineering',
    items: ['Web applications', 'Mobile applications', 'ERP, CRM & HR systems', 'APIs & systems integration', 'Legacy modernization'],
  },
  {
    group: 'Data & AI',
    items: [
      'Predictive analytics & ML',
      'Natural language processing',
      'Document intelligence',
      'Computer vision',
      'RPA + AI automation',
      'Model auditing',
    ],
  },
  {
    group: 'Blockchain & security',
    items: ['Smart contracts', 'dApps & tokenization', 'Decentralized identity', 'Zero-trust security', 'Security & compliance controls'],
  },
];

// How Credo works — drawn from the original About copy and FAQ answers.
export const approach = [
  {
    title: 'Understand first',
    body: 'Every engagement starts with your problem, not our toolkit. Before any migration, we run a full risk assessment of your data and infrastructure.',
  },
  {
    title: 'Deliver early',
    body: 'Agile delivery, with working improvements early rather than all at the end. Most projects run 6–12 weeks, depending on scope.',
  },
  {
    title: 'Integrate, don’t replace',
    body: 'We assess the systems you already run and build automation and AI that work with them.',
  },
  {
    title: 'Stay on',
    body: 'After launch we monitor, maintain and support what we’ve built as your business changes.',
  },
];

// From the original FAQ: "startups to established enterprises — across sectors
// like finance, logistics, healthcare, and retail."
export const sectors = ['Finance', 'Logistics', 'Healthcare', 'Retail'];

export const about = {
  belief: 'Innovation should be accessible, measurable, and transformative.',
  intro:
    'Credo Solutions is a team of engineers, data scientists and strategists. We help organizations put technology to practical use — and keep it working after launch.',
  team:
    'Our teams combine software engineering, data science and strategic consulting: the range a project needs, from first scoping through to ongoing support.',
  range:
    'That range is deliberate. Most problems worth solving cross more than one discipline — a forecasting model depends on clean integrations; a new platform needs a plan for launch and for the people who will use it.',
  philosophy:
    'In practice that means clear communication, delivery in working increments, and systems your team understands and can own.',
  vision: 'Technology that extends what people can do — and keeps working long after launch.',
  mission: 'To partner with organizations on technology that produces measurable business outcomes.',
  values: [
    {
      title: 'Accessible',
      body: 'Understandable and usable by the people it’s for — not reserved for specialists.',
    },
    {
      title: 'Human-centered',
      body: 'Designed around the people who will use it and the people who will maintain it.',
    },
    {
      title: 'Measurable',
      body: 'Judged by the measurable value it creates for the business.',
    },
  ],
  promises: [
    'Transparent communication and ethical delivery',
    'Engineering, data and strategy expertise in one team',
    'Systems designed around your business goals, built to scale',
  ],
};

export const faqs = [
  {
    question: 'What kinds of organizations do you work with?',
    answer:
      'Organizations of all sizes, from startups to established enterprises, in sectors including finance, logistics, healthcare and retail.',
  },
  {
    question: 'How do you protect our data during a migration or rebuild?',
    answer:
      'Before any migration we run a full risk assessment of your data and infrastructure. During delivery we use layered security controls and encrypted communication, and build to the compliance requirements that apply to your business.',
  },
  {
    question: 'Do you support systems after launch?',
    answer:
      'Yes. We provide ongoing monitoring, maintenance and proactive support so your systems stay secure, optimized and able to scale as the business changes.',
  },
  {
    question: 'Can you add AI or automation to our existing systems?',
    answer:
      'Yes. We start by assessing your current infrastructure, then build automation or models that work with the tools you already use rather than replacing them.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope and complexity. Most projects run 6–12 weeks, with working improvements delivered early rather than all at the end.',
  },
];
