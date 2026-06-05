"use client";

import { useState } from "react";
import SectionDivider from "@/components/ui/SectionDivider";
import { projectTabs, allProjects, type ProjectCategoryKey } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function PortfolioList() {
  const [activeTab, setActiveTab] = useState<ProjectCategoryKey>("webDesign");
  const activeProjects = allProjects.filter((p) => p.categoryKey === activeTab);

  return (
    <section className="relative bg-gray-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
      <SectionDivider />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              Full Portfolio
            </span>
          </div>

          <h2 className="h2-section max-w-[800px] mx-auto leading-tight tracking-tight text-nearblack">
            Explore Our Recent Projects.
          </h2>
          <p className="body-text mt-4 mx-auto max-w-[540px] text-gray text-base">
            Filter our complete engineering index covering custom web apps, scalable SaaS products, and native mobile apps.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex w-full justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-stone bg-white p-2 shadow-sm">
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as ProjectCategoryKey)}
                  className={`relative flex h-[50px] sm:h-[60px] items-center justify-center rounded-[1.5rem] px-5 sm:px-8 text-[14px] sm:text-[15px] font-bold transition-colors duration-300 cursor-pointer ${isActive
                      ? "bg-nearblack text-offwhite shadow-sm"
                      : "text-gray hover:text-nearblack bg-transparent"
                    }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          key={activeTab}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 transition-opacity duration-500"
        >
          {activeProjects.map((item, index) => (
            <ProjectCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
