import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home.product";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Home = () => {
  // Product category
  const [newProduct, setNewProduct] = useState([]);
  // Trending Product
  const [trendingProduct, settrendingProduct] = useState(Homeproduct);
  // filter of trending product
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.type === x;
    });
    settrendingProduct(filterproduct);
  };
  // All Trending Product
  const allTrendingProduct = () => {
    settrendingProduct(Homeproduct);
  };

  // Product Type
  useEffect(() => {
    productcategory();
  });

  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);
  };

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
                  <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>top selling</h3>
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
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className="btn">Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className="right_box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testimonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="testmonial"></img>
                    </div>
                    <div className="info">
                      <h3>stephan robot</h3>
                      <h4>web desiner</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our mailing list</p>
                    <input
                      type="email"
                      placeholder="E_mail"
                      autoComplete="off"
                    ></input>
                    <button>subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <BiLogoFacebook />
                      </div>
                      <div className="icon">
                        <BiLogoTwitter />
                      </div>
                      <div className="icon">
                        <BiLogoInstagram />
                      </div>
                      <div className="icon">
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="image/Multi-Banner-1.avif" alt="banner"></img>
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner"></img>
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt=""></img>
                <img src="image/Multi-Banner-4.avif" alt=""></img>
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt=""></img>
                      </div>
                      <div className="details">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <AiFillEye />
                          </button>
                          <button>
                            <AiFillHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
