import { useAllJobsContext } from "../context/AllJobsContext";

const SearchFilterContainer = () => {
  const { data } = useAllJobsContext();

  const { jobs } = data;
  console.log(jobs);

  return <div>SearchFilterContainer</div>;
};

export default SearchFilterContainer;
