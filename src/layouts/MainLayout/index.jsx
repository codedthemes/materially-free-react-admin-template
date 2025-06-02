import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project imports
import Drawer from './Drawer';
import Header from './Header';
import Breadcrumbs from 'components/Breadcrumbs';

import { DRAWER_WIDTH } from 'config';
import { handlerDrawerOpen, useGetMenuMaster } from 'states/menu';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  const upLG = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  useEffect(() => {
    handlerDrawerOpen(upLG);
  }, [upLG]);

  // drawer toggle handler on resize window
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const drawer = useMemo(() => <Drawer />, [drawerOpen]);

  return (
    <Stack direction="row" width={1}>
      <Header />
      {drawer}
      <Box
        component="main"
        sx={{
          width: { xs: 1, lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : 1 },
          p: { xs: 2, sm: 3, md: 5 },
          ml: { xs: 0, lg: 'auto' }
        }}
      >
        <Toolbar />
        <Breadcrumbs />
        <Outlet />
      </Box>
    </Stack>
  );
}
