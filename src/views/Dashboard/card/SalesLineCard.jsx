import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| SALES LINE CARD ||============================== //

const SalesLineCard = ({ bgColor, chartData, footerData, icon, title, percentage }) => {
  const theme = useTheme();

  let footerHtml;

  if (footerData) {
    footerHtml = footerData.map((item, index) => {
      return (
        <Grid item key={index}>
          <Box mt={3} mb={3} p={1}>
            <Grid container direction="column" spacing={1} alignItems="center">
              <Typography variant="h4">{item.value}</Typography>
              <Typography variant="subtitle2" color="secondary">
                {item.label}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      );
    });
  }

  return (
    <Card>
      <CardContent sx={{ padding: 0, paddingBottom: '0 !important' }}>
        <Box bgcolor={bgColor ? bgColor : theme.palette.primary.main} p={3}>
          <Grid container direction="column" spacing={1}>
            <Grid item container justifyContent="space-between" alignItems="center">
              {title && (
                <Grid item>
                  <Typography variant="subtitle1" color="#fff">
                    {title}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Grid container alignItems="center">
                  {icon && (
                    <Box component="span" mr={2} color="#fff">
                      {icon}
                    </Box>
                  )}
                  {percentage && (
                    <Typography variant="subtitle1" color="#fff">
                      {percentage}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            {chartData && (
              <Grid item>
                <Chart {...chartData} />
              </Grid>
            )}
          </Grid>
        </Box>
        {footerData && (
          <Grid container justifyContent="space-around" alignItems="center">
            {footerHtml}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

SalesLineCard.propTypes = {
  bgColor: PropTypes.string,
  chartData: PropTypes.object,
  footerData: PropTypes.array,
  icon: PropTypes.object,
  title: PropTypes.string,
  percentage: PropTypes.string
};

export default SalesLineCard;
