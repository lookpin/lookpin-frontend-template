import { useRouteSystem } from 'jordy';

import { featureRoutes } from '@features/feat-routes';

export function App() {
  return useRouteSystem(featureRoutes);
}
