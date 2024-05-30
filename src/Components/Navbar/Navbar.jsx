import React, { useState } from "react";
import "./Navbar.css";
import logo1 from "../../assets/logo1.png";
import search from "../../assets/search.png";
import basket from "../../assets/basket.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo1} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={search} alt="search" />
        <div className="navbar-search-icon">
          <img src={basket} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
