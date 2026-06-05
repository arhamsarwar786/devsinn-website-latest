export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  businessImpact: string[];
  heroImage: string;
  screenshots: string[];
  relatedService: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "chatsupplies",
    title: "ChatSupplies",
    tagline: "AI-powered chat and supply management platform for B2B businesses",
    industry: "B2B SaaS",
    category: "SaaS MVP Development",
    challenge:
      "The client needed a platform that combined intelligent real-time chat with supplier and inventory management — two workflows that were being handled separately across multiple disconnected tools, causing delays and data inconsistencies.",
    solution:
      "We designed and built a unified SaaS platform with AI-assisted chat, supplier onboarding flows, order management, and a real-time admin dashboard. The architecture was built to handle multi-user environments with role-based access from day one.",
    features: [
      "AI-assisted chat interface with smart response suggestions",
      "Supplier onboarding and management dashboard",
      "Order tracking and inventory visibility",
      "Role-based access for admin, supplier, and buyer roles",
      "Real-time notifications and activity feed",
      "Admin analytics panel with exportable reports",
    ],
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "WebSocket", "Tailwind CSS", "Docker"],
    businessImpact: [
      "Reduced manual coordination between buyers and suppliers",
      "Improved operational visibility across the supply chain",
      "Created a scalable product foundation for future feature expansion",
      "Eliminated dependency on disconnected tools for communication and order tracking",
    ],
    heroImage: "/images/singlePageProjects/web/chatsupplies/main.png",
    screenshots: [
      "/images/singlePageProjects/web/chatsupplies/sneak-1.png",
      "/images/singlePageProjects/web/chatsupplies/sneak-2.png",
      "/images/singlePageProjects/web/chatsupplies/sneak-3.png",
    ],
    relatedService: "saas-mvp",
  },
  {
    slug: "drafidox",
    title: "Drafidox",
    tagline: "AI-powered document, image, and text processing SaaS platform",
    industry: "AI SaaS / Productivity",
    category: "AI Automation & SaaS MVP",
    challenge:
      "Users needed a single workspace to process documents, extract information, summarize content, and perform image-based tasks — without switching between multiple AI tools or writing prompts manually.",
    solution:
      "We built an AI-powered SaaS platform with a clean workspace interface, multi-modal processing capabilities (documents, images, text), task queuing, and a user account system with usage tracking. The platform connects to LLM APIs and processes files asynchronously.",
    features: [
      "Document upload and AI-powered extraction and summarization",
      "Image processing with AI-generated descriptions and analysis",
      "Multi-task queue with real-time progress tracking",
      "User accounts with usage history and saved outputs",
      "Export functionality (PDF, markdown, plain text)",
      "Admin panel with user management and usage analytics",
    ],
    techStack: ["Next.js", "React", "FastAPI", "OpenAI API", "PostgreSQL", "Supabase", "AWS S3", "Tailwind CSS"],
    businessImpact: [
      "Reduced time spent on manual document processing and summarization",
      "Created a subscription-ready AI product with clear user workflow",
      "Improved output consistency compared to manual LLM prompting",
      "Built a scalable foundation ready for additional AI task types",
    ],
    heroImage: "/images/singlePageProjects/web/drafidox/main.png",
    screenshots: [
      "/images/singlePageProjects/web/drafidox/sneak-1.png",
      "/images/singlePageProjects/web/drafidox/sneak-2.png",
    ],
    relatedService: "ai-automation",
  },
  {
    slug: "smart-logo-maker",
    title: "Smart Logo Maker",
    tagline: "AI-powered logo generation platform for brand identity creation",
    industry: "AI Design Tools / SaaS",
    category: "AI-Powered SaaS",
    challenge:
      "Small businesses and solo founders needed professional logo creation without the cost or time of hiring a designer — but existing AI tools produced generic results with poor editing capabilities.",
    solution:
      "We built an AI-powered logo generation SaaS where users input their brand details and receive multiple logo concepts, then refine them through an interactive editor. The platform handles style preferences, color palettes, typography, and export formats.",
    features: [
      "AI logo generation based on brand name, industry, and style preferences",
      "Interactive logo editor with real-time preview",
      "Color palette and typography customization",
      "Multiple export formats (SVG, PNG, PDF)",
      "Brand kit generation with logo variations",
      "User accounts with saved designs and generation history",
    ],
    techStack: ["Next.js", "React", "OpenAI API", "Stable Diffusion", "Node.js", "PostgreSQL", "Canvas API", "Stripe"],
    businessImpact: [
      "Reduced logo creation time from days to minutes for early-stage businesses",
      "Created a self-serve product that requires no design expertise",
      "Improved brand output quality compared to template-only tools",
      "Built a monetizable SaaS with clear credit-based and subscription pricing model",
    ],
    heroImage: "/images/singlePageProjects/web/smart-logo-maker/hero.png",
    screenshots: [
      "/images/singlePageProjects/web/smart-logo-maker/sneak-1.png",
      "/images/singlePageProjects/web/smart-logo-maker/sneak-2.png",
    ],
    relatedService: "saas-mvp",
  },
  {
    slug: "drm",
    title: "Digital Restaurant Management (DRM)",
    tagline: "All-in-one restaurant operations platform for orders, menus, and staff",
    industry: "Hospitality / F&B Tech",
    category: "Custom Web App Development",
    challenge:
      "Restaurant owners were managing orders, menus, staff schedules, and customer data across separate systems — creating operational gaps, order errors, and slow service during peak hours.",
    solution:
      "We built a centralized restaurant management web application with real-time order management, digital menu editing, staff scheduling, table management, and analytics — all accessible from a single dashboard.",
    features: [
      "Real-time order management with kitchen display integration",
      "Digital menu management with item availability toggles",
      "Table and reservation management system",
      "Staff role assignments and shift scheduling",
      "Sales analytics dashboard with daily, weekly, and monthly reports",
      "Customer order history and feedback management",
    ],
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "WebSocket", "Tailwind CSS", "Docker", "Redis"],
    businessImpact: [
      "Reduced order processing errors through centralized real-time management",
      "Improved operational visibility across front-of-house and kitchen",
      "Replaced three separate tools with a single management interface",
      "Created a scalable foundation for franchise expansion and multi-location support",
    ],
    heroImage: "/images/singlePageProjects/web/drm/main.png",
    screenshots: [
      "/images/singlePageProjects/web/drm/sneak-1.png",
      "/images/singlePageProjects/web/drm/sneak-2.png",
    ],
    relatedService: "web-app-development",
  },
  {
    slug: "iqra-quran",
    title: "Iqra Quran",
    tagline: "Islamic digital platform with Quran recitation, prayer times, and Islamic tools",
    industry: "Education / Religious Tech",
    category: "Custom Web App Development",
    challenge:
      "The client needed a comprehensive Islamic web platform that combined Quran recitation, prayer times, and educational tools in one accessible interface — with content structured for daily use by diverse audiences.",
    solution:
      "We designed and built a feature-rich Islamic web platform with a Quran recitation hub (Arabic text, transliteration, audio), live prayer time lookup by location, Islamic calendar, and a suite of daily tools — all wrapped in a clean, accessible interface.",
    features: [
      "Full Quran with Arabic text, transliteration, and translation",
      "Audio recitation with multiple Qari options",
      "Real-time prayer times by location (GPS and city search)",
      "Islamic calendar and Hijri date conversion",
      "Qibla direction tool",
      "Responsive design optimized for mobile and desktop use",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Aladhan API", "Quran API", "Vercel"],
    businessImpact: [
      "Delivered a single platform replacing multiple separate apps for Islamic daily practice",
      "Improved accessibility of Islamic content for non-Arabic-speaking users",
      "Created a scalable foundation for additional Islamic education features",
      "Optimized for SEO, enabling organic discovery by Islamic content searchers",
    ],
    heroImage: "/images/singlePageProjects/web/iqra-quran/hero.png",
    screenshots: [
      "/images/singlePageProjects/web/iqra-quran/sneak-1.png",
      "/images/singlePageProjects/web/iqra-quran/sneak-2.png",
    ],
    relatedService: "web-app-development",
  },
  {
    slug: "meri-ride",
    title: "Meri Ride",
    tagline: "Inclusive ride and mobility platform for individuals with different abilities",
    industry: "Non-Profit / Social Tech / Mobility",
    category: "Flutter Mobile App & Web Platform",
    challenge:
      "The organization needed a digital platform to connect people with different abilities to accessible transport options — while also enabling income opportunities for drivers willing to provide inclusive services.",
    solution:
      "We built a web platform and companion mobile app that handles ride requests, driver onboarding, accessibility preferences, and booking management — designed with inclusivity as a core product requirement, not an afterthought.",
    features: [
      "Ride booking with accessibility requirement inputs",
      "Driver onboarding with inclusive service certification",
      "Real-time ride tracking and status updates",
      "User profiles with saved accessibility preferences",
      "Admin dashboard for ride oversight and driver management",
      "Multilingual interface support",
    ],
    techStack: ["Next.js", "React", "Flutter", "Firebase", "Node.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
    businessImpact: [
      "Created accessible mobility infrastructure for an underserved community",
      "Improved service discoverability for individuals with different abilities",
      "Enabled driver income opportunities through an inclusive marketplace model",
      "Delivered a scalable platform foundation for city-level expansion",
    ],
    heroImage: "/images/singlePageProjects/meriride/meriride.png",
    screenshots: [
      "/images/singlePageProjects/meriride/meriride1.png",
      "/images/singlePageProjects/meriride/meriride2.png",
      "/images/singlePageProjects/meriride/meriride3.png",
    ],
    relatedService: "flutter-mobile-apps",
  },
];
