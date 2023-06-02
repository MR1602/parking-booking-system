import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutRequest } from '../actions/authActions';

const Header = (props) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", user)
    if(user == null){
      navigate("/auth")
    }
  }, [user])

  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out');
    dispatch(logoutRequest());
  };

  return (
    <header className="navbar navbar-expand">
      <div className="container">
        <span className="navbar-brand" style={{ fontSize: '40px'}}>Parking App</span>
        {props?.login ? (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        ) : (
            <></>
        )}
      </div>
    </header>
  );
};

export default Header;