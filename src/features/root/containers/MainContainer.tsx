import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@common/store';
import { MainArticle } from '../components/MainArticle';
import { MainImage } from '../components/MainImage';
import { MainLogo } from '../components/MainLogo';
import {
  effRootMainImageLoad,
  selRootMainImage,
  rootMainSlice,
  selRootMainLoading,
} from '../stores';

const { actions } = rootMainSlice;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainContainerProps {}

export function MainContainer(_: MainContainerProps) {
  const dispatch = useDispatch<AppDispatch>();
  const image = useSelector(selRootMainImage);
  const loading = useSelector(selRootMainLoading);

  const handleLoadClick = () => {
    dispatch(effRootMainImageLoad());
  };

  const handleResetClick = () => {
    dispatch(actions.reset());
  };

  return (
    <>
      <MainLogo />
      <MainArticle />
      <MainImage
        loading={loading}
        image={image}
        onLoadClick={handleLoadClick}
        onResetClick={handleResetClick}
      />
    </>
  );
}
