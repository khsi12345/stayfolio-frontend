import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Main from 'Pages/Main';
import Login from 'Pages/Login';
import Agreement from 'Pages/Agreement';
import Picks from 'Pages/Picks';
import Booking from 'Pages/Booking';
import PickDetail from 'Pages/PickDetail';
import Magazines from 'Pages/Magazines';
import MagazineDetail from 'Pages/MagazineDetail';
import PageNotFound from 'Pages/NotFound';
import MyPage from 'Pages/MyPage';
import GlobalStyles from 'Components/GlobalStyles';
import About from 'Pages/About';
import Toast from 'Components/Toast';
import Alert from 'Components/Alert';

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Agreement} />
      <Route exact path="/picks" component={Picks} />
      <Route exact path="/picks/:id" component={Booking} />
      <Route exact path="/pick_detail/:id" component={PickDetail} />
      <Route exact path="/magazines" component={Magazines} />
      <Route exact path="/magazines/:id" component={MagazineDetail} />
      <Route exact path="/about" component={About} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/not-found" component={PageNotFound} />
      <Redirect from="*" to="/not-found" />
    </Switch>
    {props.toast.showToast && <Toast options={props.toast.options} />}
    {props.alert.showAlert && <Alert options={props.alert.options} />}
    <GlobalStyles />
  </Router>
);
// 컴포넌트에 redux로 관리하는 store의 전체 state를 주입
const mapStateToProps = (state) => ({
  toast: state.toast,
  alert: state.alert,
});

export default connect(mapStateToProps, null)(Routes);
