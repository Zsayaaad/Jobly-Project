import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

export const editJobAction =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.put(`/jobs/${params.id}`, data);

      queryClient.invalidateQueries(["jobs"]);

      toast.success("Job edited successfully");
      return redirect("/dashboard/allJobs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
