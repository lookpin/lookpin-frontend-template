import { combineReducers } from 'redux';
import { rootMainSlice } from './stores';

export const rootReducer = combineReducers({
  root: rootMainSlice.reducer,
});
