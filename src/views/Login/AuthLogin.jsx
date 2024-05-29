import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from 'assets/images/social-google.svg';

// ==============================|| FIREBASE LOGIN ||============================== //

const AuthLogin = ({ ...rest }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Button
            fullWidth={true}
            sx={{
              fontSize: { md: '1rem', xs: '0.875rem' },
              fontWeight: 500,
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[600],
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: theme.palette.grey[100]
              }
            }}
            size="large"
            variant="contained"
          >
            <img
              src={Google}
              alt="google"
              width="20px"
              style={{
                marginRight: '16px',
                '@media (maxWidth:899.95px)': {
                  marginRight: '8px'
                }
              }}
            />{' '}
            Sign in with Google
          </Button>
        </Grid>
      </Grid>

      <Box alignItems="center" display="flex" mt={2}>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        <Typography color="textSecondary" variant="h5" sx={{ m: theme.spacing(2) }}>
          OR
        </Typography>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Box>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address / Username"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text">
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="subtitle2" color="primary" sx={{ textDecoration: 'none' }}>
                  Forgot Password?
                </Typography>
              </Grid>
            </Grid>

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
