import { MetricCard } from "../types/cards";

export const metricCardsData: MetricCard[] = [
  {
    id: "m1",
    title: "Total Revenue",
    value: "₴12,345,678",
    icon: "💸",
    trend: {
      type: "positive",
      percentage: "12%",
      description: "from last month",
    },
  },
  {
    id: "m2",
    title: "New Users",
    value: "4,567",
    icon: "👤",
    trend: {
      type: "positive",
      percentage: "8.5%",
      description: "from last week",
    },
  },
  {
    id: "m3",
    title: "Average Check",
    value: "₴450.75",
    icon: "🛒",
    trend: {
      type: "negative",
      percentage: "2.1%",
      description: "from yesterday",
    },
  },
];