import { createBrowserRouter } from 'react-router-dom';

// routes
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import PagesRoutes from './PagesRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, AuthRoutes, PagesRoutes], {
  basename: import.meta.env.VITE_APP_BASE_URL
});

export default router;
