export const DATA = {
    home: {
        hero: {
            name: "Sofiane Bahmed",
            title: "Frontend Developer & UI/UX Designer",
            subtitle: "I build fast, accessible and visually engaging web experiences.",
            downloadCV: "/new CV.pdf"
        },
        skills: {
            sectionTitle: "Skills & Expertise",
            sectionDescription: " Specialized in creating modern digital experiences with cutting-edge technologies",
            overview: [
                {
                    name: "UI/UX Design",
                    level: 95,
                    icon: "lucide:layout-dashboard",
                    color: "primary",
                },
                {
                    name: "Frontend Development",
                    level: 90,
                    icon: "lucide:code",
                    color: "secondary",
                },
                {
                    name: "Mobile Development",
                    level: 85,
                    icon: "lucide:smartphone",
                    color: "success",
                },
                {
                    name: "Motion Design",
                    level: 88,
                    icon: "lucide:video",
                    color: "warning",
                },
            ]
        },
        testimonials: {
            sectionTitle: "Client Testimonials",
            sectionDescription: "What clients say about working together",
            items: [
                {
                    id: 1,
                    name: "Sarah Johnson",
                    role: "Product Manager at TechCorp",
                    content:
                        "Working with this designer was an absolute pleasure. The attention to detail and innovative solutions provided exceeded our expectations.",
                    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
                },
                {
                    id: 2,
                    name: "Michael Chen",
                    role: "CEO at StartupX",
                    content:
                        "The combination of technical expertise and design sensibility is rare to find. Delivered an outstanding product that our users love.",
                    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
                },
                {
                    id: 3,
                    name: "Emily Rodriguez",
                    role: "Creative Director at DesignLab",
                    content:
                        "Exceptional work ethic and creative problem-solving abilities. The final product was both beautiful and highly functional.",
                    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
                },
            ],
        },
    },
    about: {
        profile: {
            name: "Sofiane Bahmed",
            title: "Full Stack Developer",
            image: "https://i.pravatar.cc/300?u=elhocine-sofiane",
            description: [
                "I'm a creative full-stack developer with a passion for UI/UX design and clean code. I focus on building beautiful, functional, and high-performance websites and web apps.",
                "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, Vite, and TailwindCSS.",
                "Outside of code, I enjoy motion design, product strategy, and always pushing the boundaries of front-end development."
            ]
        },
        education: [
            {
                title: "High School of Art and Design",
                date: "2003 - 2006",
                icon: "mdi:palette",
                description:
                    "Focused on foundational art and visual design principles, which sparked my early interest in creative problem solving. Explored traditional media, digital illustration, and visual storytelling.",
            },
            {
                title: "University of Technology and Design",
                date: "2006 - 2010",
                icon: "mdi:school",
                description:
                    "Earned a Bachelor's degree in Computer Science with a minor in Design. Gained strong skills in software development, user interface engineering, data structures, and human-computer interaction.",
            },
            {
                title: "Institute of Interactive Media",
                date: "2011 - 2012",
                icon: "mdi:school-outline",
                description:
                    "Completed a Master's degree specializing in UX/UI Design and Front-End Development. Merged technical expertise with visual communication to design user-centered digital products and prototypes.",
            },
        ],
        experience: [
            {
                title: "Creative Director",
                date: "2018 - Present",
                icon: "mdi:briefcase",
                description:
                    "Lead creative and development teams to build digital experiences that combine innovation with user empathy. Oversee branding, UI/UX strategy, and development pipelines for tech startups and clients.",
            },
            {
                title: "Senior UX Engineer",
                date: "2015 - 2018",
                icon: "mdi:monitor-dashboard",
                description:
                    "Designed and implemented high-fidelity web interfaces using React, Figma, and Tailwind. Collaborated cross-functionally with developers and designers to craft intuitive user flows and interactions.",
            },
            {
                title: "Front-End Developer & Designer",
                date: "2012 - 2015",
                icon: "mdi:code-tags",
                description:
                    "Developed responsive websites and applications with a focus on accessibility, visual aesthetics, and performance. Delivered pixel-perfect interfaces from wireframes to production code.",
            },
        ],
        technologies: {
            frontend: {
                description: "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
                tools: [
                    { name: "React", icon: "logos:react" },
                    { name: "Next.js", icon: "skill-icons:nextjs-dark" },
                    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
                    { name: "TypeScript", icon: "logos:typescript-icon" },
                    { name: "HTML5", icon: "logos:html-5" },
                    { name: "CSS3", icon: "logos:css-3" },
                ],
            },
            backend: {
                description: "I build fast APIs and scalable backends using Node.js, Bun, and Python.",
                tools: [
                    { name: "Node.js", icon: "logos:nodejs-icon" },
                    { name: "Bun", icon: "logos:bun" },
                    { name: "Python", icon: "logos:python" },
                    { name: "MongoDB", icon: "logos:mongodb-icon" },
                    { name: "mySQL", icon: "logos:mysql" },
                    { name: "OpenAI", icon: "simple-icons:openai" },
                ],
            },
            uiux: {
                description: "I design smooth, user-centered interfaces and high-fidelity prototypes.",
                tools: [
                    { name: "Figma", icon: "logos:figma" },
                    { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
                    { name: "Notion", icon: "logos:notion-icon" },
                ],
            },
            graphicDesign: {
                description: "My graphic work includes logos, branding, and posters using Adobe Suite.",
                tools: [
                    { name: "Photoshop", icon: "logos:adobe-photoshop" },
                    { name: "Illustrator", icon: "logos:adobe-illustrator" },
                ],
            },
            motionDesign: {
                description: "I animate UI flows and cinematic intros using After Effects and Blender.",
                tools: [
                    { name: "After Effects", icon: "logos:adobe-after-effects" },
                    { name: "Premiere Pro", icon: "logos:adobe-premiere" },
                    { name: "Blender", icon: "logos:blender" },
                ],
            },
        },
    },
    projects: {
        sectionTitle: "Featured Projects",
        sectionDescription:
            "A selection of my recent projects showcasing UI/UX design and development expertise",
        work: [
            {
                id: 1,
                title: "Digital Banking App",
                description: "A modern banking experience with focus on simplicity and user experience",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-3",
                ],
                category: "Applications",
                details: "This portfolio was crafted using modern UI/UX principles with React and TailwindCSS. It features Framer Motion for transitions, a centralized data config for easy updates, and supports mobile responsiveness with a clean layout.",
                github: "https://github.com/elhocine-dev/portfolio",
                live: "https://elhocine.dev",
                tech: [
                    { name: "React", icon: "logos:react" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
                    { name: "TypeScript", icon: "logos:typescript-icon" },
                    { name: "Vite", icon: "logos:vitejs" },
                ],
            },
            {
                id: 2,
                title: "E-commerce Platform",
                description: "Full-featured online shopping platform with advanced filtering",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-3",
                ],
                category: "Web Development",
                details: "A web app that takes long-form articles and summarizes them using OpenAI’s GPT models. Built with React and integrated with RapidAPI for fetching articles. Features copy-to-clipboard and history tracking.",
                github: "https://github.com/elhocine-dev/ai-blog-summarizer",
                live: "https://aiblog.dev",
                tech: [
                    { name: "React", icon: "logos:react" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
                    { name: "OpenAI API", icon: "simple-icons:openai" }
                ],
            },
            {
                id: 3,
                title: "Travel Booking System",
                description: "Seamless travel booking experience with real-time updates",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3",
                ],
                category: "Web Development",
                details: "This travel booking system was built with Next.js and heroUI. It supports flight, hotel, and rental reservations in real-time with a clean, responsive UI.",
                github: "https://github.com/elhocine-dev/ai-blog-summarizer",
                live: "https://aiblog.dev",
                tech: [
                    { name: "Next.js", icon: "logos:nextjs-icon" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
                    { name: "TypeScript", icon: "logos:typescript-icon" },
                ],
            },
            {
                id: 4,
                title: "AI Chat Assistant",
                description: "AI-powered assistant for personalized customer support",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3",
                ],
                category: "Applications",
                details: "An AI assistant built using OpenAI API and deployed with Vercel. Features contextual memory and smart response generation with sleek UI.",
                github: "https://github.com/elhocine-dev/ai-assistant",
                live: "https://aichat.dev",
                tech: [
                    { name: "React", icon: "logos:react" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
                    { name: "OpenAI API", icon: "simple-icons:openai" },
                    { name: "Vercel", icon: "simple-icons:vercel" }
                ],
            },
            {
                id: 5,
                title: "Portfolio API & CMS",
                description: "Headless backend for portfolio websites with dynamic content management",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-3",
                ],
                category: "Backend Services",
                details: "A RESTful API built with Node.js and Express that serves portfolio content dynamically. Features include JWT authentication, database integration (MongoDB), and a CMS-like interface for non-technical users to update their portfolio without code changes.",
                github: "https://github.com/elhocine-dev/portfolio-backend",
                tech: [
                    { name: "Node.js", icon: "logos:nodejs-icon" },
                    { name: "MongoDB", icon: "logos:mongodb-icon" },
                    { name: "JWT", icon: "simple-icons:jsonwebtokens" },
                    { name: "Swagger", icon: "simple-icons:swagger" }
                ],
            },
            {
                id: 6,
                title: "Fitness Tracker App",
                description: "Track workouts, calories, and progress in one dashboard",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-3",
                ],
                category: "Applications",
                details: "Cross-platform fitness app with charts, goal setting, and progress tracking. Built with React Native and Tailwind for mobile UI.",
                github: "https://github.com/elhocine-dev/fitness-tracker",
                live: "https://fittrack.dev",
                tech: [
                    { name: "React Native", icon: "logos:react" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
                    { name: "Expo", icon: "simple-icons:expo" }
                ],
            },
            {
                id: 7,
                title: "Content Scheduler",
                description: "Plan and automate your social media posts",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-3",
                ],
                category: "Applications",
                details: "Built for content creators, this app features calendar integration, auto-publishing, and rich preview with cloud sync support.",
                github: "https://github.com/elhocine-dev/content-scheduler",
                live: "https://postscheduler.dev",
                tech: [
                    { name: "Next.js", icon: "logos:nextjs-icon" },
                    { name: "MongoDB", icon: "logos:mongodb-icon" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" }
                ],
            },
            {
                id: 8,
                title: "Real Estate Dashboard",
                description: "Manage properties, leads, and deals with ease",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-3",
                ],
                category: "Web Development",
                details: "Admin dashboard for real estate professionals. Includes data visualization, lead management, and CRM integrations.",
                github: "https://github.com/elhocine-dev/real-estate-dashboard",
                live: "https://realestatehub.dev",
                tech: [
                    { name: "React", icon: "logos:react" },
                    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
                    { name: "Chart.js", icon: "simple-icons:chartdotjs" }
                ],
            },
            {
                id: 9,
                title: "Crypto Wallet API",
                description: "Backend service for secure cryptocurrency transactions and blockchain interactions",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-3",
                ],
                category: "Backend Services",
                details: "A secure Node.js API for cryptocurrency transactions, supporting Ethereum and Bitcoin. Features include transaction signing, wallet address generation, and real-time blockchain event monitoring via Web3.js. Integrates with hardware security modules (HSM) for key management.",
                github: "https://github.com/elhocine-dev/crypto-wallet-api",
                tech: [
                    { name: "Node.js", icon: "logos:nodejs-icon" },
                    { name: "Ethereum", icon: "logos:ethereum" },
                    { name: "Web3.js", icon: "simple-icons:web3dotjs" },
                    { name: "PostgreSQL", icon: "logos:postgresql" },
                    { name: "JWT", icon: "simple-icons:jsonwebtokens" }
                ],
            },
            {
                id: 10,
                title: "SaaS Subscription API",
                description: "Backend service handling subscriptions, billing, and user management",
                image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
                gallery: [
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-1",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-2",
                    "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-3",
                ],
                category: "Backend Services",
                details: "RESTful API powering SaaS subscriptions with Stripe integration, usage metering, and tiered pricing. Features webhook processing, trial management, and analytics. Handles 10K+ concurrent users with Redis caching.",
                github: "https://github.com/elhocine-dev/saas-subscription-api",
                tech: [
                    { name: "Node.js", icon: "logos:nodejs-icon" },
                    { name: "Stripe API", icon: "logos:stripe" },
                    { name: "PostgreSQL", icon: "logos:postgresql" },
                    { name: "Redis", icon: "logos:redis" },
                    { name: "JWT", icon: "simple-icons:jsonwebtokens" }
                ],
            },
        ]
    },
    contact: {
        heading: "Have a project in mind? Get in touch and let's create something amazing.",
        location: {
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
            address: "San Francisco, CA"
        }
    },
    morphingTexts: {
        about: ["Creative", "Passionate", "Developer"] as const,
        projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
        contact: ["Let's", "Build", "Together"] as const,
    },
    navigation: [
        { name: "Home", href: "/", icon: "lucide:home" },
        { name: "About", href: "/about", icon: "lucide:user" },
        { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
        { name: "Contact", href: "/contact", icon: "lucide:send" },
    ],
    footer: {
        name: "Sofiane Bahmed",
        description: "Always interested in new projects and collaborations.",
        contact: {
            email: "hello@example.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA",
        },
        socialLinks: [
            { platform: "X", url: "https://x.com/yourhandle", icon: "simple-icons:x" },
            { platform: "GitHub", url: "https://github.com/yourhandle", icon: "mdi:github" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/yourhandle", icon: "mdi:linkedin" },
            { platform: "Dribbble", url: "https://dribbble.com/yourhandle", icon: "mdi:dribbble" },
        ],
        services: ["UI/UX Design", "Web Development", "Mobile Apps", "Consulting"],
    },
} as const
