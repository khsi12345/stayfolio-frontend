import React, {memo} from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import {device} from 'Components/Device';
import theme from 'Components/Theme';

const PickItem = memo( () => {
  return (
    <PickItemWrap>
      <PickItemContainer>
        <ItemImgWrap>
          <ItemImgContainer>
            <ItemImg src={data.pick_info.pick_info_list[0].thumbnail_img} />
          </ItemImgContainer>
          <ItemTextWrap>
            <ItemText> <Icon className="fas fa-search" />VIEW</ItemText>
          </ItemTextWrap>
        </ItemImgWrap>
        <ItemDescriptionWrap>
          <ItemDescriptionTitleWrap>
            <ItemDescriptionTitle>{data.pick_info.pick_info_list[0].name}</ItemDescriptionTitle>
            <BookingNow>
              <BookingNowText>BOOKING NOW</BookingNowText>
            </BookingNow>
            <ItemDescriptionTitleEnglish>{data.pick_info.pick_info_list[0].english_name}</ItemDescriptionTitleEnglish>
          </ItemDescriptionTitleWrap>
          <ItemDescriptionTitleDescription>{data.pick_info.pick_info_list[0].descript}</ItemDescriptionTitleDescription>
          <ItemDescriptionTableWrap>
            <ItemDescriptionTableColunm>
              <ItemDescriptionTableContents>
                <Icon2 className="fas fa-map-marker-alt" />
                {data.pick_info.pick_info_list[0].location}
              </ItemDescriptionTableContents>
              <ItemDescriptionTableContents>
                <Icon2 className="fas fa-home" />
                {data.pick_info.pick_info_list[0].type}
              </ItemDescriptionTableContents>
            </ItemDescriptionTableColunm>
            <ItemDescriptionTableColunm>
              <ItemDescriptionTableContents>
                <Icon2 className="fas fa-coins" />
                {data.pick_info.pick_info_list[0].price}
              </ItemDescriptionTableContents>
              <ItemDescriptionTableContents>
                <Icon2 className="fas fa-star" />
                {data.pick_info.pick_info_list[0].type2}
              </ItemDescriptionTableContents>
            </ItemDescriptionTableColunm>
            <ItemDescriptionTableColunm />
          </ItemDescriptionTableWrap>
        </ItemDescriptionWrap>
      </PickItemContainer>
    </PickItemWrap>
  )
});

const PickItemWrap = styled.div`
  position: relative;
  padding: 0 15px;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.desktop} {
    width: 33.3333333333%;
  }
`
const PickItemContainer = styled.div`
  margin-bottom: 30px;
  border-bottom: 2px solid #e2e3e4;
  background-color: ${theme.MainWhite};
`
const ItemImgWrap = styled.div`
  position: relative;
  overflow: hidden;
`
const ItemImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
`
const ItemImg = styled.img`
  width: 100%;
  transition: all .3s cubic-bezier(0.25, .8, .4, .95);
  ${ItemImgWrap}:hover & {
  transform: scale(1.2,1.2);
  }
`
const ItemTextWrap = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  text-align: center;
  opacity: 0;
  cursor: pointer;
  ${ItemImgWrap}:hover & {
    opacity: 1;
  }
`
const ItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  color: ${theme.MainWhite};
  border: 2px solid ${theme.MainWhite};
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
`
const Icon = styled.i`
  line-height: 1;
  color: ${theme.MainWhite};
  margin-right: 5px;
`
const ItemDescriptionWrap = styled.div`
  position: relative;
  padding: 15px 20px 20px;
  height: 207px;
`
const ItemDescriptionTitleWrap = styled.h4`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`
const ItemDescriptionTitle = styled.a`
  color: ${theme.MainBlack};
`
const ItemDescriptionTitleEnglish = styled.div`
  padding: 2px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: ${theme.FontLessGray};
`
const ItemDescriptionTitleDescription = styled.div`
  padding: 5px 0;
  font-size: 13px;
  height: 40px;
  color: ${theme.FontLessGray2};
`
const ItemDescriptionTableWrap = styled.div`
  margin-top: 10px;
  border-top: 2px solid ${theme.BorderBlack};
`
const ItemDescriptionTableColunm = styled.div`
  display:flex;
`
const ItemDescriptionTableContents = styled.div`
  padding: 7px 0;
  width: 50%;
  border-bottom: 1px solid ${theme.BorderLightGray};
  color: ${theme.FontLightGray};
  font-size: 13px;
  line-height: 1.42;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -1;
`
const Icon2 = styled.i`
  margin-right: 5px;
  color: ${theme.FontLightGray};
`
const BookingNow = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  height: 34px;
  top: 23px;
  right: -5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.1;
  align-items: center;
  background-image: url('https://stayfolio.com/images/pick/5d995e0a.pick-booking@3x.png');
  background-size: cover;
`
const BookingNowText = styled.a`
  padding-left: 7px;
  color: ${theme.MainWhite};
`
export default PickItem;