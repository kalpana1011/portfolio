import { useTranslation } from "react-i18next";
import {
  AboutHighlightCards,
  type HighlightCardContent,
} from "../AboutHighlightCards";
import "./AboutSection.css";

export function AboutSection() {
  const { t } = useTranslation();
  const highlights = t("about.highlights", {
    returnObjects: true,
  }) as HighlightCardContent[];

  return (
    <section id="about" className="about-section">
      <div className="about-section__grid">
        <div>
          <p className="about-section__eyebrow">{t("about.subtitle")}</p>
          <h2 className="about-section__title">{t("about.title")}</h2>
          <p className="about-section__summary">{t("about.summary")}</p>
          <p className="about-section__badge">{t("about.availability")}</p>
        </div>
        <div className="about-section__aside">
          <div className="about-section__card">
            <p className="about-section__card-label">{t("about.locationLabel")}</p>
            <p className="about-section__card-value">{t("contact.location")}</p>
          </div>
          <div className="about-section__card">
            <p className="about-section__card-label">{t("about.emailLabel")}</p>
            <a
              href={`mailto:${t("contact.email")}`}
              className="about-section__card-link"
            >
              {t("contact.email")}
            </a>
          </div>
          <div className="about-section__card">
            <p className="about-section__card-label">{t("about.phoneLabel")}</p>
            <a href={`tel:${t("contact.phone")}`} className="about-section__card-link">
              {t("contact.phone")}
            </a>
          </div>
        </div>
      </div>
      <div className="about-section__highlights">
        <h3 className="about-section__highlights-title">{t("about.highlightsTitle")}</h3>
        <AboutHighlightCards items={highlights} />
      </div>
    </section>
  );
}
