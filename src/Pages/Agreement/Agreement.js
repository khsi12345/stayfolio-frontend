import React, { useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { showAlert, closeAlert } from 'Store/Actions';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import SignupImg from 'Images/Signup.png';

const Agreement = (props) => {
  const [email, setEmail] = useState(null);
  const updateEmail = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  const [name, setName] = useState(null);
  const updateName = (event) => {
    const {
      target: { value },
    } = event;
    setName(value);
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
    if (email && name && password) {
      axios({
        method: 'post',
        url: 'http://15.164.171.176:8000/account/signup',
        data: {
          email,
          name,
          password,
        },
      }).then(() => {
        props.showAlert({ message: '가입을 축하합니다! 로그인 해주세요 :)' });
        props.history.push('/login');
      }).catch(() => {
        props.showAlert({ message: '입력 정보 양식이 틀렸습니다. 확인 후 다시 시도해주세요.' });
      });
    } else {
      props.showAlert({ message: '입력 정보를 확인해주세요!' });
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>Signup | WeRbnb</title>
      </Helmet>
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
                onChange={updateEmail}
              />
            </SignupInputWrap>
            <SignupInputWrap>
              <SignupInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={updateName}
              />
            </SignupInputWrap>
            <SignupInputWrap>
              <SignupInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={updatePassword}
              />
            </SignupInputWrap>
            <SignupButton onClick={handleSubmit}>Signup</SignupButton>
          </EmailSignupWrap>
        </SignupContainer>
      </SignupWrap>
    </Layout>
  );
};

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

const mapDispatchToProps = (dispatch) => ({
  showAlert: (options) => dispatch(showAlert(options)),
  closeAlert: () => dispatch(closeAlert()),
});

export default connect(null, mapDispatchToProps)(Agreement);
