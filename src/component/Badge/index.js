import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import MuiBadge from '@mui/material/Badge';

// ==============================|| BADGE ||============================== //

const Badge = ({ color, ...rest }) => {
  return <MuiBadge {...rest} color={color} />;
};

Badge.propTypes = {
  color: PropTypes.string
};

export default Badge;
