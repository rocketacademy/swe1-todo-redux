import * as ActionTypes from '../actions/types'

const initialState = {
  todos: [
    {
      id: new Date().getTime(),
      title: 'Create your first todo',
      description:
        'Create your first todo by clicking on the button located on the top-right.',
      done: false,
    },
  ],
}

export default function todos(state = initialState, action) {
  let nextState = {}
  switch (action.type) {
    case ActionTypes.createTodoItem: {
      const createdTodo = {
        id: new Date().getTime(),
        title: action.payload.title,
        description: action.payload.description,
        done: false,
      }
      const modifiedTodos = state.todos.slice()
      modifiedTodos.push(createdTodo)
      nextState = {
        todos: modifiedTodos,
      }
      break
    }
    case ActionTypes.deleteTodoItem: {
      const modifiedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      )
      nextState = {
        todos: modifiedTodos,
      }
      break
    }
    case ActionTypes.toggleTodoItemStatus: {
      const modifiedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
      nextState = {
        todos: modifiedTodos,
      }
      break
    }
    default: {
      nextState = {}
    }
  }
  return { ...state, ...nextState }
}
