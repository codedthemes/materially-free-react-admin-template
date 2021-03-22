import React, { useEffect } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Grid,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import Breadcrumb from './../../component/Breadcrumb';
import { gridSpacing } from '../../store/constant';
import * as actionTypes from '../../store/actions';

const MultiLanguage = () => {
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();

    const [language, setLanguage] = React.useState(customization.locale);

    const handleChange = (event) => {
        setLanguage(event.target.value);
        dispatch({ type: actionTypes.THEME_LOCALE, locale: event.target.value });
    };

    useEffect(() => {
        setLanguage(customization.locale);
    }, [customization]);

    return (
        <React.Fragment>
            <Breadcrumb title={<FormattedMessage id="title" />}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    <FormattedMessage id="home" />
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    <FormattedMessage id="title" />
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    <FormattedMessage id="title" />
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Box mb={3}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">
                                        <FormattedMessage id="change" />
                                    </FormLabel>
                                    <RadioGroup row aria-label="position" name="position" value={language} onChange={handleChange}>
                                        <FormControlLabel value="en" control={<Radio color="primary" />} label="English" />
                                        <FormControlLabel value="fr" control={<Radio color="primary" />} label="français" />
                                        <FormControlLabel value="ro" control={<Radio color="primary" />} label="Română" />
                                        <FormControlLabel value="zh" control={<Radio color="primary" />} label="中国人" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>

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

export default MultiLanguage;
