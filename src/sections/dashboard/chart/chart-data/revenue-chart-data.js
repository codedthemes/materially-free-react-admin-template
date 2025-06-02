export const revenueChartData = {
  options: {
    dataLabels: {
      enabled: false
    },
    yaxis: {
      min: 0,
      max: 100
    },
    labels: ['YouTube', 'Facebook', 'Twitter'],
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'inherit',
      labels: {
        colors: 'inherit'
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5
      }
    }
  },
  series: [1258, 975, 500]
};
