// ==============================|| OVERRIDES - POPPER ||============================== //

export default function Popper(theme) {
  return {
    MuiPopper: {
      styleOverrides: {
        root: {
          zIndex: 1201,
          '& .MuiPaper-root': {
            border: `1px solid ${theme.palette.divider}`
          }
        }
      }
    }
  };
}
