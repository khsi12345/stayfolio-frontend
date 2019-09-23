import React from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout';
import theme from 'Components/Theme';
import { device } from 'Components/Device';

export default () => (
  <Layout>
    <div>
      <AboutWrap>
        <AboutContainer>
          <Title>
            ABOUT
            <TitleDsc>
              머물고 싶은 좋은 스테이를 큐레이팅하는 스테이폴리오를 소개합니다.
            </TitleDsc>
          </Title>
          <SubTitleWrap>
            <SubTitle>
              여행지에서 머무는 장소,
              <br />
              좋은 잠자리 문화를 선도하고 있는 STAY를 큐레이팅하다.
            </SubTitle>
          </SubTitleWrap>
          <VideoWrap>
            <VideoContainer>
              <Video src="https://www.youtube.com/embed/JNO--8ChtOc?autoplay=1&controls=0&autohide=1&showinfo=0&loop=1&rel=0&playlist=binR9AYMqoE&enablejsapi=1" />
            </VideoContainer>
          </VideoWrap>
          <div>
            <Content>
              머무는 장소는 누구에게나 추억을 선사한다. 이러한 추억이라는 효용을
              극대화하기 위해 장소를 선택하는 다양한 과정이 존재한다. 아무런
              사전 준비없이 발걸음이 닿는 대로 우연히 빌리게 된 숙소에서 낯선
              도시에서의 하룻밤을 보내게 되기도 하고, 때로는 사랑하는 사람과의
              특별한 추억을 만들기 위해 며칠씩 치열한 고민을 거듭하여 장소를
              찾게 되는 경우도 있다.
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                그렇게 여러 경로를 통해 만나게 된 특별한 장소와의 교감 내지는
                공간에서 누릴 수 있는 가치를 공유
              </strong>
              할 수 있는 장을 만들고 싶었다.
            </Content>
            <Content>
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                스테이폴리오(STAYFOLIO)
              </strong>
              는 머물고 싶은 집을 뜻하는 “STAY”와 관점을 갖고 큐레이팅하여
              차곡차곡 모아둔 2절판의 책 “FOLIO”의 합성어로서 어원이 지니는 의미
              그대로
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                머물고 싶은 좋은 스테이를 큐레이팅하여 소개하는 웹진
              </strong>
              이다. 여행지에서 하룻밤을 편안하게 보낼 수 있는 잠자리 공간을
              선별하여 소개하기 위해
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                바람직한 숙박문화를 선도하고 있는 분들의 이야기를 엮어 이를
                소비하는 여행자들과의 소통을 도모하는 채널
              </strong>
              로 기획되었다.
            </Content>
            <Content>
              스테이폴리오(STAYFOLIO)는 웹서핑 및 웹진을 통해 관점을 갖고
              스테이(STAY) 정보를 큐레이팅하여 리뷰하는{' '}
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                “데일리 픽(Daily Pick)”
              </strong>
              과 스테이폴리오 큐레이터가 직접 스테이(STAY)를 방문하여 집주인과의
              인터뷰를 통해 보다 깊은 이야기를 전달하는 매거진 형식의{' '}
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                “위클리 매거진(Weekly Magazine)“
              </strong>
              으로 구분하여 정보를 제공한다.
            </Content>
            <Content>
              스테이폴리오(STAYFOLIO)의 취재는 철저히
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                개인의 열망을 담은 스테이
              </strong>
              를 대상으로 한다. 기업의 형태로 운영되는 곳은 배제한다.
              여행자들에게 좋은 잠자리를 제공해주어 바람직한 여행문화를 선도하고
              있는
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                게스트하우스와 펜션
              </strong>
              , 집 전체를 빌려주는{' '}
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                렌탈하우스
              </strong>
              , 디자인 관점을 갖고 만들어진{' '}
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                부티크호텔
              </strong>
              까지 작지만 독창적인 매력을 지니는 유형의 스테이를 취재의 범주로
              삼는다. 취지와 동일한 맥락에서 규격화한 숙박업소의 틀을 갖추고
              있지 않더라도 지역의 가치에 부합하고 개인의 열망으로 만들어진
              장소로서 여행자의 오감을 만족시킬 수 있는 곳이라면 방 한 칸에
              불과한 공간이라도 역시 취재의 범주에 포함시킨다.
            </Content>
            <Content>
              스테이폴리오(STAYFOLIO)는 좋은 장소, 공간을 만들어가려는 사람들과
              이를 소비하는{' '}
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                실제 여행자를 위한 정보의 교류 및 소통의 장이 되어 지역 문화
                내지는 국내여행 문화의 질적 향상을 도모
              </strong>
              한다. 궁극적으로{' '}
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                지역과 사람, 장소에 대한 가치를 보다 높여주는 스테이에 대한 관심
              </strong>
              과 이러한
              <strong style={{ color: '#73b2af', fontWeight: '700' }}>
                장소를 만들고자 하는 열망을 일깨울 수 있는 의미있는 채널
              </strong>
              로 자리매김하고자 한다.
            </Content>
            <ImgWrap>
              <Img
                desk
                src="https://stayfolio.com/images/about/ec02ac7b.about.jpg"
              />
              <Img
                mobile
                src="https://stayfolio.com/images/about/72ad4131.about_m.jpg"
              />
            </ImgWrap>
          </div>
          <SubTitleWrap>
            <SubTitle>
              We curate great lodging options for you.
              <br />
              Introducing STAYFOLIO
            </SubTitle>
          </SubTitleWrap>
          <div>
            <Content>
              We curate places that promotes a culture of good stays at travel
              destinations
            </Content>
            <Content>
              Each place you stay, not just the travel, gives you unforgettable
              memories. To make the memories more beautiful, you go through
              various steps to choose the right place to stay. You may spend a
              fateful night at a place you decided to visit on a whim, or you
              may create a beautiful memory with someone special at this special
              place you found after a long search. We want to create a place
              where you can share those special memories and the great value of
              the places you discovered through various channels.
            </Content>
            <Content>

            STAYFOLIO is a combination of two words "STAY" and "FOLIO" that means curation of places where you want to stay. It is a webzine that curates and introduces great properties around the country. It was designed to be a channel where people who are leading a culture of good stays can share their stories and that helps travelers select a comfortable place to stay at their travel destinations.

            </Content>
            <Content>

        STAYFOLIO consists of two sections. In the 'Pick' section, we identify great places to stay through web surfing and reviewing webzines, curate them around a specific theme and provide reviews on them. In the 'Magazine' section, our curators visit the places in person for an interview with the owners to find out their behind stories and provide in-depth information of the places to the readers.

            </Content>
            <Content>

        We only cover the places that reflect personal aspirations and dreams. We exclude any places that are operated as a business organization. The places we pick are small but full of charms, such as rental houses, guesthouses and pensions that are leading the sound travel culture by providing affordable but stylish lodging to the travelers, and boutique hotels that are created with a unique theme. Also, a place that may not fit in the category as a standard accommodation can be included, if the place is created by a person's aspirations, aligns with the value of the community and satisfies the five senses of travelers - even if it is nothing but a single room.

            </Content>
            <Content>

        STAYFOLIO strives to improve the quality of the local and travel culture in Korea by serving as a place for people who create and enjoy great places to share valuable information. Ultimately, we would like to become a meaningful channel that stirs up interest in places that improve the value of their local community and awakens aspirations in people to create such a place.

            </Content>
          </div>
        </AboutContainer>
      </AboutWrap>
    </div>
  </Layout>
);

