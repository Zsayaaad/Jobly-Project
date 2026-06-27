import { useState } from "react";
import ExploreApp from "./ExploreApp";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", href: "/" },
  { name: "Find Jobs", href: "dashboard/allJobs" },
  { name: "Post Job", href: "dashboard" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-surface-container-lowest border-b-3 border-on-background brutalist-shadow w-full sticky top-0 z-50">
      <div className="flex justify-between items-center px-8 h-20 mx-auto">
        {/* Brand */}
        <a
          href="/"
          className="text-3xl font-black italic text-on-background font-mono-data tracking-tighter flex-1"
        >
          JOBLY
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-3 font-mono uppercase font-bold tracking-tighter flex-1">
          {links.map((link) => (
            <a
              key={link.name}
              className="text-secondary px-2 py-1 border-2 border-transparent hover:bg-primary-container hover:text-black hover:border-on-background hover:shadow-[2px_2px_0px_0px_#1a1c1c] dark:hover:shadow-[2px_2px_0px_0px_#ffffff] hover:cursor-crosshair"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <ThemeToggle />

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-4 flex-1 justify-end">
          <a
            href="/login"
            className="font-mono-label text-xs lg:text-mono-label font-bold uppercase text-on-background px-2 py-1 lg:px-4 lg:py-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:bg-primary-container hover:text-black hover:border-on-background hover:cursor-crosshair"
          >
            Login
          </a>

          <ExploreApp className="btn-nav-action bg-primary-container cursor-pointer px-2 py-1 text-xs lg:px-md lg:py-sm lg:text-[13px]" />

          <a
            href="/dashboard"
            className="btn-nav-action bg-white px-2 py-1 text-xs lg:px-md lg:py-sm lg:text-[13px]"
          >
            Dashboard
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-on-background hover:bg-surface-container ml-4 p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu — full width below the navbar */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-surface-container-lowest border-t-4 border-on-background">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-secondary px-8 py-4 border-b-2 border-on-background font-mono uppercase font-bold hover:bg-primary-container hover:text-black hover:cursor-crosshair"
            >
              {link.name}
            </a>
          ))}
          <div className="sm:hidden flex justify-center gap-4 mt-10 p-4 bg-surface-container-lowest">
            <a
              href="/login"
              onClick={handleLinkClick}
              className="font-mono-label text-xs font-bold uppercase text-on-background px-2 py-1 border-2 border-transparent transition-all duration-200 ease-in-out hover:bg-primary-container hover:text-black hover:border-on-background hover:cursor-crosshair"
            >
              Login
            </a>
            <ExploreApp className="btn-nav-action bg-primary-container cursor-pointer px-2 py-1 text-xs" />
            <a
              href="/dashboard"
              onClick={handleLinkClick}
              className="btn-nav-action bg-white text-black px-2 py-1 text-xs"
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
