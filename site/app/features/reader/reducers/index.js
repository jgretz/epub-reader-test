/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import active from './active.js';
import books from './books.js';

export default combineReducers({
  active,
  books,
});
