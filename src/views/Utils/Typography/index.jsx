import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
  return (
    <>
      <Breadcrumb title="Typography">
        <MuiTypography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </MuiTypography>
        <MuiTypography variant="subtitle2" color="primary" className="link-breadcrumb">
          Typography
        </MuiTypography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <MuiTypography component="span" className="card-header">
                  Basic Typography
                </MuiTypography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <MuiTypography variant="h1" gutterBottom>
                    h1. Heading
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="h2" gutterBottom>
                    h2. Heading
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="h3" gutterBottom>
                    h3. Heading
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="h4" gutterBottom>
                    h4. Heading
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="h5" gutterBottom>
                    h5. Heading
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="h6" gutterBottom>
                    h6. Heading
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="button" display="block" gutterBottom>
                    button text
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="caption" display="block" gutterBottom>
                    caption text
                  </MuiTypography>
                </Grid>
                <Grid item>
                  <MuiTypography variant="overline" display="block" gutterBottom>
                    overline text
                  </MuiTypography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Typography;
