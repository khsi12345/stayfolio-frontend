import React from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImg from 'Images/Slider/slider-01.jpg';

const settings = {
  // dots: true,
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
      <SliderContents>
        <SliderBox>
          <BoxCategory>CARE BY</BoxCategory>
          <BoxTitle>THE CABOCHON HOTEL</BoxTitle>
          <BoxDescription>
              지나간 시간의
            <br />
              아름다움을 담다
          </BoxDescription>
          <BoxButton href="/">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents>
        <SliderBox>
          <BoxCategory>CARE BY</BoxCategory>
          <BoxTitle>THE CABOCHON HOTEL</BoxTitle>
          <BoxDescription>
              지나간 시간의
            <br />
              아름다움을 담다
          </BoxDescription>
          <BoxButton href="/">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents>
        <SliderBox>
          <BoxCategory>CARE BY</BoxCategory>
          <BoxTitle>THE CABOCHON HOTEL</BoxTitle>
          <BoxDescription>
              지나간 시간의
            <br />
              아름다움을 담다
          </BoxDescription>
          <BoxButton href="/">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents>
        <SliderBox>
          <BoxCategory>CARE BY</BoxCategory>
          <BoxTitle>THE CABOCHON HOTEL</BoxTitle>
          <BoxDescription>
              지나간 시간의
            <br />
              아름다움을 담다
          </BoxDescription>
          <BoxButton href="/">SHOW NOW</BoxButton>
        </SliderBox>
      </SliderContents>
      <SliderContents>
        <SliderBox>
          <BoxCategory>CARE BY</BoxCategory>
          <BoxTitle>THE CABOCHON HOTEL</BoxTitle>
          <BoxDescription>
              지나간 시간의
            <br />
              아름다움을 담다
          </BoxDescription>
          <BoxButton href="/">SHOW NOW</BoxButton>
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
  background-image: url(${SliderImg});
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
