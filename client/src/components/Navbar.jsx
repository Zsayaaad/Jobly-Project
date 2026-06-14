import ExploreApp from "./ExploreApp";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-surface-container-lowest border-b-4 border-on-background brutalist-shadow w-full sticky top-0 z-50 flex justify-between items-center px-8 h-20 mx-auto">
      {/* Brand */}
      <a
        href="/"
        className="text-3xl font-black italic text-on-background font-mono-data tracking-tighter"
      >
        JOBLY
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-lg font-mono uppercase font-bold tracking-tighter">
        {/* Active Link */}
        <a
          href="/"
          className="text-on-background border-b-4 border-primary-container pb-1 transition-all duration-200 ease-in-out"
        >
          Home
        </a>

        {/* Inactive Link */}
        <a
          href="/dashboard/allJobs"
          className="text-secondary px-2 py-1 border-2 border-transparent  hover:bg-primary-container hover:text-black hover:border-on-background hover:shadow-[2px_2px_0px_0px_#1a1c1c] dark:hover:shadow-[2px_2px_0px_0px_#ffffff] hover:cursor-crosshair"
        >
          Find Jobs
        </a>

        {/* Inactive Link (Includes interactive hover state mapped from your showcase) */}
        <a
          href="/dashboard"
          className="text-secondary px-2 py-1 border-2 border-transparent  hover:bg-primary-container hover:text-black hover:border-on-background hover:shadow-[2px_2px_0px_0px_#1a1c1c] dark:hover:shadow-[2px_2px_0px_0px_#ffffff] hover:cursor-crosshair"
        >
          Post a Job
        </a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-md">
        {/* Secondary Action */}
        <ThemeToggle />
        <a
          href="/login"
          className="hidden md:block font-mono-label text-mono-label font-bold uppercase text-on-background px-4 py-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:bg-primary-container hover:text-black hover:border-on-background hover:cursor-crosshair"
        >
          Login
        </a>

        <ExploreApp className="btn-nav-action bg-primary-container" />

        {/* Primary Action Button (Brutalist interaction states) */}
        <a href="/dashboard" className="btn-nav-action bg-white">
          Dashboard
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
