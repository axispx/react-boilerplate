import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../components/App'
import Counter from '../components/Counter'
import Todo from '../components/Todo'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Counter}/>
    <Route path='todo' component={Todo}/>
  </Route>
)

export default routes
