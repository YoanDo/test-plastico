import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
