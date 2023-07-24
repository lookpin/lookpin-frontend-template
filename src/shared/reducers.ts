import { combineReducers } from 'redux';
import { sharedDummySlice } from './stores';

export const sharedReducer = combineReducers({
  dummy: sharedDummySlice.reducer,
});
