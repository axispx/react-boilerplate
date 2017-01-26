import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';
import {Router} from 'react-router';

import routes from './routes';

class Root extends Component {
  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <Router history={history} key={Math.random()} routes={routes}>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
