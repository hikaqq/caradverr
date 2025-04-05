import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPieChart,
  FiTruck,
  FiCalendar,
  FiTool,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Sidebar = () => {
  const handleClick = (e) => {
    const target = e.currentTarget;
    target.style.transform = "scale(0.95)";
    setTimeout(() => {
      target.style.transform = "scale(1)";
    }, 150);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 shadow-lg z-40 pt-20 flex flex-col no-copy border-r border-gray-200">
      <div className="flex flex-col space-y-2 p-4 font-medium flex-grow">
        <NavLink
          to="/home"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-purple-600 border-l-4 border-purple-500"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <FiHome className="h-5 w-5" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/dashboard"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-purple-600 border-l-4 border-purple-500"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <FiPieChart className="h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/assets"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-purple-600 border-l-4 border-purple-500"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <FiTruck className="h-5 w-5" />
          <span>Assets</span>
        </NavLink>

        <NavLink
          to="/booking"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-purple-600 border-l-4 border-purple-500"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <FiCalendar className="h-5 w-5" />
          <span>Booking</span>
        </NavLink>

        <NavLink
          to="/services"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-purple-600 border-l-4 border-purple-500"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <MdOutlineMiscellaneousServices className="h-5 w-5" />
          <span>Services</span>
        </NavLink>
      </div>

      <div className="p-4 mt-auto font-medium border-t border-gray-200">
        <NavLink
          to="/settings"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-black border-l-4 border-black"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <FiSettings className="h-5 w-5" />
          <span>Settings</span>
        </NavLink>

        <NavLink
          to="/logout"
          onClick={handleClick}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ${
              isActive
                ? "bg-blue-50 text-red-600 border-l-4 border-red-500"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`
          }
        >
          <FiLogOut className="h-5 w-5" />
          <span>Log out</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
