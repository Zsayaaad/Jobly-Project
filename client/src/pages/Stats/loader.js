import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const statsLoader = async () => {
  try {
    const { data } = await customFetch("/jobs/stats");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
