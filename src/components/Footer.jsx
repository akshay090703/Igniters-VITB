import React, { useState } from "react";
import classes from "./Footer.module.css";
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the message, you can send it to a server or perform any other action.
    console.log("Message submitted:", message);
    // Clear the input field after submission
    setMessage("");
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes["footer-col"]}>
            <img src="./logo.svg" alt="logo" className="logo" />
            <h2>D2C Igniters</h2>
          </div>
          <div className={classes["footer-col"]}>
            <h4>explore</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">events</Link>
              </li>
              <li>
                <Link to="/teams">teams</Link>
              </li>
              <li>
                <Link to="/blogs">blogs</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-col"]}>
            <h4>visit</h4>
            <p>VIT Bhopal University</p>
            <p>Bhopal-Indore Highway</p>
            <p>Kothri Kalan, Sehore</p>
            <p>Madhya Pradesh - 466114</p>
          </div>
          <div className={classes["footer-col"]}>
            <h4>follow us</h4>
            <div className="social-links">
              <a to="/">
                <FaFacebook className={classes["social-media-icons"]} />
              </a>
              <a to="/">
                <FaTwitter className={classes["social-media-icons"]} />
              </a>
              <a to="/">
                <FaDiscord className={classes["social-media-icons"]} />
              </a>
              <a to="/">
                <FaLinkedin className={classes["social-media-icons"]} />
              </a>
            </div>
            <h4>Contact Us</h4>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={classes.inputField}
                />
                <button type="submit" className={classes.submitButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["footer-bottom"]}>
        <p>
          Copyright &copy; {}
          <a to="/">D2C Igniters 2023</a>{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
