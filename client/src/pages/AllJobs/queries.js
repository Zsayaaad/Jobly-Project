import customFetch from "../../utils/customFetch";

export const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;

  return {
    queryKey: [
      "jobs",
      search ?? "",
      jobStatus ?? "all",
      jobType ?? "all",
      sort ?? "newest",
      page ?? 1,
    ],
    queryFn: async () => {
      // Request is sent to the API with the new parameters:
      const { data } = await customFetch.get("/jobs", {
        params,
      });

      const now = Date.now();
      const jobs = data.jobs.map((job) => ({
        ...job,
        daysOpen: Math.max(
          0,
          Math.floor(
            (now - new Date(job.createdAt).getTime()) / (1000 * 60 * 60 * 24),
          ),
        ),
      }));

      data.jobs = jobs;

      return data;
    },
  };
};
