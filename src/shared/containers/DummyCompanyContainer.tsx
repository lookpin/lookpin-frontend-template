import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@common/store';
import { DummyCompany } from '@shared/components/DummyCompany';
import {
  effSharedDummyCompanyLoad,
  selSharedDummyCompany,
  selSharedDummyLoading,
} from '@shared/stores';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DummyCompanyContainerProps {}

export function DummyCompanyContainer(_: DummyCompanyContainerProps) {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selSharedDummyLoading);
  const state = useSelector(selSharedDummyCompany);

  useEffect(() => {
    dispatch(effSharedDummyCompanyLoad());
  }, [dispatch]);

  return <DummyCompany loading={loading} value={state} />;
}
