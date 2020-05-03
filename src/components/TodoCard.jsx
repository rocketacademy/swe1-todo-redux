import React from 'react'
import { connect } from 'react-redux'
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

import * as Actions from '../actions'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      opacity: (props) => (props.done ? 0.35 : 1),
      width: 345,
      maxWidth: '100%',
    },
  }),
)

const mapDispatch = (dispatch) => ({
  deleteTodoItem: (payload) => {
    dispatch(Actions.deleteTodoItem(payload))
  },
  toggleTodoItemStatus: (payload) => {
    dispatch(Actions.toggleTodoItemStatus(payload))
  },
})

const TodoCard = ({
  deleteTodoItem,
  toggleTodoItemStatus,
  id,
  title,
  body,
  done,
}) => {
  const classes = useStyles({ done })

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
        <Button
          onClick={() => toggleTodoItemStatus({ id })}
          size="small"
          color="primary"
        >
          {done ? 'Done' : 'Mark as done'}
        </Button>
        <Button
          onClick={() => deleteTodoItem({ id })}
          size="small"
          color="secondary"
        >
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

export default connect(null, mapDispatch)(TodoCard)
