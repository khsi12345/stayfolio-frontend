import React, { memo } from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import { device } from 'Components/Device';
import theme from 'Components/Theme';

const MoreList = memo((props) => (
  <MoreListWrap>
    <MoreListContainer>
      <MoreListBox>
        <MoreListImg src={props.im} />
      </MoreListBox>
      <MoreListName>
        <MoreListNameLink>
          {props.name}
        </MoreListNameLink>
      </MoreListName>
    </MoreListContainer>
  </MoreListWrap>
));
const MoreListWrap = styled.div`
  position: relative;
  padding-bottom: 20px;
  font-size: 14px;
  line-height: 1.428571429;
  @media ${device.tablet} {
    width: 33.3333333333%;
    padding: 0 10px 20px 10px;
  }
  @media ${device.desktop} {
    width: 100%;
    padding: 0 0 20px 0;
  }
`;
const MoreListContainer = styled.div`
  font-size: 14px;
  line-height: 1.428571429;
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, .3);
`;
const MoreListBox = styled.a`
  font-size: 14px;
  line-height: 1.428571429;
  cursor: pointer;

`;
const MoreListImg = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const MoreListName = styled.div`
  margin-top: -5px;
  padding: 8px;
  font-size: 14px;
  line-height: 1.428571429;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background-color: ${theme.MainWhite};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const MoreListNameLink = styled.a`
  color: ${theme.FontLessGray2};
  cursor: pointer;
`;
export default MoreList;
