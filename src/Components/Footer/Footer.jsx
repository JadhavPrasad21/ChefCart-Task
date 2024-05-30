import React from "react";
import "./Footer.css";
import logo1 from "../../assets/logo1.png";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/*----------------------------- left --------------------------------*/}
        <div className="footer-content-left">
          <img src={logo1} alt="logo" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, nisi at. Vitae optio tempora dolorum libero minus eos
            aliquam provident.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="fb" />
            <img src={assets.twitter_icon} alt="x" />
            <img src={assets.linkedin_icon} alt="li" />
          </div>
        </div>

        {/*----------------------------- center --------------------------------*/}
        <div className="footer-content-center">
          <h2>ChefCart.</h2>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*----------------------------- right --------------------------------*/}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-214-465-8790</li>
            <li>contact@chefcart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        Copyright 2024 © ChefCart.com - All Rights Reserved. Designed with ❤ by
        Prasad
      </p>
    </div>
  );
};

export default Footer;
