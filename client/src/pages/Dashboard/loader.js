import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { userQuery } from "./queries";
export const dashboardLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/");
  }
};
