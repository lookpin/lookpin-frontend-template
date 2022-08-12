import { createSelector, createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '@common/store';

const selRootMain = (state: RootState) => state.root.main;

export const selRootMainLoading = createSelector(
  selRootMain,
  (state) => state.loading,
);
