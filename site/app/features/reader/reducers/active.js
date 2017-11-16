import {stateReducer} from 'truefit-react-utils';
import {SET_ACTIVE} from '../actions';

export default stateReducer(0, {
  [SET_ACTIVE]: (state, payload) => payload,
});
