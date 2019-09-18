import React from 'react';
import styled from 'styled-components';
import MainSlider from './MainSlider';
import Header from 'Components/Header';
import Magazine from 'Components/Magazine';
import Pick from './Pick';
import Footer from 'Components/Footer';
import { device } from 'Components/Device';

const Main = () => (
  <>
    <Header />
    <MainWrap>
      <MainSlider />
    </MainWrap>
    <Magazine />
    <Pick />
    <Footer />
  </>
);

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  margin-top: 70px;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

export default Main;
