import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const baseLinkClass =
    "no-underline text-sm md:text-base transition-colors";

  const getLinkClass = ({ isActive }) =>
    `${baseLinkClass} ${
      isActive
        ? "text-orange-400"
        : "text-gray-300 hover:text-orange-400"
    }`;

  return (
    <footer className="bg-[#181818] text-gray-300 border-t border-[#292929]">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center text-center space-y-6">
        {/* LOGO */}
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-orange-400">AFJ</span>
          <span className="text-red-500">AL</span>
        </h1>

        {/* NAV LINKS */}
        <nav className="w-full">
          <ul className="flex flex-col items-center gap-3 text-sm md:flex-row md:justify-center md:gap-10">
            <li>
              <NavLink to="/" className={getLinkClass}
              style={{ color: "inherit",textDecoration: "none" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={getLinkClass}
              style={{ color: "inherit",textDecoration: "none" }}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkClass}
              style={{ color: "inherit",textDecoration: "none" }}>
                About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={getLinkClass}
              style={{ color: "inherit",textDecoration: "none" }}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkClass}
              style={{ color: "inherit",textDecoration: "none" }}>
                Contact me
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-6 mt-3">
          {[FaInstagram, FaDribbble, FaGithub, FaBehance].map(
            (Icon, i) => (
              <div
                key={i}
                className="
                  w-10 h-10
                  rounded-full
                  border border-gray-400
                  flex items-center justify-center
                  hover:border-orange-400 hover:text-orange-400
                  transition-colors
                "
              >
                <Icon className="text-lg" />
              </div>
            )
          )}
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col items-center gap-3 text-xs md:flex-row md:gap-12">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-sm text-orange-400" />
            <span>afjalkhan959674@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm text-orange-400" />
            <span>+91 9649732507</span>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="w-full mt-4">
          <div className="h-px bg-[#303030] mb-3" />
          <p className="text-[11px] text-gray-400">
            Designed by Afjal khan webdevloper
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
