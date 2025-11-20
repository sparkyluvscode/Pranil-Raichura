export const researchProjects = [
  {
    id: "rsi",
    title: "Research Science Institute (RSI)",
    years: "11th Grade (Applying)",
    organization: "MIT",
    description: "The Research Science Institute (RSI) is a highly selective summer program at MIT that brings together the world's most accomplished high school students to conduct cutting-edge research. I am applying to this prestigious program to further my research interests in AI, machine learning, and their applications in solving real-world problems.",
    // TODO: Add RSI image - Place in /public/images/rsi-program.jpg
    imagePath: "/images/rsi-program.jpg", // Update this path when image is added
  },
  {
    id: "ai-game-development",
    title: "AI x Game Development Research Project",
    years: "9th, 10th, 11th Grade",
    hoursPerWeek: "4-5 hours/week",
    mentors: [
      {
        name: "Nolan Miranda, M.S.",
        affiliation: "Stanford University",
      },
      {
        name: "Nouchine Hadjikhani, MD, PhD",
        affiliation: "Harvard Medical School",
      },
    ],
    organization: "Polygence",
    // TODO: Add AI Game Development image - Place in /public/images/ai-game-dev.jpg
    imagePath: "/images/ai-game-dev.jpg", // Update this path when image is added
    description: "I am developing a virtual garden serious game using pixel art, resource management, computer vision, and incremental progression. I will have children with ASD, ages 12-16, play a 15-20 minute session per day for 3 days. At the beginning and end of the entire experiment, there will be a pre- and post-survey (respectively) assessing the participant's emotional state. I hope to see an improvement in their child's emotional regulation patterns as a result of the game's research-informed design.",
    inspiration: "I remember one of the most memorable periods of my life, starting from the moment I was in elementary school; afternoons were filled with joy, riding a scooter to my best friend's house to play Minecraft. I didn't notice anything unusual about him at the time. He was energetic but often upset after losing in the game. I later learned he was on the autism spectrum. While I cherished our time together, he was bullied and often lonely. Gradually, he grew distant, and one day, he was just gone; only a moving truck remained in the once lively driveway. This experience stayed with me, shaping my values of treating neurodivergent peers with respect and compassion.",
    studyLocation: "Meristem Autism Center",
  },
  {
    id: "ml-structural-engineering",
    title: "Machine Learning x Structural Engineering Research",
    years: "10th Summer, 11th Grade",
    hoursPerWeek: "6 hours/week",
    organization: "Johns Hopkins Explore Engineering Innovation",
    programDetails: "Learned and completed activities in civil, chemical, electrical/computer, and mechanical engineering, and materials science. Passed the class with a grade of 'Satisfactory' and received 3 JHU College credits.",
    mentor: {
      name: "Electrical Engineering PhD",
      affiliation: "UConn, Associate Professor at Polytechnic University, Orlando",
    },
    paperTitle: "Beyond Euler: An Explainable Machine Learning Framework for Predicting and Interpreting Buckling Instabilities in Non-Ideal Materials",
    preprintLink: "https://www.researchsquare.com/article/rs-7668574/v1",
    status: "In the process of journal submissions",
    // TODO: Add ML Engineering image - Place in /public/images/ml-engineering.jpg
    imagePath: "/images/ml-engineering.jpg", // Update this path when image is added
    description: "I am writing a research paper using the experimental framework from the EEI program, extending one of the labs we did in the summer program and combining my passion for computer science.",
  },
];

