import React from "react";
import { ReactDOM } from "react";
import image from "./images/Nav_logo.png";
export default function Header() {
  return (
    <div>
      <nav className="Nav">
        <img src={image} alt="logo" />
        <ul className="nav__elements">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
             
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item button">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__item button">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
      </ul>
      </nav>
    </div>
  );
}