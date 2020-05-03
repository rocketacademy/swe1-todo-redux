import * as ActionTypes from './types'

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

// Creates a todo item using the current inputs.
export function createTodoItem(payload) {
  return {
    type: ActionTypes.createTodoItem,
    payload,
  }
}

// Deletes the described todo item.
export function deleteTodoItem(payload) {
  return {
    type: ActionTypes.deleteTodoItem,
    payload,
  }
}

// Toggles the done and to-be-done status of a todo item.
export function toggleTodoItemStatus(payload) {
  return {
    type: ActionTypes.toggleTodoItemStatus,
    payload,
  }
}
