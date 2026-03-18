import React from "react";

const techStack = [
  // Frontend Core
  { name: "React", url: "https://react.dev" },
//   { name: "Next.js", url: "https://nextjs.org" },
//   { name: "TypeScript", url: "https://www.typescriptlang.org" },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "Tailwind CSS", url: "https://tailwindcss.com" },
  { name: "Motion", url: "https://motion.dev/" },

  // Tools
  { name: "Git", url: "https://git-scm.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "Vercel", url: "https://vercel.com" },
  { name: "Figma", url: "https://figma.com" },

  // WordPress / CMS
  { name: "WordPress", url: "https://wordpress.org" },
  { name: "Elementor", url: "https://elementor.com" },
  { name: "Divi", url: "https://www.elegantthemes.com/divi/" },
  { name: "Gravity Forms", url: "https://www.gravityforms.com" },
];

const Techstack = () => {
  return (
    <section className="px-4 md:px-8 xl:px-12 py-20 md:py-24 lg:py-28 bg-neutral-100 text-neutral-900">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <h2 className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.01em]">
          Modern Tech Stack
        </h2>

        <p className="text-neutral-500 text-base md:text-lg xl:text-xl leading-[1.6]">
          Tools and technologies I use to design and build modern web
          experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-8 md:mt-12 border-t border-l border-neutral-300">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {techStack.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-24 md:h-28 xl:h-32 border-r border-b border-neutral-300 transition-colors duration-300 hover:bg-neutral-900"
            >
              <span className="text-base xl:text-lg font-medium text-neutral-600 group-hover:text-neutral-100 transition-all duration-300 group-hover:scale-105">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
