import * as ActionTypes from './types'
import database from '../util/database'

const todoPlaceholder = {
  id: new Date().getTime(),
  title: 'Create your first todo',
  description:
    'Create your first todo by clicking on the button located on the top-right.',
  done: false,
}

// Opens the create todo dialog.
export function openCreateTodoDialog() {
  return {
    type: ActionTypes.openCreateTodoDialog,
  }
}

// Closes the create todo dialog.
export function closeCreateTodoDialog() {
  return {
    type: ActionTypes.closeCreateTodoDialog,
  }
}

export function fetchTodoItems() {
  return async function (dispatch) {
    const payload = await database.getTodos()
    if (payload.length === 0) {
      await database.addTodo(todoPlaceholder)
      payload.push(todoPlaceholder)
    }
    return dispatch({
      type: ActionTypes.getTodoItems,
      payload,
    })
  }
}

// Creates a todo item using the current inputs.
export function createTodoItem(payload) {
  return async function (dispatch) {
    await database.addTodo(payload)
    return dispatch({
      type: ActionTypes.createTodoItem,
      payload,
    })
  }
}

// Deletes the described todo item.
export function deleteTodoItem(payload) {
  return async function (dispatch) {
    await database.deleteTodoWithId(payload)
    return dispatch({
      type: ActionTypes.deleteTodoItem,
      payload,
    })
  }
}

// Toggles the done and to-be-done status of a todo item.
export function toggleTodoItemStatus(payload) {
  return async function (dispatch) {
    await database.toggleTodoStatusWithId(payload.id)
    return dispatch({
      type: ActionTypes.toggleTodoItemStatus,
      payload,
    })
  }
}
