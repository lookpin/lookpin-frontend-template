import { renderRouteSystem } from 'ts-fe-toolkit';

import { featureRoutes } from '@features/feat-routes';

export function App() {
  return (
    <>
      {renderRouteSystem(featureRoutes, true, () => (
        <div>error</div>
      ))}
    </>
  );
}
