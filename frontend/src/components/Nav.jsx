import React, { useState } from "react";
import { Link } from "react-router-dom";
import navp from "../assets/profile.jpeg"; // Ensure the path is correct

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full h-[81px] flex items-center px-8 justify-between">
      {/* Logo */}
      <p className="text-3xl font-semibold">
        <span className="text-black">Skill</span>
        <span className="text-blue-700">Sync</span>
      </p>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 text-2xl font-semibold">
        <Link to="/" className=" hover:text-blue-500">Home</Link>
        <Link to="/mypath" className=" hover:text-blue-500">My Path</Link>
        <Link to="/ass" className=" hover:text-blue-500">Assessment</Link>
        <Link to="/contact" className=" hover:text-blue-500">Contact</Link>
        
        {/* Dropdown Section */}
        <div 
          className="relative cursor-pointer" 
          onMouseEnter={() => setDropdown(true)} 
          onMouseLeave={() => setDropdown(false)}
        >
          <img className="w-[45px] h-[45px] object-cover rounded-full" alt="Profile" src={navp} />
          
          {dropdown && (
            <ul className="absolute top-full right-0 text-xl bg-gray-200 border border-gray-300 rounded-lg w-[150px] py-2 shadow-md z-10">
              <li className="px-4 py-2 hover:bg-gray-300">
                <Link to="/profile" className=" hover:text-blue-500">Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300">
                <Link to="/dashboard" className=" hover:text-blue-500">Dashboard</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300">
                <Link to="" className=" hover:text-blue-500">Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
