import { allJobsQuery } from "./queries";

export const allJobsLoader =
  (queryClient) =>
  async ({ request }) => {
    // Reading the new Params from the URL
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allJobsQuery(params));

    return { searchValues: params };
  };
