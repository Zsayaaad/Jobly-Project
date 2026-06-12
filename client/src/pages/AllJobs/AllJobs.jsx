import { useLoaderData } from "react-router-dom";
import { JobsContainer, SearchFilterContainer } from "../../components";
import { AllJobsContext } from "../../context/AllJobsContext";

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <main className="flex-1 p-lg md:p-xl bg-background min-h-screen">
        {/* Page Header */}
        <header className="flex justify-between items-center mb-xl">
          <div>
            <h2 className="text-h1">All Jobs</h2>
            <p className="text-body text-on-surface-variant mt-sm">
              Manage and track your active job listings and candidate pipelines.
            </p>
          </div>
        </header>
        <SearchFilterContainer />
        <JobsContainer />
      </main>
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
