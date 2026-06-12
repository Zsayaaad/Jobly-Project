import { Form, Link } from "react-router-dom";
import { useAllJobsContext } from "../context/AllJobsContext";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import SubmitButton from "./SubmitButton";

const SearchFilterContainer = () => {
  const { data } = useAllJobsContext();

  const { jobs } = data;
  console.log(jobs);

  /* Search & Filter Container */
  return (
    <section className="bg-surface-container-lowest border-2 border-on-background brutalist-shadow-lg p-lg mb-xl">
      <Form>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter items-end">
          <FormRow
            name="search"
            labelText="Search Position"
            dataIcon="search"
            type="search"
            placeholder="e.g. Lead Designer"
            defaultValue="w"
          />

          <FormRowSelect
            labelText="Status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
          />

          <FormRowSelect
            labelText="Job Type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
          />

          <FormRowSelect
            name="sort"
            list={Object.values(JOB_SORT_BY)}
            defaultValue="newest"
          />

          <Link className="btn-auth-submit" to="/dashboard/allJobs">
            Reset Search Values
          </Link>
          {/* TEMP !!!! */}
          <SubmitButton text="Apply Filters" />
          {/* <button className="bg-primary-container text-on-background border-2 border-on-background p-sm brutalist-shadow text-mono-label uppercase font-bold brutalist-active flex items-center justify-center md:col-start-4">
            Apply Filters
          </button> */}
        </div>
      </Form>
    </section>
  );
};

export default SearchFilterContainer;
