'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {configureStore} from './redux/configureStore.js'
import {AppContainer} from 'react-hot-loader'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import Root from './containers/Root'

import './index.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NewRoot = require('./containers/Root').default
      ReactDOM.render(
        <AppContainer key={Math.random()}>
          <NewRoot store={store} history={history}/>
        </AppContainer>,
        document.getElementById('root')
      )
    })
}
