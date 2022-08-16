import { createAsyncThunk } from '@reduxjs/toolkit';
import repo from '@core/repo';
import { toRootMainImageModel } from '@features/root/manipulates';
import { RootMainImageModel } from '@features/root/models';

export const effRootMainImageLoad = createAsyncThunk<RootMainImageModel, void>(
  'RootMainImageLoad',
  async () => {
    const { data: result } = await repo.root.fetchImage();

    return toRootMainImageModel(result);
  },
);
