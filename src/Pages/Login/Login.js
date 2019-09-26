import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import LoginImg from 'Images/Login.png';

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const updateEmail = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  const [password, setPassword] = useState(null);
  const updatePassword = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios({
        method: 'post',
        url: 'http://10.58.5.100:8080/account/login',
        data: {
          email,
          password,
        },
      }).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('stayfolio_token', res.data.access_token);
          props.history.push('/');
        } else {
          alert('아이디 혹은 비밀번호를 확인해주세요.');
        }
      });
    }
  };
  return (
    <Layout>
      <LoginWrap>
        <LoginContainer>
          <LoginHeader>
            <LoginImage src={LoginImg} />
          </LoginHeader>
          <SocialWrap>
            <SocialFacebook>Login with Facebook</SocialFacebook>
            <SocialNaver>Login with Naver</SocialNaver>
          </SocialWrap>
          <EmailLoginWrap>
            <LoginInputWrap>
              <LoginInput
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={updateEmail}
              />
            </LoginInputWrap>
            <LoginInputWrap>
              <LoginInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={updatePassword}
              />
            </LoginInputWrap>
            <LoginButton onClick={handleSubmit}>Login</LoginButton>
          </EmailLoginWrap>
          <LoginFooterWrap>
            <FooterButton href="/signup">Sign up Now!</FooterButton>
            <FooterButton href="/">Forgot Password?</FooterButton>
          </LoginFooterWrap>
        </LoginContainer>
      </LoginWrap>
    </Layout>
  );
};

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  padding: 50px 0;
  @media ${device.mobile} {
    margin-top: 102px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 555px;
  width: 100%;
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
  margin: 3px 0;
  color: #fff;
  font-size: 15px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
`;

const SocialFacebook = styled(SocialButton.withComponent('a'))`
  background-color: #3868b9;
`;

const SocialNaver = styled(SocialButton.withComponent('a'))`
  background-color: #3eaf0e;
`;

const EmailLoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const LoginInputWrap = styled.div`
  width: 100%;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.43;
`;

const LoginInput = styled.input`
  display: block;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  background-color: ${theme.LoginInputBeforeBG};
  &::placeholder {
    color: ${theme.FontLightGray};
    font-size: 13px;
    font-weight: 300;
  }
`;

const LoginButton = styled(SocialButton.withComponent('div'))`
  background-color: ${theme.ButtonDarkGrayBG};
  margin-top: 10px;
`;

const LoginFooterWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const FooterButton = styled.a`
  display: block;
  width: 42%;
  font-size: 10px;
  line-height: 32px;
  height: 40px;
  font-weight: 600;
  text-align: center;
  color: ${theme.FontGray};
  border: 1px solid ${theme.BorderDarkGray};

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 40px;
    width: 36%;
  }
`;

export default withRouter(Login);
