import React, { memo, useState } from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import Layout from 'Components/Layout';
import SliderMain from 'Components/SliderMain';
import KakaoMap from 'Components/Map';
import theme from 'Components/Theme';
import { device } from 'Components/Device';
import TopInfo from './TopInfo';
import BottomInfo from './BottomInfo';
import MoreList from './MoreList';
import Comment from './Comment';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PickDetail = memo(() => (
  <Layout>
    <PickDetailWrap>
      <PickDetailMainWrap>
        <PickDetailMainHeader>
            PICK
          <PickDetailMainHeaderSmall>
              매일 하루 한번! 스테이폴리오가 추천합니다!
          </PickDetailMainHeaderSmall>
        </PickDetailMainHeader>
        <PickDetailMainContainer>
          <PickDetailMainBox>
            <PickDetailMainContentsWrap>
              <PickDetailMainContentsContainer>
                <PickDetailMainContentsHeaderWrap>
                  <PickDetailMainContentsHeaderNameWrap>
                    <PickDetailMainContentsHeaderName>
                      {data.pick_info.pick_info_list[0].english_name}
                      <PickDetailMainContentsHeaderNameIcons>
                        <PickDetailMainContentsHeaderNameIcon facebook />
                        <PickDetailMainContentsHeaderNameIcon />
                      </PickDetailMainContentsHeaderNameIcons>
                    </PickDetailMainContentsHeaderName>
                  </PickDetailMainContentsHeaderNameWrap>
                  <PickDetailMainContentsAdress>
                    {data.pick_info.pick_info_list[0].location_adress}
                  </PickDetailMainContentsAdress>
                  <PickDetailMainContentsHeaderDescription>
                    {data.pick_info.pick_info_list[0].descript}
                  </PickDetailMainContentsHeaderDescription>
                </PickDetailMainContentsHeaderWrap>
                <SliderMain />
                <PickDetailMainContentsDescriptionWrap>
                  <PickDetailMainContentsDescriptionContainer>
                    <PickDetailMainContentsDescriptionLeftWrap>
                      <PickDetailMainContentsDescriptionLeftContainer>
                        <PickDetailMainContentsDescriptionLeftTitle>
                            더욱 특별한 제주 여행이 필요하다면
                        </PickDetailMainContentsDescriptionLeftTitle>
                        <PickDetailMainContentsDescriptionLeft>
                            제주를 바라보는 섬, 성산에서 배를 타고 바다를 느끼면
                            이내 닿는 곳 우도에 돌집 스테이, 돌채가 문을 열었다.
                            제주의 돌집이 주는 묵직하고 차분한 여운과 고요한
                            우도의 밤을 경험할 수 있는 돌채는 특별히 무엇을 하지
                            않아도 평온한 휴식의 시간을, 일상에서 수고로움으로
                            지친 마음에 작은 위로를 건네준다. 이 공간을 만든
                            호스트는 제주 여행 속 진짜 제주를 만날 수 있는
                            우도에서 오랜 시간 자연스럽게 뿌리내릴 공간을 만들고
                            싶었다.
                          <br />
                          <br />
                            돌채의 공간은 가족이 머물기 좋은 ROOM A와, 2인 객실
                            ROOM B로 구성된다. A룸은 거실과 주방, 침실로 나뉘며
                            대형 사이즈의 욕조 및 사우나 시설이 갖추어져 있다.
                            객실 안에는 안마 의자와 스타일러 등을 구비해 여행의
                            편의를 높였다. B동은 주방과 침실, 대형 사이즈의
                            욕조의 공간 구성이다. 두 객실 모두 돌담으로 둘러
                            쌓인 정원, 야외에서 즐길 수 있는 바베큐장을 함께
                            이용할 수 있다.
                          <br />
                          <br />
                            머무는 이들을 위해 돌채에서는 매일 아침 전복죽 조식
                            서비스와, 픽업을 제공한다. 반나절 머무는 여행지가
                            호스트가 추천해주는 가이드를 따라 아닌 돌채에서
                            머무르며 느껴보는 우도는 또 다른 매력의 제주를
                            느껴볼 수 있는 기회가 될 것이다. 우도의 풍경이
                            곳곳이 품고 있는 특별한 이야기, 마을 깊숙이 들어와야
                            보이는 진짜 우도를 돌채를 통해 경험해보자.
                          <br />
                          <br />
                            Designed by {data.pick_info.pick_info_list[0].name}
                          <br />
                            Photo by WEBMATE
                        </PickDetailMainContentsDescriptionLeft>
                      </PickDetailMainContentsDescriptionLeftContainer>
                    </PickDetailMainContentsDescriptionLeftWrap>
                    <PickDetailMainContentsDescriptionRightWrap>
                      <TopInfo />
                      <BottomInfo />
                    </PickDetailMainContentsDescriptionRightWrap>
                  </PickDetailMainContentsDescriptionContainer>
                  <div style={{ height: '480px', overflow: 'hidden' }}>
                    <KakaoMap />
                  </div>
                  <Comment />
                </PickDetailMainContentsDescriptionWrap>
              </PickDetailMainContentsContainer>
              <PicksToMoveWrap>
                <PciksToMoveContainer>
                  <PickDetailSideListPageMove href="/" alt="goback">
                      리스트 페이지로 돌아가기
                  </PickDetailSideListPageMove>
                </PciksToMoveContainer>
              </PicksToMoveWrap>
            </PickDetailMainContentsWrap>
          </PickDetailMainBox>
          <PickDetailSideBox>
            <PickDetailSideBookingNow href="/" alt="booking">
                BOOKING NOW
            </PickDetailSideBookingNow>
            <PickDetailSideListPageMove href="/" alt="goback" none>
                리스트 페이지로 돌아가기
            </PickDetailSideListPageMove>
            <PickDetailSidePicksWrap>
              <PickDetailSidePicksContainer>
                <PickDetailSidePicksText>
                    MORE STAYFOLIO PICK
                </PickDetailSidePicksText>
                <PickDetailSidePicksTitleLine />
                <PickDetailSidePicksBox>
                  <MoreList />
                  <MoreList />
                  <MoreList />
                  <MoreList />
                  <MoreList />
                  <MoreList />
                  <MoreList />
                  <MoreList />
                </PickDetailSidePicksBox>
              </PickDetailSidePicksContainer>
            </PickDetailSidePicksWrap>
          </PickDetailSideBox>
        </PickDetailMainContainer>
      </PickDetailMainWrap>
    </PickDetailWrap>
  </Layout>
));

