import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  Grid,
} from '@material-ui/core'
import TodoCard from './TodoCard'

import * as Actions from '../actions'
import ScrollToTopButton from './ScrollToTopButton'
import CreateTodoDialog from './CreateTodoDialog'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(6),
        marginRight: theme.spacing(6),
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
      },
    },
    appBar: {
      boxShadow: 'none',
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    toolbar: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    body: {},
  }),
)

const mapState = (state) => ({
  todos: state.todos.todos,
})

const mapDispatch = (dispatch) => ({
  openCreateTodoDialog: () => {
    dispatch(Actions.openCreateTodoDialog())
  },
  fetchTodoItems: () => {
    dispatch(Actions.fetchTodoItems())
  },
})

const App = ({ openCreateTodoDialog, fetchTodoItems, todos }) => {
  // Used to control our create todo modal.
  const classes = useStyles()

  useEffect(() => {
    fetchTodoItems()
  }, [fetchTodoItems])

  return (
    <>
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
          position="static"
          color="transparent"
        >
          <Toolbar id="back-to-top-anchor" className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
              Todo App
            </Typography>
            <Button
              variant="contained"
              onClick={openCreateTodoDialog}
              color="primary"
              size="large"
            >
              Create Todo
            </Button>
          </Toolbar>
        </AppBar>
        <ScrollToTopButton />
        <Grid container spacing={4}>
          {todos.map((todo) => (
            <Grid key={todo.id} item>
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                body={todo.description}
                done={todo.done}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      {/* Relevant modals. */}
      <CreateTodoDialog />
    </>
  )
}

export default connect(mapState, mapDispatch)(App)
