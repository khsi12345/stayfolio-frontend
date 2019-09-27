import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import data from 'Data/pick';
import { getApi } from 'Util/service';
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
import 'Style/custom.scss';

const PickDetail = memo((props) => {
  // console.log(window.location.href);
  // console.log(props.history);
  const [getPickDetail, setPickDetail] = useState({});

  useEffect(() => {
    getApi(`http://54.180.30.126:8000/pick/${props.match.params.id}`, setPickDetail);
  }, [props.match.params.id]);
  // console.log(getPickDetail);

  const goBackHandler = () => {
    props.history.goBack();
  };
  return (
    <>
      {console.log(getPickDetail.data && getPickDetail.data.place_info.full_address)}
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
                          {getPickDetail.data && getPickDetail.data.identifier.toUpperCase()}
                          {/* <PickDetailMainContentsHeaderNameIcons> */}
                          <div
                            className="fb-share-button"
                            data-href="https://www.naver.com"
                            data-layout="button_count"
                            data-size="small"
                          >
                            <a
                              target="_blank"
                              href="https://www.naver.com"
                              className="fb-xfbml-parse-ignore"
                            >공유하기
                            </a>
                          </div>

                          {/* <PickDetailMainContentsHeaderNameIcon /> */}
                          {/* </PickDetailMainContentsHeaderNameIcons> */}
                        </PickDetailMainContentsHeaderName>
                      </PickDetailMainContentsHeaderNameWrap>
                      <PickDetailMainContentsAdress>
                        {getPickDetail.data && getPickDetail.data.place_info.full_address}
                      </PickDetailMainContentsAdress>
                      <PickDetailMainContentsHeaderDescription>
                        {getPickDetail.data && getPickDetail.data.title}
                      </PickDetailMainContentsHeaderDescription>
                    </PickDetailMainContentsHeaderWrap>
                    <SliderMain datas={getPickDetail.data && getPickDetail.data.images} />
                    <PickDetailMainContentsDescriptionWrap>
                      <PickDetailMainContentsDescriptionContainer>
                        <PickDetailMainContentsDescriptionLeftWrap>
                          <PickDetailMainContentsDescriptionLeftContainer>
                            <PickDetailMainContentsDescriptionLeftTitle>
                              {getPickDetail.data && getPickDetail.data.subtitle}
                            </PickDetailMainContentsDescriptionLeftTitle>
                            <PickDetailMainContentsDescriptionLeft>
                              {/* {getPickDetail.data && getPickDetail.data.description} */}
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
                          <TopInfo info={getPickDetail.data && getPickDetail.data.place_info} />
                          <BottomInfo info={getPickDetail.data && getPickDetail.data.place_info} />
                        </PickDetailMainContentsDescriptionRightWrap>
                      </PickDetailMainContentsDescriptionContainer>
                      <div style={{ height: '480px', overflow: 'hidden' }}>
                        <KakaoMap
                          latitude={getPickDetail.data && getPickDetail.data.place_info.latitude}
                          longitude={getPickDetail.data && getPickDetail.data.place_info.longitude}
                        />
                      </div>
                      <Comment id={props.match.params.id} />
                    </PickDetailMainContentsDescriptionWrap>
                  </PickDetailMainContentsContainer>
                  <PicksToMoveWrap>
                    <PciksToMoveContainer>
                      <PickDetailSideListPageMove alt="goback" onClick={goBackHandler}>
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
                <PickDetailSideListPageMove onClick={goBackHandler} alt="goback" none>
                리스트 페이지로 돌아가기
                </PickDetailSideListPageMove>
                <PickDetailSidePicksWrap>
                  <PickDetailSidePicksContainer>
                    <PickDetailSidePicksText>
                    MORE STAYFOLIO PICK
                    </PickDetailSidePicksText>
                    <PickDetailSidePicksTitleLine />
                    <PickDetailSidePicksBox>
                      <MoreList
                        im="https://stayfolio.com/system/pictures/images/000/037/802/medium/3a19d9e569a43c623aef74ec2bf1eb942eb514ed.jpeg?1567587529"
                        name="올모스트홈 스테이"
                      />
                      <MoreList
                        im="https://stayfolio.com/system/pictures/images/000/037/217/medium/7ea7b2ea843fe36c18549e9d5862110b74b95f08.jpg?1565748065"
                        name="스테이 소도"
                      />
                      <MoreList
                        im="
                        https://stayfolio.com/system/pictures/images/000/034/736/medium/be5fe6e5767139badd29e408a8d6ce3aa7dbbfb8.jpg?1560592189"
                        name="북촌리:멤버"
                      />
                      <MoreList
                        im="https://stayfolio.com/system/pictures/images/000/026/481/medium/1429b929d78f0a5788395170d7451d0777704e51.jpg?1524451384"
                        name="보아비양"
                      />
                      <MoreList
                        im="
                        https://stayfolio.com/system/pictures/images/000/026/179/medium/aaafa2448f06e385bf5bfae973f50e6035e2df5b.jpg?1523499824"
                        name="송당일상"
                      />
                      <MoreList
                        im="
                        https://stayfolio.com/system/pictures/images/000/024/055/medium/9a2bf2481ddf63b24c5bdee2defff34882b2a62f.jpg?1513159337"
                        name="문워크"
                      />
                      <MoreList
                        im="
                        https://stayfolio.com/system/pictures/images/000/000/578/medium/fc10ce8a23810ecc918b573a168d04c7f973707e.jpg?1431316330"
                        name="수화림"
                      />
                      <MoreList
                        im="
                        https://stayfolio.com/system/pictures/images/000/028/550/medium/32c283f4127986e0e0e0467751991394667142d8.jpg?1535418446"
                        name="서림연가"
                      />
                    </PickDetailSidePicksBox>
                  </PickDetailSidePicksContainer>
                </PickDetailSidePicksWrap>
              </PickDetailSideBox>
            </PickDetailMainContainer>
          </PickDetailMainWrap>
        </PickDetailWrap>
      </Layout>
    </>
  );
});
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
// const PickDetailMainContentsHeaderNameIcons = styled.div`
//   display: inline-block;
//   margin-top: 10px;
//   margin-left: 10px;
// `;
// const PickDetailMainContentsHeaderNameIcon = styled.span`
//   display: inline-block;
//   margin-left: 10px;
//   padding-bottom: 5px;
//   width: 24px;
//   height: 24px;
//   cursor: pointer;
// `;
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
