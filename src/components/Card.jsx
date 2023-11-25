import React, { useState } from "react";
import classes from "./Card.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { ScaleLoader } from "react-spinners";

function Member({ teamMember }) {
  const [loading, setLoading] = useState(true);

  const imgLoaded = () => {
    setLoading(false);
  };

  const { name, title, imgSrc, instagram, linkedin } = teamMember;

  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        {loading && <ScaleLoader color="#4984c4" height="2.5em" />}
        <img
          src={imgSrc}
          alt="slide"
          className={`${classes.img} ${loading ? classes.hidden : ""}`}
          onLoad={imgLoaded}
        />
      </div>
      <h2 className={classes.name}>{name}</h2>
      <h4 className={classes.post}>{title}</h4>
      <div className={classes.social}>
        {title === "Faculty Coordinator" ? (
          ""
        ) : (
          <a href={instagram} target="_blank">
            <FaInstagram className={classes["social-media-icons"]} />
          </a>
        )}
        <a href={linkedin} target="_blank">
          <FaLinkedin className={classes["social-media-icons"]} />
        </a>
      </div>
    </div>
  );
}

export default Member;
