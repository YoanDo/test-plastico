import { combineReducers } from 'redux';

import membersReducer from './membersReducer';
import volunteersReducer from './volunteersReducer';

const postsReducer = combineReducers({
  members: membersReducer,
  volunteers: volunteersReducer
});

export default postsReducer;
