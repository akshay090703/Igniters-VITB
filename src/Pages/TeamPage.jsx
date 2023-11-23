import React from "react";
import classes from "./TeamPage.module.css";
import Card from "../components/Card";
import { NavLink, useSearchParams } from "react-router-dom";
import teamData from "../teamData";

const Team = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const teamFilter = searchParams.get("team");
  // console.log(teamFilter);

  const managementMembers = teamData.filter((team) => team.team == "other");

  const teamMembers = teamFilter
    ? teamData.filter((team) => team.team == teamFilter)
    : managementMembers;

  return (
    <div className={classes["team-page"]}>
      <div className={classes["sub-options"]}>
        <li>
          <NavLink to="." className={!teamFilter ? classes.active : ""}>
            Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=technical"
            className={teamFilter === "technical" ? classes.active : ""}
          >
            Technical
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=social-media"
            className={teamFilter === "social-media" ? classes.active : ""}
          >
            Social
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=pr-outreach"
            className={teamFilter === "pr-outreach" ? classes.active : ""}
          >
            PR
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=media"
            className={teamFilter === "media" ? classes.active : ""}
          >
            Media
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=event"
            className={`${teamFilter === "event" ? classes.active : ""} ${
              classes.eventNav
            }`}
          >
            Event
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=design"
            className={teamFilter === "design" ? classes.active : ""}
          >
            Design
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?team=content"
            className={teamFilter === "content" ? classes.active : ""}
          >
            Content
          </NavLink>
        </li>
      </div>
      <div className={classes["card-grid"]}>
        {teamMembers.map((member, index) => (
          <Card key={index} teamMember={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
