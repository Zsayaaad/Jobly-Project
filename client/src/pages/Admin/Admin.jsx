import { useLoaderData } from "react-router-dom";

const Admin = () => {
  const { users, jobs, jobStatusCounts } = useLoaderData();

  return (
    <main className="flex-1 p-12 overflow-y-auto h-screen">
      {/* <!-- Header Section --> */}
      <header className="flex flex-col md:flex-row mb-12">
        <div>
          <h2 className="font-h1 text-5xl font-black uppercase tracking-tighter mb-2">
            Admin Overview
          </h2>
          <p className="font-mono-label text-sm uppercase tracking-widest text-zinc-600 font-bold">
            System Status &amp; User Growth Analytics
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
        {/* Card 1: Total Users */}
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Total Users</span>
            <span className="material-symbols-outlined text-3xl text-on-surface-variant">
              person_add
            </span>
          </div>
          <div>
            <span className="stat-number">{users}</span>
            <div className="flex items-center gap-xs">
              <span className="stat-badge">+12% THIS MONTH</span>
              <span className="material-symbols-outlined text-primary text-xl">
                trending_up
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Total Jobs */}
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-card-title">Total Jobs</span>
            <span className="material-symbols-outlined text-3xl text-on-surface-variant">
              work
            </span>
          </div>
          <div>
            <span className="stat-number">{jobs}</span>
            <div className="stat-legend">
              <div className="stat-legend-item">
                <span className="stat-legend-dot Active"></span>
                <span>{jobStatusCounts.Active} ACTIVE</span>
              </div>
              <div className="stat-legend-item">
                <span className="stat-legend-dot Closed"></span>
                <span>{jobStatusCounts.Closed} CLOSED</span>
              </div>
              <div className="stat-legend-item">
                <span className="stat-legend-dot Urgent"></span>
                <span>{jobStatusCounts.Urgent} URGENT</span>
              </div>
              <div className="stat-legend-item">
                <span className="stat-legend-dot Pending"></span>
                <span>{jobStatusCounts.Pending} PENDING</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
