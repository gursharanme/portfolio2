import { contactInfo, footerContent, socialLinks } from "../..";

const Footer = () => {
  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="bg-linear-to-b from-neutral-800 to-neutral-900 text-neutral-100 px-4 md:px-8 xl:px-12 pt-20 md:pt-24 lg:pt-28 pb-10"
    >
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-end">
        {/* Left */}
        <div className="max-w-2xl">
          <h2
            id="footer-heading"
            className="text-[48px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-semibold leading-[1.04] tracking-[-0.001em] mb-5"
          >
            {footerContent.heading}
          </h2>

          <p className="text-neutral-400 text-base md:text-lg xl:text-xl leading-relaxed max-w-lg">
            {footerContent.subheading}
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col md:items-end gap-2">
          {/* Email */}
          <a
            href={contactInfo.gmail.url}
            aria-label="Send email"
            className="text-[28px] md:text-[36px] xl:text-[42px] font-semibold tracking-tight group overflow-hidden underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 "
          >
            <span className="block relative">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {contactInfo.gmail.title}
              </span>
              <span className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-lime-400">
                {contactInfo.gmail.title}
              </span>
            </span>
          </a>

          {/* Phone */}
          <a
            href={contactInfo.phone.url}
            aria-label="Call phone number"
            className="text-[18px] md:text-[32px] xl:text-[32px] font-medium tracking-tight group overflow-hidden text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            <span className="block relative">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {contactInfo.phone.title}
              </span>
              <span className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-lime-400">
                {contactInfo.phone.title}
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 border-t border-neutral-800 pt-8" />

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Social */}
        <nav aria-label="Social links">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 uppercase md:text-sm font-medium">
            {socialLinks.map((link) => (
              <li key={link.name} className="group w-fit">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-neutral-300 hover:text-lime-400 transition focus-visible:outline-none"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="md:text-right text-neutral-500 text-[15px]">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
