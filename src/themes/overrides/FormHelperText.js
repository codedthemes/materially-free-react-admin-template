// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| OVERRIDES - FORM HELPER TEXT ||============================== //

export default function FormHelperText(theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: alpha(theme.palette.text.secondary, 0.73)
        }
      }
    }
  };
}
