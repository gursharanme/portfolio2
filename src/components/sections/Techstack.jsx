import React from "react";
import { techStack } from "../..";

const Techstack = () => {
  return (
    <section
      aria-labelledby="techstack-heading"
      className="px-4 md:px-8 xl:px-12 py-20 md:py-24 lg:py-28 bg-neutral-100 text-neutral-900"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <h2
          id="techstack-heading"
          className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.01em]"
        >
          {techStack.heading}
        </h2>

        <p className="text-neutral-500 text-base md:text-lg xl:text-xl leading-[1.6]">
          {techStack.subheading}
        </p>
      </div>

      {/* Grid */}
      <div className="mt-8 md:mt-12 border-t border-l border-neutral-300">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {techStack.stack.map((tech) => (
            <li key={tech.id} className="list-none">
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${tech.name} website`}
                className="group flex items-center justify-center h-24 md:h-28 xl:h-32 border-r border-b border-neutral-300 transition-colors duration-300 hover:bg-neutral-900 focus-visible:bg-neutral-900 outline-none"
              >
                <span className="text-base xl:text-lg font-medium text-neutral-600 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300 group-hover:scale-105">
                  {tech.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Techstack;
