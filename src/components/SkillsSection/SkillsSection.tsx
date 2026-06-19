import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme/ThemeProvider";
import "./SkillsSection.css";

export type TechCard = {
  name: string;
  icon: string;
};

export type SpokenLanguage = {
  name: string;
  level: string;
  flag: string;
};

type SkillsSectionProps = {
  techCards: TechCard[];
  toolCards: TechCard[];
  languages: SpokenLanguage[];
};

const BRAND_COLORS: Record<string, string> = {
  html5: "E34F26",
  css3: "1572B6",
  sass: "CC6699",
  javascript: "F7DF1E",
  typescript: "3178C6",
  react: "61DAFB",
  vite: "646CFF",
  tailwindcss: "06B6D4",
  bootstrap: "7952B3",
  figma: "F24E1E",
  git: "F05032",
  github: "181717",
  visualstudiocode: "007ACC",
  npm: "CB3837",
  nodedotjs: "339933",
  mongodb: "47A248",
  mongoose: "880000",
  postman: "FF6C37",
  w3c: "005A9C",
  jira: "0052CC",
  miro: "fad905",
};

const iconMonochromeFallback = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;

function iconColorUrl(slug: string) {
  const hex = BRAND_COLORS[slug];
  if (hex) {
    return `https://cdn.simpleicons.org/${slug}/${hex}`;
  }
  return iconMonochromeFallback(slug);
}

function githubIconUrl(isDark: boolean) {
  return isDark
    ? "https://cdn.simpleicons.org/github/ffffff"
    : "https://cdn.simpleicons.org/github/181717";
}

function expressIconUrl(isDark: boolean) {
  return isDark
    ? "https://cdn.simpleicons.org/express/ffffff"
    : "https://cdn.simpleicons.org/express/000000";
}

function socketdotioIconUrl(isDark: boolean) {
  return isDark
    ? "https://cdn.simpleicons.org/socketdotio/ffffff"
    : "https://cdn.simpleicons.org/socketdotio/010101";
}

function nextjsIconUrl(isDark: boolean) {
  return isDark
    ? "https://cdn.simpleicons.org/next.js/ffffff"
    : "https://cdn.simpleicons.org/next.js/000000";
}

function SkillLogo({ slug, label }: { slug: string; label: string }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [failed, setFailed] = useState(false);

  const src =
    slug === "github"
      ? githubIconUrl(isDark)
      : slug === "express"
        ? expressIconUrl(isDark)
        : slug === "socketdotio"
          ? socketdotioIconUrl(isDark)
          : slug === "next.js"
            ? nextjsIconUrl(isDark)
            : iconColorUrl(slug);

  useEffect(() => {
    setFailed(false);
  }, [isDark, slug]);

  if (failed) {
    return (
      <div className="skills-logo-fallback" aria-hidden>
        {label.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      key={`${slug}-${isDark ? "d" : "l"}`}
      src={src}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className="skills-card__logo"
      onError={() => setFailed(true)}
    />
  );
}

export function SkillsSection({
  techCards,
  toolCards,
  languages,
}: SkillsSectionProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) {
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cardClass = (visible: boolean) =>
    `group skills-card ${visible ? "skills-card--visible" : "skills-card--hidden"}`;

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className="skills-section__intro">
        <p className="skills-section__eyebrow">{t("skills.subtitle")}</p>
        <h2 className="skills-section__title">{t("skills.title")}</h2>
      </div>

      <div className="skills-panel">
        <div className="skills-panel__inner">
          <div>
            <h3 className="skills-section__group-title">
              {t("skills.techTitle")}
            </h3>
            <div className="skills-grid">
              {techCards.map((card, index) => (
                <article
                  key={`${card.icon}-${card.name}`}
                  className={cardClass(inView)}
                  style={{
                    transitionDelay: inView ? `${index * 45}ms` : "0ms",
                  }}
                >
                  <div className="skills-card__logo-wrap">
                    <SkillLogo slug={card.icon} label={card.name} />
                  </div>
                  <h4 className="skills-card__name">{card.name}</h4>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="skills-section__group-title">
              {t("skills.toolsTitle")}
            </h3>
            <div className="skills-grid--tools">
              {toolCards.map((card, index) => (
                <article
                  key={`${card.icon}-${card.name}`}
                  className={cardClass(inView)}
                  style={{
                    transitionDelay: inView
                      ? `${(techCards.length + index) * 45}ms`
                      : "0ms",
                  }}
                >
                  <div className="skills-card__logo-wrap">
                    <SkillLogo slug={card.icon} label={card.name} />
                  </div>
                  <h4 className="skills-card__name">{card.name}</h4>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skills-lang-panel">
        <h3 className="skills-section__group-title">
          {t("skills.languagesTitle")}
        </h3>
        <ul className="skills-lang-list">
          {languages.map((lang) => (
            <li key={lang.name} className="skills-lang-item">
              <span className="skills-lang-flag" aria-hidden>
                {lang.flag}
              </span>
              <div className="skills-lang-body">
                <span className="skills-lang-name">{lang.name}</span>
                <span className="skills-lang-level">{lang.level}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
