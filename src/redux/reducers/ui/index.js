import { combineReducers } from 'redux';
import modalReducer from './modal';
import langReducer from './langReducer';

export default combineReducers({ modal: modalReducer, lang: langReducer });
