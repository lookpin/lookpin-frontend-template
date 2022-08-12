/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RootMainState {
  loading: boolean;
}

export function getInitRootMainState(loading = true) {
  const result: RootMainState = {
    loading,
  };
  return result;
}

export const rootMainSlice = createSlice({
  name: 'rootMain',
  initialState: getInitRootMainState(),
  reducers: {
    reset(_, { payload }: PayloadAction<boolean | undefined>) {
      return getInitRootMainState(payload);
    },
    // actions here..
  },
  extraReducers: (builder) => {
    builder.addCase(effSomeAction.pending, (state) => {
      state.loading = true;
    });
  },
});
