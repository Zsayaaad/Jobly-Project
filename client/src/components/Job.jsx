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
  return (
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
          <Form>
            <button
              type="submit"
              className="text-mono-label font-bold uppercase border-2 border-on-background px-md py-xs hover:bg-error-container transition-colors brutalist-active"
            >
              Delete
            </button>
          </Form>
        </div>
        <Link className="text-mono-label font-bold uppercase underline decoration-2 underline-offset-4 hover:text-primary transition-colors">
          View Details
        </Link>
      </footer>
    </article>
  );
};

export default Job;
