import React from "react";
import classes from "./Card.module.css";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      marginTop: 10,
      backgroundColor: color,
      height: 5,
    }}
  />
);
const Card = ({ teamMember }) => {
  const { name, title, imgSrc, instagram, linkedin } = teamMember;

  return (
    <div className={classes.card}>
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
      <ColoredLine color="purple" />
      <div className={classes["card__social"]}>
        {instagram && (
          <a href={instagram} target="_blank" rel="noreferrer">
            <img src="src/assets/instagram.png" alt="instagram" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src="src/assets/linkedin.svg" alt="LinkedIn" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
