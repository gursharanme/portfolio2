import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { services } from "../..";



const Services = () => {
  const [activeId, setActiveId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleService = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-4 md:px-8 xl:px-12 py-20 md:py-24 lg:py-28 bg-neutral-100 text-neutral-900"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <h2
          id="services-heading"
          className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.01em]"
        >
          {services.heading}
        </h2>

        <p className="text-neutral-500 text-base md:text-lg xl:text-xl leading-[1.6]">
          {services.subheading}
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-10 md:mt-14 divide-y divide-neutral-200">
        {services.allServices.map((service, index) => {
          const isOpen = activeId === service.id;

          return (
            <div key={service.id} className="py-6 md:py-8">
              {/* Trigger */}
              <button
                onClick={() => toggleService(service.id)}
                aria-expanded={isOpen}
                aria-controls={`service-panel-${service.id}`}
                id={`service-trigger-${service.id}`}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-neutral-400 text-sm md:text-base font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-[28px] md:text-[38px] xl:text-[46px] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
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

              {/* Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`service-panel-${service.id}`}
                    role="region"
                    aria-labelledby={`service-trigger-${service.id}`}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 10, height: 0 }
                    }
                    animate={
                      shouldReduceMotion
                        ? {}
                        : { opacity: 1, y: 0, height: "auto" }
                    }
                    exit={
                      shouldReduceMotion ? {} : { opacity: 0, y: 10, height: 0 }
                    }
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 bg-neutral-200/70 backdrop-blur rounded-2xl p-5 md:p-6 border border-neutral-200">
                      <p className="text-neutral-600 text-sm md:text-base xl:text-lg leading-[1.6] max-w-2xl">
                        {service.description}
                      </p>

                      <ul className="flex flex-wrap gap-2 gap-y-3 mt-5">
                        {service.points.map((point) => (
                          <li key={point}>
                            <span className="bg-neutral-100 hover:bg-neutral-900 hover:text-neutral-100 transition-colors px-3 py-1.5 rounded-full text-xs md:text-sm font-mono">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
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
