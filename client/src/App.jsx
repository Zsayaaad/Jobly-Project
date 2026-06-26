import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
import { Loading } from "./components";
import ErrorElement from "./components/ErrorElement";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
        action: loginAction(queryClient),
      },

      {
        path: "dashboard",
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
        HydrateFallback: Loading,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction(queryClient),
          },
          {
            path: "stats",
            element: <Stats />,
            // This instance(queryClient) has the methods which we can also use to fetch the data with React query
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "allJobs",
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "editJob/:id",
            element: <EditJob />,
            loader: editJobLoader(queryClient),
            action: editJobAction(queryClient),
          },
          {
            path: "deleteJob/:id",
            action: deleteJobAction(queryClient),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
