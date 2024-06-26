import PropTypes from 'prop-types';
import React from 'react';

// mterial-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

// third party
import Chart from 'react-apexcharts';

// ==============================|| SUPPORT REQUEST CARD ||============================== //

const SupportRequestCard = ({ primary, secondary, color, chartData, footerData }) => {
  const theme = useTheme();
  return (
    <Card>
      <CardContent sz={{ pb: 0 }}>
        <Typography variant="h2" sx={{ color: color }}>
          {primary}
        </Typography>
        <Typography component="span" variant="subtitle1">
          {secondary}
        </Typography>
      </CardContent>
      <Chart options={chartData.options} series={chartData.series} type={chartData.type} height={chartData.height} />
      <Box sx={{ background: color }}>
        <Grid container justifyContent="space-around" sx={{ textAlign: 'center', p: theme.spacing(2), color: theme.palette.common.white }}>
          {footerData &&
            footerData.map((item, index) => (
              <Grid item key={item.value + index}>
                <Typography variant="h3" color="inherit">
                  {item.value}
                </Typography>
                <Typography variant="body2" sx={{ color: grey[400] }}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Card>
  );
};

SupportRequestCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  color: PropTypes.string,
  chartData: PropTypes.object,
  footerData: PropTypes.string,
  options: PropTypes.object,
  series: PropTypes.object,
  type: PropTypes.object,
  height: PropTypes.object
};

export default SupportRequestCard;
