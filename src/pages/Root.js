import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PageSearch from './Promotion/Search/Search';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PageSearch} />
      </Switch>
    </Router>
  );
}

export default Root;
