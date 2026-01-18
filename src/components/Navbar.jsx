import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const activeColor = "#FD6F00";
const normalColor = "#d1d5db";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const getStyle = ({ isActive }) => ({
    color: isActive ? activeColor : normalColor,
    textDecoration: "none",
    fontWeight: isActive ? 600 : 500,
    transition: "color 160ms ease",
  });

  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      style={{ background: "#0f0f0f" }}
      className="fixed top-0 left-0 w-full bg-black py-4 border-b border-[#222] z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* LEFT: mobile hamburger + logo */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* MOBILE HAMBURGER */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            style={{ color: normalColor }}
          >
            {open ? (
              <span style={{ fontSize: 20 }}>✕</span>
            ) : (
              <span style={{ fontSize: 20 }}>☰</span>
            )}
          </button>

          {/* LOGO */}
          <h1 className="text-2xl font-bold select-none">
            <span style={{ color: "#fb923c" }}>AFJ</span>
            <span style={{ color: "#ef4444" }}>AL</span>
          </h1>
        </div>

        {/* CENTER: DESKTOP LINKS */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 text-lg">
          <li>
            <NavLink to="/" end style={getStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" style={getStyle}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={getStyle}>
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" style={getStyle}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={getStyle}>
              Contact me
            </NavLink>
          </li>
        </ul>

        {/* RIGHT: HIRE BUTTON (mobile + desktop) */}
        <div className="ml-auto">
          <NavLink to="/contact">
            <button
              style={{ background: "#FD6F00", borderRadius: "12px" }}
              className="text-white font-semibold px-4 sm:px-6 py-2 text-sm sm:text-base transition-transform duration-200 hover:scale-105"
            >
              Hire Me
            </button>
          </NavLink>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
        ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          style={{ background: "#0f0f0f" }}
          className="px-6 pb-6 pt-4 border-t border-[#222]"
        >
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <NavLink to="/" end style={getStyle} onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={getStyle}
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={getStyle} onClick={handleLinkClick}>
                About me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                style={getStyle}
                onClick={handleLinkClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={getStyle}
                onClick={handleLinkClick}
              >
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
