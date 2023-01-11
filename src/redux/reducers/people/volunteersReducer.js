import { createReducer } from '@reduxjs/toolkit';
import { setVolunteers } from '../../actions';

const initialState = [];

const volunteersReducer = createReducer(initialState, {
  [setVolunteers]: (state, actions) => actions.payload
});

export default volunteersReducer;
