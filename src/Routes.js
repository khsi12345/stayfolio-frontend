import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Main from './Pages/Main';
import Pick from './Pages/Pick';
import GlobalStyles from './Components/GlobalStyles';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/pick" component={Pick} />
      <Redirect from="*" to="/" />
    </Switch>
    <GlobalStyles />
  </Router>
);

export default Routes;
