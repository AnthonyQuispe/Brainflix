import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import search from "../../assets/images/icons/search.svg";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import upload from "../../assets/images/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav__link" to="/">
          <img className="nav__logo" src={logo} alt="Brainflix" />
        </Link>
        <div className="nav__container">
          <div className="nav__search">
            <img className="nav__search-img" src={search} alt="search" />
            <input
              className="nav__search-input"
              placeholder="Search"
              type="text"
            />
          </div>
          <img className="nav__avatar" src={avatar} alt="avatar" />
        </div>
        <Link className="nav-upload" to="/upload">
          <div className="nav__button-container">
            <button className="nav__button">
              <img
                className="nav__button-img"
                src={upload}
                alt="nav button img"
              />
              <p className="nav__button-text">UPLOAD </p>
            </button>
            <img className="nav__button-avatar" src={avatar} alt="avatar" />
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
