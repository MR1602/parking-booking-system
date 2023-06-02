// bookingReducer.js

import {
    FETCH_BOOKINGS_REQUEST,
    FETCH_BOOKINGS_SUCCESS,
    FETCH_BOOKINGS_FAILURE,
    POST_BOOKING_REQUEST,
    POST_BOOKING_SUCCESS,
    POST_BOOKING_FAILURE,
  } from '../actions/actionTypes';
  
  const initialState = {
    bookings: [],
    loading: false,
    error: null,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKINGS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_BOOKINGS_SUCCESS:
        return {
          ...state,
          loading: false,
          bookings: action.payload,
        };
      case FETCH_BOOKINGS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case POST_BOOKING_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case POST_BOOKING_SUCCESS:
        return {
          ...state,
          loading: false,
          bookings: [...state.bookings, action.payload],
        };
      case POST_BOOKING_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  