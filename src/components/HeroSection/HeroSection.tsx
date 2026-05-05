import { useTranslation } from "react-i18next";
import "./HeroSection.css";

const fadeUp = "animate-fade-up motion-reduce:animate-none";
const fadeIn = "animate-fade-in motion-reduce:animate-none";
const float = "animate-float motion-reduce:animate-none";

type HeroSectionProps = {
  imageSrc: string;
};

export function HeroSection({ imageSrc }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section">
      <div className="hero-section__grid">
        <div className="hero-section__col hero-section__col--left">
          <p
            className={`hero-section__title hero-section__title--designer ${fadeUp}`}
            style={{ animationDelay: "0ms" }}
          >
            {t("hero.designerTitle")}
          </p>
          <p className={`hero-section__subtitle ${fadeUp}`} style={{ animationDelay: "120ms" }}>
            {t("hero.designerSubtitle")}
          </p>
        </div>
        <div className="hero-section__portrait-wrap">
          <div className="relative">
            <div className={`hero-section__portrait-glow ${fadeIn}`} />
            <img
              src={imageSrc}
              alt={t("hero.imageAlt")}
              className={`hero-section__portrait ${float}`}
            />
          </div>
        </div>
        <div className="hero-section__col hero-section__col--right">
          <p className={`hero-section__title ${fadeUp}`} style={{ animationDelay: "40ms" }}>
            {t("hero.coderTitle")}
          </p>
          <p className={`hero-section__subtitle ${fadeUp}`} style={{ animationDelay: "160ms" }}>
            {t("hero.coderSubtitle")}
          </p>
        </div>
      </div>

      <div className="hero-section__intro">
        <p className={`hero-section__role ${fadeUp}`} style={{ animationDelay: "120ms" }}>
          {t("hero.role")}
        </p>
        <h1 className={`hero-section__name ${fadeUp}`} style={{ animationDelay: "200ms" }}>
          {t("hero.name")}
        </h1>
        <p className={`hero-section__summary ${fadeUp}`} style={{ animationDelay: "280ms" }}>
          {t("hero.summary")}
        </p>
        <div className={`hero-section__actions ${fadeUp}`} style={{ animationDelay: "360ms" }}>
          <a href="#contact" className="hero-section__cta-primary">
            {t("hero.ctaContact")}
          </a>
          <a
            href="/kalpana-pandey-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-section__cta-secondary"
          >
            {t("hero.ctaResume")}
          </a>
        </div>
        <p className={`hero-section__scroll-hint ${fadeUp}`} style={{ animationDelay: "440ms" }}>
          {t("hero.scroll")}
        </p>
      </div>
    </section>
  );
}
