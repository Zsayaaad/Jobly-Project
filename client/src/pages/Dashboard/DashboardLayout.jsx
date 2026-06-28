import { Link, Outlet, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import {
  Loading,
  LogoutContainer,
  Sidebar,
  ThemeToggle,
} from "../../components";
import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { userQuery } from "./queries";

const DashboardLayout = ({ queryClient }) => {
  // const { user } = useLoaderData();
  const { data } = useQuery(userQuery);
  const { user } = data ?? {};

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  // State for Desktop Sidebar Collapse
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // State for Mobile Sidebar Drawer
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [isAuthError, setIsAuthError] = useState(false);

  const toggleSidebar = () => {
    // Check if we are on a mobile device (Tailwind's lg breakpoint is 1024px)
    if (window.innerWidth < 1024) {
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  //  on tablet and mobile only => when i press on any NavLinks the sidebar closed automatically
  const closeMobileSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsMobileSidebarOpen(false);
    }
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    queryClient.invalidateQueries();
    toast.success("Logout successful");
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }

      return Promise.reject(error);
    },
  );

  useEffect(() => {
    if (!isAuthError) return;

    logoutUser();
  }, [isAuthError]);

  return (
    <DashboardContext.Provider
      value={{
        user,
        isMobileSidebarOpen,
        isSidebarCollapsed,
        toggleSidebar,
        closeMobileSidebar,
        logoutUser,
      }}
    >
      <div className="bg-background font-body text-on-background min-h-screen">
        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${isMobileSidebarOpen ? "block" : "hidden"}`}
          onClick={() => setIsMobileSidebarOpen(false)}
        />

        {/* TopNavBar Shell */}
        <header
          className={`sticky top-0 z-30 flex justify-between items-center px-6 lg:px-8 py-4 bg-surface-container-lowest border-b-4 border-on-surface transition-all duration-300 ease-in-out
        ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}`}
        >
          <div className="flex items-center gap-4">
            <button
              className={`p-2 hover:bg-surface-container border-2 border-transparent hover:border-on-surface transition-all flex items-center justify-center brutalist-active`}
              onClick={toggleSidebar}
            >
              <span className="material-symbols-outlined">
                {isSidebarCollapsed ? "menu" : "menu_open"}
              </span>
            </button>
            <Link to="/">
              <span className="font-h1 text-2xl lg:text-3xl font-black italic tracking-tighter text-on-surface">
                JOBLY
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-1 lg:gap-4">
              <ThemeToggle />
              <LogoutContainer />
            </div>
          </div>
        </header>

        {/* SideNavBar Shell */}
        <Sidebar />

        <div
          className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}`}
        >
          <div className="p-6 lg:p-8">
            {isPageLoading ? <Loading inline /> : <Outlet context={{ user }} />}
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
