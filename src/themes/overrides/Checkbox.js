// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary
        },
        indeterminate: {
          color: theme.palette.text.primary
        }
      }
    }
  };
}
