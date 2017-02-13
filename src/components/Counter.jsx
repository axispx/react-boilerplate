import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions.js'

import styles from '../styles/Counter'

class Counter extends Component {
  render() {
    return(
      <div className='exampleContainer'>
        <Link to='/todo'>Goto Todo Example</Link>
        <br/>
        <div className='exampleTitle'>Redux Counter Example</div>
        <div className={styles.buttons}>
          <button onClick={this.props.decreaseCount}>-</button>
          <div className={styles.count}>{this.props.count}</div>
          <button onClick={this.props.increaseCount}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
