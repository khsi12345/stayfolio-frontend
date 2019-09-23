import React from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImg01 from 'Images/Slider/slider-01.jpg';
import SliderImg02 from 'Images/Slider/slider-02.jpg';
import SliderImg03 from 'Images/Slider/slider-03.jpg';
import SliderImg04 from 'Images/Slider/slider-04.jpg';
import SliderImg05 from 'Images/Slider/slider-05.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  pauseOnFocus: true,
  pauseOnHover: true,
};

const MainSlider = () => (
  <SliderContainer>
    <Slider {...settings}>
      <SliderContents id="1">
        <SliderBox>
          <BoxCategory>PICK</BoxCategory>
          <BoxTitle>돌채</BoxTitle>
          <BoxDescription>
            잠시 쉬어가도 좋은
            <br />
            우도의 하루
          </BoxDescription>
          <BoxButton href="/pick_detail/1">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents id="2">
        <SliderBox>
          <BoxCategory>PICK</BoxCategory>
          <BoxTitle>올모스트홈 스테이</BoxTitle>
          <BoxDescription>
            일상의 여유가
            <br />
            특별한 여행이 되는 순간
          </BoxDescription>
          <BoxButton href="/pick_detail/2">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents id="3">
        <SliderBox>
          <BoxCategory>PICK</BoxCategory>
          <BoxTitle>어라운드 빌리지</BoxTitle>
          <BoxDescription>
            조용한 시골 마을에
            <br />
            감성을 입히다
          </BoxDescription>
          <BoxButton href="/pick_detail/3">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents id="4">
        <SliderBox>
          <BoxCategory>PICK</BoxCategory>
          <BoxTitle>하다책숙소</BoxTitle>
          <BoxDescription>
            무해한 휴식
            <br />
            그리고 책 한 권
          </BoxDescription>
          <BoxButton href="/pick_detail/4">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents id="5">
        <SliderBox>
          <BoxCategory>PICK</BoxCategory>
          <BoxTitle>스테이소도</BoxTitle>
          <BoxDescription>
            우리만의 작은 섬,
            <br />
            소도
          </BoxDescription>
          <BoxButton href="/pick_detail/5">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
    </Slider>
  </SliderContainer>
);

const SliderContainer = styled.div`
  height: 300px;
  width: 100%;
  @media ${device.mobile} {
    height: inherit;
  }
`;

const SliderContents = styled.div`
  height: 400px;
  ${props => props.id === '1' && `background-image: url(${SliderImg01})`};
  ${props => props.id === '2' && `background-image: url(${SliderImg02})`};
  ${props => props.id === '3' && `background-image: url(${SliderImg03})`};
  ${props => props.id === '4' && `background-image: url(${SliderImg04})`};
  ${props => props.id === '5' && `background-image: url(${SliderImg05})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 200px;
  padding: 18px 14px;
  margin: 40px auto;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);

  @media ${device.mobile} {
    width: 400px;
    height: 240px;
    padding: 18px 14px;
  }

  @media ${device.tablet} {
    width: 550px;
    height: 320px;
    padding: 30px;
  }
`;

const BoxCategory = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 10px 0 20px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 2px;
  @media ${device.tablet} {
    margin: 20px 0 30px;
    font-size: 18px;
  }
`;

const BoxTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media ${device.mobile} {
    font-size: 32px;
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    font-size: 38px;
    margin-bottom: 20px;
  }
`;

const BoxDescription = styled.p`
  display: none;
  line-height: 1.42;
  color: #fff;

  @media ${device.mobile} {
    display: block;
    font-size: 14px;
  }

  @media ${device.tablet} {
    display: block;
    font-size: 16px;
  }
`;

const BoxButton = styled.a`
  margin-top: 12px;
  height: 35px;
  padding: 10px 32px;
  border: 1px solid #fff;
  font-size: 13px;
  color: #fff;
  @media ${device.mobile} {
    margin-top: 24px;
  }

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export default MainSlider;
