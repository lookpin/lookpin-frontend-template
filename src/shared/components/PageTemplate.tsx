import { ReactNode } from 'react';
import styled from 'styled-components';
import { env } from '@common/env';

interface PageTemplateProps {
  children?: ReactNode;
}

const Wrap = styled.section`
  padding: 2em;
  max-width: 1024px;
  margin: 0 auto;
`;

const ModeText = styled.div`
  font-weight: 700;
  text-align: center;
`;

export function PageTemplate({ children }: PageTemplateProps) {
  return (
    <Wrap>
      <ModeText data-cy="mode">{env.mode.toUpperCase()}</ModeText>
      <div>{children}</div>
    </Wrap>
  );
}
