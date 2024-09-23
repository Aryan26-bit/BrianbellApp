import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import { PiLineVertical } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";

import "./../topComp/Navbar.scss";

const Navbar = () => {
  return (
    <div className="top-container">
      {/* <h1 className='navbar-about'>About</h1> */}
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

      {/* <div className="navbar-search-container">
        <div className="search-container">
          <div>
            <img src="\images\picture_navbar.png" />
          </div>
          <div>
            <PiLineVertical style={{ fontSize: "3vh" }} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3vh",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1vh",
                alignItems: "center",
              }}
            >
              <span>
                {" "}
                <BiCategoryAlt
                  style={{ color: "#EC2E40", fontSize: "2.5vh" }}
                />
              </span>
              <span>shop Categories</span>
              <span>
                <IoIosArrowDown style={{ color: "#EC2E40" }} />
              </span>
            </div>
            <div style={{ width: "50vh" }}>
              <input
                type="search"
                placeholder="search product catalogie"
                className="search-input"
              />
              <IoSearch
                style={{
                  position: "absolute",
                   top: "8.5%",
                  right: "20%",
                  color: "#EC2E40",
                }}
              />
            </div>
          </div>

         <div className="login-cart">
            <span>
              <CgProfile style={{ color: "#EC2E40", fontSize: "2.5vh" }} />
            </span>
            <span>login</span>
            <div>
              <FaShoppingCart style={{ color: "#EC2E40", fontSize: "2.5vh" }} />
            </div>
          </div>
        </div>
      </div> */}


<div className="navbarr">
      <div className="navbar-logoo">
      <img src="\images\picture_navbar.png" />
      </div>

      <div className="navbar-categoriess">
        <button className="category-btn">  <BiCategoryAlt/></button>
        <button className="categories-btnn">Shop categories</button>
        <button className="category-arrow-down">  <IoIosArrowDown /></button>
      </div>
{/* 
      <div className="navbar-searchh">
        <input
          type="text"
          placeholder="Search product catalogue..."
          className="search-inputt"
        />
      </div> */}


      <div className="navbar-searchh">
        <div className="search-containerr">
          <IoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search product catalogue..."
            className="search-inputt"
          />
        </div>
      </div>

      <div className="navbar-iconss">
        <button className="icon-btnn">
       <span> <CgProfile/></span>
       <span className="login-name">Login</span>
        </button>
        <button className="icon-btnn">
        <FaShoppingCart/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
