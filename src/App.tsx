import { renderRouteSystem } from 'ts-fe-toolkit';

import { Redirect, Route } from 'react-router-dom';
import { featureRoutes } from '@features/feat-routes';

export function App() {
  return (
    <>
      {renderRouteSystem(featureRoutes, true, () => (
        <div>error</div>
      ))}
      <Route path="/main" component={() => <Redirect to="/other" />} />
    </>
  );
}
