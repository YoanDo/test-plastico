import { combineReducers } from 'redux';

import membersReducer from './membersReducer';

const postsReducer = combineReducers({
  members: membersReducer
});

export default postsReducer;
