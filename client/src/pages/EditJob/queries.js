import customFetch from "../../utils/customFetch";

export const singleJobQuery = (id) => {
  return {
    queryKey: ["job", id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);

      return data;
    },
  };
};
