import { useLoaderData } from "react-router-dom";
import {
  JobsContainer,
  PaginationBtnContainer,
  SearchFilterContainer,
} from "../../components";
import { AllJobsContext } from "../../context/AllJobsContext";

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  const { totalJobs, numOfPages } = data;

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

        {/* Number Of Pages Title */}
        <h5 className="text-h3 mb-lg">
          {totalJobs} job{totalJobs > 1 && "s"} found
        </h5>

        <JobsContainer />

        {numOfPages > 1 && <PaginationBtnContainer />}
      </main>
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
