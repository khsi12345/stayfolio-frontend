import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
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
  const [get, set] = useState({});

  useEffect(() => {
    getApi(`http://15.164.171.176:8000/pick/${props.match.params.id}`, set);
  }, [props.match.params.id]);

  const goBackHandler = () => {
    props.history.goBack();
  };

  const goBooking = () => {
    props.history.push(`/picks/${props.match.params.id}`);
  };
  return (
    <>
      <Layout>
        <Helmet>
          <title>{`${get.data && get.data.identifier} | WeRbnb`}</title>
          <meta
            property="og:image"
            content={`${get.data && get.data.main_image_url}`}
          />
          <meta property="og:title" content={`${get.data && get.data.identifier} | WeRbnb`} />
          <meta property="og:description" content={`${get.data && get.data.subtitle}`} />
        </Helmet>
        <Wrap>
          <MainWrap>
            <MainHeader>
            PICK
              <MainHeaderSmall>
              매일 하루 한번! 스테이폴리오가 추천합니다!
              </MainHeaderSmall>
            </MainHeader>
            <MainContainer>
              <MainBox>
                <MainContentsWrap>
                  <MainContentsContainer>
                    <MainContentsHeaderWrap>
                      <MainContentsHeaderNameWrap>
                        <MainContentsHeaderName>
                          {get.data && get.data.identifier.toUpperCase()}
                          {/* <MainContentsHeaderNameIcons> */}
                          <div
                            className="fb-share-button"
                            data-href={`http://52.79.222.164:3000/pick_detail/${props.match.params.id}}`}

                            data-layout="button_count"
                            data-size="small"
                          >
                            <a
                              target="_blank"
                              href={`http://52.79.222.164:3000/pick_detail/${props.match.params.id}}`}
                              className="fb-xfbml-parse-ignore"
                            >공유하기
                            </a>
                          </div>
                          {/* <MainContentsHeaderNameIcon /> */}
                          {/* </MainContentsHeaderNameIcons> */}
                        </MainContentsHeaderName>
                      </MainContentsHeaderNameWrap>
                      <MainContentsAdress>
                        {get.data && get.data.place_info.full_address}
                      </MainContentsAdress>
                      <MainContentsHeaderDescription>
                        {get.data && get.data.title}
                      </MainContentsHeaderDescription>
                    </MainContentsHeaderWrap>
                    <SliderMain datas={get.data && get.data.images} />
                    <MainContentsDescriptionWrap>
                      <MainContentsDescriptionContainer>
                        <MainContentsDescriptionLeftWrap>
                          <MainContentsDescriptionLeftContainer>
                            <MainContentsDescriptionLeftTitle>
                              {get.data && get.data.subtitle}
                            </MainContentsDescriptionLeftTitle>
                            <MainContentsDescriptionLeft>
                              {get.data && get.data.description}
                            </MainContentsDescriptionLeft>
                          </MainContentsDescriptionLeftContainer>
                        </MainContentsDescriptionLeftWrap>
                        <MainContentsDescriptionRightWrap>
                          <TopInfo info={get.data && get.data.place_info} />
                          <BottomInfo info={get.data && get.data.place_info} />
                        </MainContentsDescriptionRightWrap>
                      </MainContentsDescriptionContainer>
                      <div className="kakaomap_wrap">
                        <KakaoMap
                          latitude={get.data && get.data.place_info.latitude}
                          longitude={get.data && get.data.place_info.longitude}
                        />
                      </div>
                      <Comment id={props.match.params.id} />
                    </MainContentsDescriptionWrap>
                  </MainContentsContainer>
                  <PicksToMoveWrap>
                    <PciksToMoveContainer>
                      <SideListPageMove alt="goback" onClick={goBackHandler}>
                      리스트 페이지로 돌아가기
                      </SideListPageMove>
                    </PciksToMoveContainer>
                  </PicksToMoveWrap>
                </MainContentsWrap>
              </MainBox>
              <SideBox>
                <SideBookingNow alt="booking" onClick={goBooking}>
                BOOKING NOW
                </SideBookingNow>
                <SideListPageMove onClick={goBackHandler} alt="goback" none>
                리스트 페이지로 돌아가기
                </SideListPageMove>
                <SidePicksWrap>
                  <SidePicksContainer>
                    <SidePicksText>
                    MORE STAYFOLIO PICK
                    </SidePicksText>
                    <SidePicksTitleLine />
                    <SidePicksBox>
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
                      <MoreList
                        im="
                        https://stayfolio.com/system/pictures/images/000/007/486/medium/427fc8ae2ca80f1aba060f131d35e34e2d16d15b.jpg?1447224133"
                        name="호텔 카푸치노"
                      />
                    </SidePicksBox>
                  </SidePicksContainer>
                </SidePicksWrap>
              </SideBox>
            </MainContainer>
          </MainWrap>
        </Wrap>
      </Layout>
    </>
  );
});
const Wrap = styled.div`
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

const MainWrap = styled.div`
  padding-bottom: 100px;
