import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainArticleProps {
  children?: ReactNode;
}

const Wrap = styled.div`
  text-align: center;
`;

export function MainArticle(_: MainArticleProps) {
  return (
    <Wrap>
      <h1>
        ✨ Welcome ✨ <br />
        It is React Template
      </h1>

      <h3>
        <a href="https://github.com/chkim116/react-new-template/blob/main/README.md">
          Read me
        </a>
      </h3>
    </Wrap>
  );
}
