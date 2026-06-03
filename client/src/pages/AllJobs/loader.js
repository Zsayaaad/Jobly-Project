import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const allJobsLoader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");

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

    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
