// ==============================|| OVERRIDES - CARD HEADER ||============================== //

export default function CardHeader(theme) {
  return {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 24
        },
        title: {
          ...theme.typography.h6,
          color: theme.palette.text.dark
        }
      }
    }
  };
}
