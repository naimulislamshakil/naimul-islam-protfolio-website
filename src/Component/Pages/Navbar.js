import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Black_Elegant_and_Modern_Beauty_Salon_Logo-removebg-preview.png";

const Navbar = () => {
  const navBar = (
    <>
      <li>
        <Link className="btn-outline font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/">
          About Us
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/">
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/">
          Service
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/">
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost uppercase  text-xl">
            Naimul Islam
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navBar}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
