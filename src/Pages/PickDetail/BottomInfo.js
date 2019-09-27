import React, { memo } from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import theme from 'Components/Theme';
import { device } from 'Components/Device';

export default memo((props) => (
  <MainContentsDescriptionRightBottomWrap>
    <MainContentsDescriptionRightBottomContainer>
      <MainContentsDescriptionRightIcon
        className="fas fa-map-signs"
        white
      />
      <MainContentsDescriptionRightBottomBox>
        {props.info && props.info.full_address}
      </MainContentsDescriptionRightBottomBox>
    </MainContentsDescriptionRightBottomContainer>
    <MainContentsDescriptionRightBottomContainer>
      <MainContentsDescriptionRightIcon
        className="fas fa-desktop"
        white
      />
      <MainContentsDescriptionRightBottomBox>
        {props.info && props.info.website}
      </MainContentsDescriptionRightBottomBox>
    </MainContentsDescriptionRightBottomContainer>
    {/* <MainContentsDescriptionRightBottomContainer>
      <MainContentsDescriptionRightIcon
        className="fas fa-envelope"
        white
      />
      <MainContentsDescriptionRightBottomBox>
        {data.pick_info.pick_info_list[0].email}
      </MainContentsDescriptionRightBottomBox>
    </MainContentsDescriptionRightBottomContainer> */}
    <MainContentsDescriptionRightBottomContainer>
      <MainContentsDescriptionRightIcon
        className="fab fa-facebook-f"
        white
      />
      <MainContentsDescriptionRightBottomBox>
        {props.info && props.info.facebook}
      </MainContentsDescriptionRightBottomBox>
    </MainContentsDescriptionRightBottomContainer>
    <MainContentsDescriptionRightBottomContainer>
      <MainContentsDescriptionRightIcon
        className="fas fa-phone-alt"
        white
      />
      <MainContentsDescriptionRightBottomBox>
        {props.info && props.info.phone}
      </MainContentsDescriptionRightBottomBox>
    </MainContentsDescriptionRightBottomContainer>
  </MainContentsDescriptionRightBottomWrap>
));
const MainContentsDescriptionRightBottomWrap = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: ${theme.LightGrayBG};
  color: ${theme.MainWhite};
  font-size: 14px;
  line-height: 1.428571429;
  @media ${device.tablet} {
    margin-top: 20px;
    padding: 10px;
    background-color: ${theme.LightGrayBG};
    color: ${theme.MainWhite};
    font-size: 14px;
    line-height: 1.428571429;
  }
`;
const MainContentsDescriptionRightBottomContainer = styled.a`
  display: flex;
  padding: 2px;
  font-size: 14px;
  line-height: 1.428571429;
`;
const MainContentsDescriptionRightBottomBox = styled.div`
  font-size: 14px;
  line-height: 1.428571429;
  white-space: wrap;
  text-overflow: ellipsis;
  color: ${theme.MainWhite};
`;
const MainContentsDescriptionRightIcon = styled.i`
  margin-right: 5px;
  color: ${(props) => (props.white ? `${theme.MainWhite}` : `${theme.FontLightGray}`)};
`;
