import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@common/store';

const selSharedDummy = (state: RootState) => state.shared.dummy;

export const selSharedDummyLoading = createSelector(
  selSharedDummy,
  (state) => state.loading,
);

export const selSharedDummyCompany = createSelector(
  selSharedDummy,
  (state) => state.company,
);
