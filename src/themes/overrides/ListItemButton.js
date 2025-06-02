// ==============================|| OVERRIDES - LISTITEM BUTTON ||============================== //

export default function ListItemButton(theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          paddingTop: '12px',
          paddingBottom: '12px',
          '&.Mui-selected': {
            '& .MuiListItemIcon-root': {
              color: theme.palette.menu.selected
            },
            color: theme.palette.menu.selected,
            backgroundColor: theme.palette.menu.hover
          },
          '&:hover': {
            backgroundColor: theme.palette.menu.hover,
            color: theme.palette.menu.selected,
            '& .MuiListItemIcon-root': {
              color: theme.palette.menu.selected
            }
          },
          button: {
            '&:hover': {
              backgroundColor: theme.palette.menu.hover
            }
          }
        }
      }
    }
  };
}
