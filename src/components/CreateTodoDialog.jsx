import React, { useRef } from 'react'
import { connect } from 'react-redux'
import * as Action from '../actions'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core'

const mapState = (state) => ({
  openCreateTodoDialog: state.modals.openCreateTodoDialog,
})

const mapDispatch = (dispatch) => ({
  createTodoItem: (payload) => {
    dispatch(Action.createTodoItem(payload))
  },
  closeCreateTodoDialog: () => {
    dispatch(Action.closeCreateTodoDialog())
  },
})

const CreateTodoDialog = ({
  createTodoItem,
  openCreateTodoDialog,
  closeCreateTodoDialog,
}) => {
  const titleEl = useRef(null)
  const descriptionEl = useRef(null)

  const handleClose = closeCreateTodoDialog

  const handleSubmit = () => {
    const todo = {
      id: new Date().getTime(),
      title: titleEl.current.value
        ? titleEl.current.value
        : 'The nameless todo',
      description: descriptionEl.current.value
        ? descriptionEl.current.value
        : 'This todo item does not have a body.',
      done: false,
    }
    createTodoItem({ ...todo })
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={openCreateTodoDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Create a new Todo item</DialogTitle>
        <DialogContent>
          <DialogContentText>Title</DialogContentText>
          <TextField
            autoFocus
            inputRef={titleEl}
            margin="dense"
            id="title"
            placeholder="Title of your todo item"
            onSubmit={handleSubmit}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Description</DialogContentText>
          <TextField
            inputRef={descriptionEl}
            margin="dense"
            id="body"
            placeholder="Describe your todo item"
            onSubmit={handleSubmit}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(mapState, mapDispatch)(CreateTodoDialog)
