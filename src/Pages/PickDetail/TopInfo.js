import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { unitConversion } from 'Util/conversion';
import data from 'Data/pick';
import theme from 'Components/Theme';

export default memo((props) => {
  const [info, setInfo] = useState();
  return (
    <MainContentsDescriptionRightTopWrap>
      <MainContentsDescriptionRightTopContainer>
        <MainContentsDescriptionRightTopBox>
          <MainContentsDescriptionRightTop>
            <MainContentsDescriptionRightIcon className="fas fa-home" />
            {props.info && props.info.place_type}
          </MainContentsDescriptionRightTop>
        </MainContentsDescriptionRightTopBox>
        <MainContentsDescriptionRightTopBox flex>
          <MainContentsDescriptionRightTop half>
            <MainContentsDescriptionRightIcon className="fas fa-user" />
            {`${props.info && props.info.persons_min} ~ ${props.info && props.info.persons_max} 명`}
          </MainContentsDescriptionRightTop>
          <MainContentsDescriptionRightTop half>
            <MainContentsDescriptionRightIcon className="fas fa-bed" border />
            {`${props.info && props.info.room_capacity} 객실`}
          </MainContentsDescriptionRightTop>
        </MainContentsDescriptionRightTopBox>
        <MainContentsDescriptionRightTop>
          <MainContentsDescriptionRightIcon className="fas fa-coins" />
          {`${props.info && unitConversion(props.info.price_min)} ~ ${props.info && unitConversion(props.info.price_max)}`}
        </MainContentsDescriptionRightTop>
        <MainContentsDescriptionRightTop>
          <MainContentsDescriptionRightIcon className="fas fa-clock" />
          {`${props.info && props.info.check_in} ~ ${props.info && props.info.check_out}`}
        </MainContentsDescriptionRightTop>
        <MainContentsDescriptionRightTopBox flex>
          <MainContentsDescriptionRightTop half>
            <MainContentsDescriptionRightIcon className="fas fa-map-marker-alt" />
            {props.info && props.info.city}
          </MainContentsDescriptionRightTop>
          <MainContentsDescriptionRightTop half>
            <MainContentsDescriptionRightIcon className="fas fa-eye" border />
            {props.info && props.info.styles.toString()}
          </MainContentsDescriptionRightTop>
        </MainContentsDescriptionRightTopBox>
        <MainContentsDescriptionRightTop>
          <MainContentsDescriptionRightIcon className="fas fa-star" />
          {props.info && props.info.targets.toString()}
        </MainContentsDescriptionRightTop>
        <MainContentsDescriptionRightTop>
          <MainContentsDescriptionRightIcon className="fas fa-heart" />
          {props.info && props.info.amenities}
        </MainContentsDescriptionRightTop>
      </MainContentsDescriptionRightTopContainer>
    </MainContentsDescriptionRightTopWrap>
  );
});
const MainContentsDescriptionRightTopWrap = styled.div`
  border-top: 2px solid ${theme.BorderLightBlack};
  font-size: 14px;
  line-height: 1.428571429;
`;
const MainContentsDescriptionRightTopContainer = styled.div`
  color: ${theme.FontLightGray};
  font-size: 14px;
  line-height: 1.428571429;
`;
const MainContentsDescriptionRightTopBox = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
`;
const MainContentsDescriptionRightTop = styled.div`
    /* display: ${(props) => (props.flex ? 'flex' : 'block')}; */
    padding: 7px 0;
    width: ${(props) => (props.half ? '50%' : '100%')};
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
    letter-spacing: -1px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${theme.FontLightGray};
`;
const MainContentsDescriptionRightIcon = styled.i`
  margin-right: 5px;
  padding-left: ${(props) => (props.border ? '5px' : '0')};
  border-left:${(props) => (props.border ? '1px solid #ebebeb' : 'none')};
  color: ${(props) => (props.white ? `${theme.MainWhite}` : `${theme.FontLightGray}`)};
`;
