import { aboutMe } from "../..";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 md:px-8 xl:px-12 py-20 md:py-24 lg:py-28 bg-neutral-900 text-neutral-100"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.02] tracking-[-0.02em]">
            {aboutMe.heading}
          </h2>

          <p className="text-neutral-300 text-lg md:text-xl xl:text-[22px] leading-[1.6]">
            {aboutMe.subheading}
          </p>

          <p className="text-neutral-500 text-base md:text-lg xl:text-xl leading-[1.7]">
            {aboutMe.para}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-md md:ml-auto">
          {/* subtle background layer */}
          <div className="absolute inset-0 bg-neutral-800 rounded-2xl translate-x-4 translate-y-4"></div>

          <img
            src={aboutMe.imageSrc}
            alt="Gursharan Singh"
            className="relative z-10 w-full h-full object-cover rounded-2xl grayscale contrast-110"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
