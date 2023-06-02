import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from './actionTypes';
  
  export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });

  export const logoutRequest = () => ({
    type: LOGOUT,
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const login = (email, password) => {
    return async (dispatch) => {
      dispatch(loginRequest());
  
      try {
        // Make the API call to authenticate the user
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
  
        if (response.ok) {
          dispatch(loginSuccess(data.message));
        } else {
          dispatch(loginFailure(data.message));
        }
      } catch (error) {
        dispatch(loginFailure('Failed to authenticate'));
      }
    };
  };
  