import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, AppBar, ClickAwayListener, IconButton, Grow, Paper, Popper, Toolbar, Grid, Box } from '@mui/material';

// project import
import SearchSection from '../SearchSection';
import NotificationSection from '../NotificationSection';
import ProfileSection from '../ProfileSection';

// assets
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

// ==============================|| MOBILE SECTION ||============================== //

const MobileSection = () => {
  const theme = useTheme();
  const matchMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="inherit"
        size="large"
      >
        <MoreVertTwoToneIcon sx={{ fontSize: '1.5rem' }} />
      </IconButton>
      <Popper
        open={open}
        placement="bottom-end"
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ width: '100%', zIndex: 1201 }}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 5]
            }
          },
          {
            name: 'preventOverflow',
            options: {
              altAxis: true // false by default
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} in={open}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Box
                  sx={{
                    flexGrow: { sm: 1, xs: 0 },
                    zIndex: { sm: 1201 }
                  }}
                >
                  <AppBar color="default">
                    <Toolbar>
                      <Grid container direction="row" justifyContent={matchMobile ? 'space-between' : 'flex-end'} alignItems="center">
                        <SearchSection theme="dark" />
                        <NotificationSection />
                        <ProfileSection />
                      </Grid>
                    </Toolbar>
                  </AppBar>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default MobileSection;
