import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddJob,
  AllJobs,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
  Admin,
} from "./pages";

import { registerAction } from "./pages/Register/action";
import { loginAction } from "./pages/Login/action";
import { dashboardLoader } from "./pages/Dashboard/loader";
import { addJobAction } from "./pages/AddJob/action";
import { allJobsLoader } from "./pages/AllJobs/loader";

const HydrateFallback = () => <div />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    HydrateFallback,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        HydrateFallback,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "allJobs",
            element: <AllJobs />,
            loader: allJobsLoader,
            HydrateFallback,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
