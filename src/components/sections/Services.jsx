import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: 1,
    title: "Websites & Landing Pages",
    description:
      "High-performance, scalable web interfaces built with a focus on clean architecture, visual precision, and seamless user experience.",
    points: [
      "Responsive UI development",
      "Component-based architecture",
      "Performance optimization",
      "Pixel-perfect implementation",
      "Modern frontend stack (React)",
    ],
  },
  {
    id: 2,
    title: "UI Implementation",
    description:
      "Translating design systems into production-ready interfaces with attention to detail, consistency, and scalability.",
    points: [
      "Design-to-code conversion",
      "Reusable components",
      "Accessibility best practices",
      "Consistent spacing & typography",
      "Scalable structure",
    ],
  },
  {
    id: 3,
    title: "Frontend Optimization",
    description:
      "Improving speed, responsiveness, and overall performance to deliver smooth and efficient user experiences.",
    points: [
      "Code splitting & lazy loading",
      "Lighthouse optimization",
      "Asset optimization",
      "Efficient rendering",
      "SEO-friendly structure",
    ],
  },
  {
    id: 4,
    title: "WordPress Development",
    description:
      "Custom WordPress websites built with a focus on performance, flexibility, and ease of content management.",
    points: [
      "Custom WordPress builds",
      "Elementor & Divi development",
      "Multilingual websites",
      "Responsive and optimized UI",
      "SEO-friendly structure",
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(null);
  return (
    <section
      id="services"
      className="px-4 md:px-8 xl:px-12 py-20 md:py-24 lg:py-28 bg-neutral-100 text-neutral-900"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <h2 className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.01em]">
          Services
        </h2>

        <p className="text-neutral-500 text-base md:text-lg xl:text-xl leading-[1.6]">
          I design and build high-performance interfaces that are scalable,
          visually refined, and engineered for seamless user experiences.
        </p>
      </div>

      {/* Services */}
      <div className="mt-10 md:mt-14">
        {services.map((service, index) => {
          const isOpen = active === service.id;

          return (
            <div
              key={service.id}
              className="group border-b border-neutral-200 py-6 md:py-8 transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => setActive(isOpen ? null : service.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-neutral-400 text-sm md:text-base font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-[28px] md:text-[38px] xl:text-[46px] font-semibold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-neutral-500 group-hover:text-neutral-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 md:size-6"
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </motion.span>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 bg-neutral-200/70 backdrop-blur rounded-2xl p-5 md:p-6 border border-neutral-200">
                      <p className="text-neutral-600 text-sm md:text-base xl:text-lg leading-[1.6] max-w-2xl">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {service.points.map((point, i) => (
                          <span
                            key={i}
                            className="bg-neutral-100 hover:bg-neutral-900 hover:text-neutral-100 transition-colors px-3 py-1.5 rounded-full text-xs md:text-sm font-mono"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
