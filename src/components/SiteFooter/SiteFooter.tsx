import { useTranslation } from "react-i18next";
import "./SiteFooter.css";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__tagline">{t("footer.tagline")}</p>
        <p className="site-footer__name">{t("hero.name")}</p>
      </div>
    </footer>
  );
}
