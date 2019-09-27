import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { getApi } from 'Util/service';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';

// const [info, setInfo] = useState([]);
// useEffect(() => {
//   getApi('http://10.58.2.143:8000/booking', setInfo);
// }, []);

export default () => (
  <Layout>
    <Helmet>
      <title>My page | WeRbnb</title>
    </Helmet>
    <MyPageWrap>
      <MyPageContainer>
        <Title>
            MYPAGE
          <TitleDsc>
              예약정보와 구매정보를 확인하세요!
          </TitleDsc>
        </Title>
        <NoticeWrap>
          <NoticeInnerWrap>
            <NoticeContainer>
              <NoticeTitleWrap>
                <NoticeTitle>
                    NOTICE
                </NoticeTitle>
              </NoticeTitleWrap>
              <NoticeBody>
                <NoticeSentence>등록된 번호로 예약안내 MMS가 발송됩니다. 문자를 확인해주세요.</NoticeSentence>
                <NoticeSentence>예약내용을 변경하거나 취소를 희망할 경우 호스트에게 먼저 알려주세요. 예약취소 및 변경은 해당 스테이의 운영원칙하에 이루어집니다.</NoticeSentence>
                <NoticeSentence>시스템 오류, 결제 등의 기타 문의는 010-9930-6082, info@werbnb.com로 연락 부탁 드립니다.</NoticeSentence>
              </NoticeBody>
            </NoticeContainer>
          </NoticeInnerWrap>
        </NoticeWrap>
        <MyInfoWrap>
          <MyInfoTitle href="/mypage"><ActiveInfo>예약 정보</ActiveInfo></MyInfoTitle>
          <MyInfoTitle href="/mypage">바우처 정보</MyInfoTitle>
        </MyInfoWrap>
        <BookingContainer>
          <BookingInfoWrap>
            <BookingCategory>숙소명</BookingCategory>
            <BookingDetail>스테이 소도</BookingDetail>
          </BookingInfoWrap>
          <BookingInfoWrap>
            <BookingCategory>예약일</BookingCategory>
            <BookingDetail>2019-10-16 ~ 2019-10-17</BookingDetail>
          </BookingInfoWrap>
          <BookingInfoWrap>
            <BookingCategory>예약자명</BookingCategory>
            <BookingDetail>권순규</BookingDetail>
          </BookingInfoWrap>
          <BookingInfoWrap>
            <BookingCategory>총 금액</BookingCategory>
            <BookingDetail>₩450,000</BookingDetail>
          </BookingInfoWrap>
          <BookingInfoWrap>
            <BookingCategory>연락처</BookingCategory>
            <BookingDetail>010-9930-6082</BookingDetail>
          </BookingInfoWrap>
        </BookingContainer>
      </MyPageContainer>
    </MyPageWrap>
  </Layout>
);
const MyPageWrap = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1170px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

const MyPageContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 15px;
  padding-top: 45px;
  line-height: 1.428571429;
`;
const Title = styled.div`
  font-size: 25px;
  border-top: 5px solid ${theme.BorderLightBlack};
  padding-top: 5px;
  margin-bottom: 40px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -1px;

  @media ${device.desktop} {
    font-size: 32px;
  }
`;
const TitleDsc = styled.small`
  display: block;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.428571429;
  letter-spacing: -1px;
  color: ${theme.FontGray};
`;

const NoticeWrap = styled.div`
  background-color: #fff;
  padding: 30px;
`;

const NoticeInnerWrap = styled.div`
  border: 1px solid #000;
  padding: 10px;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  border: 1px solid ${theme.BorderGray};
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const NoticeTitleWrap = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-bottom: 10px;
  @media ${device.tablet} {
    width: 15%;
    padding-bottom: 0;
  }
`;

const NoticeTitle = styled.h3`
  font-size: 14px;
  text-align: center;
  line-height: 1.428;
  font-weight: 600;
`;

const NoticeBody = styled.div`
  padding: 0 10px;
`;

const NoticeSentence = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.428;
  font-weight: normal;
`;

const MyInfoWrap = styled.div`
  display: flex;
  margin-top: 30px;
`;

const MyInfoTitle = styled.a`
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.428;
  color: ${theme.FontGray};
`;

const ActiveInfo = styled.span`
  padding: 16px;
  box-shadow: inset 0 -3px 0 0 #000;
`;

const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: #fff;
  padding: 30px;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const BookingInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
`;

const BookingCategory = styled.p`
  padding-bottom: 10px;
  font-weight: 600;
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
`;

const BookingDetail = styled.p`
  color: ${theme.FontGray};
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
`;
