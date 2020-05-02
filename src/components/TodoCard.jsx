import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import StoreContext from '../store'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      opacity: (props) => (props.done ? 0.35 : 1),
      width: 345,
      maxWidth: '100%',
    },
  }),
)

export default function TodoCard({ id, title, body, done }) {
  const classes = useStyles({ done })
  const { todos, setTodos } = useContext(StoreContext)

  // Toggles the done status of this todo item.
  const toggleDoneStatus = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done }
        }
        return { ...todo }
      }),
    )
  }

  // Removes this todo item from the list of todo items.
  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={toggleDoneStatus} size="small" color="primary">
          {done ? 'Done' : 'Mark as done'}
        </Button>
        <Button onClick={deleteTodo} size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}
