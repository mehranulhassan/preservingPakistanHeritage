import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { FiMessageCircle, FiPlusSquare, FiCalendar } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/chat" className="sidebar-link">
        <div className="sidebar-item">
          <FiMessageCircle className="sidebar-icon" />
          <p>Chat</p>
        </div>
      </Link>

      <Link to="/addnewproduct" className="sidebar-link">
        <div className="sidebar-item">
          <FiPlusSquare className="sidebar-icon" />
          <p>Add New Product</p>
        </div>
      </Link>

      <Link to="/calendar" className="sidebar-link">
        <div className="sidebar-item">
          <FiCalendar className="sidebar-icon" />
          <p>Calendar</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
