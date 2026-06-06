import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

export const adminLoader = async () => {
  try {
    const { data } = await customFetch.get("/users/admin/app-stats");

    console.log(data);

    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};
