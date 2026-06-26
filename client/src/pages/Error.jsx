import { Link, useRouteError } from "react-router-dom";
import { AuthHeader, ThemeToggle } from "../components";

const Error = () => {
  const error = useRouteError();
  const status = error?.status || 500;
  const message = error?.statusText || error?.message || "Something Went Wrong";
  const isNotFound = status === 404;
  const code = isNotFound ? "404" : status === 500 ? "500" : "ERR";

  return (
    <div className="min-h-screen bg-background text-on-background font-body flex flex-col items-center justify-center p-6 selection:bg-primary-container selection:text-black dark:selection:text-white">
      <AuthHeader />

      <div className="max-w-md w-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-white brutalist-shadow-lg dark:shadow-[8px_8px_0px_0px_#ffffff] p-8 text-center transition-colors">
        <h1 className="text-[120px] leading-none font-black text-black dark:text-white select-none">
          {code}
        </h1>
        <span className="inline-block bg-primary-container border-2 border-black dark:border-white px-3 py-1 -mt-2 mb-6 rotate-2">
          <span className="font-mono-label uppercase text-black">
            {isNotFound ? "Page Not Found" : "Unexpected Error"}
          </span>
        </span>
        <p className="text-secondary dark:text-zinc-400 mb-6 transition-colors">
          {message}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <button className="btn-brutalist-action bg-primary-container w-full cursor-pointer">
              <span
                className="material-symbols-outlined"
                data-icon="arrow_back"
              >
                arrow_back
              </span>
              Back Home
            </button>
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className="mt-6 font-mono-label uppercase underline underline-offset-4 text-on-background dark:text-white"
      >
        JOBIFY RECRUITMENT SYSTEMS
      </Link>
    </div>
  );
};

export default Error;
