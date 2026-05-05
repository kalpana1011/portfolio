import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "../LanguageToggle";
import { ThemeToggle } from "../ThemeToggle";
import "./Navbar.css";

export type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  items: NavItem[];
  avatarSrc: string;
};

const SCROLL_THRESHOLD = 56;

function NavIcon({ id }: { id: string }) {
  const common = "navbar__nav-icon";
  switch (id) {
    case "about":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      );
    case "skills":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L4.5 12l3.75-3m7.5 6l3.75-3-3.75-3" />
        </svg>
      );
    case "experience":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.296-.676.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.676-.382m0 0A11.953 11.953 0 012.25 12c0-1.18.234-2.318.676-3.382m0 0A24.301 24.301 0 0112 3.75c2.648 0 5.195.429 7.577 1.22" />
        </svg>
      );
    case "projects":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
        </svg>
      );
    case "contact":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      );
    default:
      return null;
  }
}

function DesktopNavLink({
  item,
  compact,
}: {
  item: NavItem;
  compact: boolean;
}) {
  return (
    <a
      href={`#${item.id}`}
      title={item.label}
      className={`navbar__nav-link ${compact ? "navbar__nav-link--compact" : "navbar__nav-link--comfortable"}`}
    >
      <span className="navbar__nav-icon-wrap">
        <NavIcon id={item.id} />
      </span>
      {item.label}
    </a>
  );
}

function MobileMenuPanel({
  items,
  scrolled,
  onNavigate,
}: {
  items: NavItem[];
  scrolled: boolean;
  onNavigate: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="navbar__mobile-panel" id="mobile-nav-panel" role="dialog" aria-modal="true" aria-labelledby="mobile-nav-title">
      <h2 id="mobile-nav-title" className="sr-only">
        {t("nav.menu")}
      </h2>
      {scrolled ? (
        <div className="navbar__mobile-panel-header">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      ) : null}
      <nav className="navbar__mobile-nav">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={onNavigate} className="navbar__mobile-link">
            <span className="navbar__nav-icon-wrap">
              <NavIcon id={item.id} />
            </span>
            {item.label}
          </a>
        ))}
        <a href="/kalpana-pandey-cv.pdf" target="_blank" rel="noreferrer" className="navbar__mobile-resume">
          {t("nav.resume")}
        </a>
      </nav>
    </div>
  );
}

export const Navbar = ({ items, avatarSrc }: NavbarProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--top"}`}>
      <div className="relative">
        <div
          className={`navbar__shell ${scrolled ? "navbar__shell--scrolled" : "navbar__shell--expanded"}`}
        >
          <div className={`navbar__inner ${!scrolled ? "navbar__inner--padded" : ""}`}>
            <div className="navbar__row">
              <a href="#home" className="navbar__brand">
                <img
                  src={avatarSrc}
                  alt=""
                  className={`navbar__avatar ${scrolled ? "navbar__avatar--scrolled" : "navbar__avatar--hero"}`}
                />
                <span className={`navbar__name ${scrolled ? "navbar__name--scrolled" : "navbar__name--hero"}`}>
                  Kalpana Pandey
                </span>
              </a>

              <nav className="navbar__desktop-nav">
                {items.map((item) => (
                  <DesktopNavLink key={item.id} item={item} compact={scrolled} />
                ))}
              </nav>

              <div className="navbar__actions">
                <div
                  className={
                    scrolled ? "navbar__toggles--scrolled-desktop" : "navbar__toggles--always"
                  }
                >
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <a
                  href="/kalpana-pandey-cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={`navbar__resume ${scrolled ? "navbar__resume--scrolled" : "navbar__resume--hero"}`}
                >
                  {t("nav.resume")}
                </a>
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className="navbar__menu-btn"
                  aria-expanded={open}
                  aria-controls="mobile-nav-panel"
                  aria-label={t("nav.menu")}
                >
                  {open ? (
                    <svg className="navbar__menu-icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="navbar__menu-icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {open ? (
          <>
            <button type="button" className="navbar__backdrop" aria-hidden tabIndex={-1} onClick={closeMenu} />
            <div className="navbar__mobile-panel-wrap">
              <MobileMenuPanel items={items} scrolled={scrolled} onNavigate={closeMenu} />
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};
