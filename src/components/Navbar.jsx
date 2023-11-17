import React, { useState } from "react";

import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <div className={classes.title}>
          <img src="./logo.svg" alt="logo" className={classes.logoImg} />
          <p className={classes["logo-text"]}>D2C Igniters</p>
        </div>
      </Link>
      <div className={classes.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? classes.open : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <Link to="/" className={classes.title}>
        <img
          src="./clgLogo.svg"
          alt="college logo"
          className={classes.clgLogo}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
