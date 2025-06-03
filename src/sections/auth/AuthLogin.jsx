import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// third party
import { useForm } from 'react-hook-form';

// project imports
import { emailSchema, passwordSchema } from 'utils/validationSchema';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ==============================|| AUTH - LOGIN ||============================== //

export default function AuthLogin({ inputSx }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    formState: { errors }
  } = useForm();

  return (
    <form>
      <Stack sx={{ gap: 3 }}>
        <Box>
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
        </Box>

        <Box>
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
          <Stack
            direction="row"
            sx={{ alignItems: 'flex-start', justifyContent: errors.password ? 'space-between' : 'flex-end', width: 1, gap: 1 }}
          >
            {errors.password?.message && <FormHelperText error>{errors.password.message}</FormHelperText>}
            <Link
              component={RouterLink}
              underline="hover"
              variant="subtitle2"
              to="#"
              textAlign="right"
              sx={{ '&:hover': { color: 'primary.dark' }, mt: 0.375, whiteSpace: 'nowrap' }}
            >
              Forgot Password?
            </Link>
          </Stack>
        </Box>
      </Stack>

      <Button type="submit" variant="contained" fullWidth sx={{ minWidth: 120, mt: { xs: 2, sm: 3 }, '& .MuiButton-endIcon': { ml: 1 } }}>
        Sign In
      </Button>
    </form>
  );
}

AuthLogin.propTypes = { inputSx: PropTypes.any };
