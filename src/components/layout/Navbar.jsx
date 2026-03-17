import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/#services" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: easeInOut }}
        className={`sticky top-0 left-0 z-40 w-full flex items-center justify-between px-4 md:px-8 xl:px-12 py-4 ${scrolled ? "bg-neutral-100/60 backdrop-blur-2xl" : "bg-transparent"}`}
      >
        {/* Availability */}
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img
              src="./Gursharan Singh.jpg"
              alt=""
              className="w-11 h-11 md:w-12 md:h-12 rounded-full"
            />
          </Link>

          <div className="flex text-sm md:text-base flex-col font-medium text-neutral-900">
            <span>Available for</span>
            <div className="text-neutral-400 flex items-center gap-2">
              Job / Freelance
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Left Info */}
        <div className="hidden lg:flex flex-col font-medium text-neutral-900">
          <span>IN Based</span>
          <span className="text-neutral-400">Working Globally</span>
        </div>

        {/* Work */}
        <div className="hidden md:flex flex-col font-medium text-neutral-900">
          <span>Building at</span>
          <span className="text-neutral-400 group overflow-hidden hover:text-amber-300">
            <Link
              to={"https://techwebers.com/"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block relative"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Tech Webers
              </span>

              <span className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                Tech Webers
              </span>
            </Link>
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <PrimaryButton
            ariaLabel="Get in touch"
            title="Get in touch"
            className="hidden sm:block"
          />
          <SecondaryButton
            ariaLabel="Open Menu"
            title="Menu"
            onClick={openMenu}
            className="text-sm"
          />
        </div>
      </motion.header>

      {/* Mobile / Side Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-md"
          >
            <motion.aside
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

                <SecondaryButton
                  ariaLabel="Close Menu"
                  title="Close"
                  onClick={closeMenu}
                  className="text-sm"
                />
              </header>

              {/* Links */}
              <nav className="mt-10">
                <ul className="flex flex-col gap-4 text-4xl lg:text-5xl font-semibold tracking-tight">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name} className="group overflow-hidden">
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
              <div className="mt-12 border-t border-neutral-200"></div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <PrimaryButton
                  ariaLabel="Get in touch"
                  title="Get in touch"
                  className="text-xl! md:text-2xl! w-full"
                  onClick={() => {
                    navigate("/contact");
                    closeMenu();
                  }}
                />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
