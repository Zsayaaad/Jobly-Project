import { useState } from "react";
import { Form, Link } from "react-router-dom";

const Job = ({
  _id,
  company,
  position,
  jobStatus,
  jobType,
  jobLocation,
  daysOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="bg-surface-container-lowest border-2 border-on-background brutalist-shadow flex flex-col group hover:-translate-y-1 transition-transform">
        <header className="p-md border-b-2 border-on-background flex justify-between items-start">
          <div>
            <h3 className="text-h3 mb-xs">{position}</h3>
            <div className="flex flex-wrap gap-xs">
              <p className="text-mono-data text-on-surface-variant uppercase tracking-widest">
                {company} • {jobType}
              </p>
              <p className="text-mono-data text-on-surface-variant uppercase tracking-widest">
                • {jobLocation}
              </p>
            </div>
          </div>
          <span className={jobStatus}>{jobStatus}</span>
        </header>

        <div className="p-md bg-surface-container-low border-b-2 border-on-background grid grid-cols-2 gap-md">
          <div>
            <p className="text-mono-label text-on-surface-variant uppercase">
              Applicants
            </p>
            <p className="text-h3">24</p>
          </div>
          <div>
            <p className="text-mono-label text-on-surface-variant uppercase">
              Days Open
            </p>
            <p className="text-h3">{daysOpen}</p>
          </div>
        </div>

        <footer className="p-md flex justify-between items-center bg-surface-container-lowest">
          <div className="flex gap-md">
            <Link
              to={`../editJob/${_id}`}
              className="text-mono-label font-bold uppercase border-2 border-on-background px-md py-xs hover:bg-surface-container transition-colors brutalist-active"
            >
              Edit
            </Link>
            {/* We put action here in the Form cuz in delete we does not have Delete.jsx page.. we redirect to the same page */}
            {/* <Form method="post" action={`../deleteJob/${_id}`}>
              <button
                type="submit"
                className="text-mono-label font-bold uppercase border-2 border-on-background px-md py-xs hover:bg-error-container transition-colors brutalist-active"
              >
                Delete
              </button>
            </Form> */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-mono-label font-bold uppercase border-2 border-on-background px-md py-xs hover:bg-error-container transition-colors brutalist-active"
            >
              Delete
            </button>
          </div>
          {/* <Link className="text-mono-label font-bold uppercase underline decoration-2 underline-offset-4 hover:text-primary transition-colors">
          View Details
        </Link> */}
        </footer>
      </article>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-md">
          <div className="bg-surface-container-lowest border-4 border-on-background p-lg brutalist-shadow max-w-md w-full font-mono">
            <div className="flex justify-between items-center mb-md border-b-2 border-on-background pb-xs">
              <span className="text-mono-label font-bold text-red-500 uppercase tracking-widest animate-pulse">
                !! SYSTEM_WARNING !!
              </span>
            </div>

            <div className="mb-lg">
              <h4 className="text-h3 font-bold uppercase mb-sm">
                Confirm Action
              </h4>
              <p className="text-body text-on-surface-variant leading-relaxed">
                Are you sure you want to permanently delete the{" "}
                <span className="font-bold text-on-background">
                  "{position}"
                </span>{" "}
                position at{" "}
                <span className="font-bold text-on-background">{company}</span>?
              </p>
              <p className="text-[11px] text-red-500 uppercase mt-sm font-bold">
                This process cannot be undone.
              </p>
            </div>

            <div className="flex justify-end gap-md">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-mono-label font-bold uppercase border-2 border-on-background px-md py-xs hover:bg-surface-container transition-colors brutalist-active"
              >
                Cancel
              </button>

              {/* We put action here in the Form cuz in delete we does not have Delete.jsx page.. we redirect to the same page */}
              <Form
                method="post"
                action={`/dashboard/deleteJob/${_id}`}
                onSubmit={() => setIsModalOpen(false)}
              >
                <button
                  type="submit"
                  className="text-mono-label font-bold uppercase border-2 border-on-background px-md py-xs bg-red-500 text-white hover:bg-red-600 transition-colors brutalist-active"
                >
                  Execute_Delete
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
