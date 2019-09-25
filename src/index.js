import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'Store/Reducers';

// + reduxThunk는 리덕스 미들웨어
// 동기, 비동기를 할 수 있게끔 만들어 주는 것.

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
