import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderImg from 'Images/Slider/slider-01.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const MainSlider = () => {
  return (
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
};

const SliderContainer = styled.div`
  width: 100%;
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
  margin: 40px auto;
  width: 550px;
  height: 320px;
  padding: 30px;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
`;

const BoxCategory = styled.p`
  color: #fff;
  margin: 20px 0 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 2px;
`;

const BoxTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
`;

const BoxDescription = styled.p`
  font-size: 16px;
  line-height: 1.42;
  color: #fff;
`;

const BoxButton = styled.a`
  margin-top: 50px;
  height: 35px;
  padding: 10px 32px;
  border: 1px solid #fff;
  font-size: 13px;
  color: #fff;
`;

export default MainSlider;
