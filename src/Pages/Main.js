import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Components/Theme';

const MainWrap = styled.div`
  border: 1px solid ${theme.FontDarkGray};
  background-color: ${theme.GrayBG};
`;

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <MainWrap>hihi</MainWrap>
      </>
    </ThemeProvider>
  );
};

export default Main;
