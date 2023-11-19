import React from "react";
import Card from "../components/Card";
import classes from "./TeamPage.module.css";

const teamMembers = [
  {
    name: "John Doe",
    title: "Software Engineer",
    imgSrc: "src/assets/person.jpg",
    instagram: "https://instagram.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe/",
  },
  {
    name: "John Doe",
    title: "Product Manager",
    imgSrc: "src/assets/person.jpg",
    instagram: "https://instagram.com/janesmith",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },
  // Add more team members here as an array
];

const Team = () => {
  return (
    <div className="App">
      <div className={classes["card-grid"]}>
        {teamMembers.map((member, index) => (
          <Card key={index} teamMember={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