`;
const MainHeader = styled.h2`
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
const MainHeaderSmall = styled.small`
  display: block;
  margin-top: 3px;
  color: ${theme.FontGray};
  font-weight: 400;
  font-size: 14px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
const MainBox = styled.div`
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
const MainContentsWrap = styled.div`
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
const MainContentsContainer = styled.div`
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
const MainContentsHeaderWrap = styled.div`
  position: relative;
  border-top: 5px solid ${theme.BorderBlack};
`;
const MainContentsHeaderNameWrap = styled.div`
  line-height: 1.428571429;
  font-size: 14px;
`;
const MainContentsHeaderName = styled.h2`
display: flex;
align-items: center;
  margin: 10px 0;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.1;
`;
// const MainContentsHeaderNameIcons = styled.div`
//   display: inline-block;
//   margin-top: 10px;
//   margin-left: 10px;
// `;
// const MainContentsHeaderNameIcon = styled.span`
//   display: inline-block;
//   margin-left: 10px;
//   padding-bottom: 5px;
//   width: 24px;
//   height: 24px;
//   cursor: pointer;
// `;
const MainContentsAdress = styled.small`
  display: none;
  @media ${device.wide} {
    display: block;
    padding: 0;
    font-size: 16px;
    line-height: 1.428571429;
    color: #8ba27e;
  }
`;
const MainContentsHeaderDescription = styled.div`
  padding: 5px 0;
  font-size: 14px;
  line-height: 1.428571429;
  color: ${theme.FontLessGray2};
`;
const MainContentsDescriptionWrap = styled.div`
  /* margin: 0 -15px; */
  font-size: 14px;
  line-height: 1.428571429;
  ::before {
    display: table;
    content: ' ';
  }
`;
const MainContentsDescriptionContainer = styled.div`
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
const MainContentsDescriptionLeftWrap = styled.div`
  @media ${device.desktop} {
    position: relative;
    padding-right: 15px;
    width: 66.6666666667%;
  }
`;
const MainContentsDescriptionLeftContainer = styled.div`
  @media ${device.desktop} {
    line-height: 1.4;
  }
  padding: 15px 0;
  border-top: 2px solid ${theme.BorderLightBlack};
  font-size: 14px;
  line-height: 180%;
`;
const MainContentsDescriptionLeftTitle = styled.div`
  margin: 10px 0;
  color: ${theme.FontLessGray2};
  font-size: 15px;
  font-weight: 700;
  line-height: 1.1;
`;
const MainContentsDescriptionLeft = styled.div`
  font-size: 14px;
  color: ${theme.FontLessGray2};
  white-space: pre-line;
`;
const MainContentsDescriptionRightWrap = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 1.428571429;
  @media ${device.desktop} {
    padding: 0;
    width: 33.3333333333%;
  }
`;
const SideBox = styled.div`
  position: relative;
  padding: 0;
  @media ${device.tablet} {
    padding: 0 15px;
  }
  @media ${device.desktop} {
    width: 25%;
  }
`;
const SideBookingNow = styled.a`
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
const SideListPageMove = styled.a`
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
const SidePicksWrap = styled.div`
  margin-top: 10px;
  padding-top: 30px;
  border-top: 1px solid ${theme.BorderMoreLightGray};
  font-size: 14px;
  line-height: 1.428571429;
`;
const SidePicksContainer = styled.div`
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
const SidePicksBox = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 33.3%; */
  flex-wrap: wrap;
`;
const SidePicksText = styled.div`
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  line-height: 1.428571429;
  color: ${theme.MainWhite};
  @media ${device.desktop} {
  color: ${theme.BorderLightBlack};
  }
`;
const SidePicksTitleLine = styled.div`
  margin: 10px auto 30px;
  width: 30px;
  height: 2px;
  background-color: ${theme.MainWhite};
  @media ${device.desktop} {
  background-color: ${theme.BorderLightBlack};
  }
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
