import { useTranslation } from "react-i18next";
import "./ExperienceSection.css";

type ExperienceLifeAccent = "sweden" | "family";
type ExperienceWorkAccent = "freelance" | "teaching";

export type ExperienceItem =
  | {
      variant: "life";
      accent: ExperienceLifeAccent;
      emoji: string;
      role: string;
      company: string;
      period: string;
      summary: string;
    }
  | {
      variant?: "role";
      emoji: string;
      workAccent: ExperienceWorkAccent;
      role: string;
      company: string;
      period: string;
      location?: string;
      bullets: string[];
    };

type EducationItem = {
  program: string;
  school: string;
  period: string;
};

const LIFE_SURFACE: Record<ExperienceLifeAccent, string> = {
  sweden: "experience-life-card--sweden",
  family: "experience-life-card--family",
};

const LIFE_EMOJI: Record<ExperienceLifeAccent, string> = {
  sweden: "experience-life-emoji--sweden",
  family: "experience-life-emoji--family",
};

const LIFE_BADGE: Record<ExperienceLifeAccent, string> = {
  sweden: "experience-life-badge--sweden",
  family: "experience-life-badge--family",
};

const LIFE_COMPANY: Record<ExperienceLifeAccent, string> = {
  sweden: "experience-life-company--sweden",
  family: "experience-life-company--family",
};

const WORK_EMOJI: Record<ExperienceWorkAccent, string> = {
  freelance: "experience-work-emoji--freelance",
  teaching: "experience-work-emoji--teaching",
};

export function ExperienceSection() {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true }) as ExperienceItem[];
  const education = t("experience.education", { returnObjects: true }) as EducationItem[];

  return (
    <section id="experience" className="experience-section">
      <p className="experience-section__eyebrow">{t("experience.subtitle")}</p>
      <h2 className="experience-section__title">{t("experience.title")}</h2>
      <div className="experience-section__grid">
        <div className="experience-section__timeline">
          {experiences.map((item) =>
            item.variant === "life" ? (
              <div
                key={`${item.period}-${item.role}`}
                className={`experience-life-card ${LIFE_SURFACE[item.accent]}`}
              >
                <div className="experience-section__row">
                  <div
                    className={`experience-life-emoji ${LIFE_EMOJI[item.accent]}`}
                    aria-hidden
                  >
                    <span className="drop-shadow-sm">{item.emoji}</span>
                  </div>
                  <div className="experience-section__body">
                    <div className="experience-life-meta">
                      <span
                        className={`experience-life-badge ${LIFE_BADGE[item.accent]}`}
                      >
                        {t("experience.lifeBadge")}
                      </span>
                      <span className="experience-section__period">{item.period}</span>
                    </div>
                    <h3 className="experience-life-role">{item.role}</h3>
                    <p className={`experience-life-company ${LIFE_COMPANY[item.accent]}`}>
                      {item.company}
                    </p>
                    <p className="experience-life-summary">{item.summary}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={`${item.role}-${item.company}`} className="experience-work-card">
                <div className="experience-section__row">
                  <div
                    className={`experience-work-emoji ${WORK_EMOJI[item.workAccent]}`}
                    aria-hidden
                  >
                    <span className="drop-shadow-sm">{item.emoji}</span>
                  </div>
                  <div className="experience-section__body">
                    <div className="experience-work-card__header">
                      <div>
                        <h3 className="experience-work-card__role">{item.role}</h3>
                        <p className="experience-work-card__company">{item.company}</p>
                      </div>
                      <div className="experience-section__period shrink-0">{item.period}</div>
                    </div>
                    {item.location ? (
                      <p className="experience-work-card__location">{item.location}</p>
                    ) : null}
                    <ul className="experience-work-card__bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="experience-work-card__bullet">
                          <span className="experience-work-card__bullet-dot" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="experience-education">
          <h3 className="experience-education__title">{t("experience.educationTitle")}</h3>
          <ul className="experience-education__list">
            {education.map((item) => (
              <li key={`${item.program}-${item.school}`}>
                <p className="experience-education__program">{item.program}</p>
                <p className="experience-education__school">{item.school}</p>
                <p className="experience-education__period">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
