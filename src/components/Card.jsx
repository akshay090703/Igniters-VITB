import React from 'react';
import './Card.css';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          marginTop: 10,
          backgroundColor: color,
          height: 5
      }}
  />
);
const Card = ({ teamMember }) => {
 const { name, title, imgSrc, twitter, linkedin } = teamMember;

 return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
      <ColoredLine color="purple"/>
      <div className="card__social">
        {twitter && (
          <a href={twitter} target="_blank" rel="noreferrer">
            <img src="src/assets/instagram.png" alt="Twitter" />
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