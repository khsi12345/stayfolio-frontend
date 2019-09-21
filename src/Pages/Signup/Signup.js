import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import SignupImg from 'Images/Signup.png';

const Signup = () => (
  <Layout>
    <SignupWrap>
      <SignupContainer>
        <SignupHeader>
          <SignupImage src={SignupImg} />
        </SignupHeader>
        <SocialWrap>
          <SignupFacebook>Signup with Facebook</SignupFacebook>
          <SignupNaver>Signup with Naver</SignupNaver>
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

const SignupFacebook = styled(SocialButton.withComponent('a'))`
  background-color: #3868b9;
`;

const SignupEmail = styled(SocialButton.withComponent('a'))`
  background-color: ${theme.MainBlack};
`;

export default Signup;
