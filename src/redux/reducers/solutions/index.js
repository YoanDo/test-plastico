import { combineReducers } from 'redux'

import isLoadingReducer from './isLoadingReducer'
import solutionsReducer from './solutionsReducer'

const faqReducer = combineReducers({
  isLoading: isLoadingReducer,
  allSolutions: solutionsReducer,
})

export default faqReducer
