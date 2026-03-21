import React, { useState, useRef, useEffect } from "react";
import Icon from "../ui/Icon";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import Heroprojectscards from "../ui/Heroprojectscards";
import { hero } from "../..";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.92]);
  const radius = useTransform(scrollY, [0, 80], [0, 12]);

  // Ensure autoplay works reliably
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  return (
    <section aria-label="Hero section">
      <div className="flex items-end justify-between max-w-full overflow-hidden px-4 md:px-8 xl:px-12 py-2">
        {/* Text */}
        <div className="flex flex-col gap-4 mt-16 md:mt-24 max-w-195 xl:max-w-215">
          <h1 className="text-neutral-900 text-[54px] md:text-[64px] xl:text-[76px] 2xl:text-[88px] font-semibold leading-[1.04] tracking-[-0.01em]">
            {hero.heading}
          </h1>

          <p className="text-neutral-500 text-[17px] md:text-lg xl:text-xl leading-[1.7] max-w-160">
            {hero.subheading}
          </p>
        </div>

        <Heroprojectscards />
      </div>

      {/* Video */}
      <motion.div
        style={shouldReduceMotion ? {} : { scale }}
        className="relative w-full mt-4 md:mt-6 xl:mt-8 pb-16 md:pb-20 lg:pb-24"
      >
        <motion.video
          ref={videoRef}
          style={shouldReduceMotion ? {} : { borderRadius: radius }}
          src={hero.showreel}
          className="w-full max-w-full object-cover"
          muted={isMuted}
          autoPlay
          playsInline
          loop
          preload="metadata"
          aria-label="Showcase video"
          onError={(e) => {
            console.warn("Video failed to load");
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Overlay (click-safe) */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Controls */}
        <div className="absolute inset-0 flex items-start justify-end py-2 md:py-4 right-2 md:right-4 xl:right-4">
          <button
            onClick={() => setIsMuted((p) => !p)}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="pointer-events-auto"
          >
            <Icon
              path={
                isMuted
                  ? "M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  : "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              }
            />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
