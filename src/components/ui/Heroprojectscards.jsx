import React from "react";
import { motion } from "motion/react";

const cardTransition = {
  type: "spring",
  stiffness: 220,
  damping: 18,
};

const Heroprojectscards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...cardTransition, delay: 0.4 }}
      className="relative w-40 h-40 xl:w-50 xl:h-50 -rotate-16 hidden lg:block lg:my-6 xl:my-8 right-8 -z-10"
    >
      {/* card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -20 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ ...cardTransition, delay: 0.6 }}
        className="w-40 h-40 xl:w-50 xl:h-50 bg-amber-300 rounded-2xl absolute inset-0 z-20 origin-bottom-left"
      />

      {/* card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ ...cardTransition, delay: 0.75 }}
        className="w-40 h-40 xl:w-50 xl:h-50 bg-purple-300 rounded-2xl absolute inset-0 z-30 origin-bottom-left"
      />

      {/* card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 8 }}
        transition={{ ...cardTransition, delay: 0.9 }}
        className="w-40 h-40 xl:w-50 xl:h-50 bg-lime-300 rounded-2xl absolute inset-0 z-40 origin-bottom-left"
      />

      {/* card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 16 }}
        transition={{ ...cardTransition, delay: 1.05 }}
        className="w-40 h-40 xl:w-50 xl:h-50 bg-pink-300 rounded-2xl absolute inset-0 z-50 origin-bottom-left"
      />
    </motion.div>
  );
};

export default Heroprojectscards;
