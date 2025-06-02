import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// project imports
import palette from './palette';
import componentsOverride from './overrides';
import typography from './typography';

// ==============================|| DEFAULT THEME - MAIN ||============================== //

export default function ThemeCustomization({ children }) {
  const themePalette = useMemo(() => palette('light'), []);

  const themeDefault = createTheme({
    palette: themePalette
  });

  // create duplicate theme due to responsive typography and fontFamily
  const theme = createTheme({
    ...themeDefault,
    typography: typography()
  });

  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

ThemeCustomization.propTypes = { children: PropTypes.any };
