import React, { memo } from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import theme from 'Components/Theme';

export default memo(() => (
  <PickDetailMainContentsDescriptionRightTopWrap>
    <PickDetailMainContentsDescriptionRightTopContainer>
      <PickDetailMainContentsDescriptionRightTopBox>
        <PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-home" />
          {data.pick_info.pick_info_list[0].type}
        </PickDetailMainContentsDescriptionRightTop>
      </PickDetailMainContentsDescriptionRightTopBox>
      <PickDetailMainContentsDescriptionRightTopBox flex>
        <PickDetailMainContentsDescriptionRightTop half>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-user" />
          {data.pick_info.pick_info_list[0].people}
        </PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightTop half>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-bed" />
          {data.pick_info.pick_info_list[0].rooms}
        </PickDetailMainContentsDescriptionRightTop>
      </PickDetailMainContentsDescriptionRightTopBox>
      <PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightIcon className="fas fa-coins" />
        {data.pick_info.pick_info_list[0].price}
      </PickDetailMainContentsDescriptionRightTop>
      <PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightIcon className="fas fa-clock" />
        {data.pick_info.pick_info_list[0].time}
      </PickDetailMainContentsDescriptionRightTop>
      <PickDetailMainContentsDescriptionRightTopBox flex>
        <PickDetailMainContentsDescriptionRightTop half>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-map-marker-alt" />
          {data.pick_info.pick_info_list[0].location}
        </PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightTop half>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-eye" />
          {data.pick_info.pick_info_list[0].style}
        </PickDetailMainContentsDescriptionRightTop>
      </PickDetailMainContentsDescriptionRightTopBox>
      <PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightIcon className="fas fa-star" />
        {data.pick_info.pick_info_list[0].type2}
      </PickDetailMainContentsDescriptionRightTop>
      <PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightIcon className="fas fa-heart" />
        {data.pick_info.pick_info_list[0].activity}
      </PickDetailMainContentsDescriptionRightTop>
    </PickDetailMainContentsDescriptionRightTopContainer>
  </PickDetailMainContentsDescriptionRightTopWrap>
));
const PickDetailMainContentsDescriptionRightTopWrap = styled.div`
  border-top: 2px solid ${theme.BorderLightBlack};
  font-size: 14px;
  line-height: 1.428571429;
`;
const PickDetailMainContentsDescriptionRightTopContainer = styled.div`
  color: ${theme.FontLightGray};
  font-size: 14px;
  line-height: 1.428571429;
`;
const PickDetailMainContentsDescriptionRightTopBox = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
`;
const PickDetailMainContentsDescriptionRightTop = styled.div`
    /* display: ${props => (props.flex ? 'flex' : 'block')}; */
    padding: 7px 0;
    width: ${props => (props.half ? '50%' : '100%')};
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
    letter-spacing: -1px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    color: ${theme.FontLightGray};
`;
const PickDetailMainContentsDescriptionRightIcon = styled.i`
  margin-right: 5px;
  color: ${props =>
    props.white ? `${theme.MainWhite}` : `${theme.FontLightGray}`};
`;
