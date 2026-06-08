import { useState } from "react";
import { useDashboardContext } from "../context/DashboardContext";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div className="relative">
      <button
        type="button"
        className={`cursor-pointer flex items-center gap-2 p-2 border-2 border-on-surface bg-surface-container-lowest brutalist-active transition-all hover:bg-surface-container ${
          showLogout ? "translate-x-[2px] translate-y-[2px]" : ""
        }`}
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="w-6 h-6 object-cover border border-on-surface" />
        ) : (
          <span className="material-symbols-outlined">account_circle</span>
        )}
        <span className="font-mono-label uppercase hidden md:block">
          {user?.name || "User"}
        </span>
        <span
          className="material-symbols-outlined transition-transform duration-200"
          style={{ transform: showLogout ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          arrow_drop_down
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 top-full mt-2 min-w-[160px] bg-surface-container-lowest border-4 border-on-surface z-50 transition-all duration-200 origin-top-right ${
          showLogout
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-4 border-b-2 border-on-surface bg-primary-container/10">
          <p className="text-mono-data text-on-surface/60 uppercase">
            Signed in as
          </p>
          <p className="font-h3 text-base truncate">{user?.name || "User"}</p>
        </div>

        <button
          type="button"
          className="w-full text-left px-4 py-3 flex items-center gap-2 hover:bg-error/10 hover:text-error transition-colors group"
          onClick={logoutUser}
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
            logout
          </span>
          <span className="font-mono-label uppercase">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default LogoutContainer;
