import React from "react";
import classes from "./Member.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Member({ teamMember }) {
  const { name, title, imgSrc, instagram, linkedin } = teamMember;

  return (
    <div className={classes.card}>
      <img className={classes.img} src={imgSrc} />
      <h2 className={classes.name}>{name}</h2>
      <h4 className={classes.post}>{title}</h4>
      <div className={classes.social}>
        <a href={instagram} target="_blank">
          <FaInstagram className={classes["social-media-icons"]} />
        </a>
        <a href={linkedin} target="_blank">
          <FaLinkedin className={classes["social-media-icons"]} />
        </a>
      </div>
    </div>
  );
}

export default Member;
