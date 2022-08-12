import { ModuleRouteModel } from 'ts-fe-toolkit';
import { RootPage } from './pages/RootPage';

export const rootRoutes: ModuleRouteModel[] = [
  {
    path: '/',
    exact: true,
    component: RootPage,
  },
];
