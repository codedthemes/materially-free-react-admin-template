import value from 'assets/scss/_themes-vars.scss';
// eslint-disable-next-line
export default {
  height: 228,
  type: 'donut',
  options: {
    dataLabels: {
      enabled: false
    },
    labels: ['Youtube', 'Facebook', 'Twitter'],
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'inherit',
      labels: {
        colors: 'inherit'
      }
    },
    itemMargin: {
      horizontal: 10,
      vertical: 10
    },
    colors: [value.error, value.primary, value.info]
  },
  series: [1258, 975, 500]
};
