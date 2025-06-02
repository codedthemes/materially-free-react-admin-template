import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MainLayout from 'layouts/MainLayout';

// pages
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/default')));
const SamplePage = Loadable(lazy(() => import('views/pages/SamplePage')));

// utils
const UtilsTypography = Loadable(lazy(() => import('views/components/Typography')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    },
    {
      path: 'components',
      children: [
        {
          path: 'typography',
          element: <UtilsTypography />
        }
      ]
    }
  ]
};

export default MainRoutes;
