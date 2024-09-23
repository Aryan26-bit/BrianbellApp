import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

import "./../topComp/Navbar.scss";

const Navbar = () => {
  return (
    <div className="top-container">
      <div className="navbar-container">
        <div className="phone-number">
          <span>
            <IoCallOutline />
          </span>
          <span>+675 325 5300</span>
        </div>

        <div className="shop-now">
          <span>get 50% off</span>
          <span>|</span>
          <span>Shop now</span>
        </div>

        <div className="about-contact">
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>



<div className="navbar-new">
      <div className="navbar-logo-new">
      <img src="\images\picture_navbar.png" />
      </div>

      <div className="navbar-categories-new">
        <button className="category-btn">  <BiCategoryAlt/></button>
        <button className="categories-btn-new">Shop categories</button>
        <button className="category-arrow-down">  <IoIosArrowDown /></button>
      </div>



      <div className="navbar-search-new">
        <div className="search-container-new">
          <IoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search product catalogue..."
            className="search-input-new"
          />
        </div>
      </div>

      <div className="navbar-icons-new">
        <button className="icon-btn-new">
       <span> <CgProfile/></span>
       <span className="login-name">Login</span>
        </button>
        <button className="icon-btn-new">
        <FaShoppingCart/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
