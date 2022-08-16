import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@common/store';

const selRootMain = (state: RootState) => state.root.main;

export const selRootMainLoading = createSelector(
  selRootMain,
  (state) => state.loading,
);

export const selRootMainImage = createSelector(
  selRootMain,
  (state) => state.image,
);
