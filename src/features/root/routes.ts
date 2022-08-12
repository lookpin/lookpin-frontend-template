import { ModuleRouteModel } from 'ts-fe-toolkit';
import { PageTemplate } from '@shared/components/PageTemplate';
import { RootPage } from './pages/RootPage';

export const rootRoutes: ModuleRouteModel[] = [
  {
    path: '/',
    exact: true,
    wrap: PageTemplate,
    component: RootPage,
  },
];
