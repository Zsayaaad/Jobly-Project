import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const allJobsLoader = async ({ request }) => {
  // Reading the new Params from the URL
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
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

    return { data, searchValues: params };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
