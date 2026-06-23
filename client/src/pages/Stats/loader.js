import customFetch from "../../utils/customFetch";

export const statsLoader = async () => {
  // try {
  //   const { data } = await customFetch("/jobs/statss");
  //   return data;
  // } catch (error) {
  //   toast.error(error?.response?.data?.msg);
  //   return error;
  // }
  const { data } = await customFetch("/jobs/statss");
  return data;
};
