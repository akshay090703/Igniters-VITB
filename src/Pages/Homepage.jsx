// Home.js
import React from "react";
import Slider from "../components/Slider-Banner";
import classes from "./Homepage.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes["slider-container"]}>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
