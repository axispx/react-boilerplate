import {combineReducers} from 'redux';

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

const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;
