import React from 'react';
import styled from 'styled-components';
import theme from 'Components/Theme';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

const MainWrap = styled.div`
  margin-top: 102px;
  height: 600px;
`;

const Main = () => (
  <>
    <Header />
    <MainWrap>test</MainWrap>
    <Footer />
  </>
);

export default Main;
