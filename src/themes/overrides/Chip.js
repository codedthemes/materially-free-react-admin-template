// ==============================|| OVERRIDES - CHIP ||============================== //

export default function Chip(theme) {
  return {
    MuiChip: {
      styleOverrides: {
        avatar: { color: theme.palette.background.paper },
        icon: { color: theme.palette.text.primary }
      }
    }
  };
}
