import { combineReducers } from 'redux'
import uiReducer from './ui'
import solutionsReducers from '../reducers/solutions'
import postsReducer from './posts'

export default combineReducers({
  ui: uiReducer,
  solutions: solutionsReducers,
  posts: postsReducer
})
