import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showToast, hideToast } from 'Store/Actions/ToastActions';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import DatePicker from 'Components/DatePicker';

const mapStateToProps = (state) => ({
  show: state.showToast,
});

const mapDispatchToProps = (dispatch) => ({
  showToast: () => dispatch(showToast()),
  hideToast: () => dispatch(hideToast()),
});

const Booking = (props) => (
  <Layout>
    <BookingHeaderWrap>
      <BookingCoverWrap>
        <BookingCoverLine>
          <BookingTitleWrap>
            <BookingTitle>스테이소도</BookingTitle>
            <BookingLogoImage src="https://www.stayfolio.com/system/pictures/images/000/029/365/original/3ef8fde2b765e5e55b521b020afa444fcb6e8e4e.png?1539048665" alt="logo" />
          </BookingTitleWrap>
        </BookingCoverLine>
      </BookingCoverWrap>
    </BookingHeaderWrap>
    <BookingContainer>
      <RoomContainer>
        <RoomTitleImage src="https://www.stayfolio.com/booking/images/our-rooms-title.png" />
        <RoomSubtitle>제주 동쪽 끝, 우리만의 작은 섬</RoomSubtitle>
        <RoomDetail>
          <RoomDetailHeader>
                스테이 소도
          </RoomDetailHeader>
        </RoomDetail>
        <RoomDetailContainer>
          <RoomReserveWrap>
            <DatePicker />
          </RoomReserveWrap>
          <RoomDetailInfoWrap>
            <InfoTitle>스테이 소도</InfoTitle>
            <InfoType>기본형</InfoType>
            <InfoDescription>STAY SODO 는 크게 두 동의 집, 바다를 바라보는 수영장으로 이루어져 있습니다. A동은 거실과 주방, 침실로 나뉘며, 바로 옆의 B동은 2인을 위한 별도의 침실입니다. 노천탕, 바베큐 데크가 있습니다.</InfoDescription>
            <InfoRoomInfo>
              체크인 16:00 / 체크아웃 11:00 <br /> 기준 인원 1 / 최대 인원 6 <br /> 객실면적 80.16m2  <br /> 퀸사이즈 베드2추가침구
            </InfoRoomInfo>
            <InfoPrice>₩450,000~</InfoPrice>
            <BookingButton onClick={props.showToast}>
              Booking
            </BookingButton>
          </RoomDetailInfoWrap>
        </RoomDetailContainer>
      </RoomContainer>
    </BookingContainer>
  </Layout>
);

const BookingHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  background-image: url("https://www.stayfolio.com/system/pictures/images/000/029/446/original/aa825c4d048825a4c9206a755bdc243e9b3fed16.jpg?1539159864");
  background-position: center center;
  background-size: cover;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

const BookingCoverWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 430px;
  padding: 0 15px;
`;

const BookingCoverLine = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  position: absolute;
  left: 0%;
  bottom: 0;
`;

const BookingTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
`;

const BookingTitle = styled.h3`
  display: inline-block;
  font-size: 33px;
  font-weight: 600;
  color: #000;
  line-height: 70px;
`;

const BookingLogoImage = styled.img`
  height: 54px;
`;

const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 15px;
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  padding: 60px 15px 0;
`;

const RoomTitleImage = styled.img`
  height: 45px;
`;

const RoomSubtitle = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.4;
`;

const RoomDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RoomDetailHeader = styled.div`
  margin: 90px 0 20px;
  height: 50px;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 50px;
  background-color: ${theme.BorderBlack};
`;

const RoomDetailContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding-bottom:30px;
  margin-bottom: 30px;

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const RoomReserveWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  height: 520px;
  padding: 60px 80px;
  @media ${device.desktop} {
    width: 68%;
  }
`;

const RoomDetailInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  border-top: 3px solid ${theme.BorderBlack};
  border-bottom: 3px solid ${theme.BorderBlack};

  @media ${device.desktop} {
    width: 28%;
  }
`;

const InfoTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.42;
`;

const InfoType = styled.div`
  font-size: 13px;
  color: ${theme.FontGray};
  margin-top: 10px;
`;

const InfoDescription = styled.div`
  margin-top: 10px;
  font-size: 14px;
  /* height: 80px; */
  /* overflow: hidden; */
  line-height: 1.42;
`;

const InfoRoomInfo = styled.div`
  margin-top: 20px;
  padding-bottom: 15px;
  color: ${theme.FontLightGray};
  border-bottom: 1px solid ${theme.BorderGray};
  font-size: 14px;
  line-height: 1.42;
`;

const InfoPrice = styled.div`
  padding: 20px 0;
  font-size: 26px;
  line-height: 1.42;
  font-weight: 600;
  text-align: center;
  border-bottom: 3px solid ${theme.BorderBlack};
`;

const BookingButton = styled.div`
  display: block;
  width: 100%;
  height: 44px;
  margin-top: 18px;
  color: #fff;
  text-align: center;
  line-height: 44px;
  background-color: ${theme.DarkGrayBG};
  cursor: pointer;
`;

export default connect(null, mapDispatchToProps)(Booking);
