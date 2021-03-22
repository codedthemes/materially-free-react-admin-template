import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme, useMediaQuery, Box, makeStyles, Tooltip, TextField, MenuItem, InputAdornment, Hidden, Button } from '@material-ui/core';

import TranslateIcon from '@material-ui/icons/Translate';
import Brightness6Icon from '@material-ui/icons/Brightness6';

import * as actionTypes from '../../../../store/actions';

const currencies = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'fr',
        label: 'français',
    },
    {
        value: 'ro',
        label: 'Română',
    },
    {
        value: 'zh',
        label: '中国人',
    },
];

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
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        padding: '5px 15px',
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
    gridContainer: {
        padding: '10px',
    },
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    menuButton: {
        [theme.breakpoints.down('sm')]: {
            minWidth: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '35px',
        },
    },
    iconSelect: {
        color: '#fff',
        fontSize: '1.4rem',
    },
    selectColor: {
        color: '#fff',
        //padding: '0 !important',
        fontSize: '1rem',
        marginTop: '4px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.875rem',
        },
    },
    underlineSelect: {
        ':before': {
            display: 'none',
        },
    },
    selectIcon: {
        marginRight: '4px',
        color: '#fff',
    },
}));

const Customization = () => {
    const classes = useStyles();
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();

    const theme = useTheme();
    const matchDownSm = useMediaQuery(theme.breakpoints.down('xs'));

    const [currency, setCurrency] = React.useState(customization.locale);
    const handleChange = (event) => {
        setCurrency(event.target.value);
        dispatch({ type: actionTypes.THEME_LOCALE, locale: event.target.value });
    };

    if (customization.rtlLayout) {
        document.querySelector('body').setAttribute('dir', 'rtl');
    }

    useEffect(() => {
        setCurrency(customization.locale);
    }, [customization]);

    return (
        <React.Fragment>
            <Tooltip title="Open Multi-Language Page">
                <Box width="80px" ml={matchDownSm ? '8px' : '24px'} mr={matchDownSm ? '8px' : '24px'}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <Hidden smDown>
                                    <InputAdornment position="start" className={classes.selectIcon}>
                                        <TranslateIcon color="inherit" />
                                    </InputAdornment>
                                </Hidden>
                            ),
                            disableUnderline: true,
                        }}
                        SelectProps={{
                            classes: {
                                select: classes.selectColor,
                                icon: classes.iconSelect,
                            },
                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Tooltip>
            <Tooltip title='Pro Only'>
                <Button className={classes.menuButton} color="inherit">
                    <Brightness6Icon className={classes.menuIcon} />
                </Button>
            </Tooltip>
        </React.Fragment>
    );
};

export default Customization;
