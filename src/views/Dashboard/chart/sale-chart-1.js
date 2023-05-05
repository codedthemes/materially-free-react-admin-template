const chartData = {
  type: 'line',
  height: 115,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],

    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 20,
      max: 100
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: () => 'Sales/Order Per Day'
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'series1',
      data: [55, 35, 75, 25, 90, 50]
    }
  ]
};

export default chartData;
