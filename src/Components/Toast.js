import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import theme from 'Components/Theme';
import { showToast, hideToast } from 'Store/Actions/ToastActions';

const Toast = () => (
  <ToastWrap>
    <ToastMessage>Hello World!</ToastMessage>
  </ToastWrap>
);

const ToastWrap = styled.div`
  position: absolute;
  right: 10%;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  background-color: ${theme.LightGrayBG};
`;

const ToastMessage = styled.p`

`;

// 받는 쪽
// const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
  show: () => dispatch(showToast()),
  hide: () => dispatch(hideToast()),
});

export default connect(null, mapDispatchToProps)(Toast);
// export default connect(mapDispatchToProps, mapDispatchToProps)(Toast);
