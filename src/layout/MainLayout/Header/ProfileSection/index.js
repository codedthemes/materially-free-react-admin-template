import React from 'react';

import { makeStyles, Fade, Button, ClickAwayListener, Paper, Popper, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';

import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import LockOpenTwoTone from '@material-ui/icons/LockOpenTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '250px',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 0,
        borderRadius: '10px',
    },
    subHeader: {
        backgroundColor: theme.palette.grey.A400,
        color: theme.palette.common.white,
        padding: '5px 15px',
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
    menuButton: {
        [theme.breakpoints.down('sm')]: {
            minWidth: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '35px',
        },
    },
}));

const ProfileSection = () => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (index === 4) {
            //handleLogout;
        }
    };

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
        <React.Fragment>
            <Button
                className={classes.menuButton}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                <AccountCircleTwoToneIcon className={classes.menuIcon} />
            </Button>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: {
                        offset: {
                            enable: true,
                            offset: '0px, 10px',
                        },
                        preventOverflow: {
                            padding: 0,
                        },
                    },
                }}
            >
                {({ TransitionProps, placement }) => (
                    <Fade {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <List component="nav" className={classes.root}>
                                    <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                                        <ListItemIcon>
                                            <SettingsTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Settings" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        component={Link}
                                        to="/user/profile"
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}
                                    >
                                        <ListItemIcon>
                                            <PersonTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Profile" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                                        <ListItemIcon>
                                            <DraftsTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="My Messages" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                                        <ListItemIcon>
                                            <LockOpenTwoTone />
                                        </ListItemIcon>
                                        <ListItemText primary="Lock Screen" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 4}>
                                        <ListItemIcon>
                                            <MeetingRoomTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Logout" />
                                    </ListItem>
                                </List>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </React.Fragment>
    );
};

export default ProfileSection;
