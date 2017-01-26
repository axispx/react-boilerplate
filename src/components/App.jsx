import React, {Component} from 'react';

import styles from '../styles/App.scss';
import logo from '../../assets/ashish.png';

class App extends Component {
  render() {
    return (
      <div className={styles.siteWrapper}>
        <div className={styles.title}>React Boilerplate</div>
        <a href="https://twitter.com/anarchyrucks/" target="_blank">
          <img src={logo}/>
        </a>
        {this.props.children}
        <div className={styles.links}>
          <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>
          <a href="http://redux.js.org/" target="_blank">Redux</a>
          <a href="#" target="_blank">React Router</a>
          <a href="https://webpack.js.org" target="_blank">Webpack 2</a>
        </div>

      </div>
    )
  }
}

export default App;
