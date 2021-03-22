import React from 'react';
import { Grid, Typography, Hidden, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { gridSpacing } from '../../../../store/constant';

import DoneAllRoundedIcon from '@material-ui/icons/CheckCircleTwoTone';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const useStyles = makeStyles((theme) => ({
    price: {
        textAlign: 'center',
    },
    pricetitle: {
        fontSize: '20px',
        fontWeight: '500',
        position: 'relative',
        color: theme.palette.primary.main,
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: 'calc(50% - 25px)',
            width: '50px',
            height: '4px',
            background: theme.palette.background.default,
            borderRadius: '3px',
        },
    },
    priceamt: {
        fontSize: '25px',
        fontWeight: '700',
        '& > span': {
            fontSize: '20px',
            fontWeight: '500',
        },
    },
    pricelist: {
        margin: 0,
        padding: 0,
        '&> li': {
            padding: '5px 0px',
            '& svg': {
                fill: theme.palette.success.main,
            },
        },
    },
    featuretitle: {
        background: theme.palette.background.default,
        textAlign: 'left',
        paddingTop: '12px',
        paddingBottom: '12px !important',
    },
    featureaction: {
        borderLeft: '1px solid' + theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
    },
    pricebadge: {
        background: theme.palette.secondary.main,
        color: '#fff',
        display: 'inline-block',
        padding: '40px 40px 5px',
        fontSize: '13px',
        position: 'absolute',
        top: '-24px',
        right: '-55px',
        transform: 'rotate(45deg)',
    },
    featureblock: {
        borderLeft: '1px solid' + theme.palette.background.default,
        paddingTop: '12px',
        paddingBottom: '12px !important',
    },
    featurerow: {
        borderBottom: '1px solid' + theme.palette.background.default,
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    textmuted: {
        opacity: '0.3',
    },
    btntoggle: {
        width: '100%',
        '& > button': {
            border: 'none',
            borderRadius: '5px ​!important',
        },
        '& > button.Mui-selected': {
            background: theme.palette.background.default + '!important',
            color: theme.palette.primary.main,
        },
    },
    highlightRow: {
        background: '#fffde7',
    },
}));

const Product = () => {
    const classes = useStyles();
    const [mailinboxlistvalue, setmailinboxlist] = React.useState(1);

    const [view, setView] = React.useState('1');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    return (
        <React.Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Hidden mdUp>
                        <Card>
                            <CardContent>
                                <ToggleButtonGroup
                                    orientation="vertical"
                                    value={view}
                                    exclusive
                                    onChange={handleChange}
                                    className={classes.btntoggle}
                                >
                                    <ToggleButton value="1" onClick={() => setmailinboxlist(1)}>
                                        Free
                                    </ToggleButton>
                                    <ToggleButton value="2" onClick={() => setmailinboxlist(2)}>
                                        Premium
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </CardContent>
                        </Card>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.price}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={4}></Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CardContent className={classes.featureaction}>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="h6" className={classes.pricetitle}>
                                                    Free
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="body2" className={classes.priceamt}>
                                                    $0
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    as="a"
                                                    href="https://codedthemes.com/item/materially-free-reactjs-admin-template"
                                                    target="_blank"
                                                    variant="outlined"
                                                    color="secondary"
                                                >
                                                    Download
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CardContent className={classes.featureaction}>
                                        <div className={classes.pricebadge}>Popular</div>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="h6" className={classes.pricetitle}>
                                                    Premium
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="body2" className={classes.priceamt}>
                                                    $39
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    as="a"
                                                    href="https://codedthemes.com/item/materially-reactjs-admin-dashboard/"
                                                    target="_blank"
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    Buy Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <CardContent className={classes.featuretitle}>
                            <Typography component="div" variant="h6">
                                Features
                            </Typography>
                        </CardContent>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Dashboard
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Utitlites - Icons, Typography
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Multi-Languages
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        RTL Layout
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Sidebar Features
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Simple Login
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Table Basic
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>

                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Applications
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={[classes.featurerow, classes.highlightRow].join(' ')}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="subtitle1">
                                        Dark Layout
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Forms
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Modal, Popper, Popover, Tooltip, Transitions
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Other Pages (Pricing, Error, Coming Soon)
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Sample Page
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Table Advance
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={[classes.featurerow, classes.highlightRow].join(' ')}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="subtitle1">
                                        Third-Party Login (Firebase, JWT, Auth0)
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        UI Elements
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={[classes.featurerow, classes.highlightRow].join(' ')}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="subtitle1">
                                        Widgets
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>

                        <Grid container spacing={0} className={[classes.featurerow, classes.highlightRow].join(' ')}>
                            <Grid item xs={8} sm={6} md={4}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="subtitle1">
                                        Support
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={4}></Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CardContent className={classes.featureaction}>
                                        <Button
                                            as="a"
                                            href="https://codedthemes.com/item/materially-free-reactjs-admin-template"
                                            target="_blank"
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            Download
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CardContent className={classes.featureaction}>
                                        <Button
                                            as="a"
                                            href="https://codedthemes.com/item/materially-reactjs-admin-dashboard/"
                                            target="_blank"
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Buy Now
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Product;
