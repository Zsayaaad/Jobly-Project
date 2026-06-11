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
  EditJob,
} from "./pages";

import { registerAction } from "./pages/Register/action";
import { loginAction } from "./pages/Login/action";
import { dashboardLoader } from "./pages/Dashboard/loader";
import { addJobAction } from "./pages/AddJob/action";
import { allJobsLoader } from "./pages/AllJobs/loader";
import { editJobLoader } from "./pages/EditJob/loader";
import { editJobAction } from "./pages/EditJob/action";
import { deleteJobAction } from "./pages/DeleteJob/action";
import { adminLoader } from "./pages/Admin/loader";
import { profileAction } from "./pages/Profile/action";
import { statsLoader } from "./pages/Stats/loader";

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
            loader: statsLoader,
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
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "editJob/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "deleteJob/:id",
            action: deleteJobAction,
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
