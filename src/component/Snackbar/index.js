import React from 'react';

// material-ui
import { Button, IconButton, Fade, Grow, Slide } from '@mui/material';
import MuiSnackbar from '@mui/material/Snackbar';

// third-party
import { useSelector } from 'react-redux';

// project import
import Alert from '../Alert';

// assets
import CloseIcon from '@mui/icons-material/Close';

function TransitionSlideLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionSlideUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionSlideRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionSlideDown(props) {
  return <Slide {...props} direction="down" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

const transition = {
  SlideLeft: TransitionSlideLeft,
  SlideUp: TransitionSlideUp,
  SlideRight: TransitionSlideRight,
  SlideDown: TransitionSlideDown,
  Grow: GrowTransition,
  Fade: Fade
};

// ==============================|| SNACKBAR ||============================== //

const Snackbar = () => {
  const [open, setOpen] = React.useState(false);
  const snackbarInitial = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(snackbarInitial.open);
  }, [snackbarInitial.action, snackbarInitial.open]);

  return (
    <>
      {snackbarInitial.variant === 'default' && (
        <MuiSnackbar
          anchorOrigin={snackbarInitial.anchorOrigin}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbarInitial.message}
          TransitionComponent={transition[snackbarInitial.transition]}
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      )}
      {snackbarInitial.variant === 'alert' && (
        <MuiSnackbar anchorOrigin={snackbarInitial.anchorOrigin} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert variant="filled" onClose={handleClose} severity={snackbarInitial.alertSeverity}>
            {snackbarInitial.message}
          </Alert>
        </MuiSnackbar>
      )}
    </>
  );
};

export default Snackbar;
