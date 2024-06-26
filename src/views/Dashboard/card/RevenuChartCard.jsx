import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography, useMediaQuery } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| REVENUE CHART CARD ||============================== //

const RevenuChartCard = ({ chartData }) => {
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      <CardHeader
        title={
          <Typography t="div" className="card-header">
            Total Revenue
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
          <Grid item xs={12} sm={7} md={12}>
            <Chart {...chartData} />
          </Grid>
          <Grid item sx={{ display: { md: 'block', sm: 'none' } }}>
            <Divider />
          </Grid>
          <Grid
            item
            container
            direction={matchDownMd && !matchDownXs ? 'column' : 'row'}
            justifyContent="space-around"
            alignItems="center"
            xs={12}
            sm={5}
            md={12}
          >
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6">Youtube</Typography>
                <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
                  + 16.85%
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6">Facebook</Typography>
                <Box color={theme.palette.success.main}>
                  <Typography variant="subtitle1" color="inherit">
                    +45.36%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6">Twitter</Typography>
                <Typography variant="subtitle1" sx={{ color: theme.palette.warning.main }}>
                  - 50.69%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

RevenuChartCard.propTypes = {
  chartData: PropTypes.object
};

export default RevenuChartCard;
