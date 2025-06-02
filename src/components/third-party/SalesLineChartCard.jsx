import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third party
import ReactApexChart from 'react-apexcharts';

// project imports
import MainCard from 'components/cards/MainCard';

// ==============================|| SALES LINE CHART CARD ||============================== //

export default function SalesLineChartCard({ bgColor, chartData, footerData, icon: Icon, title, percentage }) {
  const theme = useTheme();

  const [chartDatas, setChartDatas] = useState(chartData);
  const chartColor = theme.palette.common.white;

  useEffect(() => {
    setChartDatas((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        tooltip: {
          theme: 'light'
        },
        colors: [chartColor]
      }
    }));
  }, [chartColor]);

  return (
    <MainCard
      content={false}
      actions={
        <Stack direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center', width: 1 }}>
          {footerData.map((data, index) => (
            <Stack key={index} sx={{ alignItems: 'center' }}>
              <Typography variant="h4">{data.value}</Typography>
              <Typography variant="subtitle2">{data.label}</Typography>
            </Stack>
          ))}
        </Stack>
      }
    >
      <Box sx={{ bgcolor: bgColor, p: 3 }}>
        <Stack sx={{ gap: 1 }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
              {title}
            </Typography>
            <Stack direction="row" sx={{ gap: 1, alignItems: 'flex-start' }}>
              {Icon && <Icon sx={{ color: 'common.white' }} />}
              <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
                {percentage}
              </Typography>
            </Stack>
          </Stack>
          <ReactApexChart options={chartDatas.options} series={chartDatas.series} type="line" height={115} />
        </Stack>
      </Box>
    </MainCard>
  );
}

SalesLineChartCard.propTypes = {
  bgColor: PropTypes.string,
  chartData: PropTypes.any,
  footerData: PropTypes.object,
  icon: PropTypes.any,
  title: PropTypes.string,
  percentage: PropTypes.string
};
