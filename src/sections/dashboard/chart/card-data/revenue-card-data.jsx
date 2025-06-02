// chart data
import { revenueChartData } from '../chart-data/revenue-chart-data';

export const revenueCardData = {
  title: 'Total Revenue',
  chartData: revenueChartData,
  bottomData: [
    { label: 'Youtube', value: '+16.85', color: 'primary.main' },
    { label: 'Facebook', value: '+45.36', color: 'success.main' },
    { label: 'Twitter', value: '-50.69', color: 'warning.main' }
  ]
};
