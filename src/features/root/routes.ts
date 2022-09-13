import { ModuleRouteModel } from 'jordy';
import { PageTemplate } from '@shared/components/PageTemplate';
import { RootPage } from './pages/RootPage';

export const rootRoutes: ModuleRouteModel[] = [
  {
    path: '/',
    wrap: PageTemplate,
    element: RootPage,
  },
];
