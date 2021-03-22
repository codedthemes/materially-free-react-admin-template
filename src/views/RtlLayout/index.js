import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import Breadcrumb from './../../component/Breadcrumb';
import { gridSpacing } from '../../store/constant';
import * as actionTypes from '../../store/actions';

const RtlLayout = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({ type: actionTypes.THEME_LOCALE, locale: 'zh' });
        dispatch({ type: actionTypes.THEME_RTL, rtlLayout: true });
    }, [dispatch]);

    return (
        <React.Fragment>
            <Breadcrumb title="RTL Layout">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    RTL Layout
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    RTL Layout
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Typography variant="body2">
                                <FormattedMessage id="message" />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default RtlLayout;
