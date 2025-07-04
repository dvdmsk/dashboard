export type Trend = 'positive' | 'negative';

export interface MetricCard {
  id: string,
    title: string,
    value: string,
    icon: string,
    trend: {
      type: Trend,
      percentage: string,
      description: string
    }
}