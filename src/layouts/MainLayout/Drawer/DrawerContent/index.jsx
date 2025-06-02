// material-ui
import Stack from '@mui/material/Stack';

// project imports
import NavigationDrawer from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import { AppBar, CardMedia, Toolbar } from '@mui/material';

// assets
import logo from 'assets/images/logo.svg';

// ==============================|| DRAWER - CONTENT ||============================== //

export default function DrawerContent() {
  const contentHeight = `calc(100vh - 64px)`;

  return (
    <>
      <AppBar sx={{ position: 'absolute', display: { xs: 'block', lg: 'none' } }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <CardMedia component="img" image={logo} alt="logo" sx={{ width: 138 }} />
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ zIndex: -1 }} />
      <SimpleBar sx={{ height: contentHeight }}>
        <Stack sx={{ minHeight: contentHeight, p: 1.25, justifyContent: 'space-between' }}>
          <NavigationDrawer />
        </Stack>
      </SimpleBar>
    </>
  );
}
