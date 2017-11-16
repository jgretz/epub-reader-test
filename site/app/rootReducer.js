/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import menu from './features/menu/reducers';
import reader from './features/reader/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    menu,
    reader,
  }),
  routing: routerReducer,
});

export default rootReducer;
