import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import SalesLineCard from './card/SalesLineCard';
import TotalLineCard from './card/TotalLineCard';
import SeoChartCard from './card/SeoChartCard';
import AnalyticsChartCard from './card/AnalyticsChartCard';
import MarketChartCard from './card/MarketChartCard';
import RevenuChartCard from './card/RevenuChartCard';
import ConversionsChartCard from './card/ConversionsChartCard';
import SatifactionChartCard from './card/SatifactionChartCard';

import SalesLineCardChart from './chart/sale-chart-1';

import TotalLineCardChart1 from './chart/total-value-gragh-1';
import TotalLineCardChart2 from './chart/total-value-gragh-2';
import TotalLineCardChart3 from './chart/total-value-gragh-3';

import SeoChartCardData1 from './chart/seo-chart-1';
import SeoChartCardData2 from './chart/seo-chart-2';
import SeoChartCardData3 from './chart/seo-chart-3';

import SeoChartCardData4 from './chart/seo-chart-4';
import SeoChartCardData5 from './chart/seo-chart-5';
import SeoChartCardData6 from './chart/seo-chart-6';
import SeoChartCardData7 from './chart/seo-chart-7';
import SeoChartCardData8 from './chart/seo-chart-8';
import SeoChartCardData9 from './chart/seo-chart-9';

import MarketChartCardData from './chart/market-chart';
import RevenuChartCardData from './chart/revenu-chart';
import AnalyticsChartCardData from './chart/percentage-chart';
import ConversionsChartCardData from './chart/conversions-chart';
import SatifactionChartCardData from './chart/satisfaction-chart';

// assets
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';

// ==============================|| CHART ||============================== //

const Chart = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumb title="Widget Chart">
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              Widget
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Chart
            </Typography>
          </Breadcrumb>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing} alignItems="center">
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard chartData={TotalLineCardChart1} value={4000} title="Total Sales" percentage="42%" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={TotalLineCardChart2}
            bgColor={theme.palette.error.light}
            value={2500}
            title="Total Comment"
            percentage="15%"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={TotalLineCardChart3}
            bgColor={theme.palette.success.light}
            value={2500}
            title="Total Status"
            percentage="95%"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={TotalLineCardChart3}
            bgColor={theme.palette.warning.main}
            value={12500}
            title="Total Visitors"
            percentage="75%"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={7}>
          <MarketChartCard chartData={MarketChartCardData} />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <RevenuChartCard chartData={RevenuChartCardData} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={SeoChartCardData4} value="798" title="User Analytics" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={SeoChartCardData5} value="486" title="Session Timeout" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={SeoChartCardData6} value="9, 454" title="Page View" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={SeoChartCardData7} value="7.15" title="Page / Session" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={SeoChartCardData8} value="04:30" title="Avg. Session Time" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={SeoChartCardData9} value="1.55%" title="Bounce Rate" />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <SalesLineCard
            chartData={SalesLineCardChart}
            bgColor={theme.palette.error.main}
            title="Sales Per Day"
            percentage="3%"
            icon={<TrendingDownIcon />}
            footerData={[
              {
                value: '$4230',
                label: 'Total Revenue'
              },
              {
                value: '321',
                label: 'Today Sales'
              }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SalesLineCard
            chartData={SalesLineCardChart}
            title="Order Per Month"
            percentage="28%"
            icon={<TrendingDownIcon />}
            footerData={[
              {
                value: '1695',
                label: 'Total Orders'
              },
              {
                value: '321',
                label: 'Today Orders'
              }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <AnalyticsChartCard
            chartData={AnalyticsChartCardData}
            title="Page view by device"
            dropData={{
              title: 'Weekly',
              options: [
                {
                  value: 1,
                  label: '1 Week'
                },
                {
                  value: 104,
                  label: '2 Years'
                },
                {
                  value: 12,
                  label: '3 Monthes'
                }
              ]
            }}
            listData={[
              {
                color: theme.palette.primary.main,
                icon: <ImportantDevicesIcon color="inherit" />,
                value: 66.6,
                percentage: 2,
                state: 1
              },
              {
                color: theme.palette.success.main,
                icon: <PhonelinkLockIcon color="inherit" />,
                value: 29.7,
                percentage: 3,
                state: 1
              },
              {
                color: theme.palette.error.main,
                icon: <TabletAndroidIcon color="inherit" />,
                value: 32.8,
                percentage: 8,
                state: 0
              },
              {
                color: theme.palette.warning.main,
                icon: <TabletAndroidIcon color="inherit" />,
                value: 50,
                percentage: 1.5,
                state: 0
              }
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <SeoChartCard chartData={SeoChartCardData1} value="$16, 756" title="Visits" icon={<ArrowDropDownIcon color="error" />} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SeoChartCard chartData={SeoChartCardData2} value="49.54%" title="Bounce Rate" icon={<ArrowDropUpIcon color="primary" />} />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <SeoChartCard chartData={SeoChartCardData3} value="1, 62,564" title="Products" icon={<ArrowDropDownIcon color="error" />} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <ConversionsChartCard chartData={ConversionsChartCardData} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SatifactionChartCard chartData={SatifactionChartCardData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Chart;
