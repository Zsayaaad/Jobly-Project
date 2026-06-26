import { statsQuery } from "./queries";

export const statsLoader = (queryClient) => async () => {
  // try {
  //   const { data } = await customFetch.get("/jobs/stats");
  //   return data;
  // } catch (error) {
  //   toast.error(error?.response?.data?.msg);
  //   return error;
  // }

  /**
   * ensureQueryData is an asynchronous function that can be used to get an existing query's cached data.
   * If the query does not exist, queryClient.fetchQuery will be called and its results returned.
   */
  const data = await queryClient.ensureQueryData(statsQuery);
  // This return we can remove it cuz we do not get data from the loader with useLoaderData hook
  // we actually get the data from useQuery inside Stats component
  // but return here guarantees the Loader waits for the data to actually finish before taking the user to the page.
  return data;
};
