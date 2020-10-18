import { combineReducers } from 'redux'
import modalReducer from './ui/modal'

export default combineReducers({ modal: modalReducer })
