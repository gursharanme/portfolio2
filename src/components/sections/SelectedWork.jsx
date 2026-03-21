import { useMemo } from "react";
import { Link } from "react-router-dom";
import { projects } from "../..";


const SelectedWork = () => {
  // Stable derived data (no mutation)
  const featuredProjects = useMemo(() => [...projects].slice(-2).reverse(), []);

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="px-4 md:px-8 xl:px-12 py-16 md:py-20 lg:py-24 bg-neutral-900 text-neutral-100"
    >
      {/* Header */}
      <div className="flex items-end justify-between">
        <h2
          id="selected-work-heading"
          className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.001em]"
        >
          Selected Work
        </h2>

        <span className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.001em] text-neutral-500 font-serifDisplay">
          ’26
        </span>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-10 mt-8">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-neutral-100 text-neutral-900 p-4 md:p-6 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.projectName}`}
              className="relative block overflow-hidden rounded-xl aspect-4/3"
            >
              <img
                src={project.imageSrc}
                alt={project.projectName}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                onError={(e) => {
                  e.currentTarget.src = "/fallback-project.png";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-neutral-900/60 flex items-center justify-center">
                <div className="bg-neutral-100 text-neutral-900 w-18 h-18 flex items-center justify-center rounded-full font-semibold tracking-tight scale-90 group-hover:scale-100 transition duration-300 uppercase">
                  Visit
                </div>
              </div>
            </a>

            {/* Title */}
            <div className="flex items-start justify-between mt-4 gap-4">
              <h3 className="text-[28px] md:text-[36px] xl:text-[44px] font-semibold tracking-[-0.015em] leading-[1.1]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 decoration-neutral-200"
                >
                  {project.projectName}
                </a>
              </h3>

              <time className="text-xs md:text-sm text-neutral-400 whitespace-nowrap mt-2">
                {project.year}
              </time>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack?.map((stack) => (
                <span
                  key={stack}
                  className="bg-neutral-200/80 backdrop-blur px-3 py-1 rounded-full text-xs md:text-sm text-neutral-700 group-hover:bg-neutral-200 transition"
                >
                  {stack}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-neutral-600 mt-4 text-sm md:text-base leading-[1.6] line-clamp-3">
              {project.intro}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-5">
              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live site"
                  className="opacity-60 hover:opacity-100 hover:scale-110 transition"
                >
                  <img src="./web.png" alt="" className="size-6" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="opacity-60 hover:opacity-100 hover:scale-110 transition"
                >
                  <img src="./github.png" alt="" className="size-6" />
                </a>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 group-hover:text-neutral-700 transition"
              >
                View Project →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <Link
        to="/work"
        className="flex items-center gap-2 justify-center mt-8 md:mt-12 group"
      >
        <span className="text-lg">See All</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </section>
  );
};

export default SelectedWork;
