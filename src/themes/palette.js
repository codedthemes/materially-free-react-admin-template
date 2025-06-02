// ==============================|| DEFAULT - PALETTE ||============================== //

export default function palette(mode) {
  const lightPalette = {
    common: {
      black: '#232b38'
    },
    primary: {
      lighter: '#cbe2ff',
      light: '#4f8ef5',
      main: '#3366ff',
      dark: '#0043a9',
      darker: '#002d75',
      100: '#4c6fff'
    },
    secondary: {
      lighter: '#d3d8db',
      light: '#727b80',
      main: '#5d646e',
      dark: '#272f33',
      darker: '#161a1c'
    },
    error: {
      lighter: '#fde4e2',
      light: '#ff625b',
      main: '#ec4333',
      dark: '#a20e00',
      darker: '#750800'
    },
    warning: {
      lighter: '#fef3d4',
      light: '#f8c256',
      main: '#f4a100',
      dark: '#aa7000',
      darker: '#754c00'
    },
    info: {
      lighter: '#d4f7f8',
      light: '#4de3e8',
      main: '#00cfd5',
      dark: '#009095',
      darker: '#005f63'
    },
    success: {
      lighter: '#d4f2e4',
      light: '#4fd29e',
      main: '#00ac69',
      dark: '#007849',
      darker: '#004e2e'
    },
    grey: {
      300: '#425466'
    },
    bg: {
      100: '#f8f8f9'
    },
    text: {
      primary: '#242c3a',
      secondary: '#a1a1a1',
      dark: '#12171e'
    },
    divider: '#dcdcdc',
    background: {
      paper: '#ffffff',
      default: '#f0f2f8'
    },
    menu: {
      hover: '#cbe2ff',
      selected: '#3366ff'
    }
  };

  return {
    mode,
    ...lightPalette
  };
}
