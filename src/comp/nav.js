import React from "react";
import "./nav.css";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
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
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <div className="user">
            <div className="icon">
              <FiLogIn />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
          <div className="user">
            <div className="icon">
              <CiLogout />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
