import { PageTemplate } from '@common/components/PageTemplate';
import { DummyCompanyContainer } from '@shared/containers/DummyCompanyContainer';
import { MainContainer } from '../containers/MainContainer';

function RootPage() {
  return (
    <PageTemplate>
      <MainContainer />
      <DummyCompanyContainer />
    </PageTemplate>
  );
}

export default RootPage;
