import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { showToast, hideToast } from 'Store/Actions/ToastActions';

const Toast = () => <div />;

// 받는 쪽
// const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
  show: () => dispatch(showToast()),
  hide: () => dispatch(hideToast()),
});

export default connect(null, mapDispatchToProps)(Toast);
// export default connect(mapDispatchToProps, mapDispatchToProps)(Toast);
