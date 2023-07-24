/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { effSharedDummyCompanyLoad } from './sharedDummy.effect';

interface SharedDummyState {
  loading: boolean;
  company: string;
}

export function getInitSharedDummyState(loading = true) {
  const result: SharedDummyState = {
    loading,
    company: '',
  };
  return result;
}

export const sharedDummySlice = createSlice({
  name: 'sharedDummy',
  initialState: getInitSharedDummyState(),
  reducers: {
    reset(_, { payload }: PayloadAction<boolean | undefined>) {
      return getInitSharedDummyState(payload);
    },
    // actions here..
  },
  extraReducers: (builder) => {
    builder
      .addCase(effSharedDummyCompanyLoad.pending, (state) => {
        state.loading = true;
      })
      .addCase(effSharedDummyCompanyLoad.rejected, (state) => {
        state.loading = false;
      })
      .addCase(effSharedDummyCompanyLoad.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.company = payload;
      });
  },
});
