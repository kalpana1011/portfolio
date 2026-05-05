import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ProjectsSection.css";
import { ProjectCard } from "./ProjectCard";
import type { ProjectCardItem } from "./types";

export type { ProjectCardItem, ProjectFigmaFrame } from "./types";

type FilterKey = "all" | "design" | "web";

export function ProjectsSection() {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as ProjectCardItem[];

  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((p) => p.category === filter);
  }, [items, filter]);

  const filters: { key: FilterKey; labelKey: string }[] = [
    { key: "all", labelKey: "projects.filterAll" },
    { key: "design", labelKey: "projects.filterDesign" },
    { key: "web", labelKey: "projects.filterWeb" },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__header">
        <h2 className="projects-section__title">{t("projects.title")}</h2>
        <p className="projects-section__subtitle">{t("projects.subtitle")}</p>
        <div className="projects-section__filters">
          {filters.map(({ key, labelKey }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={
                filter === key
                  ? "projects-section__filter-btn projects-section__filter-btn--active"
                  : "projects-section__filter-btn projects-section__filter-btn--inactive"
              }
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-section__grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
