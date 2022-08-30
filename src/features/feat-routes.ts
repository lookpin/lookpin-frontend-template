import { ModuleRouteModel } from 'jordy';
import { rootRoutes } from './root/routes';

export const featureRoutes: ModuleRouteModel[] = [
  ...rootRoutes,
  {
    path: '/',
    children: [],
  },
];
