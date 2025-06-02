// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| DEFAULT THEME - SHADOWS ||============================== //

export default function Shadows(theme) {
  const secondaryDarker = theme.palette.secondary.darker;
  console.log('secondaryDarker:', secondaryDarker);
  return {
    posterShadow: `0px 16px 32px ${alpha(secondaryDarker, 0.15)}, 0px 8px 16px ${alpha(secondaryDarker, 0.1)}`
  };
}
