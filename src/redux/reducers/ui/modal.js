import { createReducer } from '@reduxjs/toolkit'
import { showModal, hideModal, toggleCanCloseModal } from '../../actions'

export const initialState = {
  modalType: '',
  modalProps: {},
  isOpen: false,
  canClose: true,
}

const modalReducer = createReducer(initialState, {
  [showModal]: (state, action) => {
    const { modalType, modalProps } = action.payload
    return {
      ...state,
      modalType,
      modalProps,
      isOpen: true,
    }
  },
  [hideModal]: () => initialState,
  [toggleCanCloseModal]: (state, action) => ({
    ...state,
    canClose: action.payload,
  }),
})

export default modalReducer
