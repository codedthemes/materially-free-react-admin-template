import { RouterProvider } from 'react-router-dom';

// project imports
import Snackbar from 'components/Snackbar';
import ThemeCustomization from './themes';

import router from 'routes';

function App() {
  return (
    <ThemeCustomization>
      <RouterProvider router={router} />
      <Snackbar />
    </ThemeCustomization>
  );
}

export default App;
