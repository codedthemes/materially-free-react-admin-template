// ==============================|| OVERRIDES - LISTITEM ||============================== //

export default function ListItem(theme) {
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary
        }
      }
    }
  };
}
