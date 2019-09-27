import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { showAlert, closeAlert } from 'Store/Actions';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import SignupImg from 'Images/Signup.png';

const Signup = (props) => (
  <Layout>
    <Helmet>
      <title>Signup | WeRbnb</title>
    </Helmet>
    <SignupWrap>
      <SignupContainer>
        <SignupHeader>
          <SignupImage src={SignupImg} />
        </SignupHeader>
        <SocialWrap>
          <SignupNaver onClick={() => {
            props.showAlert({ message: '불편을 드려 죄송합니다. 기능 점검 중입니다.' });
          }}
          >Signup with Naver
          </SignupNaver>
          <SignupEmail href="/agreement">Signup with Email</SignupEmail>
        </SocialWrap>
      </SignupContainer>
    </SignupWrap>
  </Layout>
);

const SignupWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  padding: 50px 0 50px;
  @media ${device.mobile} {
    margin-top: 102px;
    padding: 50px 0 172px;
  }
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 555px;
  width: 100%;
  margin: 0 14px;
  background-color: #fff;
`;

const SignupHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 30px 0 35px;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const SignupImage = styled.img`
  height: 50px;
  padding: 0 20px;
`;

const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 20px;
`;

const SocialButton = styled.div`
  background-color: green;
  width: 100%;
  line-height: 45px;
  height: 45px;
  border-radius: 45px;
  margin-bottom: 5px;
  color: #fff;
  font-size: 15px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
`;

const SignupNaver = styled(SocialButton.withComponent('a'))`
  background-color: #3eaf0e;
`;

const SignupEmail = styled(SocialButton.withComponent('a'))`
  background-color: ${theme.MainBlack};
`;

const mapDispatchToProps = (dispatch) => ({
  showAlert: (options) => dispatch(showAlert(options)),
  closeAlert: () => dispatch(closeAlert()),
});

export default connect(null, mapDispatchToProps)(Signup);
