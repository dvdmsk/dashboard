import React from "react";
import { metricCardsData } from "../api/cards";
import MetricCards from "../componets/MetricCards";
import { MetricCard } from "../types/cards";

const Overview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Overview</h2>

      <div className="grid gap-4 md:flex">
        {metricCardsData.map((el) => (
          <MetricCards card={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
