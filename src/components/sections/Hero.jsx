import React, { useState } from "react";
import Icon from "../ui/Icon";
import { motion, useScroll, useTransform } from "motion/react";
import Heroprojectscards from "../ui/Heroprojectscards";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.93]);
  const radius = useTransform(scrollY, [0, 50], [0,12])
  return (
    <section className="">
      <div className="flex items-end justify-between max-w-full overflow-hidden px-4 md:px-8 xl:px-12 p-2">
        {/* text */}
        <div className="flex flex-col gap-4 mt-10 md:mt-14 max-w-195 xl:max-w-215">
          <h1 className="text-neutral-900 text-[52px] md:text-[64px] xl:text-[76px] 2xl:text-[88px] font-semibold leading-[1.04] tracking-[-0.01em]">
            Building High-Performance Web Interfaces with React
          </h1>

          <p className="text-neutral-500 text-lg md:text-xl xl:text-[22px] leading-[1.56em] max-w-164">
            Frontend Developer specializing in React, Tailwind CSS, and modern
            JavaScript, focused on scalable architecture, clean UI, and seamless
            user experiences.
          </p>
        </div>

        <Heroprojectscards />
      </div>

      {/* video */}
      <motion.div
        style={{ scale: scale }}
        className="relative w-full mt-1.5 md:mt-4 xl:mt-6 pb-16 md:pb-20 lg:pb-24"
      >
        <div>
          <motion.video
            style={{
              borderRadius: radius,
            }}
            src="./videoplayback.mp4"
            className="w-full max-w-full"
            muted={isMuted}
            autoPlay
            playsInline
            loop
          />
        </div>
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0 flex items-start justify-end py-2 md:py-4 right-2 md:right-4 xl:right-4">
          <Icon
            onClick={() => setIsMuted((p) => !p)}
            ariaLabel={isMuted ? "Unmute video" : "Mute video"}
            path={
              isMuted
                ? "M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                : "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            }
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
