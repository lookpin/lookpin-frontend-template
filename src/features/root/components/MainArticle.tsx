import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainArticleProps {
  children?: ReactNode;
}

const Wrap = styled.div``;

export function MainArticle(_: MainArticleProps) {
  return <Wrap>아티클이 됨</Wrap>;
}
