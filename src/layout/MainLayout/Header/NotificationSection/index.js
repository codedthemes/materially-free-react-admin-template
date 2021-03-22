import React from 'react';

import {
    makeStyles,
    Button,
    Chip,
    ClickAwayListener,
    Fade,
    Grid,
    Paper,
    Popper,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';

import QueryBuilderTwoToneIcon from '@material-ui/icons/QueryBuilderTwoTone';

import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';

import User1 from './../../../../assets/images/users/avatar-1.jpg';
import User2 from './../../../../assets/images/users/avatar-2.jpg';
import User3 from './../../../../assets/images/users/avatar-3.jpg';
import User4 from './../../../../assets/images/users/avatar-4.jpg';

const useStyles = makeStyles((theme) => ({
    grow: {
        flex: 1,
    },
    root: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '250px',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 0,
        borderRadius: '10px',
    },
    inline: {
        display: 'inline',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    subHeader: {
        backgroundColor: theme.palette.grey.A400,
        color: theme.palette.common.white,
        padding: '5px 15px',
    },
    subFooter: {
        backgroundColor: theme.palette.grey.A400,
        color: theme.palette.common.white,
        padding: 0,
    },
    iconButton: {
        padding: '5px',
    },
    showIcon: {
        transform: 'rotate(90deg)',
    },
    listSection: {
        backgroundColor: 'inherit',
        display: 'block',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    listAction: {
        top: '22px',
    },
    actionIcon: {
        fontSize: '0.75rem',
        marginRight: '4px',
        color: theme.palette.grey[400],
    },
    actionColor: {
        color: theme.palette.grey[400],
    },
    ScrollHeight: {
        height: '320px',
        overflowX: 'hidden',
    },
    p0: {
        padding: 0,
    },
    pT0: {
        paddingTop: 0,
    },
    menuIIcon: {
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

const NotificationSection = () => {
    const classes = useStyles();
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
        <React.Fragment>
            <Button
                className={classes.menuButton}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                <NotificationsNoneTwoToneIcon className={classes.menuIIcon} />
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
                                <List className={classes.root}>
                                    <PerfectScrollbar className={classes.ScrollHeight}>
                                        <ListSubheader disableSticky>
                                            <Chip size="small" color="primary" label="New" />
                                        </ListSubheader>
                                        <ListItem button alignItems="flex-start" className={classes.pT0}>
                                            <ListItemAvatar>
                                                <Avatar alt="John Doe" src={User1} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={<Typography variant="subtitle1">John Doe</Typography>}
                                                secondary={<Typography variant="subtitle2">New ticket Added</Typography>}
                                            />
                                            <ListItemSecondaryAction className={classes.listAction}>
                                                <Grid container justify="flex-end">
                                                    <Grid item>
                                                        <QueryBuilderTwoToneIcon className={classes.actionIcon} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="caption"
                                                            display="block"
                                                            gutterBottom
                                                            className={classes.actionColor}
                                                        >
                                                            now
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListSubheader disableSticky>
                                            <Chip size="small" variant="outlined" label="EARLIER" />
                                        </ListSubheader>
                                        <ListItem button alignItems="flex-start" className={classes.pT0}>
                                            <ListItemAvatar>
                                                <Avatar alt="Joseph William" src={User2} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={<Typography variant="subtitle1">Joseph William</Typography>}
                                                secondary={<Typography variant="subtitle2">Purchase a new product</Typography>}
                                            />
                                            <ListItemSecondaryAction className={classes.listAction}>
                                                <Grid container justify="flex-end">
                                                    <Grid item>
                                                        <QueryBuilderTwoToneIcon className={classes.actionIcon} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="caption"
                                                            display="block"
                                                            gutterBottom
                                                            className={classes.actionColor}
                                                        >
                                                            10 min
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem button alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt="Sara Soudein" src={User3} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={<Typography variant="subtitle1">Sara Soudein</Typography>}
                                                secondary={<Typography variant="subtitle2">Currently Login</Typography>}
                                            />
                                            <ListItemSecondaryAction className={classes.listAction}>
                                                <Grid container justify="flex-end">
                                                    <Grid item>
                                                        <QueryBuilderTwoToneIcon className={classes.actionIcon} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="caption"
                                                            display="block"
                                                            gutterBottom
                                                            className={classes.actionColor}
                                                        >
                                                            12 min
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem button alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt="Sepha Wilon" src={User4} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={<Typography variant="subtitle1">Sepha Wilon</Typography>}
                                                secondary={<Typography variant="subtitle2">Purchase a new product</Typography>}
                                            />
                                            <ListItemSecondaryAction className={classes.listAction}>
                                                <Grid container justify="flex-end">
                                                    <Grid item>
                                                        <QueryBuilderTwoToneIcon className={classes.actionIcon} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="caption"
                                                            display="block"
                                                            gutterBottom
                                                            className={classes.actionColor}
                                                        >
                                                            30 min
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </PerfectScrollbar>
                                </List>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </React.Fragment>
    );
};

export default NotificationSection;
