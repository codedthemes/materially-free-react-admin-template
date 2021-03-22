import value from '../../../../assets/scss/_themes-vars.scss';

export default {
    type: 'area',
    height: 125,
    options: {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: [value.success],
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: (seriesName) => 'Ticket ',
                },
            },
            marker: {
                show: false,
            },
        },
    },
    series: [
        {
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0],
        },
    ],
};
