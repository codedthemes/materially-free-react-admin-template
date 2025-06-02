// ==============================|| OVERRIDES - SVGICON ||============================== //

export default function CardHeader() {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.3rem'
        },
        fontSizeInherit: {
          fontSize: 'inherit'
        },
        fontSizeLarge: {
          fontSize: '2.1875rem'
        }
      }
    }
  };
}
