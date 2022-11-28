import React, { useState } from 'react';
import axios from '../api/axios';
import { login } from '../api/config';
import './login.css';

const Login = () => {
  const [username, setUserName] = useState('');
  const [notice, setNotice] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('/users/login', { user: { name: username } })
      .then((response) => {
        if (response.status === 200) {
          login(username);
          setNotice(response.data.message);
          window.location.href = '/';
        } else {
          setNotice(response.data.message);
        }
      }, (error) => {
        setNotice(error.response.data.message);
      });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios.post('/users/register', { user: { name: username } })
      .then((response) => {
        if (response.status === 200) {
          login(username);
          setNotice(response.data.message);
          window.location.href = '/';
        } else {
          setNotice(response.response.data.message);
        }
      }, (error) => {
        setNotice(error.response.data.message);
      });
  };

  return (
    <div className="login_container">
      <h1 className="login_title">App title</h1>
      <form className="sign-up" onSubmit={handleLoginSubmit} action="/login" method="POST">
        <label htmlFor="username">
          <input className="input" onChange={(e) => setUserName(e.target.value)} type="username" name="username" id="username" placeholder="Username:" />
        </label>
        <input className="login" type="submit" value="Login" />
        <p>Don&apos;t have account?</p>
        <a onClick={handleRegisterSubmit} href="/signup" alt="create new account">Sign up</a>
        <p id="message">{notice}</p>
      </form>
    </div>
  );
};

export default Login;
