// ==============================|| DEFAULT - TYPOGRAPHY ||============================== //

export default function typography() {
  return {
    fontFamily: `'Poppins', sans-serif`,
    h6: {
      fontWeight: 600,
      fontSize: '0.875rem'
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600
    },
    h1: {
      fontSize: '2.2rem',
      fontWeight: 600
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.643em'
    },
    subtitle2: {
      fontSize: '0.8125rem',
      fontWeight: 400
    },
    caption: {
      fontSize: '0.68rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.643em'
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.643em'
    },
    menuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 600,
      padding: '5px 15px 5px',
      textTransform: 'uppercase',
      marginTop: '10px'
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 400,
      textTransform: 'capitalize'
    }
  };
}
