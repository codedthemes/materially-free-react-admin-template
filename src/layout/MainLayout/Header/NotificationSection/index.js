import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Chip,
  ClickAwayListener,
  Fade,
  Grid,
  Paper,
  Popper,
  Avatar,
  List,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  Typography,
  ListItemButton
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';

import User1 from 'assets/images/users/avatar-1.jpg';
import User2 from 'assets/images/users/avatar-2.jpg';
import User3 from 'assets/images/users/avatar-3.jpg';
import User4 from 'assets/images/users/avatar-4.jpg';

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
  const theme = useTheme();
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
      <Button
        sx={{
          minWidth: { sm: 50, xs: 35 }
        }}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        aria-label="Notification"
        onClick={handleToggle}
        color="inherit"
      >
        <NotificationsNoneTwoToneIcon sx={{ fontSize: '1.5rem' }} />
      </Button>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10]
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
          <Fade {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 350,
                    minWidth: 250,
                    backgroundColor: theme.palette.background.paper,
                    pb: 0,
                    borderRadius: '10px'
                  }}
                >
                  <PerfectScrollbar style={{ height: 320, overflowX: 'hidden' }}>
                    <ListSubheader disableSticky>
                      <Chip size="small" color="primary" label="New" />
                    </ListSubheader>
                    <ListItemButton alignItemsFlexStart sx={{ pt: 0 }}>
                      <ListItemAvatar>
                        <Avatar alt="John Doe" src={User1} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography variant="subtitle1">John Doe</Typography>}
                        secondary={<Typography variant="subtitle2">New ticket Added</Typography>}
                      />
                      <ListItemSecondaryAction sx={{ top: 22 }}>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <QueryBuilderTwoToneIcon
                              sx={{
                                fontSize: '0.75rem',
                                mr: 0.5,
                                color: theme.palette.grey[400]
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="caption" display="block" gutterBottom sx={{ color: theme.palette.grey[400] }}>
                              now
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <ListSubheader disableSticky>
                      <Chip size="small" variant="outlined" label="EARLIER" />
                    </ListSubheader>
                    <ListItemButton alignItemsFlexStart sx={{ pt: 0 }}>
                      <ListItemAvatar>
                        <Avatar alt="Joseph William" src={User2} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography variant="subtitle1">Joseph William</Typography>}
                        secondary={<Typography variant="subtitle2">Purchase a new product</Typography>}
                      />
                      <ListItemSecondaryAction sx={{ top: 20 }}>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <QueryBuilderTwoToneIcon
                              sx={{
                                fontSize: '0.75rem',
                                mr: 0.5,
                                color: theme.palette.grey[400]
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="caption" display="block" gutterBottom sx={{ color: theme.palette.grey[400] }}>
                              10 min
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <ListItemButton alignItemsFlexStart>
                      <ListItemAvatar>
                        <Avatar alt="Sara Soudein" src={User3} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography variant="subtitle1">Sara Soudein</Typography>}
                        secondary={<Typography variant="subtitle2">Currently Login</Typography>}
                      />
                      <ListItemSecondaryAction sx={{ top: 30 }}>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <QueryBuilderTwoToneIcon
                              sx={{
                                fontSize: '0.75rem',
                                mr: 0.5,
                                color: theme.palette.grey[400]
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="caption" display="block" gutterBottom sx={{ color: theme.palette.grey[400] }}>
                              12 min
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <ListItemButton alignItemsFlexStart>
                      <ListItemAvatar>
                        <Avatar alt="Sepha Wilon" src={User4} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography variant="subtitle1">Sepha Wilon</Typography>}
                        secondary={<Typography variant="subtitle2">Purchase a new product</Typography>}
                      />
                      <ListItemSecondaryAction sx={{ top: 30 }}>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <QueryBuilderTwoToneIcon
                              sx={{
                                fontSize: '0.75rem',
                                mr: 0.5,
                                color: theme.palette.grey[400]
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="caption" display="block" gutterBottom sx={{ color: theme.palette.grey[400] }}>
                              30 min
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </PerfectScrollbar>
                </List>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
