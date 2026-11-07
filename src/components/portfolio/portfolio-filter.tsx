"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CheckList } from "@/components/ui/icon-tile";
import { portfolioFilters, projects } from "@/content/projects";

export function PortfolioFilter() {
  const [filter, setFilter] = useState<string>("All");
  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.tools.includes(filter as never) || project.category === filter);
  }, [filter]);

  return (
    <>
      <div aria-label="Filter demo projects" className="filter-list" role="group">
        {portfolioFilters.map((item) => (
          <button
            aria-pressed={filter === item}
            className={filter === item ? "filter-button is-active" : "filter-button"}
            key={item}
            onClick={() => setFilter(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <p className="filter-status" aria-live="polite">{visibleProjects.length} illustrative demo project{visibleProjects.length === 1 ? "" : "s"}</p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div className={"project-preview project-preview--" + project.accent}>
              <span className="demo-badge"><span /> Demo Project — Synthetic Data</span>
              <div className="project-bars" aria-hidden="true">{[52, 74, 61, 90, 68, 82].map((height, index) => <span key={index} style={{ height: height + "%" }} />)}</div>
            </div>
            <div className="project-card-body">
              <span className="project-category">{project.category} · {project.tools.join(" / ")}</span>
              <h2>{project.title}</h2>
              <p><strong>Problem</strong> {project.problem}</p>
              <p><strong>Approach</strong> {project.approach}</p>
              <CheckList items={project.insights} />
              <Link className="card-link" href={"/portfolio/" + project.slug}>View Case Study <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
