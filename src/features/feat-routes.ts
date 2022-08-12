import { ModuleRouteModel } from 'ts-fe-toolkit';
import { rootRoutes } from './root/routes';

export const featureRoutes: ModuleRouteModel[] = [
  ...rootRoutes,
  {
    path: '/',
    child: [],
  },
];
