import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions.js'
import styles from '../styles/Todo'

class Todo extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const todo = this.refs.todo.value
    if(todo.length > 0) {
      this.refs.todo.value = ''
      this.props.addTodo(todo)
    }
  }

  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo, index) => {
        return (
          <ul key={index}>
            <li>{todo}</li>
          </ul>
        )
      })
    }
    return(
      <div className='exampleContainer'>
        <Link to='/'>Goto Counter Example</Link>
        <br/>
        <div className='exampleTitle'>Redux Todo Example</div>
        <br/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className={styles.input} type="text" ref="todo" placeholder="Add todo"/>
        </form>
        <div className={styles.todos}>
          {renderTodos()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
