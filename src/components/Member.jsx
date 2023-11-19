import React from "react";
import classes from "./Member.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Member(props) {
  return (
    <div class={classes.card}>
      <img class={classes.img} src={props.src} />
      <h2 class={classes.name}>{props.name}</h2>
      <h4 class={classes.post}>{props.post}</h4>
      <div class={classes.social}>
        <a href={props.insta}>
          <FaInstagram className={classes["social-media-icons"]} />
        </a>
        <a href={props.linkedIn}>
          <FaLinkedin className={classes["social-media-icons"]} />
        </a>
      </div>
    </div>
  );
}

export default Member;
