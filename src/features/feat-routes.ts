import { RouteObject } from 'react-router-dom';
import { rootRoutes } from './root/routes';
import ErrorPage from '../common/pages/ErrorPage';

export const featureRoutes: RouteObject[] = [
  ...rootRoutes,
  {
    path: '*',
    Component: ErrorPage,
  },
];
