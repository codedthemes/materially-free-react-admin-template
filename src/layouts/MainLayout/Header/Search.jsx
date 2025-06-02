import { useEffect, useState } from 'react';

// material-ui
import { useTheme, useMediaQuery, alpha } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// assets
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const color = 'grey.100';

// ==============================|| SEARCH ||============================== //

export default function Search() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  useEffect(() => {
    if (!isMobile && anchorEl) {
      setAnchorEl(null);
    }
  }, [isMobile, anchorEl]);

  return isMobile ? (
    <>
      <IconButton size="small" aria-describedby={id} onClick={handleClick}>
        <SearchIcon sx={{ color }} />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        disablePortal
        modifiers={[{ name: 'offset', options: { offset: [0, 12] } }]}
        sx={{ width: '100vw', zIndex: 1300 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'grey.300', p: 2, width: 1 }}>
          <SearchIcon sx={{ color, mr: 1 }} />
          <TextField
            autoFocus
            fullWidth
            variant="standard"
            placeholder="Search..."
            slotProps={{ input: { disableUnderline: true, style: { color: theme.palette.common.white } } }}
          />
          <IconButton onClick={handleClick}>
            <CloseIcon sx={{ color }} />
          </IconButton>
        </Box>
      </Popper>
    </>
  ) : (
    <TextField
      placeholder="Search..."
      id="outlined-start-adornment"
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color }} />
            </InputAdornment>
          )
        }
      }}
      sx={{
        mr: 3,
        bgcolor: alpha(theme.palette.common.white, 0.15),
        ':hover': { bgcolor: alpha(theme.palette.common.white, 0.25) },
        borderRadius: 1,
        '& .MuiInputBase-input': {
          transition: theme.transitions.create('width'),
          color: 'grey.100',
          width: { sm: 100, md: 125 },
          mr: { md: 3 },
          '&:focus': { width: { md: 225 } }
        },
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
      }}
    />
  );
}
