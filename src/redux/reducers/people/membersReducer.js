import { createReducer } from '@reduxjs/toolkit';
import { setMembers } from '../../actions';

const initialState = [];

const membersReducer = createReducer(initialState, {
  [setMembers]: (state, actions) => actions.payload
});

export default membersReducer;
