import React from 'react';

const Header = (props) => {
  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out');
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