const PickDetailWrap = styled.div`
  margin-top: 103px;
  padding: 0 10px;
  @media ${device.tablet} {
    margin-top: 162px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
    width: 750px;
    min-height: 934px;
  }
  @media ${device.desktop} {
    width: 970px;
  }
  @media ${device.wide} {
    width: 1170px;
  }
`;

const PickDetailMainWrap = styled.div`
  padding-bottom: 100px;
`;
const PickDetailMainHeader = styled.h2`
  display: none;
  @media ${device.tablet} {
    display: block;
    margin-top: 60px;
    margin-bottom: 10px;
    padding: 30px 0 40px;
    border-top: 7px solid ${theme.DarkGrayBG};
    height: 125px;
    font-weight: 700;
    font-size: 32px;
  }
`;
const PickDetailMainHeaderSmall = styled.small`
  display: block;
  margin-top: 3px;
  color: ${theme.FontGray};
  font-weight: 400;
  font-size: 14px;
`;
const PickDetailMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
const PickDetailMainBox = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  @media ${device.tablet} {
    padding-right: 15px;
  }
  @media ${device.desktop} {
    width: 75%;
  }
`;
const PickDetailMainContentsWrap = styled.div`
  padding-bottom: 0;
  @media ${device.tablet} {
    padding-right: 0;
    border-right: 0;
    padding-bottom: 15px;
  }
  @media ${device.desktop} {
    padding-right: 30px;
    border-right: 1px solid ${theme.BorderMoreLightGray};
  }
`;
const PickDetailMainContentsContainer = styled.div`
  padding: 15px;
  background-color: ${theme.MainWhite};
  line-height: 1.428571429;
  font-size: 14px;
  @media ${device.tablet} {
    padding: 20px;
  }
  @media ${device.desktop} {
    padding: 30px;
  }
`;
const PickDetailMainContentsHeaderWrap = styled.div`
  position: relative;
  border-top: 5px solid ${theme.BorderBlack};
`;
const PickDetailMainContentsHeaderNameWrap = styled.div`
  line-height: 1.428571429;
  font-size: 14px;
`;
const PickDetailMainContentsHeaderName = styled.h2`
  margin: 10px 0;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.1;
