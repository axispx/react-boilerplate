import React, {Component} from 'react';
import * as actions from '../redux/actions.js';
import {connect} from 'react-redux';

import styles from '../styles/Counter';

class Counter extends Component {
  increaseCount() {
    this.props.dispatch(actions.increaseCount())
  }

  decreaseCount() {
    this.props.dispatch(actions.decreaseCount())
  }

  render() {
    return(
      <div>
        <div className={styles.exampleTitle}>Redux Counter Example</div>
        <div className={styles.buttons}>
          <button onClick={this.decreaseCount.bind(this)}>-</button>
          <div className={styles.count}>{this.props.count}</div>
          <button onClick={this.increaseCount.bind(this)}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return state;
  }
)(Counter);
