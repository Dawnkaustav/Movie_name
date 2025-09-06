import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../../../assets/logo.png";
import user from "../../../assets/user.jpg";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <div className={Style.header}>
      <div>
        <img src={logo} alt="logo" className={Style.logo} />
      </div>
      <nav>
        <ul className={Style.link}>
          <li>
            <Link to="/" className={Style.linkconnect}>Home</Link>
          </li>
          <li>
            <Link to="/movies" className={Style.linkconnect}>Movies</Link>
          </li>
          <li>
            <Link to="/history" className={Style.linkconnect}>History</Link>
          </li>
          <li>
            <Link to="/tickets" className={Style.linkconnect}>Tickets</Link>
          </li>
          <li>
            <img src={user} alt="user" className={Style.userimage} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
