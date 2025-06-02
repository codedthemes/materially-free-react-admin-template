import PropTypes from 'prop-types';
// material-ui
import { alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

// project imports
import DrawerContent from './DrawerContent';

import { DRAWER_WIDTH } from 'config';
import { handlerDrawerOpen, useGetMenuMaster } from 'states/menu';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

export default function MainDrawer({ window }) {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  // Define container for drawer when window is specified
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 } }} aria-label="layout drawer">
      <Drawer
        container={container}
        variant={downLG ? 'temporary' : 'persistent'}
        open={drawerOpen}
        onClose={() => handlerDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: (theme) => ({
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              backgroundImage: 'none',
              boxShadow: `0 0.15rem 1.75rem 0 ${alpha(theme.palette.common.black, 0.15)}`,
              borderRight: 'none'
            })
          }
        }}
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}

MainDrawer.propTypes = { window: PropTypes.func };
