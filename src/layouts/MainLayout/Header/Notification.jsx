import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/cards/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

// assets
import avatar1 from 'assets/images/users/avatar-1.jpg';
import avatar2 from 'assets/images/users/avatar-2.jpg';
import avatar3 from 'assets/images/users/avatar-3.jpg';
import avatar4 from 'assets/images/users/avatar-4.jpg';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';

const notifications = [
  { avatar: avatar1, name: 'John Doe', time: 'now', message: 'New ticket Added' },
  { avatar: avatar2, name: 'Joseph William', time: '10 min', message: 'Purchase a new product' },
  { avatar: avatar3, name: 'Sara Soudein', time: '12 min', message: 'Currently Login' },
  { avatar: avatar4, name: 'Sepha Wilon', time: '30 min', message: 'Purchase a new product' }
];

// ==============================|| NOTIFICATION ITEM ||============================== //

function NotificationItem({ avatar, name, time, message }) {
  return (
    <ListItemButton>
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1">{name}</Typography>
            <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center' }}>
              <AccessTimeTwoToneIcon sx={{ fontSize: 11 }} />
              <Typography variant="caption">{time}</Typography>
            </Stack>
          </Stack>
        }
        secondary={<Typography variant="subtitle2">{message}</Typography>}
      />
    </ListItemButton>
  );
}

// ==============================|| NOTIFICATION ||============================== //

export default function Notification() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'notification-popper' : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <IconButton size="small" onClick={handleClick}>
          <NotificationsNoneTwoToneIcon sx={{ fontSize: { sm: 24 }, color: 'background.paper' }} />
        </IconButton>

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-start"
          transition
          disablePortal
          modifiers={[{ name: 'offset', options: { offset: [0, 10] } }]}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={100}>
              <MainCard content={false} sx={{ width: 250 }}>
                <SimpleBar sx={{ height: 320 }}>
                  <List>
                    <ListSubheader sx={{ position: 'static' }}>
                      <Chip label="New" size="small" color="primary" />
                    </ListSubheader>
                    <NotificationItem {...notifications[0]} />

                    <ListSubheader sx={{ position: 'static' }}>
                      <Chip label="EARLIER" size="small" color="secondary" />
                    </ListSubheader>

                    {notifications.slice(1).map((item, index) => (
                      <NotificationItem key={`${item.name}-${index}`} {...item} />
                    ))}
                  </List>
                </SimpleBar>
              </MainCard>
            </Fade>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
}

NotificationItem.propTypes = { avatar: PropTypes.string, name: PropTypes.string, time: PropTypes.string, message: PropTypes.string };
