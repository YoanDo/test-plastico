import { combineReducers } from 'redux';

import isLoadingReducer from './isLoadingReducer';
import allPostsReducer from './postsReducer';

const postsReducer = combineReducers({
  isLoading: isLoadingReducer,
  allPosts: allPostsReducer
});

export default postsReducer;
