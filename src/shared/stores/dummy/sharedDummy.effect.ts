import { createAsyncThunk } from '@reduxjs/toolkit';
import repo from '@core/repo';
import { RootState } from '@common/store';

export const effSharedDummyCompanyLoad = createAsyncThunk<
  string,
  void,
  { state: RootState }
>('SharedDummyCompanyLoad', async () => {
  const result = await repo.dummy.fetchCompany();

  return result;
});
