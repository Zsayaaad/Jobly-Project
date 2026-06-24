import StatCard from "../../components/StatCard";
import { useQuery } from "@tanstack/react-query";
import { statsQuery } from "./queries";

const Stats = () => {
  const { data } = useQuery(statsQuery);

  const { defaultStats } = data ?? {};

  return (
    <div className="flex-1 overflow-y-auto p-md md:p-container-margin">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-6xl mx-auto">
        <StatCard defaultStats={defaultStats} />
      </div>
    </div>
  );
};

export default Stats;
