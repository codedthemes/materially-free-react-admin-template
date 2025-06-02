import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import ReactApexChart from 'react-apexcharts';

// project imports
import MainCard from 'components/cards/MainCard';

// ==============================|| REVENUE CHART CARD ||============================== //

export default function RevenuChartCard({ title, bottomData, chartData }) {
  const theme = useTheme();

  const onlySM = useMediaQuery(theme.breakpoints.only('sm'));

  const [chartDatas, setChartDatas] = useState(chartData);

  const primaryMain = theme.palette.primary.main;
  const infoMain = theme.palette.info.main;
  const errorMain = theme.palette.error.main;
  const divider = theme.palette.background.paper;

  useEffect(() => {
    setChartDatas((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        tooltip: {
          theme: 'light'
        },
        theme: {
          mode: 'light'
        },
        colors: [errorMain, primaryMain, infoMain],
        stroke: {
          colors: divider
        }
      }
    }));
  }, [errorMain, primaryMain, infoMain, divider]);

  return (
    <MainCard title={title}>
      <Grid container spacing={2} direction={onlySM ? 'row' : 'column'}>
        <Grid size={{ xs: 12, sm: 7, md: 12 }} sx={{ '.apexcharts-active': { color: 'common.white' } }}>
          <ReactApexChart {...chartDatas} type="donut" height={194} />
        </Grid>
        <Grid size={12} sx={{ display: { md: 'block', sm: 'none' } }}>
          <Divider />
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 12 }}>
          <Stack direction={onlySM ? 'column' : 'row'} sx={{ gap: 3, justifyContent: 'space-around', alignItems: 'center' }}>
            {bottomData?.map((data, index) => (
              <Stack key={index}>
                <Typography variant="h6">{data.label}</Typography>
                <Typography variant="subtitle1" sx={{ color: data.color }}>
                  {data.value}%
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
}

RevenuChartCard.propTypes = { title: PropTypes.string, bottomData: PropTypes.object, chartData: PropTypes.any };
