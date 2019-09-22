import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import SignupImg from 'Images/Signup.png';

const Agreement = () => (
  <Layout>
    <SignupWrap>
      <SignupContainer>
        <SignupHeader>
          <SignupImage src={SignupImg} />
        </SignupHeader>
        <EmailSignupWrap>
          <SignupInputWrap>
            <SignupInput
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </SignupInputWrap>
          <SignupInputWrap>
            <SignupInput
              type="text"
              name="name"
              placeholder="Name"
            />
          </SignupInputWrap>
          <SignupInputWrap>
            <SignupInput
              type="password"
              name="password"
              placeholder="Password"
            />
          </SignupInputWrap>
          <SignupButton>Signup</SignupButton>
        </EmailSignupWrap>
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

const EmailSignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const SignupInputWrap = styled.div`
  width: 100%;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.43;
`;

const SignupInput = styled.input`
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

const SocialButton = styled.div`
  width: 100%;
  height: 45px;
  margin: 10px 0;
  border-radius: 45px;
  background-color: ${theme.ButtonDarkGrayBG};
  color: #fff;
  font-size: 15px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
`;

const SignupButton = SocialButton.withComponent('div');

export default Agreement;
