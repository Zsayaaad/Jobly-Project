import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

export const addJobAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post("/jobs", data);
      queryClient.invalidateQueries(["jobs"]);

      toast.success("Job added Successfully");
      return redirect("/dashboard/allJobs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
