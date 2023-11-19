import React from "react";
import Card from "../components/Card";
import classes from "./TeamPage.module.css";
import teamMembers from "../teamMembers";
import Member from "../components/Member";

const Team = () => {
  return (
    <div className={classes["team-page"]}>
      <div className={classes["card-grid"]}>
        {teamMembers.map((member, index) => (
          // <Card key={index} teamMember={member} />
          <Member key={index} teamMember={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
