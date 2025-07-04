import React from "react";
import { MetricCard } from "../types/cards";

type Props = {
  card: MetricCard;
};
const MetricCards: React.FC<Props> = ({ card }) => {
  const { id, title, value, icon, trend } = card;

  return (
    <div className=" basis-64 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
          {title}
        </p>
        <p className="text-2xl">{icon}</p>
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>

      {trend && (
        <div className="flex items-center mt-3 text-sm">
          {trend.type === "negative" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-500 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
          )}

          {trend.type === "positive" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-green-500 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
          )}

          <span
            className={`${
              trend.type === "positive"
                ? "text-green-500"
                : trend.type === "negative"
                ? "text-red-500"
                : "text-gray-500"
            } font-semibold`}
          >
            {trend.percentage}
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">
            {trend.description}
          </span>
        </div>
      )}
    </div>
  );
};

export default MetricCards;
