import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { alpha, Box, Button, InputBase, Popper, Fade, Card, CardContent, Grid } from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

// assets
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

// ==============================|| SEARCH SECTION ||============================== //

const SearchSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 1,
        backgroundColor: { sm: alpha(theme.palette.common.white, 0.15), xs: 'transparent' },
        '&:hover': {
          backgroundColor: { sm: alpha(theme.palette.common.white, 0.25), xs: 'transparent' }
        },
        ml: { sm: theme.spacing(1), xs: 0 },
        mr: { sm: theme.spacing(2), xs: 0 },
        width: 'auto'
      }}
    >
      <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <>
              <Button
                sx={{
                  minWidth: { xs: 35 }
                }}
                aria-haspopup="true"
                {...bindToggle(popupState)}
                color="inherit"
              >
                <SearchTwoToneIcon sx={{ fontSize: '1.5rem' }} />
              </Button>
              <Popper
                {...bindPopper(popupState)}
                transition
                sx={{ zIndex: 1100, width: '100%', top: '10px !important', p: 0 }}
                modifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10]
                    }
                  },
                  {
                    name: 'preventOverflow',
                    options: {
                      altAxis: true
                    }
                  }
                ]}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Card
                      sx={{
                        borderRadius: 0,
                        background: theme.palette.primary[200],
                        border: { sm: 0 },
                        boxShadow: { sm: 'none' }
                      }}
                    >
                      <CardContent sx={{ p: 1.5, backgroundColor: theme.palette.secondary.main }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item xs>
                            <Box display="flex" p={0}>
                              <Box
                                sx={{
                                  p: { sm: theme.spacing(0.75, 1.25), xs: theme.spacing(1.25) },
                                  position: 'absolute',
                                  pointerEvents: 'none',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: theme.palette.grey[100]
                                }}
                              >
                                <SearchTwoToneIcon color="inherit" />
                              </Box>
                              <InputBase
                                fullWidth
                                placeholder="Search…"
                                sx={{
                                  '& .MuiInputBase-root': {
                                    color: 'inherit'
                                  },
                                  '& .MuiInputBase-input': {
                                    padding: theme.spacing(1, 1, 1, 0),
                                    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                                    transition: theme.transitions.create('width'),
                                    color: theme.palette.grey[100],
                                    width: { sm: '100%', md: 125 },
                                    mr: 3,
                                    '&:focus': {
                                      width: { md: 225 }
                                    }
                                  }
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                              />
                              <Box
                                sx={{
                                  cursor: 'pointer',
                                  p: theme.spacing(1.25),
                                  alignItems: 'center',
                                  justifyContent: 'flex-end',
                                  display: 'flex',
                                  color: theme.palette.grey[100]
                                }}
                                {...bindToggle(popupState)}
                              >
                                <CloseTwoToneIcon color="inherit" />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Fade>
                )}
              </Popper>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box
          sx={{
            p: { sm: theme.spacing(0.75, 1.25), xs: theme.spacing(1.25) },
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.grey[100]
          }}
        >
          <SearchTwoToneIcon />
        </Box>
        <InputBase
          placeholder="Search…"
          sx={{
            '& .MuiInputBase-root': {
              color: 'inherit',
              mr: 3
            },
            '& .MuiInputBase-input': {
              p: theme.spacing(1, 1, 1, 0),
              pl: `calc(1em + ${theme.spacing(4)})`,
              transition: theme.transitions.create('width'),
              color: theme.palette.grey[100],
              width: { sm: '100%', md: 125 },
              mr: { md: 3 },
              '&:focus': {
                width: { md: 225 }
              }
            }
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
    </Box>
  );
};

export default SearchSection;
