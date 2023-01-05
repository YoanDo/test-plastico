import { createReducer } from '@reduxjs/toolkit';
import { setMembers } from '../../actions';

const initialState = [];

const postsReducer = createReducer(initialState, {
  [setMembers]: (state, actions) => actions.payload
});

export default postsReducer;
