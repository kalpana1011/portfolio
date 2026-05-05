/**
 * Full-viewport decorative layer: subtle grid + soft gradient blobs.
 * Theme-aware via data-theme on html (light vs dark line weights and blob intensity).
 */
import "./SiteBackground.css";

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden>
      <div className="site-background__wash" />
      <div className="site-background__grid bg-site-grid" />
      <div className="site-background__blob site-background__blob--tl" />
      <div className="site-background__blob site-background__blob--tr" />
      <div className="site-background__blob site-background__blob--bl" />
      <div className="site-background__blob site-background__blob--br" />
    </div>
  );
}
