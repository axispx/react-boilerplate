import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}

const initialTodos = [
  'Learn JavaScript!',
  'Learn ReactJS!',
  'Create awesome stuffs!'
]

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        action.todo,
        ...state
      ]
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  count: countReducer,
  todos: todosReducer,
});

export default rootReducer;
