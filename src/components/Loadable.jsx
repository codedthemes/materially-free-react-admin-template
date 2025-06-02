import { Suspense } from 'react';

// project imports
import Loader from './loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

/**
 * Higher-order component for lazy loading with suspense.
 *
 * @param Component - The component to be lazily loaded.
 * @returns A wrapped component with suspense fallback.
 */
export default function Loadable(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}
