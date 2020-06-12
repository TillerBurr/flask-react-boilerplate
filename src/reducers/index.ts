import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import { connectRouter } from 'connected-react-router';

export const rootReducer = (history: any) => combineReducers({
  items: itemReducer,
  router: connectRouter(history),
});