import React from 'react';
import { logout } from '../api/config';

const Logout = () => {
  logout();

  return (
    <div>
      <h2>logged out successfully</h2>
    </div>
  );
};

export default Logout;
