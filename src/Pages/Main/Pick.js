import React, { memo } from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import PickItem from 'Components/PickItem';

const Pick = memo(() => (
  <PickWrap>
    <PickMainHeader>
          PICK
      <PickMainHeaderSmall>
            매일 하루 한번! 스테이폴리오가 추천합니다!
      </PickMainHeaderSmall>
    </PickMainHeader>
    <PickMain>
      <PickItem />
      <PickItem />
      <PickItem />
      <PickItem />
      <PickItem />
      <PickItem />
    </PickMain>
  </PickWrap>
));

const PickWrap = styled.div`
  margin: 30px auto 15px;
  padding: 0 15px 30px;
  min-height: 934px;
  @media ${device.tablet} {
    width: 750px;
  }
  @media ${device.desktop} {
    width: 970px;
  }
  @media ${device.wide} {
    width: 1170px;
  }
`;

const PickMainHeader = styled.h2`
  margin-bottom: 10px;
  padding: 30px 0 40px;
  border-top: 7px solid ${theme.DarkGrayBG};
  height: 125px;
  font-weight: 700;
  font-size: 32px;
`;
const PickMainHeaderSmall = styled.small`
  display: block;
  margin-top: 3px;
  color: ${theme.FontGray};
  font-weight: 400;
  font-size: 14px;
`;

const PickMain = styled.div`
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  &::before {
    display: table;
    content: ' ';
  }
  &::after {
    display: table;
    content: ' ';
    clear: both;
  }
`;

export default Pick;
