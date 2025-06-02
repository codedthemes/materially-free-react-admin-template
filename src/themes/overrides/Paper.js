// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| OVERRIDES - PAPER ||============================== //

export default function Paper(theme) {
  const shadowColor = theme.palette.text.primary;

  return {
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: {
          boxShadow: `0 4px 6px -2px ${alpha(shadowColor, 0.12)}, 0 2px 2px -1px ${alpha(shadowColor, 0.05)}`
        },
        rounded: {
          borderRadius: 10
        }
      }
    }
  };
}
