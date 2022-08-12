import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainLogoProps {
  children?: ReactNode;
}

const Wrap = styled.div``;

export function MainLogo(_: MainLogoProps) {
  return <Wrap>360도 돌아갈 로고</Wrap>;
}
