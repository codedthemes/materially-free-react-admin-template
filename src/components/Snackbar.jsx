// material-ui
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import MuiSnackbar from '@mui/material/Snackbar';

// project imports
import { closeSnackbar, useGetSnackbar } from 'states/snackbar';

// assets
import CloseIcon from '@mui/icons-material/Close';

// Transition components
const TransitionComponents = {
  SlideLeft: (props) => <Slide {...props} direction="left" />,
  SlideUp: (props) => <Slide {...props} direction="up" />,
  SlideRight: (props) => <Slide {...props} direction="right" />,
  SlideDown: (props) => <Slide {...props} direction="down" />,
  Grow: (props) => <Grow {...props} />,
  Fade
};

// ==============================|| SNACKBAR ||============================== //

export default function Snackbar() {
  const { snackbar } = useGetSnackbar();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeSnackbar();
  };

  if (!snackbar) return null;

  const commonProps = {
    anchorOrigin: snackbar.anchorOrigin,
    open: snackbar.open,
    autoHideDuration: 6000,
    onClose: handleClose
  };

  return snackbar.variant === 'alert' ? (
    <MuiSnackbar {...commonProps}>
      <Alert variant={snackbar.alert.variant} onClose={handleClose} color={snackbar.alert.severity}>
        {snackbar.message}
      </Alert>
    </MuiSnackbar>
  ) : (
    <MuiSnackbar
      {...commonProps}
      message={snackbar.message}
      slots={{ transition: TransitionComponents[snackbar.transition] || Fade }}
      action={
        <>
          <Button size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
}
