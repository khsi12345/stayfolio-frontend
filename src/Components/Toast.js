import React from 'react';
import styled from 'styled-components';

const Toast = (props) => {
  const { options } = props;
  return (
    <ToastWrap>
      <ToastMessage>예약이 완료되었습니다!</ToastMessage>
      <ToastMessage>예약자명 : {options.name}</ToastMessage>
      <ToastMessage>연락처 : {options.number}</ToastMessage>
      <ToastMessage>기간 : {options.startDate} ~ {options.endDate}</ToastMessage>
      <ToastMessage>요청사항 : {options.message}</ToastMessage>
    </ToastWrap>
  );
};

const ToastWrap = styled.div`
  @keyframes fadeIn {
      from { opacity: 0; }
        to { opacity: 1; }
  }
  /* @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  } */
  animation: fadeIn 1s;
  position: fixed;
  right: 100px;
  bottom: 100px;
  padding: 20px 60px;
  background-color: #ff5a60;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(255, 90, 96, 0.4);
`;

const ToastMessage = styled.p`
  margin: 8px 0;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

export default Toast;
