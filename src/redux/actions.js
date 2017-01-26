export const increaseCount = () => {
  return {
    type: 'INCREASE'
  }
}

export const decreaseCount = () => {
  return {
    type: 'DECREASE'
  }
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}
