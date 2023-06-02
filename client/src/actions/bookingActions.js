// bookingActions.js

import {
    FETCH_BOOKINGS_REQUEST,
    FETCH_BOOKINGS_SUCCESS,
    FETCH_BOOKINGS_FAILURE,
    POST_BOOKING_REQUEST,
    POST_BOOKING_SUCCESS,
    POST_BOOKING_FAILURE,
  } from './actionTypes';
  
  export const fetchBookingsRequest = () => ({
    type: FETCH_BOOKINGS_REQUEST,
  });
  
  export const fetchBookingsSuccess = (bookings) => ({
    type: FETCH_BOOKINGS_SUCCESS,
    payload: bookings,
  });
  
  export const fetchBookingsFailure = (error) => ({
    type: FETCH_BOOKINGS_FAILURE,
    payload: error,
  });
  
  export const postBookingRequest = () => ({
    type: POST_BOOKING_REQUEST,
  });
  
  export const postBookingSuccess = (booking) => ({
    type: POST_BOOKING_SUCCESS,
    payload: booking,
  });
  
  export const postBookingFailure = (error) => ({
    type: POST_BOOKING_FAILURE,
    payload: error,
  });
  
  export const fetchBookings = (area) => {
    return async (dispatch) => {
      dispatch(fetchBookingsRequest());
  
      try {
        // Make the API call to fetch bookings by area
        const response = area ? await fetch(`http://localhost:8000/api/bookings?area=${area}`) : await fetch(`http://localhost:8000/api/bookings`);
        const data = await response.json();
  
        if (response.ok) {
          dispatch(fetchBookingsSuccess(data.booking));
        } else {
          dispatch(fetchBookingsFailure(data.message));
        }
      } catch (error) {
        dispatch(fetchBookingsFailure('Failed to fetch bookings'));
      }
    };
  };
  
  export const postBooking = (bookingData) => {
    return async (dispatch) => {
      dispatch(postBookingRequest());
  
      try {
        // Make the API call to create a new booking
        const response = await fetch('http://localhost:8000/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });
        const data = await response.json();
  
        if (response.ok) {
          dispatch(postBookingSuccess(data.booking));
        } else {
          dispatch(postBookingFailure(data.message));
        }
      } catch (error) {
        dispatch(postBookingFailure('Failed to create booking'));
      }
    };
  };
  