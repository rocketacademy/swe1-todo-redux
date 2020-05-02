import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// Will be referenced by components to access data store.
export const StoreContext = createContext(null)

// Helper container component to wrap store into root of our component tree.
export const StoreProvider = ({ children }) => {
  // Used to control our create todo modal.
  const [openModal, setOpenModal] = useState(false)

  // Used to store and modify our todo items.
  const [todos, setTodos] = useState([
    {
      // Each todo is uniquely identified by the time they are created.
      id: new Date().getTime(),
      title: 'Create your first todo',
      description:
        'Create your first todo by clicking on the button located on the top-right.',
      done: false,
    },
  ])

  const store = {
    openModal,
    setOpenModal,
    todos,
    setTodos,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreContext
