import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { redirect } from "react-router-dom";

export const profileAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const file = formData.get("avatar");

    if (file && file.size > 1024 * 1024) {
      toast.error("The image must not exceed 1 MB.");
      return null;
    }

    try {
      await customFetch.put("/users/update-user", formData);
      queryClient.invalidateQueries(["user"]);

      toast.success("Profile updated successfully");
      return redirect("/dashboard/profile");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };
