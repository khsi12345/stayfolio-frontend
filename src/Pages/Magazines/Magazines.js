import React from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import Layout from 'Components/Layout';
import Magazine from 'Components/Magazine';

const Magazines = () => (
  <Layout>
    <MagazinesWrap>
      <Magazine />
    </MagazinesWrap>
  </Layout>
);

const MagazinesWrap = styled.div`
  margin-top: 70px;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

export default Magazines;
