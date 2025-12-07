export interface PortfolioProject {
    id: string;
    title: string;
    tagline: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    category: "AI/ML" | "Web Development" | "Research" | "Game Development";
    featured: boolean;
    recognition?: string;
}

export const portfolioProjects: PortfolioProject[] = [
    {
        id: "exoscope-ai",
        title: "Exoscope AI",
        tagline: "NASA-Nominated Exoplanet Detection Tool",
        description: "An AI-powered application for detecting and analyzing exoplanets using machine learning. Built with Python and Streamlit, this tool leverages advanced algorithms to identify potential exoplanets from astronomical data. Globally nominated by NASA in the International SpaceApps Competition for developing a novel machine learning algorithm.",
        tech: ["Python", "Streamlit", "Machine Learning", "Data Science"],
        link: "https://exoscope-ai.streamlit.app",
        category: "AI/ML",
        featured: true,
        recognition: "NASA SpaceApps Global Nominee 2025",
    },
    {
        id: "clearpolicy",
        title: "ClearPolicy",
        tagline: "Policy clarity, with sources you can check",
        description: "A full-stack web application that transforms confusing ballot measures and legislative text into clear, digestible summaries with verifiable, non-biased sources. Integrates with OpenStates and Congress.gov APIs to provide real-time legislative data. Currently gathering users on the waitlist prior to public release.",
        tech: ["TypeScript", "React", "Prisma", "Tailwind CSS", "OpenStates API", "Congress.gov API"],
        link: "https://clearpolicy.org",
        category: "Web Development",
        featured: true,
    },
    {
        id: "fake-news-detection",
        title: "Fake News Detection App",
        tagline: "AI-powered misinformation detection using NLP",
        description: "Developed a machine learning application that uses natural language processing and neural networks to detect fake news articles and websites. Built during the Inspirit AI program under mentorship from a Stanford alumnus, the app employs confusion matrices and NLP techniques to classify news authenticity with high accuracy.",
        tech: ["Python", "Streamlit", "Natural Language Processing", "Neural Networks", "Machine Learning"],
        link: "https://inspirit-ai-weekday2-allhands3-fake-news-detection.streamlit.app/",
        category: "AI/ML",
        featured: true,
        recognition: "Best Presentation Award - Inspirit AI",
    },
    {
        id: "ai-game-asd",
        title: "Computer Vision Powered Serious Game for ASD",
        tagline: "Improving emotional regulation for adolescents with autism",
        description: "A garden-themed, AI-assisted resource-management game with integrated guided breathing sessions designed for adolescents (12–16) with Autism Spectrum Disorder. Features real-time emotion detection and HRV monitoring to improve emotional regulation and reduce state anxiety. Conducting IRB-aligned research study with Harvard and Stanford mentors.",
        tech: ["Python", "C#", "Unity", "Computer Vision", "Machine Learning"],
        category: "Game Development",
        featured: true,
        recognition: "Research paper in progress (target publication Spring 2026)",
    },
    {
        id: "ml-structural-engineering",
        title: "Beyond Euler ML Framework",
        tagline: "Explainable AI for structural engineering",
        description: "Developed an interpretable machine learning model using XGBoost and SHAP analysis to predict structural buckling behavior in non-ideal materials. Published preprint on ResearchGate and currently in journal submission process for Nature Scientific Reports. Extended experimental framework from Johns Hopkins EEI program.",
        tech: ["Python", "XGBoost", "Scikit-Learn", "SHAP", "Data Analysis"],
        github: "https://www.researchgate.net/publication/395824075_Beyond_Euler_An_Explainable_Machine_Learning_Framework_for_Predicting_and_Interpreting_Buckling_Instabilities_in_Non-Ideal_Materials",
        category: "Research",
        featured: true,
        recognition: "In submission to Nature Scientific Reports",
    },
];
