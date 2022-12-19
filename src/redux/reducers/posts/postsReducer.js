import { createReducer } from '@reduxjs/toolkit';
import { setPosts } from '../../actions';

const initialState = [];

const postsReducer = createReducer(initialState, {
  [setPosts]: (state, actions) => actions.payload
});

export default postsReducer;
