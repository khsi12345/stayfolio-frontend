import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { device } from 'Components/Device';
import Layout from 'Components/Layout';
import Magazine from 'Components/Magazine';
import MainSlider from './MainSlider';
import Pick from './Pick';
import 'Style/custom.scss';

const Main = () => (
  <Layout>
    <Helmet>
      <title>WeRbnb</title>
    </Helmet>
    <MainWrap>
      <MainSlider />
    </MainWrap>
    <Magazine offset={0} limit={2} />
    <Pick />
  </Layout>
);

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

export default Main;
