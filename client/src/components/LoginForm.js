import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // const loading = useSelector(state => state.auth.loading);
  // const error = useSelector(state => state.auth.error);
  // const user = useSelector(state => state.auth.user);

  const {loading, error, user} = useSelector(state => state.auth);

  useEffect(() => {
    if(user){
      navigate("/")
    }
  }, [user])

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>Error: {error}</p>}
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder='email'
          value={email}
          onChange={handleEmailChange}
          style={{ textAlign: "center "}}
        />
      </div>
      <div className="mb-3" style={{paddingBottom: '30px'}}>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
          style={{ textAlign: "center "}}
        />
      </div>
      <button type="submit" className="btn btn-primary border w-100" disabled={loading}>Login</button>
    </form>
  );
};

export default LoginForm;
