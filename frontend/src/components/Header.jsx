import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image 1.png";
import { Menu, X } from "lucide-react"; // Hamburger + Close icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white flex items-center justify-between px-6 md:px-10 py-3 shadow min-h-[50px] sticky top-0 z-50">
      {/* Logo + Title */}
      <div className="flex items-center">
        <img src={logo} className="w-20 h-10 rounded-md mr-3" alt="Logo" />
        <div>
          <h1 className="text-black font-bold text-sm md:text-base">
            Google Developer Students Club
          </h1>
          <p className="text-gray-400 text-xs">
            Dr. D. Y. Patil College of Engineering
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md flex flex-col items-center py-5 gap-4 md:hidden">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400">Home</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400">Projects</NavLink>
          <NavLink to="/events" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400">Events</NavLink>
          <NavLink to="/team" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400">Team</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400">Contact</NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400">Login</NavLink>

          {/* Light/Dark Toggle */}
          <div className="mt-2 w-12 h-6 rounded-full bg-gray-700 flex items-center justify-between px-2">
            <span role="img" aria-label="moon">
              🌙
            </span>
            <span role="img" aria-label="stars">
              🌑
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
