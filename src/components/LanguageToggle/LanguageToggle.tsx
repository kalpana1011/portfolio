import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

export const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.toLowerCase().startsWith("sv") ? "sv" : "en";

  return (
    <div className="language-toggle" role="group" aria-label={t("language.label")}>
      <button
        type="button"
        className={`language-toggle__btn ${current === "en" ? "language-toggle__btn--active" : "language-toggle__btn--inactive"}`}
        onClick={() => i18n.changeLanguage("en")}
        aria-label={t("language.english")}
        aria-pressed={current === "en"}
        title={t("language.english")}
      >
        <span className="language-toggle__flag" aria-hidden>
          🇬🇧
        </span>
      </button>
      <button
        type="button"
        className={`language-toggle__btn ${current === "sv" ? "language-toggle__btn--active" : "language-toggle__btn--inactive"}`}
        onClick={() => i18n.changeLanguage("sv")}
        aria-label={t("language.swedish")}
        aria-pressed={current === "sv"}
        title={t("language.swedish")}
      >
        <span className="language-toggle__flag" aria-hidden>
          🇸🇪
        </span>
      </button>
    </div>
  );
};
