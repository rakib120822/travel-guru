import React from "react";
import { Link, NavLink } from "react-router"; // ✅ should be react-router-dom, not react-router
import logo from "../assets/images/lightLogo.png";

function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to="/">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent flex justify-between  px-4 ">
      {/* Left side (logo + mobile menu) */}
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* ✅ dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* ✅ Show actual image instead of {logo} text */}
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>
      </div>

      {/* Center (search + nav links) */}
      <div className=" hidden lg:flex gap-10 items-center">
        {/* Search input */}
        <label className="flex items-center gap-4 bg-white/10 border border-white/40 rounded-lg px-3 py-2 max-w-[400px] w-full">
          <svg
            className="h-5 w-5 opacity-50 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search your Destination..."
            className="bg-transparent outline-none placeholder-white/70 w-full"
          />
        </label>

        {/* Nav links */}
        <ul className="flex gap-4 items-center  text-white">{links}</ul>
      </div>

      {/* Right side */}
      <div className="">
        <Link className="btn btn-primary text-black">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
