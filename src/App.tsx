import HeroSection from "./sections/HeroSection";

import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceTimelineSection from "./sections/ExperienceTimelineSection";
import TechStackSection from "./sections/TechStackSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import LanguagesSection from "./sections/LanguagesSection";
import WhyHireMeSection from "./sections/WhyHireMeSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <main style={{ overflowX: "clip" }}>
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceTimelineSection />
      <TechStackSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
      <WhyHireMeSection />
      <ContactSection />
    </main>
  );
}

export default App;

