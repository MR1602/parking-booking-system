import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';

const reducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer
});

export default reducer;