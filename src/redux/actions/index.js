import { createAction } from '@reduxjs/toolkit'
import * as modalTypes from '../../constants/modalTypes'

// UI
export const showModal = createAction('showModal')
export const hideModal = createAction('hideModal')
export const toggleCanCloseModal = createAction('toggleCanCloseModal')
export const updateLanguage = createAction('updateLanguage')

// ex: export const showExampleModal = (modalProps = {}) => showModal({ modalType: modalTypes.EXAMPLE_MODAL, modalProps})
export const downloadAppModal = (modalProps = {}) => showModal({ modalType: modalTypes.DOWNLOAD_APP_MODAL, modalProps })

// SOLUTIONS //
export const setSolutions = createAction('setSolutions')
export const updateSolutionsLoading = createAction('updateSolutionsLoading')
export const addSolutionDetails = createAction('addSolutionDetails')
