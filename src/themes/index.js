// material-ui
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// project import
import value from '../assets/scss/_themes-vars.scss';

// ==============================|| THEME ||============================== //

export function theme() {
  let textPrimary;
  let textSecondary;
  let textDark;
  let textHint;
  let background;
  let paper;
  let menuCaption;
  let textInversePrimary;

  textPrimary = textInversePrimary = menuCaption = value.textPrimary;
  textSecondary = value.textSecondary;
  textDark = value.textDark;
  textHint = value.textHint;

  background = value.backgound;
  paper = value.paper;

  return createTheme({
    direction: 'ltr',
    palette: {
      mode: 'light',
      common: {
        black: value.paperDark
      },
      primary: {
        light: value.primaryLight,
        main: value.primary,
        dark: value.primaryDark,
        100: value.primary100
      },
      secondary: {
        light: value.secondaryLight,
        main: value.secondary,
        dark: value.secondaryDark
      },
      error: {
        light: value.errorLight,
        main: value.error,
        dark: value.errorDark
      },
      warning: {
        light: value.warningLight,
        main: value.warning,
        dark: value.warningDark
      },
      info: {
        light: value.infoLight,
        main: value.info,
        dark: value.infoDark
      },
      success: {
        light: value.successLight,
        main: value.success,
        dark: value.successDark
      },
      grey: {
        300: value.grey300,
        400: value.grey400
      },
      bg: {
        100: value.bg100
      },
      textDark: {
        color: textDark
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
        dark: textDark,
        hint: textHint
      },
      background: {
        paper: paper,
        default: background
      }
    },
    typography: {
      fontFamily: `'Poppins', sans-serif`,
      h6: {
        fontWeight: 600,
        color: textSecondary,
        fontSize: '0.875rem'
      },
      h5: {
        fontSize: '1.125rem',
        color: textSecondary,
        fontWeight: 600
      },
      h4: {
        fontSize: '1.25rem',
        color: textSecondary,
        fontWeight: 500
      },
      h3: {
        fontSize: '1.5rem',
        color: textDark,
        fontWeight: 600
      },
      h2: {
        fontSize: '2rem',
        color: textDark,
        fontWeight: 600
      },
      h1: {
        fontSize: '2.2rem',
        color: textDark,
        fontWeight: 600
      },
      subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: textSecondary,
        lineHeight: '1.643em'
      },
      subtitle2: {
        fontSize: '0.8125rem',
        fontWeight: 400
      },
      caption: {
        fontSize: '0.68rem',
        color: textHint,
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
        color: value.primary,
        padding: '5px 15px 5px',
        textTransform: 'uppercase',
        marginTop: '10px'
      },
      subMenuCaption: {
        fontSize: '0.6875rem',
        fontWeight: 400,
        color: menuCaption,
        textTransform: 'capitalize'
      },
      subHeading: {
        color: 'red'
      },
      cardTitle: {
        color: value.primary,
        fontSize: '1rem'
      },
      breadcrumbTitle: {
        fontWeight: 500,
        fontSize: '1.5rem',
        color: textDark
      }
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            overflow: 'hidden'
          }
        }
      },
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
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            color: textInversePrimary,
            paddingTop: '12px',
            paddingBottom: '12px',
            '&.Mui-selected': {
              '& .MuiListItemIcon-root': {
                color: value.primary
              },
              color: value.primary,
              backgroundColor: value.menuHover
            },
            '&:hover': {
              backgroundColor: value.menuHover,
              color: value.primary,
              '& .MuiListItemIcon-root': {
                color: value.primary
              }
            },
            button: {
              '&:hover': {
                backgroundColor: value.menuHover
              }
            }
          }
        }
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            color: textInversePrimary,
            paddingTop: '12px',
            paddingBottom: '12px',
            '&.Mui-selected': {
              '& .MuiListItemIcon-root': {
                color: value.primary
              },
              color: value.primary,
              backgroundColor: value.menuHover
            },
            '&:hover': {
              backgroundColor: value.menuHover,
              color: value.primary,
              '& .MuiListItemIcon-root': {
                color: value.primary
              }
            },
            button: {
              '&:hover': {
                backgroundColor: value.menuHover
              }
            }
          }
        }
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: '36px',
            color: textInversePrimary
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: 'none'
          }
        }
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: '0.875rem'
          },
          content: {
            color: textSecondary,
            fontWeight: 500
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          elevation1: {
            boxShadow: '0 4px 6px -2px rgb(0 0 0 / 12%), 0 2px 2px -1px rgb(0 0 0 / 5%)'
          },
          rounded: {
            borderRadius: '10px'
          }
        }
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            color: textDark,
            padding: '24px'
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '24px'
          }
        }
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: '24px'
          }
        }
      },
      // Table
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: '16px 36px 16px 36px',
            whiteSpace: 'normal'
          },
          head: {
            padding: '16px 36px 16px 36px',
            color: textDark,
            fontWeight: 600
          },
          paddingCheckbox: {
            paddingLeft: '18px',
            position: 'relative'
          }
        }
      },
      MUIDataTableSelectCell: {
        styleOverrides: {
          fixedLeft: {
            position: 'unset'
          }
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            background: background
          },
          MuiChip: {
            root: {
              backgroundColor: value.secondary
            }
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          colorDefault: {
            color: grey[100],
            backgroundColor: value.secondary
          },
          colorSecondary: {
            color: grey[100]
          },
          colorPrimary: {
            color: grey[100]
          },
          root: {
            color: grey[100]
          },
          outlined: {
            color: grey[500]
          },
          deleteIcon: {
            color: grey[500]
          }
        }
      },
      MuiTimelineDot: {
        styleOverrides: {
          filledGrey: {
            background: grey[300]
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: value.textSecondary
          },
          indeterminate: {
            color: value.textPrimary
          }
        }
      },
      MuiTimelineConnector: {
        styleOverrides: {
          root: {
            background: grey[300]
          }
        }
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            maxWidth: '100%'
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          colorDefault: {
            backgroundColor: value.textHint,
            color: grey[100]
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: textDark
          }
        }
      }
    }
  });
}

export default theme;
