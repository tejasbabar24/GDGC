import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image 1.png";

function Header() {
  return (
    <header className="bg-white flex items-center justify-between px-10 py-3 shadow min-h-[50px] sticky top-0 z-50">
      {/* Logo + Title */}
      <div className="flex items-center">
        <img src={logo} className="w-20 h-10 rounded-md mr-3" alt="Logo" />
        <div>
          <h1 className="text-black font-bold text-base">
            Google Developer Students Club
          </h1>
          <p className="text-gray-400 text-xs">
            Dr. D. Y. Patil College of Engineering
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-1.5 rounded-full font-medium ${
              isActive ? "bg-blue-500 text-white" : "text-black hover:text-blue-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-5 py-1.5 rounded-full"
              : "text-black hover:text-blue-400"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-5 py-1.5 rounded-full"
              : "text-black hover:text-blue-400"
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-5 py-1.5 rounded-full"
              : "text-black hover:text-blue-400"
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-5 py-1.5 rounded-full"
              : "text-black hover:text-blue-400"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-5 py-1.5 rounded-full"
              : "text-black hover:text-blue-400"
          }
        >
          Login
        </NavLink>

        {/* Light/Dark Toggle */}
        <div className="ml-3 w-12 h-6 rounded-full bg-gray-700 flex items-center justify-between px-2">
          <span role="img" aria-label="moon">
            🌙
          </span>
          <span role="img" aria-label="stars">
            🌑
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
