import { createAsyncThunk } from '@reduxjs/toolkit';
import repo from '@core/repo';
import { toRootMainImageUiState } from '@features/root/manipulates';
import { RootMainImageUiState } from '@features/root/uiStates';

export const effRootMainImageLoad = createAsyncThunk<
  RootMainImageUiState,
  void
>('RootMainImageLoad', async () => {
  const { data: result } = await repo.root.fetchImage();

  return toRootMainImageUiState(result);
});
