import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrap = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const ImageBlock = styled.img`
  width: 240px;
  height: 240px;
  animation: ${animation} 5s linear infinite;
`;

interface MainLogoProps {
  children?: ReactNode;
}

export function MainLogo(_: MainLogoProps) {
  return (
    <Wrap>
      <ImageBlock src="assets/logo.svg" alt="main logo" />
    </Wrap>
  );
}
