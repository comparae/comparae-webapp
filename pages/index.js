import styled from 'styled-components';
import { Button } from '@comparae/ui';

import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Title>Hello Next.js</Title>
      <Button color="primary">Click Here</Button>
    </Layout>
  );
}

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.primary};
`;
