import React, { useState, useEffect } from 'react';

import { IntlProvider } from 'react-intl';

import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './../themes';
import Routes from '../Routes';
import NavigationScroll from './NavigationScroll';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

function loadLocaleData(locale) {
    switch (locale) {
        case 'fr':
            return import('./../compiled-lang/fr.json');
        case 'ro':
            return import('./../compiled-lang/ro.json');
        case 'zh':
            return import('./../compiled-lang/zh.json');
        default:
            return import('./../compiled-lang/en.json');
    }
}

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = () => {
    const customization = useSelector((state) => state.customization);
    const [messages, setMessages] = useState();

    useEffect(() => {
        loadLocaleData(customization.locale).then((d) => {
            setMessages(d.default);
        });
    }, [customization]);

    return (
        <React.Fragment>
            {messages && (
                <IntlProvider locale={customization.locale} defaultLocale="en" messages={messages}>
                    <CssBaseline />
                    <NavigationScroll>
                        <StylesProvider jss={jss}>
                            <ThemeProvider theme={theme(customization)}>
                                <Routes />
                            </ThemeProvider>
                        </StylesProvider>
                    </NavigationScroll>
                </IntlProvider>
            )}
        </React.Fragment>
    );
};

export default App;
