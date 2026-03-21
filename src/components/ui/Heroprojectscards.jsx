import React from "react";
import { motion, useReducedMotion } from "motion/react";

const cardTransition = {
  type: "spring",
  stiffness: 220,
  damping: 18,
};

const CARDS = [
  { id: 1, rotate: -8, delay: 0.6, bg: "bg-amber-300", z: "z-20" },
  { id: 2, rotate: 0, delay: 0.75, bg: "bg-purple-300", z: "z-30" },
  { id: 3, rotate: 8, delay: 0.9, bg: "bg-lime-300", z: "z-40" },
  { id: 4, rotate: 16, delay: 1.05, bg: "bg-pink-300", z: "z-50" },
];

const Heroprojectscards = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: 80 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
      transition={{ ...cardTransition, delay: 0.4 }}
      aria-hidden="true"
      className="relative w-40 h-40 xl:w-50 xl:h-50 -rotate-16 hidden lg:block lg:my-6 xl:my-8 right-8 -z-10"
    >
      {CARDS.map((card) => (
        <motion.div
          key={card.id}
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 40, rotate: card.rotate - 12 }
          }
          animate={
            shouldReduceMotion ? {} : { opacity: 1, y: 0, rotate: card.rotate }
          }
          transition={{ ...cardTransition, delay: card.delay }}
          className={`absolute inset-0 rounded-2xl origin-bottom-left ${card.bg} ${card.z} will-change-transform`}
        />
      ))}
    </motion.div>
  );
};

export default Heroprojectscards;
