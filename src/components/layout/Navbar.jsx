import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import SecondaryButton from "../ui/SecondaryButton";
import { contactInfo, navLinks } from "../..";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu handlers (stable)
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Body scroll lock
  useEffect(() => {
    const originalStyle = document.body.style.overflow;

    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeMenu]);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: easeInOut }}
        className={`sticky top-0 left-0 z-40 w-full flex items-center justify-between px-4 md:px-8 xl:px-12 py-4 ${
          scrolled ? "bg-neutral-100/60 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        {/* Availability */}
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Go to homepage">
            <img
              src="./Gursharan Singh.jpg"
              alt="Gursharan Singh profile"
              loading="lazy"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/fallback-avatar.png";
              }}
            />
          </Link>

          <div className="flex text-sm md:text-base flex-col font-medium text-neutral-900">
            <span>Available for</span>
            <div className="text-neutral-400 flex items-center gap-2">
              Job / Freelance
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
              </span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="hidden lg:flex flex-col font-medium text-neutral-900">
          <span>IN Based</span>
          <span className="text-neutral-400">Working Globally</span>
        </div>

        {/* Work */}
        <div className="hidden md:flex flex-col font-medium text-neutral-900">
          <span>Building at</span>
          <span className="text-neutral-400 group overflow-hidden hover:text-lime-500">
            <a
              href="https://techwebers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Tech Webers
              </span>
              <span className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                Tech Webers
              </span>
            </a>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            ariaLabel="Get in touch"
            title="Get in touch"
            href={contactInfo.gmail.url}
            target="_blank"
            className="text-base md:text-lg font-semibold bg-neutral-900 text-neutral-100 px-6 py-3.5 md:py-3 rounded-full hover:scale-102 active:scale-98 transition-transform duration-200 ease hidden sm:block"
          >
            Get in touch
          </a>

          {/* close menu */}
          <div
            ariaLabel="Open Menu"
            title="Menu"
            onClick={openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="bg-neutral-200 p-2.5 md:p-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5.5 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            aria-hidden={!isOpen}
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-md"
          >
            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.35, ease: easeInOut }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 h-dvh w-72 md:w-80 xl:w-96 bg-linear-to-b from-neutral-100 to-neutral-200 px-6 md:px-8 py-6 flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <header className="flex items-center justify-between pb-6 border-b border-neutral-200">
                <p className="text-sm uppercase tracking-widest text-neutral-400">
                  Navigation
                </p>

                <div
                  ariaLabel="Close Menu"
                  title="Close"
                  onClick={closeMenu}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  className="bg-neutral-200 p-2.5 md:p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-5.5 md:size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </header>

              {/* Links */}
              <nav className="mt-10">
                <ul className="flex flex-col gap-4 text-4xl lg:text-5xl font-semibold tracking-tight">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="group overflow-hidden text-neutral-900 hover:text-lime-500"
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className="block relative"
                      >
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                          {link.name}
                        </span>
                        <span className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Divider */}
              <div className="mt-12 border-t border-neutral-200" />

              {/* CTA */}
              <a
                ariaLabel="Get in touch"
                title="Get in touch"
                href={contactInfo.gmail.url}
                target="_blank"
                className="font-semibold bg-neutral-900 text-neutral-100 px-6 py-3.5 md:py-3 rounded-full hover:scale-102 active:scale-98 transition-transform duration-200 ease text-2xl w-full text-center mt-auto"
              >
                Get in touch
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
