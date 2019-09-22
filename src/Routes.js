import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Main from 'Pages/Main';
import Login from 'Pages/Login';
import Signup from 'Pages/Signup';
import Agreement from 'Pages/Agreement';
import Picks from 'Pages/Picks';
import Booking from 'Pages/Booking';
import PickDetail from 'Pages/PickDetail';
import Magazines from 'Pages/Magazines';
import MagazineDetail from 'Components/MagazineDetail';
import GlobalStyles from 'Components/GlobalStyles';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/agreement" component={Agreement} />
      <Route exact path="/picks" component={Picks} />
      <Route exact path="/picks/stay-sodo" component={Booking} />
      <Route exact path="/pick_detail" component={PickDetail} />
      <Route exact path="/magazines" component={Magazines} />
      <Route exact path="/magazines/stay-sodo" component={MagazineDetail} />
      <Redirect from="*" to="/" />
    </Switch>
    <GlobalStyles />
  </Router>
);

export default Routes;
