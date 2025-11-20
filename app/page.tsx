import Hero from "@/components/Hero";
import About from "@/components/About";
import AcademicAchievements from "@/components/AcademicAchievements";
import ResearchProjects from "@/components/ResearchProjects";
import Extracurriculars from "@/components/Extracurriculars";
import Awards from "@/components/Awards";
import MediaGallery from "@/components/MediaGallery";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Navigation />
      <Hero />
      <About />
      <AcademicAchievements />
      <ResearchProjects />
      <Extracurriculars />
      <Awards />
      <MediaGallery />
    </main>
  );
}

