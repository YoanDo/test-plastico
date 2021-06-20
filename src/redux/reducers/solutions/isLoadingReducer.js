import { createReducer } from '@reduxjs/toolkit'
import { updateSolutionsLoading } from '../../actions'

const initialState = true

const isLoading = createReducer(initialState, {
  [updateSolutionsLoading]: (state, actions) => actions.payload,
})

export default isLoading
