import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { unitConversion } from 'Util/conversion';
import data from 'Data/pick';
import theme from 'Components/Theme';

export default memo((props) => {
  console.log(props.info);
  const [info, setInfo] = useState();
  // useEffect(() => {
  //   setInfo({ ...props.info });
  // }, [props.info]);
  console.log(info);
  return (
    <PickDetailMainContentsDescriptionRightTopWrap>
      <PickDetailMainContentsDescriptionRightTopContainer>
        <PickDetailMainContentsDescriptionRightTopBox>
          <PickDetailMainContentsDescriptionRightTop>
            <PickDetailMainContentsDescriptionRightIcon className="fas fa-home" />
            {props.info && props.info.place_type}
          </PickDetailMainContentsDescriptionRightTop>
        </PickDetailMainContentsDescriptionRightTopBox>
        <PickDetailMainContentsDescriptionRightTopBox flex>
          <PickDetailMainContentsDescriptionRightTop half>
            <PickDetailMainContentsDescriptionRightIcon className="fas fa-user" />
            {`${props.info && props.info.persons_min} ~ ${props.info && props.info.persons_max} 명`}
          </PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightTop half>
            <PickDetailMainContentsDescriptionRightIcon className="fas fa-bed" border />
            {`${props.info && props.info.room_capacity} 객실`}
          </PickDetailMainContentsDescriptionRightTop>
        </PickDetailMainContentsDescriptionRightTopBox>
        <PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-coins" />
          {`${props.info && unitConversion(props.info.price_min)} ~ ${props.info && unitConversion(props.info.price_max)}`}
        </PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-clock" />
          {`${props.info && props.info.check_in} ~ ${props.info && props.info.check_out}`}
        </PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightTopBox flex>
          <PickDetailMainContentsDescriptionRightTop half>
            <PickDetailMainContentsDescriptionRightIcon className="fas fa-map-marker-alt" />
            {props.info && props.info.city}
          </PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightTop half>
            <PickDetailMainContentsDescriptionRightIcon className="fas fa-eye" border />
            {props.info && props.info.styles.toString()}
          </PickDetailMainContentsDescriptionRightTop>
        </PickDetailMainContentsDescriptionRightTopBox>
        <PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-star" />
          {props.info && props.info.targets.toString()}
        </PickDetailMainContentsDescriptionRightTop>
        <PickDetailMainContentsDescriptionRightTop>
          <PickDetailMainContentsDescriptionRightIcon className="fas fa-heart" />
          {props.info && props.info.amenities}
        </PickDetailMainContentsDescriptionRightTop>
      </PickDetailMainContentsDescriptionRightTopContainer>
    </PickDetailMainContentsDescriptionRightTopWrap>
  );
});
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
  display: ${(props) => (props.flex ? 'flex' : 'block')};
`;
const PickDetailMainContentsDescriptionRightTop = styled.div`
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
const PickDetailMainContentsDescriptionRightIcon = styled.i`
  margin-right: 5px;
  padding-left: ${(props) => (props.border ? '5px' : '0')};
  border-left:${(props) => (props.border ? '1px solid #ebebeb' : 'none')};
  color: ${(props) => (props.white ? `${theme.MainWhite}` : `${theme.FontLightGray}`)};
`;
