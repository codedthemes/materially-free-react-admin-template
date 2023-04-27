import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

// ==============================|| BREADCRUMB ||============================== //

const Breadcrumbs = ({ title, divider, isCard, ...rest }) => {
  const theme = useTheme();

  return (
    <Card sx={!isCard ? { background: 'transparent', boxShadow: 'none', border: 'none' } : { padding: theme.spacing(3) }}>
      <CardContent sx={{ pl: 0, pt: 0, pb: '0 !important' }}>
        <MuiBreadcrumbs {...rest} />
        {title && (
          <Typography sx={{ fontWeight: 500, mt: theme.spacing(1) }} variant="h3">
            {title}
          </Typography>
        )}
        {divider === false && !isCard && <Box sx={{ mb: theme.spacing(3) }} />}
        {divider !== false && <Divider sx={{ mb: theme.spacing(3), mt: theme.spacing(2) }} />}
      </CardContent>
    </Card>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  divider: PropTypes.bool,
  isCard: PropTypes.string
};

export default Breadcrumbs;
