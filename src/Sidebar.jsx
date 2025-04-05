import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiPieChart, FiTruck, FiDollarSign, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-md z-40 pt-20">
      <div className="flex flex-col space-y-1 p-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FiHome className="h-5 w-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FiPieChart className="h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/assets"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FiTruck className="h-5 w-5" />
          <span>Assets</span>
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FiDollarSign className="h-5 w-5" />
          <span>Booking</span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FiSettings className="h-5 w-5" />
          <span>Services</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;