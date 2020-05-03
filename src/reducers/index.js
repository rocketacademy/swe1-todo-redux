import { combineReducers } from 'redux'
import modals from './modals'
import todos from './todos'

const reducer = combineReducers({ modals, todos })

export default reducer
