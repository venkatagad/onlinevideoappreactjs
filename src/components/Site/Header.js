// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './logo.svg';

const Header = () => {
  return (
    <div className="site-header">
      <ul className="site-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/add-video">Add User</NavLink></li>
        <li><NavLink to="/show-videos">Show Videos</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;
