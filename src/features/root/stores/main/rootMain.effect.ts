import { createAsyncThunk } from '@reduxjs/toolkit';
import repo from '@core/repo';
import { ImageMockupEntity } from '@core/entitiy/common.entitiy';

export const effRootMainImageLoad = createAsyncThunk<ImageMockupEntity, void>(
  'RootMainImageLoad',
  async () => {
    const { data: result } = await repo.root.fetchImage();

    return result;
  },
);
