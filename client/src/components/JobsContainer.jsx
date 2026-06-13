import { useAllJobsContext } from "../context/AllJobsContext";
import Job from "./Job";

const JobsContainer = () => {
  const { data } = useAllJobsContext();

  const { jobs } = data;

  if (jobs.length === 0) {
    return <h2 className="text-h2 mt-40">No Jobs to display...</h2>;
  }

  return (
    /* Job Cards Grid */
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
      {jobs.map((job) => (
        <Job
          key={job._id}
          {...job} // pass all of props
        />
      ))}
    </div>
  );
};

export default JobsContainer;
