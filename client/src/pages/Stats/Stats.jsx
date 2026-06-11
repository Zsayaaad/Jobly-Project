import { useLoaderData } from "react-router-dom";
import StatCard from "../../components/StatCard";

const Stats = () => {
  const { defaultStats } = useLoaderData();

  console.log(defaultStats);

  return (
    <div className="flex-1 overflow-y-auto p-md md:p-container-margin">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-6xl mx-auto">
        <StatCard defaultStats={defaultStats} />
      </div>
    </div>
  );
};

export default Stats;
