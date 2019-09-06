import Layout from '../components/Layout';
import styled from 'styled-components';

export default function Index() {
  return (
    <Layout>
      <Title>Hello Next.js</Title>
    </Layout>
  );
}

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;
