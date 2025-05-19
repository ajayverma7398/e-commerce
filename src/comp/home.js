import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home.product";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const Home = () => {
  const [trendingProduct, settrendingProduct] = useState(Homeproduct);
  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>Silver Sluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2>trending product</h2>
                </div>
                <div className="cate">
                  <h3>New</h3>
                  <h3>Featured</h3>
                  <h3>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                            {/* <img src={curElm.image} alt={curElm.Name} /> */}
                            <div className="icon">
                              <div className="icon_box">
                                <AiFillEye />
                              </div>
                              <div className="icon_box">
                                <AiFillHeart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right_box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
