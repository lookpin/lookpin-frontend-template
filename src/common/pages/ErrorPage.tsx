import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 3em;
`;

function ErrorPage() {
  return <Box>404 Error 🥲</Box>;
}

export default ErrorPage;
