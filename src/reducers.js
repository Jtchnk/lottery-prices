import { combineReducers } from 'redux';

import loading from './reducers/loading';
import auth from './reducers/auth';
import config from './reducers/config';
import cart from './reducers/cart'

export default combineReducers({
  loading,
  user: auth,
  config,
  cart,
});
