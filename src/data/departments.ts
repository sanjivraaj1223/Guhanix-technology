import { Department } from '../types';

export const departments: Department[] = [
  {
    id: 'cs-it',
    slug: 'computer-science-it',
    name: 'Computer Science & IT',
    shortName: 'CS & IT',
    icon: 'Monitor',
    description: 'Full stack development, programming languages, software engineering, databases, UI/UX and cloud fundamentals.',
    color: '#087BFF',
    courses: [
      'python-full-stack', 'java-full-stack', 'mern-stack', 'mean-stack',
      'frontend-web-development', 'backend-web-development', 'reactjs-development',
      'android-app-development', 'python-programming', 'java-programming',
      'c-cpp-programming', 'sql-database-management', 'software-testing',
      'api-development-testing', 'git-github', 'ui-ux-design', 'cloud-computing-fundamentals'
    ],
  },
  {
    id: 'ai-ml',
    slug: 'ai-machine-learning',
    name: 'Artificial Intelligence & Machine Learning',
    shortName: 'AI & ML',
    icon: 'Brain',
    description: 'AI fundamentals, machine learning, generative AI, NLP, computer vision and AI-powered applications.',
    color: '#22D3FF',
    courses: [
      'ai-fundamentals', 'machine-learning-python', 'generative-ai-tools',
      'prompt-engineering', 'deep-learning-fundamentals', 'nlp-fundamentals',
      'computer-vision', 'ai-chatbot-development', 'ai-automation-python',
      'ai-powered-web-apps', 'ai-resume-analysis', 'ai-recommendation-systems'
    ],
  },
  {
    id: 'data',
    slug: 'data-analytics-science',
    name: 'Data Analytics & Data Science',
    shortName: 'Data Analytics',
    icon: 'BarChart3',
    description: 'Excel, Python analytics, SQL, Power BI, Tableau, data visualization and business intelligence.',
    color: '#FFB000',
    courses: [
      'advanced-excel', 'data-analytics-python', 'sql-data-analysis',
      'power-bi', 'tableau-fundamentals', 'python-data-science',
      'data-visualization', 'business-analytics', 'dashboard-development',
      'exploratory-data-analysis', 'statistics-data-analytics', 'data-cleaning-reporting'
    ],
  },
  {
    id: 'ece',
    slug: 'electronics-communication-engineering',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    icon: 'Cpu',
    description: 'MATLAB, embedded systems, Arduino, ESP32, IoT, sensor simulation and edge AI.',
    color: '#FF6A00',
    courses: [
      'matlab-programming', 'matlab-simulation', 'embedded-c-programming',
      'arduino-programming', 'esp32-programming', 'iot-fundamentals',
      'sensor-simulation', 'python-electronics', 'digital-electronics-simulation',
      'basic-circuit-simulation', 'iot-dashboard-development', 'edge-ai-fundamentals'
    ],
  },
  {
    id: 'eee',
    slug: 'electrical-electronics-engineering',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    icon: 'Zap',
    description: 'MATLAB for electrical, power systems, renewable energy, smart monitoring and PLC/SCADA.',
    color: '#FFB000',
    courses: [
      'matlab-electrical', 'electrical-circuit-simulation', 'power-systems-fundamentals',
      'renewable-energy-simulation', 'solar-energy-modelling', 'electrical-fault-analysis',
      'smart-energy-monitoring', 'ev-technology', 'plc-programming',
      'scada-fundamentals', 'python-electrical', 'electrical-data-analysis'
    ],
  },
  {
    id: 'mech',
    slug: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical',
    icon: 'Settings',
    description: 'AutoCAD, 3D modelling, CATIA, CAD/CAM, product design and engineering simulation.',
    color: '#C7D0DD',
    courses: [
      'autocad-mechanical', '3d-modelling', 'mechanical-design',
      'product-design-fundamentals', 'catia-fundamentals', 'cad-cam-fundamentals',
      'engineering-drawing', '3d-product-modelling', 'engineering-simulation',
      'technical-drawing-documentation', 'python-mechanical', 'design-portfolio-development'
    ],
  },
  {
    id: 'civil',
    slug: 'civil-engineering',
    name: 'Civil Engineering',
    shortName: 'Civil',
    icon: 'Building2',
    description: 'AutoCAD, Revit, BIM, SketchUp, STAAD.Pro, ETABS, Primavera and construction planning.',
    color: '#087BFF',
    courses: [
      'autocad-civil', 'revit-architecture', 'building-information-modelling',
      'sketchup-design', 'staad-pro-fundamentals', 'etabs-fundamentals',
      'primavera-p6', 'construction-planning', 'quantity-estimation',
      'building-plan-drafting', '3d-building-modelling', 'civil-project-documentation'
    ],
  },
  {
    id: 'chem',
    slug: 'chemical-engineering',
    name: 'Chemical Engineering',
    shortName: 'Chemical',
    icon: 'FlaskConical',
    description: 'Process calculations, MATLAB, Python, chemical simulation, P&ID and statistical quality control.',
    color: '#22D3FF',
    courses: [
      'process-calculations-excel', 'python-chemical', 'matlab-chemical',
      'chemical-data-analysis', 'process-simulation-fundamentals', 'chemical-process-simulation',
      'process-flow-diagram', 'pid-fundamentals', 'statistical-quality-control',
      'environmental-data-analysis', 'chemical-calculations', 'process-documentation'
    ],
  },
  {
    id: 'cyber',
    slug: 'cybersecurity-networking',
    name: 'Cybersecurity & Networking',
    shortName: 'Cybersecurity',
    icon: 'Shield',
    description: 'Networking, Linux, ethical hacking, web security, cloud security and digital forensics.',
    color: '#FF6A00',
    courses: [
      'computer-networking', 'network-configuration-simulation', 'linux-fundamentals',
      'cybersecurity-fundamentals', 'ethical-hacking-fundamentals', 'web-app-security',
      'python-cybersecurity', 'network-security', 'cloud-security',
      'security-log-analysis', 'digital-forensics', 'security-awareness'
    ],
  },
  {
    id: 'business',
    slug: 'business-commerce-management',
    name: 'Business, Commerce & Management',
    shortName: 'Business',
    icon: 'Briefcase',
    description: 'Business analytics, digital marketing, SEO, CRM, e-commerce and AI productivity tools.',
    color: '#FFB000',
    courses: [
      'advanced-excel-business', 'business-analytics-mgmt', 'digital-marketing',
      'seo-fundamentals', 'google-analytics', 'ecommerce-website-development',
      'crm-fundamentals', 'business-data-analytics', 'ai-tools-business',
      'financial-data-analysis', 'social-media-marketing', 'business-dashboard-development'
    ],
  },
  {
    id: 'fire-safety',
    slug: 'fire-safety',
    name: 'Fire & Safety',
    shortName: 'Fire & Safety',
    icon: 'Flame',
    description: 'OHS, hazard identification, risk assessment, incident reporting and safety management systems.',
    color: '#FF6A00',
    courses: [
      'ohs-fundamentals', 'hazard-identification', 'job-safety-analysis',
      'risk-assessment-documentation', 'incident-reporting', 'ehs-fundamentals',
      'safety-inspection-reporting', 'emergency-response-planning', 'safety-data-analytics',
      'environmental-monitoring', 'safety-audit-documentation', 'safety-management-system'
    ],
  },
  {
    id: 'placement',
    slug: 'placement-career-development',
    name: 'Placement & Career Development',
    shortName: 'Placement',
    icon: 'Target',
    description: 'Resume building, LinkedIn, GitHub portfolio, aptitude, interview prep and job search strategy.',
    color: '#087BFF',
    courses: [
      'ats-resume-building', 'linkedin-optimization', 'github-portfolio',
      'aptitude-reasoning', 'verbal-ability', 'group-discussion-training',
      'hr-interview-prep', 'technical-interview-prep', 'coding-interview-prep',
      'mock-interviews', 'business-communication', 'job-search-strategy'
    ],
  },
  {
    id: 'design',
    slug: 'design-multimedia',
    name: 'Design & Multimedia',
    shortName: 'Design',
    icon: 'Palette',
    description: 'UI/UX, graphic design, video editing, motion graphics, portfolio websites and digital content creation.',
    color: '#22D3FF',
    courses: [
      'ui-ux-design-figma', 'graphic-design', 'image-editing',
      'video-editing', 'motion-graphics', 'presentation-design',
      'website-design', 'portfolio-website', '3d-modelling-design',
      'digital-content-creation'
    ],
  },
  {
    id: 'emerging-tech',
    slug: 'emerging-technology-product-development',
    name: 'Emerging Technology & Product Development',
    shortName: 'Emerging Tech',
    icon: 'Rocket',
    description: 'SaaS, cloud apps, blockchain, AR/VR, game development, IoT dashboards and AI products.',
    color: '#C7D0DD',
    courses: [
      'saas-product-development', 'cloud-app-development', 'api-integration-projects',
      'blockchain-fundamentals', 'ar-vr-fundamentals', 'game-development-fundamentals',
      'software-prototyping', 'hackathon-project-development', 'mobile-app-product-development',
      'ai-product-development', 'iot-dashboard-emerging', 'project-documentation-presentation'
    ],
  },
  {
    id: 'academic',
    slug: 'academic-project-training',
    name: 'Academic Project Training',
    shortName: 'Academic Projects',
    icon: 'GraduationCap',
    description: 'Python, Java, full stack, AI/ML, data analytics projects, research documentation and viva preparation.',
    color: '#087BFF',
    courses: [
      'python-projects', 'java-projects', 'full-stack-projects',
      'database-projects', 'android-app-projects', 'ai-ml-projects',
      'data-analytics-projects', 'cloud-app-projects', 'software-testing-projects',
      'research-documentation', 'project-presentation-prep', 'final-year-project'
    ],
  },
];
