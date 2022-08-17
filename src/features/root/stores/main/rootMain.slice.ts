/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { effRootMainImageLoad } from './rootMain.effect';

interface RootMainState {
  loading: boolean;

  image: string;
  categoryId: string;
}

export function getInitRootMainState(loading = false) {
  const result: RootMainState = {
    loading,

    image: '',
    categoryId: '',
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
    builder.addCase(effRootMainImageLoad.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(effRootMainImageLoad.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(effRootMainImageLoad.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.image = payload.image;
      state.categoryId = payload.categoryId;
    });
  },
});
