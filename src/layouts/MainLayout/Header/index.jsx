// material-ui
import AppBar from '@mui/material/AppBar';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project imports
import Notification from './Notification';
import Profile from './Profile';
import Search from './Search';

import { DRAWER_WIDTH } from 'config';
import { handlerDrawerOpen, useGetMenuMaster } from 'states/menu';

// assets
import logo from 'assets/images/logo.svg';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

// AppBar props, including styles that vary based on drawer state and screen size
const appBar = { color: 'primary', position: 'fixed', sx: { width: 1, zIndex: { xs: 1100, lg: 1201 } } };

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

export default function Header() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  // Common header content
  const mainHeader = (
    <Toolbar>
      <Stack direction="row" sx={{ gap: 1, width: { xs: 1, md: DRAWER_WIDTH }, alignItems: 'center', justifyContent: 'space-between' }}>
        <CardMedia component="img" image={logo} alt="logo" sx={{ width: 138, display: { xs: 'none', md: 'flex' } }} />
        <IconButton
          edge="start"
          sx={{ mr: { xs: 0, sm: 1.25 }, color: 'background.paper' }}
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          size="large"
        >
          <MenuTwoToneIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
        <Search />
        <Notification />
        <Profile />
      </Stack>
    </Toolbar>
  );

  return <AppBar {...appBar}>{mainHeader}</AppBar>;
}
