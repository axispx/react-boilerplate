import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions.js';

import styles from '../styles/App.scss';
import logo from '../../assets/ashish.png';

class App extends Component {
  increaseCount() {
    this.props.dispatch(actions.increaseCount())
  }

  decreaseCount() {
    this.props.dispatch(actions.decreaseCount())
  }

  render() {
    return (
      <div className={styles.siteWrapper}>
        <div className={styles.title}>React Boilerplate</div>
        <a href="https://twitter.com/anarchyrucks/" target="_blank">
          <img src={logo}/>
        </a>
        <div className={styles.exampleTitle}>Redux Counter Example</div>
        <div className={styles.buttons}>
          <button onClick={this.decreaseCount.bind(this)}>-</button>
          <div className={styles.count}>{this.props.count}</div>
          <button onClick={this.increaseCount.bind(this)}>+</button>
        </div>
        <div className={styles.links}>
          <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>
          <a href="http://redux.js.org/" target="_blank">Redux</a>
          <a href="https://webpack.js.org" target="_blank">Webpack 2</a>
        </div>

      </div>
    )
  }
}

export default connect(
  state => {
    return state
  }
)(App);
