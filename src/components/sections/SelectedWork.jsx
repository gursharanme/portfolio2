import { link } from "motion/react-client";
import React from "react";
import { Link } from "react-router-dom";

const project = [
  {
    id: 1,
    projectName: "Dental Clinic Website",
    intro:
      "A modern, responsive, and dynamic dental clinic website built using React and Tailwind CSS, showcasing services, appointment booking, and informational content to promote Oracare’s brand and services online.",
    imageSrc: "./projects/Oracare.png",
    year: "2025",
    techStack: ["React", "Tailwind CSS", "Lucide Icons"],
    url: "https://oracare.gursharan.me/",
    github: "https://github.com/gursharanme/oracare",
  },
  {
    id: 2,
    projectName: "Product Landing Page",
    intro:
      "A luxurious and modern skincare product landing page built with React and Tailwind CSS, crafted to reflect elegance, purity, and high performance. Designed to drive conversions with focused storytelling, seamless UX, and responsive design.",
    imageSrc: "./projects/Sadieskin.png",
    year: "2025",
    techStack: ["React", "Tailwind CSS"],
    url: "https://sadieskin.gursharan.me/",
    github: "https://github.com/gursharanme/sadieskin",
  },
  {
    id: 3,
    projectName: "Designer Portfolio",
    intro:
      "A modern, sleek, and minimalistic portfolio website built with React 19, Tailwind CSS v4, and React Router, designed to showcase a graphic designer's creative work.",
    imageSrc: "./projects/Glyphor.png",
    year: "2026",
    techStack: ["React", "Tailwind CSS", "React Router"],
    url: "https://glyphor.gursharan.me/",
    github: "https://github.com/gursharanme/glyphor",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="px-4 md:px-8 xl:px-12 py-16 md:py-20 lg:py-24 bg-neutral-900 text-neutral-100">
      <div className="flex items-end justify-between">
        <h2 className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.001em]">
          Selected Work
        </h2>
        <h2 className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.001em]">
          '26
        </h2>
      </div>

      <div className="grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-10 mt-8">
        {project.map((project, id) => (
          <div
            key={id}
            className="group bg-neutral-100 text-neutral-900 p-4 md:p-6 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <Link
              to={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-xl aspect-4/3"
            >
              <img
                src={project.imageSrc}
                alt={project.projectName}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-neutral-900/60 flex items-center justify-center">
                <div className="bg-neutral-100 text-neutral-900 w-18 h-18 flex items-center justify-center rounded-full font-semibold tracking-tight scale-90 group-hover:scale-100 transition duration-300 uppercase">
                  Visit
                </div>
              </div>
            </Link>

            {/* Title + Year */}
            <div className="flex items-start justify-between mt-4 gap-4">
              <h3 className="text-[28px] md:text-[36px] xl:text-[44px] font-semibold tracking-[-0.015em] leading-[1.1]">
                <Link
                  to={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 decoration-neutral-200"
                >
                  {project.projectName}
                </Link>
              </h3>

              <p className="text-xs md:text-sm text-neutral-400 whitespace-nowrap mt-2">
                {project.year}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((stack, idx) => (
                <span
                  key={idx}
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
              {/* Links */}
              <div className="flex items-center gap-3">
                <Link
                  to={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 hover:scale-110 transition"
                >
                  <img src="./web.png" alt="Live site" className="size-6" />
                </Link>

                <Link
                  to={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 hover:scale-110 transition"
                >
                  <img
                    src="./github.png"
                    alt="GitHub repo"
                    className="size-6"
                  />
                </Link>
              </div>

              {/* Subtle CTA */}
              <Link to={project.url} target="_blank" className="text-xs text-neutral-400 group-hover:text-neutral-700 transition">
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={"/work"}
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
