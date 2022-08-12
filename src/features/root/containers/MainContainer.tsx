import { MainArticle } from '../components/MainArticle';
import { MainLogo } from '../components/MainLogo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainContainerProps {}

export function MainContainer(_: MainContainerProps) {
  return (
    <>
      <MainLogo />
      <MainArticle />
    </>
  );
}
