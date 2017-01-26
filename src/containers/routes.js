import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/App';
import Counter from '../components/Counter';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Counter}/>
  </Route>
);

export default routes;
