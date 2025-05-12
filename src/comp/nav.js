import React from "react";
import "./nav.css";
import { MdLocalShipping } from "react-icons/md";

const Nav = () => {
  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shiping When Shoping Upto ₹1000</p>
          </div>
        </div>
        <div className="mid_header">
            <div className="logo">
                <img src="image/logo.webp" alt="logo"></img>
            </div>
            <div className="search_box">
                <input type="text" value="" placeholder="search"></input>
                <input></input>
            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
