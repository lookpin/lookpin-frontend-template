import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@common/store';
import { featureRoutes } from '@features/feat-routes';

const router = createBrowserRouter(featureRoutes);

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
