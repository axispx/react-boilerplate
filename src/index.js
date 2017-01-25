import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './redux/configureStore.js';
import {AppContainer} from 'react-hot-loader';
import Root from './containers/Root';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
      <Root store={store}/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NewRoot = require('./containers/Root').default;
      ReactDOM.render(
        <AppContainer>
          <NewRoot store={store} />
        </AppContainer>,
        document.getElementById('root')
      );
    });
}
