import { useTranslation } from "react-i18next";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar, type NavItem } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteBackground } from "./components/SiteBackground";
import { SiteFooter } from "./components/SiteFooter";
import {
  SkillsSection,
  type SpokenLanguage,
  type TechCard,
} from "./components/SkillsSection";
import kalpanaImage from "./assets/kalpana.png";

function App() {
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "experience", label: t("nav.experience") },
    { id: "contact", label: t("nav.contact") },
  ];

  const techCards = t("skills.techCards", { returnObjects: true }) as TechCard[];
  const toolCards = t("skills.toolCards", { returnObjects: true }) as TechCard[];
  const languages = t("skills.languages", {
    returnObjects: true,
  }) as SpokenLanguage[];

  return (
    <div className="app-root">
      <SiteBackground />
      <div className="app-shell">
        <Navbar items={navItems} avatarSrc={kalpanaImage} />
        <main className="app-main">
          <HeroSection imageSrc={kalpanaImage} />
          <AboutSection />
          <SkillsSection
            techCards={techCards}
            toolCards={toolCards}
            languages={languages}
          />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection navItems={navItems} />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
