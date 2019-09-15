import styled from 'styled-components';
import { Button } from '@comparae/ui';

import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Title>Comparaê</Title>
    </Layout>
  );
}

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;
