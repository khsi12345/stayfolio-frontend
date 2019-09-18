import React from 'react';
import styled from 'styled-components';
import MainSlider from './MainSlider';
import Header from 'Components/Header';
import Magazine from 'Components/Magazine';
import Footer from 'Components/Footer';

const Main = () => (
  <>
    <Header />
    <MainWrap>
      <MainSlider />
    </MainWrap>
    <Magazine />
    <Footer />
  </>
);

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 102px;
`;

export default Main;
