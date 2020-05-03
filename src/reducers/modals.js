import * as ActionTypes from '../actions/types'

const initialState = {
  openCreateTodoDialog: false,
}

export default function modals(state = initialState, action) {
  let nextState = {}
  switch (action.type) {
    case ActionTypes.openCreateTodoDialog:
      nextState = {
        openCreateTodoDialog: true,
      }
      break
    case ActionTypes.closeCreateTodoDialog:
      nextState = {
        openCreateTodoDialog: false,
      }
      break
    default:
      nextState = {}
  }
  return { ...state, ...nextState }
}
