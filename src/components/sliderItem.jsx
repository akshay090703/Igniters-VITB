import React from "react";
import { Paper } from "@mui/material";
import classes from "./sliderItem.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Paper>
      <div
        style={{
          backgroundImage: `url(${item})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "90vh",
          overflow: "hidden",
          borderRadius: "6px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`${classes.content}`}>
          <h2 style={{ textAlign: "center", fontSize: "1.8em" }}>Igniters</h2>
          <p>
            We are the "Igniters" of VIT Bhopal. We gamify interactions and
            interventions for enhancing & democratizing learning and hiring.
            Known for turning ordinary days into extraordinary tech fiestas,
            Igniters is the go-to crew for all things geeky and fun.
          </p>
          <hr />
          <Link to="/events">
            <button
              className={`${classes["--btn"]} ${classes["--btn-primary"]}`}
            >
              All Events
            </button>
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default Item;
