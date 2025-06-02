// ==============================|| OVERRIDES - LISTITEM ICON ||============================== //

export default function ListItemIcon(theme) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '36px',
          color: theme.palette.text.primary
        }
      }
    }
  };
}
