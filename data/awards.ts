export interface Award {
  id: string;
  title: string;
  category: "Academic" | "Competition" | "Service" | "Research";
  year: string;
  description?: string;
  link?: string;
  // TODO: Add imagePath for each award - Place images in /public/images/
  imagePath?: string; // e.g., "/images/class-rank-1.jpg"
}

export const awards: Award[] = [
  {
    id: "class-rank-1",
    title: "Class Rank #1",
    category: "Academic",
    year: "11th Grade",
    description: "Ranked 1st out of 506 students",
  },
  {
    id: "ap-scholar",
    title: "AP Scholar with Distinction",
    category: "Academic",
    year: "11th Grade",
  },
  {
    id: "uci-gati-award",
    title: "University of California, Irvine & Gifted and Talented Institute Award for Research and Innovation Leadership",
    category: "Research",
    year: "10th Grade",
  },
  {
    id: "usaco-silver",
    title: "USACO Silver",
    category: "Competition",
    year: "9th, 10th, 11th Grade",
  },
  {
    id: "volleyball-nationals",
    title: "2nd Place at USAV Volleyball Nationals",
    category: "Competition",
    year: "2023",
  },
  {
    id: "hpe-codewars",
    title: "2nd Place @ Regional HPE CodeWars",
    category: "Competition",
    year: "2025",
  },
  {
    id: "nasa-spaceapps",
    title: "NASA SpaceApps Global Nominee",
    category: "Competition",
    year: "2025",
  },
  {
    id: "mayoral-certificate",
    title: "Mayoral Certificate of Achievement",
    category: "Service",
    year: "10th Grade",
    description: "Recognizing the Winter Clothes Collection Initiative that resulted in 500+ distributions to families at Kinney High School",
  },
  {
    id: "inspirit-ai-award",
    title: "Inspirit AI, Best Presentation Award",
    category: "Research",
    year: "Summer 2023",
  },
  {
    id: "whitehatjr",
    title: "WhiteHatJr Certified Game Developer Certificate",
    category: "Competition",
    year: "Earlier",
  },
  {
    id: "athletic-award",
    title: "Granite Bay High School Athletic Award",
    category: "Competition",
    year: "10th-11th Grade",
    description: "Recognizing outstanding performance in Varsity Volleyball",
  },
  {
    id: "scholar-athlete",
    title: "Granite Bay High School Scholar-Athlete Award",
    category: "Academic",
    year: "10th-11th Grade",
    description: "Recognizing a weighted GPA of 4.25+ or higher during the volleyball season",
  },
];

