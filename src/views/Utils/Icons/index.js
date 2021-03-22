import React from 'react';

import Breadcrumb from './../../../component/Breadcrumb';

import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { gridSpacing } from '../../../store/constant';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    frame: {
        height: 'calc(100vh - 210px)',
    },
}));

const Icons = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Breadcrumb title="Icons">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Icons
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <iframe
                        title="Material Icon"
                        className={classes.frame}
                        width="100%"
                        src="https://material-ui.com/components/material-icons/"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Icons;
