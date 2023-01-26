import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";
import "../../App.css";

export const Header = () => {
  const [clicked, setClicked] = useState(false);
  
  return (
    <>
      <div className="header">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="BCIT Daily logo"/>
          </Link>
        </div>

        {/* when hamburger is clicked, put active class on nav bar and hamburger */}
        <div className={`hamburger ${clicked ? "active" : ""}`} onClick={() => {setClicked(!clicked)}}>
          <span className="sr-only">Menu</span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <nav className={`nav-bar ${clicked ? "active" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Articles</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Gallery</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
