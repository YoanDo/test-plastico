import { createReducer } from '@reduxjs/toolkit';
import { updateLanguage } from '../../actions';

const initialState = 'fr';

const isLoading = createReducer(initialState, {
  [updateLanguage]: (state, actions) => actions.payload
});

export default isLoading;
