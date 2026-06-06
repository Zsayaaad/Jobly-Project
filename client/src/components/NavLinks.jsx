import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../context/DashboardContext";
import links from "../utils/links";

const NavLinks = () => {
  const { isSidebarCollapsed, closeMobileSidebar, user } =
    useDashboardContext();

  return (
    <nav className="grow px-3 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
      {links.map((link) => {
        const { text, path, icon } = link;

        const { role } = user;
        if (path === "admin" && role !== "admin") return;

        return (
          <NavLink
            to={path}
            key={text}
            onClick={closeMobileSidebar}
            className={({ isActive }) =>
              /**isActive is provided by React Router's <NavLink> component.
               * It's a boolean that React Router automatically calculates by comparing the link's to prop against the current URL path.
               */
              `flex items-center gap-4 px-4 py-4 font-mono-label uppercase font-bold ${
                isActive
                  ? " bg-primary-container text-black border-2 border-on-surface shadow-[4px_4px_0px_0px_white] transition-all active:scale-95 "
                  : " text-on-surface hover:bg-surface-container hover:translate-x-1 transition-transform "
              }`
            }
            end // to make index element of the parent inactive when make another element active instead of the index
          >
            <span className="material-symbols-outlined shrink-0">{icon}</span>
            <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
              {text}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavLinks;
