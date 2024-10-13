// Navbar.jsx
import React from 'react';
import './Navbar.css';
import { FaHome, FaUserFriends, FaBell, FaBriefcase } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <FaHome size={24} />
        <p>Home</p>
      </div>
      <div className="navbar-item">
        <FaUserFriends size={24} />
        <p>My Network</p>
      </div>
      <div className="navbar-item">
        <FaBriefcase size={24} />
        <p>Jobs</p>
      </div>
      <div className="navbar-item">
        <FaBell size={24} />
        <p>Notifications</p>
      </div>
    </div>
  );
};

export default Navbar;
