import { sharedReducer } from '@shared/reducers';
import { rootReducer } from './root/reducers';

export const featureReducers = {
  shared: sharedReducer,
  root: rootReducer,
};
