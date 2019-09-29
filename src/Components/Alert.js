import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showAlert, closeAlert } from 'Store/Actions';


const Alert = (props) => (
  <AlertWrap>
    <AlertBox>
      {props.options.message}
      <CloseBtn onClick={props.closeAlert}>확인</CloseBtn>
    </AlertBox>
  </AlertWrap>
);
const AlertWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const AlertBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 160px;
  padding: 40px 20px 20px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
`;

const CloseBtn = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 8px 8px;
  width: 100%;
  cursor: pointer;
`;

// 이 부분을 해줘야 하는가?
const mapDispatchToProps = (dispatch) => ({
  showAlert: (options) => dispatch(showAlert(options)),
  closeAlert: () => dispatch(closeAlert()),
});

export default connect(null, mapDispatchToProps)(Alert);
