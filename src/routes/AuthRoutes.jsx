import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layouts/minimalLayout';

// auth
const LoginPage = Loadable(lazy(() => import('views/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('views/auth/Register')));

// ==============================|| AUTH ROUTES ||============================== //

const AuthRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '',
      element: <LoginPage />
    },
    {
      path: 'login',
      element: <LoginPage />
    },
    {
      path: 'register',
      element: <RegisterPage />
    }
  ]
};

export default AuthRoutes;
