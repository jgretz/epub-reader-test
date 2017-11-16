import {stateReducer} from 'truefit-react-utils';
import {TOGGLE_VISIBLE} from '../actions';

export default stateReducer(false, {
  [TOGGLE_VISIBLE]: state => !state,
});
