import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../slider-data";
import classes from "./Slider-Banner.module.css";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Carousel from "react-material-ui-carousel";
import Item from "./sliderItem";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  const imgLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="slider">
      <Carousel
        className={classes["carousel-container"]}
        interval={4000}
        animation="fade"
        duration={800}
        NextIcon={<AiOutlineArrowRight className={classes.arrow} />}
        PrevIcon={<AiOutlineArrowLeft className={classes.arrow} />}
        navButtonsAlwaysVisible
        indicatorContainerProps={{
          style: { display: "none" },
        }}
        navButtonsProps={{
          style: { backgroundColor: "transparent" },
        }}
        navButtonsWrapperProps={{
          style: {
            margin: "0 1em",
          },
        }}
        stopAutoPlayOnHover={false}
      >
        {sliderData.map((slide, index) => (
          <Item key={index} item={slide.imgSrc} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
