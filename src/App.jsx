import { RouterProvider } from 'react-router-dom';

// project imports
import ThemeCustomization from './themes';

import router from 'routes';

function App() {
  return (
    <ThemeCustomization>
      <RouterProvider router={router} />
    </ThemeCustomization>
  );
}

export default App;
