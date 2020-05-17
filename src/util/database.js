import firebase from './firebase'

export default (function () {
  const _db = firebase.firestore()
  const _ref = _db.collection('todos')

  async function getTodos() {
    const todos = []
    await _ref.get().then((snapshot) =>
      snapshot.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() }
        todos.push(todo)
      }),
    )
    return todos
  }

  async function addTodo(todo) {
    const _id = todo.id.toString()
    await _ref.doc(_id).set({
      title: todo.title,
      description: todo.description,
      done: todo.done,
    })
  }

  async function deleteTodoWithId(payload) {
    const _id = payload.id.toString()
    return await _ref.doc(_id).delete()
  }

  async function toggleTodoStatusWithId(id) {
    const _id = id.toString()
    const doc = await _ref.doc(_id).get()
    const currentStatus = doc['done']
    await _ref.doc(_id).update({
      done: !currentStatus,
    })
  }

  return {
    getTodos,
    addTodo,
    deleteTodoWithId,
    toggleTodoStatusWithId,
  }
})()
