import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import SignIn from './signin';

function Routes() {
  return (
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
    </Router>
  );
}

export default Routes;
