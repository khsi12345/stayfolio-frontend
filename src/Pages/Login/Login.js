import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import theme from 'Components/Theme';
import { device } from 'Components/Device';
import LoginImg from 'Images/Login.png';

const Login = () => {
  return (
    <>
      <Header />
      <LoginWrap>
        <LoginContainer>
          <LoginHeader>
            <LoginImage src={LoginImg} />
          </LoginHeader>
          <SocialWrap>
            <SocialNaver>Login with Naver</SocialNaver>
            <SocialFacebook>Login with Facebook</SocialFacebook>
            <SocialGoogle>Login with Google</SocialGoogle>
          </SocialWrap>
        </LoginContainer>
      </LoginWrap>
      <Footer />
    </>
  );
};

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 102px;
  padding: 50px 0;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 555px;
  width: 100%;
  /* padding: 0 20px; */
  margin: 0 14px;
  background-color: #fff;
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 30px 0 35px;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const LoginImage = styled.img`
  height: 50px;
  padding: 0 20px;
`;

const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 20px;
  border-bottom: 1px solid ${theme.BorderLightGray};
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

const SocialNaver = styled(SocialButton.withComponent('div'))`
  background-color: #3eaf0e;
`;

const SocialFacebook = styled(SocialButton.withComponent('div'))`
  background-color: #3868b9;
`;

const SocialGoogle = styled(SocialButton.withComponent('div'))`
  background-color: gray;
`;

const SocialText = styled.div``;

export default Login;
