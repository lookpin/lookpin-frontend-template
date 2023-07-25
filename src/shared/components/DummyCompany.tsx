import styled from 'styled-components';

interface DummyCompanyProps {
  value?: string;
  loading?: boolean;
}

const Wrap = styled.section`
  margin: 2em auto;
  text-align: center;
`;

export function DummyCompany({ value, loading }: DummyCompanyProps) {
  if (loading) {
    return <Wrap>now loading...</Wrap>;
  }

  return (
    <Wrap>
      Our Company: <strong>{value}</strong>
    </Wrap>
  );
}
