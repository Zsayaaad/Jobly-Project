import { Form, useLoaderData } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitButton } from "../../components";
import { JOB_STATUS, JOB_TYPE } from "../../../../utils/constants";

const EditJob = () => {
  const { job } = useLoaderData();

  return (
    <main className="p-lg md:p-xl grow flex justify-center bg-background min-h-screen">
      <div className="w-full max-w-2xl">
        <div className="mb-lg">
          <h2 className="text-h2 uppercase leading-none">Edit Job</h2>
        </div>

        <Form method="post" className="space-y-xl">
          {/* Section: Core Details */}
          <div className="border-4 border-on-background bg-surface-container-lowest p-lg space-y-lg">
            <div className="flex items-center gap-sm pb-md border-b-2 border-outline-variant">
              <span className="material-symbols-outlined text-primary">
                info
              </span>
              <span className="text-mono-label uppercase tracking-widest font-black">
                Primary Identification
              </span>
            </div>

            <div className="space-y-md">
              <FormRow
                type="text"
                name="position"
                placeholder="e.g. Senior Systems Architect"
                labelText="Position"
                defaultValue={job.position}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <FormRow
                  type="text"
                  name="company"
                  placeholder="Nexus Tech"
                  labelText="Company Name"
                  defaultValue={job.company}
                />

                <FormRow
                  type="text"
                  name="jobLocation"
                  placeholder="e.g. New York, NY"
                  labelText="Job Location"
                  defaultValue={job.jobLocation}
                />

                <FormRowSelect
                  name="jobType"
                  labelText="Job Type"
                  defaultValue={job.jobType}
                  list={JOB_TYPE}
                />

                <FormRowSelect
                  name="jobStatus"
                  labelText="Job Status"
                  defaultValue={job.jobStatus}
                  list={JOB_STATUS}
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-md">
            <SubmitButton text="Submit" />
          </div>
        </Form>
      </div>
    </main>
  );
};

export default EditJob;
