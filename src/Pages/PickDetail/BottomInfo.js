import React, { memo } from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import theme from 'Components/Theme';
import { device } from 'Components/Device';

export default memo((props) => (
  <PickDetailMainContentsDescriptionRightBottomWrap>
    <PickDetailMainContentsDescriptionRightBottomContainer>
      <PickDetailMainContentsDescriptionRightIcon
        className="fas fa-map-signs"
        white
      />
      <PickDetailMainContentsDescriptionRightBottomBox>
        {props.info && props.info.full_address}
      </PickDetailMainContentsDescriptionRightBottomBox>
    </PickDetailMainContentsDescriptionRightBottomContainer>
    <PickDetailMainContentsDescriptionRightBottomContainer>
      <PickDetailMainContentsDescriptionRightIcon
        className="fas fa-desktop"
        white
      />
      <PickDetailMainContentsDescriptionRightBottomBox>
        {props.info && props.info.website}
      </PickDetailMainContentsDescriptionRightBottomBox>
    </PickDetailMainContentsDescriptionRightBottomContainer>
    {/* <PickDetailMainContentsDescriptionRightBottomContainer>
      <PickDetailMainContentsDescriptionRightIcon
        className="fas fa-envelope"
        white
      />
      <PickDetailMainContentsDescriptionRightBottomBox>
        {data.pick_info.pick_info_list[0].email}
      </PickDetailMainContentsDescriptionRightBottomBox>
    </PickDetailMainContentsDescriptionRightBottomContainer> */}
    <PickDetailMainContentsDescriptionRightBottomContainer>
      <PickDetailMainContentsDescriptionRightIcon
        className="fab fa-facebook-f"
        white
      />
      <PickDetailMainContentsDescriptionRightBottomBox>
        {props.info && props.info.facebook}
      </PickDetailMainContentsDescriptionRightBottomBox>
    </PickDetailMainContentsDescriptionRightBottomContainer>
    <PickDetailMainContentsDescriptionRightBottomContainer>
      <PickDetailMainContentsDescriptionRightIcon
        className="fas fa-phone-alt"
        white
      />
      <PickDetailMainContentsDescriptionRightBottomBox>
        {props.info && props.info.phone}
      </PickDetailMainContentsDescriptionRightBottomBox>
    </PickDetailMainContentsDescriptionRightBottomContainer>
  </PickDetailMainContentsDescriptionRightBottomWrap>
));
const PickDetailMainContentsDescriptionRightBottomWrap = styled.div`
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
const PickDetailMainContentsDescriptionRightBottomContainer = styled.a`
  display: flex;
  padding: 2px;
  font-size: 14px;
  line-height: 1.428571429;
`;
const PickDetailMainContentsDescriptionRightBottomBox = styled.div`
  font-size: 14px;
  line-height: 1.428571429;
  white-space: wrap;
  text-overflow: ellipsis;
  color: ${theme.MainWhite};
`;
const PickDetailMainContentsDescriptionRightIcon = styled.i`
  margin-right: 5px;
  color: ${(props) => (props.white ? `${theme.MainWhite}` : `${theme.FontLightGray}`)};
`;
