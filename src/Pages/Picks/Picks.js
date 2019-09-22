import React, { memo } from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import PickItem from 'Components/PickItem';
import Pagination from 'Components/Pagination';
import theme from 'Components/Theme';
import { device } from 'Components/Device';


const Picks = memo(() => (
  <Layout>
    <PickWrap>
      <PickMainWrap>
        <PickMainHeader>
            PICK
          <PickMainHeaderSmall>
              매일 하루 한번! 스테이폴리오가 추천합니다!

          </PickMainHeaderSmall>
        </PickMainHeader>
        <PickMainContainer>
          <PickMain>
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
            <PickItem />
          </PickMain>
          <Pagination />
        </PickMainContainer>
      </PickMainWrap>
    </PickWrap>
  </Layout>
));

const PickWrap = styled.div`
  margin-top: 162px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
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

const PickMainWrap = styled.div``;
const PickMainHeader = styled.h2`
  margin-top: 60px;
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
const PickMainContainer = styled.div``;
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
export default Picks;
