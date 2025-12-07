export interface Extracurricular {
  id: string;
  title: string;
  years: string;
  hoursPerWeek?: string;
  category: "Research" | "Sports" | "Service" | "Tech" | "Music" | "Leadership";
  description: string;
  achievements?: string[];
  links?: { text: string; url: string }[];
  leadership?: string;
  media?: {
    type: 'image' | 'video';
    path: string;
    caption?: string;
  }[];
}

export const extracurriculars: Extracurricular[] = [
  {
    id: "usaco-coding",
    title: "USACO & Coding Hackathons",
    years: "9th, 10th, 11th Grade",
    category: "Tech",
    hoursPerWeek: "2-3 hours/week",
    description: "Programming for the past 6 years. Languages: Python (Machine Learning, Complex Algorithms, OpenCV, Sockets), HTML/CSS, JavaScript, Java (learning), C# (Game development in Unity).",
    achievements: [
      "Silver Division in USA Coding Olympiad Contests (3 years)",
      "🥈 Second Place at 2025 HPE CodeWars (2 years)",
      "NASA SpaceApps Global Nominee (2025)",
      "Finalist for the 2024 YoungWonk's National Coding Challenge",
      "Participated in the NASA SpaceApps Hackathon (2 years)",
    ],
    media: [
      { type: 'image', path: '/extracurriculars/coding/club_pic.jpg', caption: 'Coding Club' },
      { type: 'image', path: '/extracurriculars/coding/hackathon_team.jpg', caption: 'Hackathon Team' },
    ],
  },
  {
    id: "uci-gati",
    title: "Game Development and Sciences Research - UCI x GATI",
    years: "9th Summer → 10th",
    category: "Research",
    description: "In the GSET program at UCI x GATI, I researched through the science of game development, incorporating machine learning and C# code into a final Unity project and business presentation that was pitched to investors on the final day of the program.",
    achievements: [
      "Gained 2 College UCI Credits",
      "Learned about entrepreneurship with lessons from professors",
    ],
    media: [
      { type: 'image', path: '/extracurriculars/uci_gati/pic1.jpg', caption: 'UCI GATI Program' },
      { type: 'image', path: '/extracurriculars/uci_gati/pic2.jpg', caption: 'Final Presentation' },
    ],
  },
  {
    id: "tech4silvers",
    title: "Tech4Silvers",
    years: "9th, 10th, 11th Grade",
    category: "Service",
    hoursPerWeek: "2-3 hours/week",
    leadership: "President and Founder",
    description: "Founded a community service organization, which is also a club at GBHS. We educate seniors about technology, cybersecurity, and digital well-being by hosting seminars and Q&A sessions at various senior centers and organizations in the greater Sacramento and Bay Area.",
    media: [
      { type: 'image', path: '/extracurriculars/tech4silvers/presentation_pic.jpg', caption: 'Tech4Silvers Presentation' },
      { type: 'video', path: '/extracurriculars/tech4silvers/presentation_video.mp4', caption: 'Presentation Video' },
    ],
  },
  {
    id: "national-volleyball",
    title: "National Volleyball",
    years: "9th, 10th",
    category: "Sports",
    description: "Been playing for 9 years, this year being my 5th year in season.",
    achievements: [
      "Silver in USAV Nationals Salt Lake City Utah 2023",
      "Gold in the SCVA SoCal Cup Anaheim 2023",
      "Gold in 2022 NCVA Boys Power League (Best team in Sacramento)",
      "Gold in NCVA Boys Far Western Qualifier 2023",
      "Silver in the USAV Mountain Classic Regional Qualifier 2022",
    ],
    links: [
      {
        text: "News Article",
        url: "https://goldcountrymedia.com/news/261272/aspire-14-boys-earn-bid-to-jr-nationals/",
      },
    ],
    media: [
      { type: 'image', path: '/extracurriculars/volleyball/national_pic.jpg', caption: 'National Volleyball Team' },
      { type: 'image', path: '/extracurriculars/volleyball/national_win.jpg', caption: 'Championship Win' },
    ],
  },
  {
    id: "un-gyel",
    title: "United Nations GYEL Program",
    years: "Spring 25 (10th)",
    category: "Leadership",
    description: "Selected to participate in a prestigious international program affiliated with the United Nations Economic & Social Council (ECOSOC), fostering youth leadership, global collaboration, and innovative solutions to sustainable development challenges.",
    achievements: [
      "Gained in-depth knowledge about the United Nations' Sustainable Development Goals (SDGs)",
      "Developed practical leadership skills and strategies to address global challenges",
      "Collaborated with a diverse cohort of young leaders from across the globe",
    ],
    media: [
      { type: 'image', path: '/extracurriculars/gyel/gyel_pic.jpg', caption: 'UN GYEL Program' },
    ],
  },
  {
    id: "varsity-volleyball",
    title: "Varsity Volleyball",
    years: "9th JV, 10th-11th Var",
    category: "Sports",
    description: "Played JV volleyball in 9th grade, then made Varsity as a sophomore. Competed in league and tournament play.",
    achievements: [
      "1st place in JV League in 2024 (D2)",
      "1st place in Stockton Boys' JV-only Tournament",
      "Made Varsity as a sophomore",
    ],
    media: [
      { type: 'image', path: '/extracurriculars/volleyball/national_pic.jpg', caption: 'Volleyball Team' },
    ],
  },
  {
    id: "chess",
    title: "USCF Competitive Chess",
    years: "9th, 10th, 11th Grade",
    category: "Tech",
    description: "Practiced chess for 3 years, started playing competitively for 2 years.",
    achievements: [
      "7 Tournaments played with USCF rating at 730",
      "Sitting in the 64th percentile of juniors (under 18) in the nation",
    ],
  },
  {
    id: "violin",
    title: "Musical Instrument - Violin",
    years: "9th, 10th",
    category: "Music",
    description: "Played the Violin for the past 5 years throughout elementary, middle, and high school. Started playing with an ensemble in the advanced middle school orchestra. For the past 3 years, I have been playing for the Sacramento Youth Symphony.",
    achievements: [
      "Performed in over 50 concerts in various different locations in California",
    ],
    media: [
      { type: 'image', path: '/extracurriculars/violin/violin.jpg', caption: 'Violin Performance' },
    ],
  },
  {
    id: "nhs",
    title: "National Honors Society (GBHS)",
    years: "10th, 11th Grade (Leadership)",
    category: "Leadership",
    hoursPerWeek: "30 mins per week",
    leadership: "Sergeant at Arms",
    description: "Elected as part of Leadership this year as the 'Sergeant at Arms' position in the cabinet. Participated in many volunteering and service activities, partner with other local organizations.",
    media: [
      { type: 'image', path: '/extracurriculars/nhs/me_holding_book.jpg', caption: 'NHS Leadership' },
      { type: 'image', path: '/extracurriculars/nhs/book_picture.jpg', caption: 'NHS Book Collection' },
      { type: 'image', path: '/extracurriculars/nhs/full_with_people.jpg', caption: 'NHS Team' },
      { type: 'image', path: '/extracurriculars/nhs/volunteering.jpg', caption: 'Volunteering Activity' },
      { type: 'image', path: '/extracurriculars/nhs/volunteering2.jpg', caption: 'Community Service' },
    ],
  },
  {
    id: "competitive-programming-club",
    title: "Competitive Programming Club",
    years: "9th, 10th, 11th Grade (Leadership)",
    category: "Tech",
    leadership: "Vice President",
    description: "As VP, I helped transform our club from hosting a single end‑of‑year hackathon to regularly competing in USACO, NASA SpaceApps, Congressional App Challenge, and Berkeley CALICO.",
    achievements: [
      "One of our teams won the local NASA SpaceApps competition",
      "School finally accepted our club as an 'organization' instead of just an interest group",
    ],
    media: [
      { type: 'image', path: '/extracurriculars/coding/coding_club.jpg', caption: 'Competitive Programming Club' },
    ],
  },
  {
    id: "inspirit-ai",
    title: "Inspirit AI 'Internship'",
    years: "Summer 23 (8th → 9th)",
    category: "Tech",
    description: "Under the mentorship of a Stanford alumnus, my team of 5 and I learned through the depths of neural networks and machine learning that summer to develop an application using natural language processing and confusion matrices to detect fake news websites.",
    links: [
      {
        text: "Fake News Detection App",
        url: "https://inspirit-ai-weekday2-allhands3-fake-news-detection.streamlit.app/",
      },
    ],
    achievements: ["Best Presentation Award"],
    media: [
      { type: 'image', path: '/extracurriculars/coding/hackathon_team.jpg', caption: 'AI Team Project' },
    ],
  },
];

