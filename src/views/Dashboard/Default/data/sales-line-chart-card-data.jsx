// assets
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// chart data
import { salesLineChart } from 'sections/dashboard/chart/chart-data/sales-line-chart';

export const salesLineCardData = {
  chartData: salesLineChart,
  footerData: [
    {
      value: '$4230',
      label: 'Total Revenue'
    },
    {
      value: '321',
      label: 'Today Sales'
    }
  ],
  title: 'Sales Per Day',
  percentage: '3%',
  icon: TrendingDownIcon,
  bgColor: 'primary.main'
};
