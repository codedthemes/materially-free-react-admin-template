import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third party
import { useForm } from 'react-hook-form';

// project imports
import { strengthColor, strengthIndicator } from 'utils/passwordStrength';
import { emailSchema, firstNameSchema, lastNameSchema, passwordSchema } from 'utils/validationSchema';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from 'assets/images/social-google.svg';

// ==============================|| AUTH - REGISTER ||============================== //

export default function AuthRegister({ inputSx }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [level, setLevel] = useState();
  const [checked, setChecked] = useState(true);

  // Initialize react-hook-form
  const {
    register,
    watch,
    formState: { errors }
  } = useForm();

  const passwordValue = watch('password');

  useEffect(() => {
    const temp = strengthIndicator(passwordValue);
    setLevel(strengthColor(temp));
  }, [passwordValue]);

  return (
    <>
      <Button
        fullWidth
        sx={{ bgcolor: 'grey.50', color: 'grey.600', textTransform: 'capitalize', '&:hover': { bgcolor: 'grey.100' } }}
        size="large"
        variant="contained"
      >
        <CardMedia component="img" image={Google} alt="google" sx={{ width: 20, mr: { xs: 1, md: 2 } }} />
        Register with Google
      </Button>

      <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        <Stack
          sx={{
            width: 134,
            height: 34,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          OR
        </Stack>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Stack>

      <Typography variant="subtitle1" textAlign="center">
        Sign up with Email address
      </Typography>

      <form>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              {...register('firstname', firstNameSchema)}
              fullWidth
              label="First Name"
              name="firstname"
              error={Boolean(errors.firstname)}
              sx={inputSx}
            />
            {errors.firstname?.message && <FormHelperText error>{errors.firstname.message}</FormHelperText>}
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              {...register('lastname', lastNameSchema)}
              fullWidth
              label="Last Name"
              name="lastname"
              error={Boolean(errors.lastname)}
              sx={inputSx}
            />
            {errors.lastname?.message && <FormHelperText error>{errors.lastname.message}</FormHelperText>}
          </Grid>
          <Grid size={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              {...register('email', emailSchema)}
              placeholder="example@materially.com"
              fullWidth
              label="Email Address / Username"
              error={Boolean(errors.email)}
              sx={inputSx}
            />
            {errors.email?.message && <FormHelperText error>{errors.email.message}</FormHelperText>}
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth error={Boolean(errors.password)}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                {...register('password', passwordSchema)}
                id="outlined-adornment-password"
                type={isPasswordVisible ? 'text' : 'password'}
                name="password"
                label="Password"
                placeholder="Enter your password"
                endAdornment={
                  <InputAdornment position="end" sx={{ cursor: 'pointer' }} onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                    {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                }
                sx={inputSx}
              />
            </FormControl>
            {errors.password?.message && <FormHelperText error>{errors.password.message}</FormHelperText>}
          </Grid>
        </Grid>

        <FormControl fullWidth sx={{ mt: 1 }}>
          <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
            <Box sx={{ width: 85, height: 8, borderRadius: 4, bgcolor: level?.color }} />
            <Typography variant="subtitle1" fontSize="0.75rem">
              {level?.label}
            </Typography>
          </Stack>
        </FormControl>

        <FormControlLabel
          sx={{ mt: 1 }}
          control={<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" />}
          label={
            <Typography variant="subtitle1">
              Agree with &nbsp;
              <Typography component={Link} to="#">
                Terms & Condition.
              </Typography>
            </Typography>
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          endIcon={<CircularProgress color="secondary" size={16} />}
          sx={{ minWidth: 120, mt: { xs: 1, sm: 3 }, '& .MuiButton-endIcon': { ml: 1 } }}
        >
          Register
        </Button>
      </form>
    </>
  );
}

AuthRegister.propTypes = { inputSx: PropTypes.any };