`;
const PickDetailMainContentsHeaderNameIcons = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-left: -3px;
`;
const PickDetailMainContentsHeaderNameIcon = styled.span`
  display: inline-block;
  margin-left: 10px;
  padding-bottom: 5px;
  width: 24px;
  height: 24px;
  color: ${theme.FooterGrayFont};
  cursor: pointer;
  background: ${(props) => (props.facebook
    ? 'url(https://stayfolio.com/images/pick/4b8f7095.ic_fb.png) no-repeat'
    : 'url(https://stayfolio.com/images/pick/c9343da8.ic_clip.png) no-repeat')};
`;
const PickDetailMainContentsAdress = styled.small`
  display: none;
  @media ${device.wide} {
    display: block;
    padding: 0;
    font-size: 16px;
    line-height: 1.428571429;
    color: #8ba27e;
  }
`;
const PickDetailMainContentsHeaderDescription = styled.div`
  padding: 5px 0;
  font-size: 14px;
  line-height: 1.428571429;
  color: ${theme.FontLessGray2};
`;
const PickDetailMainContentsDescriptionWrap = styled.div`
  /* margin: 0 -15px; */
  font-size: 14px;
  line-height: 1.428571429;
  ::before {
    display: table;
    content: ' ';
  }
`;
const PickDetailMainContentsDescriptionContainer = styled.div`
  flex-direction: column;
  @media ${device.tablet} {
    padding: 15px 0;
    flex-direction: column;
  }
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    background-color: ${theme.MainWhite};
    overflow: hidden;
  }
`;
const PickDetailMainContentsDescriptionLeftWrap = styled.div`
  @media ${device.desktop} {
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
    width: 66.6666666667%;
  }
`;
const PickDetailMainContentsDescriptionLeftContainer = styled.div`
  @media ${device.desktop} {
    line-height: 1.4;
  }
  padding: 15px 0;
  border-top: 2px solid ${theme.BorderLightBlack};
  font-size: 14px;
  line-height: 180%;
`;
const PickDetailMainContentsDescriptionLeftTitle = styled.div`
  margin: 10px 0;
  color: ${theme.FontLessGray2};
  font-size: 15px;
  font-weight: 700;
  line-height: 1.1;
`;
const PickDetailMainContentsDescriptionLeft = styled.div`
  font-size: 14px;
  color: ${theme.FontLessGray2};
`;
const PickDetailMainContentsDescriptionRightWrap = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 1.428571429;
  @media ${device.desktop} {
    padding: 0 15px;
    width: 33.3333333333%;
  }
`;
const PickDetailSideBox = styled.div`
  position: relative;
  padding: 0;
  @media ${device.tablet} {
    padding: 0 15px;
  }
  @media ${device.desktop} {
    width: 25%;
  }
`;
const PickDetailSideBookingNow = styled.a`
  display: none;
  cursor: pointer !important;
  @media ${device.desktop} {
    display: block;
    margin-bottom: 10px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 13px;
    color: ${theme.MainWhite};
    background-color: ${theme.BorderBlack};
  }
`;
const PickDetailSideListPageMove = styled.a`
  display: ${(props) => (props.none ? 'none' : 'block')};
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 13px;
  color: ${theme.MainWhite};
  background-color: ${theme.GrayBG};
  cursor: pointer !important;
  @media ${device.desktop} {
    display: block;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 13px;
    color: ${theme.MainWhite};
    background-color: ${theme.GrayBG};
    cursor: pointer !important;
  }
`;
const PickDetailSidePicksWrap = styled.div`
  margin-top: 10px;
  padding-top: 30px;
  border-top: 1px solid ${theme.BorderMoreLightGray};
  font-size: 14px;
  line-height: 1.428571429;
`;
const PickDetailSidePicksContainer = styled.div`
  padding: 20px 10px 0;
  @media ${device.tablet} {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media ${device.desktop} {
    padding: 0;
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 0);
  }
`;
const PickDetailSidePicksBox = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 33.3%; */
  flex-wrap: wrap;
`;
const PickDetailSidePicksText = styled.div`
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  line-height: 1.428571429;
  color: ${theme.BorderLightBlack};
`;
const PickDetailSidePicksTitleLine = styled.div`
  margin: 10px auto 30px;
  width: 30px;
  height: 2px;
  background-color: ${theme.BorderLightBlack};
`;
const PicksToMoveWrap = styled.div`
  margin: 0;
  padding: 15px 0;
  font-size: 14px;
  line-height: 1.428571429;
  @media ${device.tablet} {
    margin: 0 -15px;
    padding: 30px 0;
  }
`;
const PciksToMoveContainer = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  line-height: 1.428571429;
  @media ${device.desktop} {
    margin-left: 33.3333333333%;
    width: 33.3333333333%;
  }
`;
export default PickDetail;
