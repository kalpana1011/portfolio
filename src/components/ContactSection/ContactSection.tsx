import { useTranslation } from "react-i18next";
import type { NavItem } from "../Navbar";
import "./ContactSection.css";

type ContactSectionProps = {
  navItems: NavItem[];
};

export function ContactSection({ navItems }: ContactSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <p className="contact-section__eyebrow">{t("nav.contact")}</p>
      <h2 className="contact-section__title">{t("contact.title")}</h2>
      <p className="contact-section__subtitle">{t("contact.subtitle")}</p>
      <div className="contact-section__grid">
        <div className="contact-section__card">
          <h3 className="contact-section__card-title">{t("contact.title")}</h3>
          <p className="contact-section__availability">{t("about.availability")}</p>
          <div className="contact-section__details">
            <p>
              <span className="font-semibold">{t("about.emailLabel")}:</span>{" "}
              <a href={`mailto:${t("contact.email")}`} className="contact-section__link">
                {t("contact.email")}
              </a>
            </p>
            <p>
              <span className="font-semibold">{t("about.phoneLabel")}:</span>{" "}
              <a href={`tel:${t("contact.phone")}`} className="contact-section__link">
                {t("contact.phone")}
              </a>
            </p>
            <p>
              <span className="font-semibold">{t("about.locationLabel")}:</span>{" "}
              {t("contact.location")}
            </p>
          </div>
          <a href={`mailto:${t("contact.email")}`} className="contact-section__cta">
            {t("contact.cta")}
          </a>
        </div>
        <div className="contact-section__card">
          <h3 className="contact-section__card-title contact-section__card-title--muted">
            {t("footer.linksTitle")}
          </h3>
          <ul className="contact-section__nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="contact-section__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
