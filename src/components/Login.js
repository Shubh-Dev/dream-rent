import React, { useState } from 'react';
import axios from '../api/axios';
import { login } from '../api/config';

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
          setNotice(response.data.message);
        }
      }, (error) => {
        setNotice(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>App title</h1>
      <form onSubmit={handleLoginSubmit} action="/login" method="POST">
        <label htmlFor="username">
          Username:
          <input onChange={(e) => setUserName(e.target.value)} type="username" name="username" id="username" />
        </label>
        <input type="submit" value="Login" />
        <p>Don&apos;t have account?</p>
        <a onClick={handleRegisterSubmit} href="/signup" alt="create new account">Sign up</a>
        <p id="message">{notice}</p>
      </form>
    </div>
  );
};

export default Login;