const AboutWrap = styled.div`
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  max-width: 1170px;
  width: 100%;
  margin-top: 70px;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

const AboutContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 15px;
  padding-top: 45px;
  line-height: 1.428571429;
  `;
const Title = styled.div`
  border-top: 5px solid ${theme.BorderLightBlack};
  padding-top:5px;
  font-family: 'Open Sans',sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const TitleDsc = styled.small`
  display: block;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Open Sans',sans-serif;
  line-height: 1.428571429;
  letter-spacing: -1px;
  color: ${theme.FontGray};
`;
const SubTitleWrap = styled.div`
  font-size: 14px;
  line-height: 1.428571429;
`;
const SubTitle = styled.h2`
  margin: 20px 0;
  font-size: 22px;
  @media ${device.tablet} {
    margin: 70px 0;
    text-align: center;
    line-height: 140%;
    color: gray;
  }
`;
const VideoWrap = styled.div`
  position: relative;
  height: 100%;
  line-height: 1.428571429;
  font-size: 14px;
`;
const VideoContainer = styled.div`
  padding-top: 56.25%;
  /* position: relative; */
  width: 100%;
  /* height: 100%; */
  padding: 0;
  line-height: 1.428571429;
  font-size: 14px;
  background-color: yellow;
`;
const Video = styled.iframe`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  background-color: brown;
  background-size: cover;
  @media ${device.tablet} {
    height: 40vh;
  }
  @media ${device.desktop} {
    height: 50vh;
  }
  @media ${device.wide} {
    height: 60vh;
  }
`;
const Content = styled.p`
  font-size: 16px;
  font-weight: lighter;
  line-height: 200%;
  margin: 30px 0 45px;
  color: gray;
`;
const ImgWrap = styled.div`
  max-width: 100%;
  padding-bottom: 30px;
`;
const Img = styled.img`
  max-width: 100%;
  display: ${(props) => (props.mobile ? 'block' : 'none')}; 
  @media ${device.desktop} {
    display: ${(props) => (props.desk ? 'block' : 'none')}; 
  }
`;
