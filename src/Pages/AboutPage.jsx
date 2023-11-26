// AboutUs.js

import React from "react";
import classes from "./AboutPage.module.css";
import { PiTelegramLogo } from "react-icons/pi"; // Import the CSS file
import { CiStar } from "react-icons/ci";

const About = () => {
  return (
    <div className={classes["about-us-container"]}>
      <div className={classes["logo-description"]}>
        <img src="./logo.svg" alt="Igniters Logo" className={classes.logo} />
        <div>
          <h2>About Us</h2>
          <p>
            Igniters Club which was formerly powered by Unstop (Formerly
            Dare2Compete) was started in 2021 with the vision of bringing
            together diverse minds, giving them a way to learn new things and
            boost their confidence.
          </p>
          <p>
            {" "}
            This not only focuses on a particular skill of a student but it also
            helps in his overall development. One of the main goals of this club
            is to make students ready for this ever-growing competitive land.
            It’s a place to learn, compete and grow.
          </p>
          <div className={classes["extra-info"]}>
            <div className={classes["extra-info-subsection"]}>
              <CiStar className={classes.infoLogo} />
              <div>
                <h3>Rewards</h3>
                <p>
                  We give out Participation Certificates and Goodies to our
                  active participants.
                </p>
              </div>
            </div>
            <div className={classes["extra-info-subsection"]}>
              <PiTelegramLogo className={classes.infoLogo} />
              <div>
                <h3>Community</h3>
                <p>
                  We have a good community of like minded students who want to
                  grow in whatever field they want to try.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["connect-with-us"]}>
        <h2>Connect With Us</h2>
        <div className={classes["social-icons"]}>
          <a
            href="https://discord.gg/3XgShchhhm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./discord.svg"
              className={classes["social-media-icons"]}
            />
          </a>
          <a
            href="https://www.instagram.com/d2cignitersclub_vitb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./instagram.svg"
              className={classes["social-media-icons"]}
            />
          </a>
          <a
            href="https://www.youtube.com/@D2CIgnitersVITBhopal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./youtube.svg"
              className={classes["social-media-icons"]}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="./facebook.svg"
              className={classes["social-media-icons"]}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/d2cignitersclub-vitbhopal/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./linkedin.svg"
              className={classes["social-media-icons"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
