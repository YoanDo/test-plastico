import { combineReducers } from 'redux'
import uiReducer from './ui'
import solutionsReducers from '../reducers/solutions'

export default combineReducers({
  ui: uiReducer,
  solutions: solutionsReducers,
})
