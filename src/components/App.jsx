import React, { useContext, useEffect } from 'react'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  Grid,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import TodoCard from './TodoCard'
import ScrollToTopButton from './ScrollToTopButton'
import CreateTodoDialog from './CreateTodoDialog'
import StoreContext from '../store'

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

const App = () => {
  // Used to control our create todo modal.
  const classes = useStyles()
  const { setOpenModal, todos } = useContext(StoreContext)
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.only('xs'))

  useEffect(() => {
    // Any updates to the backend should come here.
    // Backend is not implemented in this todo version.
  }, [])

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
              onClick={() => setOpenModal(true)}
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
            <Grid item direction={isMobileView ? 'row' : 'column'}>
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

export default App
