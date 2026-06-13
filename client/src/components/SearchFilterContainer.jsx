import { Form, Link, useSubmit } from "react-router-dom";
import { useAllJobsContext } from "../context/AllJobsContext";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants";

const SearchFilterContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

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
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormRowSelect
            labelText="Status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            labelText="Job Type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            name="sort"
            list={Object.values(JOB_SORT_BY)}
            defaultValue={sort}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <Link
            to="/dashboard/allJobs"
            className="bg-primary-container text-black border-2 border-on-background p-sm brutalist-shadow text-mono-label uppercase font-bold brutalist-active flex items-center justify-center md:col-start-4"
          >
            Reset Search Values
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default SearchFilterContainer;
