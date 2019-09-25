import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { unitConversion } from 'Util/conversion';
import { device } from 'Components/Device';
import theme from 'Components/Theme';


const PickItem = memo(
  ({
    id, name, eng, des, location, minpr, maxpr, targets, type, img,
  }) =>
  // console.log(img));
  // const [newTargets, setTargets] = useState(targets.toString());
  // useEffect(() => {

    // }, [targets]);
    // const newTargets = targets.toString();
    (
      <PickItemWrap>
        <PickItemContainer>
          <Link to={`/pick_detail/${id}`}>
            <ItemImgWrap>
              <ItemImgContainer>
                <ItemImg src={img} />
              </ItemImgContainer>
              <ItemTextWrap>
                <ItemText>
                  {' '}
                  <Icon className="fas fa-search" />
                  VIEW
                </ItemText>
              </ItemTextWrap>
            </ItemImgWrap>
          </Link>
          <ItemDescriptionWrap>
            <ItemDescriptionTitleWrap>
              <Link to={`/pick_detail/${id}`}>
                <ItemDescriptionTitle>{name}</ItemDescriptionTitle>
              </Link>
              <BookingNow>
                <BookingNowText>BOOKING NOW</BookingNowText>
              </BookingNow>
              <ItemDescriptionTitleEnglish>{eng}</ItemDescriptionTitleEnglish>
            </ItemDescriptionTitleWrap>
            <ItemDescriptionTitleDescription>
              {des}
            </ItemDescriptionTitleDescription>
            <ItemDescriptionTableWrap>
              <ItemDescriptionTableColunm>
                <ItemDescriptionTableContents>
                  <Icon2 className="fas fa-map-marker-alt" />
                  {location}
                </ItemDescriptionTableContents>
                <ItemDescriptionTableContents>
                  <Icon2 className="fas fa-home" />
                  {type}
                </ItemDescriptionTableContents>
              </ItemDescriptionTableColunm>
              <ItemDescriptionTableColunm>
                <ItemDescriptionTableContents>
                  <Icon2 className="fas fa-coins" />
                  {`${unitConversion(minpr)} ~ ${unitConversion(maxpr)}`}
                </ItemDescriptionTableContents>
                <ItemDescriptionTableContents>
                  <Icon2 className="fas fa-star" />
                  {targets.toString()}
                </ItemDescriptionTableContents>
              </ItemDescriptionTableColunm>
              <ItemDescriptionTableColunm />
            </ItemDescriptionTableWrap>
          </ItemDescriptionWrap>
        </PickItemContainer>
      </PickItemWrap>
    )
  ,
);

const PickItemWrap = styled.div`
  position: relative;
  padding: 0 15px;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.desktop} {
    width: 33.3333333333%;
  }
`;
const PickItemContainer = styled.div`
  margin-bottom: 30px;
  border-bottom: 2px solid #e2e3e4;
  background-color: ${theme.MainWhite};
`;
const ItemImgWrap = styled.div`
  position: relative;
  overflow: hidden;
`;
const ItemImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
const ItemImg = styled.img`
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
  ${ItemImgWrap}:hover & {
    transform: scale(1.2, 1.2);
  }
`;
const ItemTextWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  opacity: 0;
  cursor: pointer;
  ${ItemImgWrap}:hover & {
    opacity: 1;
  }
`;
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
`;
const Icon = styled.i`
  line-height: 1;
  color: ${theme.MainWhite};
  margin-right: 5px;
`;
const ItemDescriptionWrap = styled.div`
  position: relative;
  padding: 15px 20px 20px;
  height: 207px;
`;
const ItemDescriptionTitleWrap = styled.h4`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`;
const ItemDescriptionTitle = styled.div`
  color: ${theme.MainBlack};
  cursor: pointer;
`;
const ItemDescriptionTitleEnglish = styled.div`
  padding: 2px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: ${theme.FontLessGray};
`;
const ItemDescriptionTitleDescription = styled.div`
  padding: 5px 0;
  font-size: 13px;
  height: 40px;
  color: ${theme.FontLessGray2};
`;
const ItemDescriptionTableWrap = styled.div`
  margin-top: 10px;
  border-top: 2px solid ${theme.BorderBlack};
`;
const ItemDescriptionTableColunm = styled.div`
  display: flex;
`;
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
`;
const Icon2 = styled.i`
  margin-right: 5px;
  color: ${theme.FontLightGray};
`;
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
  cursor: pointer;
`;
const BookingNowText = styled.a`
  padding-left: 7px;
  color: ${theme.MainWhite};
`;
export default PickItem;
