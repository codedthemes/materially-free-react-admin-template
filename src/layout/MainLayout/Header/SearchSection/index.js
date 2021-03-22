import React from 'react';
import { fade, Box, Button, makeStyles, InputBase, Hidden, Popper, Fade, Card, CardContent, Grid } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
        width: 'auto',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginRight: 0,
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },
    searchIcon: {
        padding: theme.spacing(0.75, 1.25),
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.grey[100],
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1.25),
        },
    },
    closeIcon: {
        cursor: 'pointer',
        padding: theme.spacing(1.25),
        alignItems: 'center',
        justifyContent: 'flex-end',
        display: 'flex',
        color: theme.palette.grey[100],
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        color: theme.palette.grey[100],
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('mobile')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '125px',
            '&:focus': {
                width: '225px',
            },
        },
    },
    searchControl: {
        borderColor: theme.palette.grey[100],
        width: '434px',
        marginLeft: '16px',
        paddingRight: '8px',
        paddingLeft: '16px',
        [theme.breakpoints.down('lg')]: {
            width: '250px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
            background: '#fff',
            borderRadius: '12px',
        },
    },
    popperContainer: {
        zIndex: 1100,
        width: '100%',
        top: '10px !important',
        padding: '0',
    },
    cardContent: {
        padding: '12px !important',
        backgroundColor: theme.palette.secondary.main,
    },
    card: {
        borderRadius: 0,
        background: theme.palette.primary[200],
        [theme.breakpoints.down('sm')]: {
            border: 0,
            boxShadow: 'none',
        },
    },
    menuButton: {
        [theme.breakpoints.down('xs')]: {
            minWidth: '35px',
        },
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
}));

const SearchSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <Hidden smUp>
                <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                        <React.Fragment>
                            <Button className={classes.menuButton} aria-haspopup="true" {...bindToggle(popupState)} color="inherit">
                                <SearchTwoToneIcon className={classes.menuIcon} />
                            </Button>
                            <Popper
                                {...bindPopper(popupState)}
                                transition
                                className={classes.popperContainer}
                                popperOptions={{
                                    modifiers: {
                                        offset: {
                                            enable: true,
                                            offset: '0px, 0px',
                                        },
                                        preventOverflow: {
                                            padding: 0,
                                        },
                                    },
                                }}
                            >
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Card className={classes.card}>
                                            <CardContent className={classes.cardContent}>
                                                <Grid container alignItems="center" justify="space-between">
                                                    <Grid item xs>
                                                        <Box display="flex" p={0}>
                                                            <div className={classes.searchIcon}>
                                                                <SearchTwoToneIcon color="inherit" />
                                                            </div>
                                                            <InputBase
                                                                fullWidth
                                                                placeholder="Search…"
                                                                classes={{
                                                                    root: classes.inputRoot,
                                                                    input: classes.inputInput,
                                                                }}
                                                                inputProps={{ 'aria-label': 'search' }}
                                                            />
                                                            <div className={classes.closeIcon} {...bindToggle(popupState)}>
                                                                <CloseTwoToneIcon color="inherit" />
                                                            </div>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Fade>
                                )}
                            </Popper>
                        </React.Fragment>
                    )}
                </PopupState>
            </Hidden>
            <Hidden xsDown>
                <div className={classes.searchIcon}>
                    <SearchTwoToneIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Hidden>
        </div>
    );
};

export default SearchSection;
