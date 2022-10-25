import { createReducer } from '@reduxjs/toolkit'
import { setPostLoading } from '../../actions'

const initialState = true

const isLoading = createReducer(initialState, {
  [setPostLoading]: (state, actions) => actions.payload,
})

export default isLoading
