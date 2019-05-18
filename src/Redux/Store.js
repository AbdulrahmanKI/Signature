import { createStore,applyMiddleware,combineReducers } from 'redux';
import reducer from './Reducer';
import imageReducer from './ImageReducer';
import logger from 'redux-logger';
import socialReducer from './SocialReducer';

export const store = createStore(combineReducers({reducer,imageReducer,socialReducer}),applyMiddleware(logger));
