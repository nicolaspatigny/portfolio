import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Home() {
  const activeSection = useScrollSpy(
    ["hero", "about", "skills", "projects", "education", "contact"],
    80
  );

  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, "", `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-light text-text">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
