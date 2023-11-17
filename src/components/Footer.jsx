import React, { useState } from "react";
import classes from "./Footer.module.css";
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

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
    <footer class={classes.footer}>
      <div class={classes.container}>
        <div class={classes.row}>
          <div class={classes["footer-col"]}>
            <img src="./logo.svg" alt="logo" className="logo" />
            <h2>D2C Igniters</h2>
          </div>
          <div class={classes["footer-col"]}>
            <h4>explore</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">teams</a>
              </li>
              <li>
                <a href="#">events</a>
              </li>
              <li>
                <a href="#">blogs</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div class={classes["footer-col"]}>
            <h4>visit</h4>
            <p>VIT Bhopal University</p>
            <p>Bhopal-Indore Highway</p>
            <p>Kothri Kalan, Sehore</p>
            <p>Madhya Pradesh - 466114</p>
          </div>
          <div class={classes["footer-col"]}>
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <FaFacebook className={classes["social-media-icons"]} />
              </a>
              <a href="#">
                <FaTwitter className={classes["social-media-icons"]} />
              </a>
              <a href="#">
                <FaDiscord className={classes["social-media-icons"]} />
              </a>
              <a href="#">
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
          <a href="#">D2C Igniters 2023</a>{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
