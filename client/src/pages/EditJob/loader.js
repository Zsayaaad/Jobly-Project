import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { singleJobQuery } from "./queries";

export const editJobLoader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));

      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/dashboard/allJobs");
    }
  };
