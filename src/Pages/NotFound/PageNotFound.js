import React from 'react';
import styled from 'styled-components';

const PageNotFound = () => (
  <NotFoundWrap>
    <NotFoundTitle>
      404
    </NotFoundTitle>
    <NotFoundBody>SORRY,</NotFoundBody>
    <NotFoundBody>PAGE NOT FOUND</NotFoundBody>
  </NotFoundWrap>
);

const NotFoundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const NotFoundTitle = styled.h3`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const NotFoundBody = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export default PageNotFound;
