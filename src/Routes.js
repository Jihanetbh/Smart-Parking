import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import SignIn from './signin';
import SignUp from './signup';

function Routes() {
  return (
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default Routes;
